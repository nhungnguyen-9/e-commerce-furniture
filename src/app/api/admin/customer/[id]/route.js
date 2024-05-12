import { connect } from '@/backend/config/mongodb'
import { auth } from '@/utils/auth'
import { NextResponse } from "next/server"
import User from '@/backend/models/User'

connect()

export async function GET(req, { params }) {
    try {
        const customer = await User.findById(params.id)
        if (!customer) {
            return NextResponse.json(
                { error: "Customer not found!" },
                { status: 404 }
            )
        }
        return NextResponse.json({
            success: true,
            customer
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
        const id = params.id
        const { userRole, userState } = await req.json()

        const updatedUser = await User.findByIdAndUpdate(id, { role: userRole, status: userState })

        if (!updatedUser) {
            return new NextResponse(
                { error: 'Customer not found' },
                { status: 404 }
            )
        }

        return new NextResponse(
            { success: true, customer: updatedUser },
            { status: 200 }
        )

    } catch (error) {
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

export const dynamic = "force-dynamic"
export const methods = ['PUT'] 
