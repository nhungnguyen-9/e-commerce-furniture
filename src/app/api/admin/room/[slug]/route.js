import { connect } from '@/backend/config/mongodb'
import Room from '@/backend/models/Room'
import { auth } from '@/utils/auth'
import { NextResponse } from "next/server"

connect()

export async function GET(req, { params }) {
    try {
        const room = await Room.findOne({ slug: params.slug })
        if (!room) {
            return NextResponse.json(
                { error: "Room not found!" },
                { status: 404 }
            )
        }
        return NextResponse.json({
            success: true,
            room
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
        const { slug } = params
        const { name, image } = await req.json()

        const updatedRoom = await Room.findOneAndUpdate({ slug }, { name, image })

        if (!updatedRoom) {
            return new NextResponse(
                { error: 'Room not found' },
                { status: 404 }
            )
        }

        return new NextResponse(
            { success: true, room: updatedRoom },
            { status: 200 }
        )

    } catch (error) {
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

export const dynamic = "force-dynamic"
export const methods = ['PUT'] 
