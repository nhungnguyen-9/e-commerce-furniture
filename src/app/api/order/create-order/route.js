import { connect } from '@/backend/config/mongodb'
import { NextResponse } from "next/server"
import { auth } from '@/utils/auth'
import Order from '@/backend/models/Order'
import User from '@/backend/models/User'

export const dynamic = "force-dynamic"

await connect()

export async function POST(req) {
    const session = await auth()

    if (!session) {
        return NextResponse.json({
            message: "Bạn phải đăng nhập để thêm địa chỉ!",
            success: false,
        }, { status: 401 })
    }

    try {
        const {
            user,
            orderItems,
            shippingAddress,
            paymentMethod,
            totalPrice } = await req.json()

        const newOrder = new Order({
            user,
            orderItems: orderItems,
            shippingAddress,
            paymentMethod,
            totalPrice
        })

        const savedOrder = await newOrder.save()

        if (user) {
            for (const userId of user) {
                const foundUser = await User.findById(userId)
                if (foundUser) {
                    foundUser.orders.push(savedOrder._id)
                    await foundUser.save()
                }
            }
        }

        return NextResponse.json({
            message: "Tạo đơn hàng thành công!",
            success: true,
            savedOrder
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
