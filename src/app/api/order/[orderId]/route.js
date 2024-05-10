import { connect } from '@/backend/config/mongodb'
import { NextResponse } from "next/server"
import Order from '@/backend/models/Order'
import Address from '@/backend/models/Address'

export const dynamic = "force-dynamic"

connect()

export async function GET(req, params) {
    try {
        const { orderId } = params.params
        const order = await Order.findById(orderId).populate({ path: 'shippingAddress', model: 'Address' })

        if (order) {
            return NextResponse.json({
                success: true,
                data: order,
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