import { connect } from '@/backend/config/mongodb'
import { NextResponse } from "next/server"
import Category from '@/backend/models/Category'
import Room from '@/backend/models/Room'

connect()

export async function GET(req, { params }) {
    const { roomSlug } = params

    try {
        const room = await Room.findOne({ slug: roomSlug }).populate({ path: 'category', model: 'Category' })


        if (!room) {
            throw new Error('Room not found');
        }

        // Extracting categories IDs
        const categoryIds = room.category.map(category => category._id);

        // Fetching all categories details based on product IDs
        const categories = await Category.find({ _id: { $in: categoryIds } });

        return NextResponse.json({
            success: true,
            room,
            categories
        })

    } catch (error) {
        console.log('🚀 ~ GET ~ error:', error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
