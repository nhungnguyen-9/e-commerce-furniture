import { connect } from '@/backend/config/mongodb'
import { NextResponse } from "next/server"
import { auth } from '@/utils/auth'
import Order from '@/backend/models/Order'

export const dynamic = "force-dynamic"

connect()

export async function GET(req) {
    try {
        const session = await auth()
        console.log('🚀 ~ GET ~ session:', session)

        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }
        const getAllOrders = await Order.find({ userID: session.user.id }).populate('orderItems.product')

        if (getAllOrders) {
            return NextResponse.json({
                success: true,
                data: getAllOrders,
            })
        } else {
            return NextResponse.json({
                success: false,
                message: "Có vấn đề xảy ra! Vui lòng thử lại",
            })
        }
    } catch (error) {
        console.error('Error fetching user addresses:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}