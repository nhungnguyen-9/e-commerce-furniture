import { connect } from '@/backend/config/mongodb'
import { NextResponse } from 'next/server'
import slugify from 'slugify'
import Category from '@/backend/models/Category'
import Room from '@/backend/models/Room'

connect()

export async function POST(req) {
    try {
        const { name, rooms, image } = await req.json()

        const existingCategory = await Category.findOne({ name })

        if (existingCategory) {
            return new NextResponse("Category already exists!", { status: 400 })
        }

        if (!name || !image) {
            return new NextResponse('Phải điền tên danh mục, chọn phòng và chọn hình ảnh!', { status: 400 })
        }

        const newCategory = new Category({
            name,
            slug: slugify(name),
            image,
            room: rooms
        })

        const savedCategory = await newCategory.save()

        if (rooms) {
            for (const roomId of rooms) {
                const room = await Room.findById(roomId)
                if (room) {
                    room.category.push(savedCategory._id)
                    await room.save()
                }
            }
        }

        return NextResponse.json(savedCategory, { status: 200 })

    } catch (error) {
        console.log('🚀 ~ POST ~ error:', error)
        return new NextResponse({ error: error.message }, { status: 500 })
    }
}

export async function GET() {
    try {
        const categories = await Category.find().sort({ timestamp: "desc" }).populate({ path: 'room', model: Room })
        return NextResponse.json(categories, { status: 200 })
    } catch (error) {
        console.log('🚀 ~ GET ~ error:', error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

export const dynamic = "force-dynamic"