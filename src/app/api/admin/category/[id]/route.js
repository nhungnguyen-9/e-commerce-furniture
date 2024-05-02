import { connect } from '@/backend/config/mongodb'
import { NextResponse } from "next/server"
import Category from '@/backend/models/Category'
import Room from '@/backend/models/Room'
import slugify from 'slugify'

connect()

export async function GET(req, { params }) {
    try {
        const { id } = params
        const category = await Category.findById(id).populate('room')
        if (!category) {
            return NextResponse.json(
                { error: "Category not found!" },
                { status: 404 }
            )
        }
        return NextResponse.json({
            success: true,
            category
        })

    } catch (e) {
        console.log(e)
        return NextResponse.json({
            success: false,
            message: "Đã xảy ra lỗi xảy ra! Vui lòng thử lại sau"
        })
    }
}

export async function PUT(req, { params }) {
    try {
        const { id } = params;

        const category = await Category.findById(id);

        if (!category) {
            return new NextResponse(
                { error: 'Category not found' },
                { status: 404 }
            );
        }

        const { name, rooms, image } = await req.json();

        const addNewRoom = rooms.filter((roomId) => !category.room.includes(roomId));
        const removeRoom = category.room.filter((roomId) => !rooms.includes(roomId));

        await Promise.all([
            ...addNewRoom.map(async (roomId) => {
                await Room.findByIdAndUpdate(roomId, { $push: { category: category._id } });
                await Category.findByIdAndUpdate(id, { $push: { room: roomId } });
            }),
            ...removeRoom.map(async (roomId) => {
                await Room.findByIdAndUpdate(roomId, { $pull: { category: category._id } });
                await Category.findByIdAndUpdate(id, { $pull: { room: roomId } });
            }),
        ]);

        const updatedCategory = await Category.findByIdAndUpdate(id, { name, slug: slugify(name), rooms, image }, { new: true }).populate('room');

        return new NextResponse(
            { success: true, category: updatedCategory },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}


export const dynamic = "force-dynamic"
export const methods = ['PUT'] 
