import { connect } from '@/backend/config/mongodb'
import { NextResponse, NextRequest } from "next/server"
import slugify from 'slugify'
import Room from '@/backend/models/Room'

connect()

export async function POST(req) {
    try {
        const { name, image } = await req.json()

        const existingRoom = await Room.findOne({ name })
        if (existingRoom) {
            return NextResponse.json(
                { error: "Đã có phòng!" },
                { status: 200 }
            )
        }

        const newRoom = new Room({
            name,
            image,
            slug: slugify(name)
        })

        const savedRoom = await newRoom.save()

        return NextResponse.json({
            message: "Phòng đã được tạo!",
            success: true,
            savedRoom,
        })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
