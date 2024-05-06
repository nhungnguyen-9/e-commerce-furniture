import { connect } from '@/backend/config/mongodb'
import { NextResponse } from 'next/server'
import slugify from 'slugify'
import Room from '@/backend/models/Room'
import Category from '@/backend/models/Category'

connect()

export async function POST(req) {
    try {
        const { name, image } = await req.json()

        const existingRoom = await Room.findOne({ name })

        if (existingRoom) {
            return new NextResponse("Room already exists!", { status: 400 })
        }

        if (!name || !image) {
            return new NextResponse('Phải điền tên phòng và chọn hình ảnh!', { status: 400 })
        }


        const newRoom = new Room({
            name,
            slug: slugify(name),
            image
        })

        const savedRoom = await newRoom.save()

        return NextResponse.json(savedRoom, { status: 200 })

    } catch (error) {
        console.log('🚀 ~ POST ~ error:', error)
        return new NextResponse({ error: error.message }, { status: 500 })
    }
}

export async function GET(req) {
    try {
        const rooms = await Room.find().sort({ timestamp: "desc" }).populate({ path: 'category', model: Category })
        return NextResponse.json(rooms, { status: 200 })
    } catch (error) {
        console.log('🚀 ~ GET ~ error:', error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

export const dynamic = "force-dynamic"