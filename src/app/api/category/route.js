import { connect } from '@/backend/config/mongodb'
import { NextResponse, NextRequest } from "next/server"
import Category from '@/backend/models/Category'
import slugify from 'slugify'
import Room from '@/backend/models/Room'

connect()

export async function POST(req) {
    try {
        const { name, image, roomId } = await req.json()

        const room = await Room.findById(roomId)
        if (!room) {
            return NextResponse.json({ error: "Phòng không tồn tại!" }, { status: 404 });
        }

        const existingCategory = await Category.findOne({ name })
        if (existingCategory) {
            return NextResponse.json(
                { error: "Đã có danh mục sản phẩm này!" },
                { status: 200 }
            )
        }

        const newCategory = new Category({
            name,
            image,
            slug: slugify(name)
        })

        const savedCategory = await newCategory.save()

        if (!room.category.includes(savedCategory._id)) {
            room.category.push(savedCategory._id)
            await room.save()
        }

        return NextResponse.json({
            message: "Danh mục sản phẩm đã được tạo!",
            success: true,
            savedCategory,
        })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
