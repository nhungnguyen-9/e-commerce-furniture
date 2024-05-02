import { connect } from '@/backend/config/mongodb'
import { NextResponse } from "next/server"
import { auth } from '@/utils/auth'
import Order from '@/backend/models/Order'

export const dynamic = "force-dynamic"

connect()

export async function POST(req) {
    console.log('🚀 ~ POST ~ req-req:', req)

    console.log('🚀 ~ POST ~ req-re.body:', req.body)
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
            totalPrice } = req.body
        console.log('🚀 ~ POST ~ req.json:', req.body)

        const newOrder = new Order({
            user,
            orderItems,
            shippingAddress,
            paymentMethod,
            totalPrice
        })
        console.log('🚀 ~ POST ~ newOrder:', newOrder)

        const savedOrder = await newOrder.save()
        console.log('🚀 ~ POST ~ savedAOrder:', savedOrder)

        return NextResponse.json({
            message: "Tạo đơn hàng thành công!",
            success: true,
            savedOrder
        })

        // const data = await req.body
        // console.log('🚀 ~ POST ~ data:', data)
        // const saveNewOrder = await Order.create(data)
        // console.log('🚀 ~ POST ~ saveNewOrder:', saveNewOrder)
        // if (saveNewOrder) {
        //     return NextResponse.json({
        //         success: true,
        //         message: "Tạo đơn hàng thành công!",
        //     })
        // }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
