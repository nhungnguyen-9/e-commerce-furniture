import { connect } from '@/backend/config/mongodb'
import { NextResponse } from "next/server"
import Room from '@/backend/models/Room'
import Product from '@/backend/models/Product'

connect()

export async function GET(req, { params }) {
    const { roomSlug } = params

    try {
        const room = await Room.findOne({ slug: roomSlug })
            .populate({
                path: 'product', model: 'Product'
            })
            .exec();

        if (!room) {
            throw new Error('Room not found');
        }

        // Extracting product IDs
        const productIds = room.product.map(product => product._id);

        // Fetching all product details based on product IDs
        const products = await Product.find({ _id: { $in: productIds } });

        return NextResponse.json({
            success: true,
            room,
            products
        })

    } catch (error) {
        console.log('🚀 ~ GET ~ error:', error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
