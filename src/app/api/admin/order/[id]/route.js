import { connect } from '@/backend/config/mongodb'
import Order from '@/backend/models/Order'
import { auth } from '@/utils/auth'
import { NextResponse } from "next/server"
import User from '@/backend/models/User'

connect()

export async function GET(req, { params }) {
    try {
        const order = await Order.findById(params.id).populate({ path: 'user', model: 'User' }).populate({ path: 'shippingAddress', model: 'Address' })
        if (!order) {
            return NextResponse.json(
                { error: "Order not found!" },
                { status: 404 }
            )
        }
        return NextResponse.json({
            success: true,
            order
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
        const { id } = params
        const { orderStatus } = await req.json()

        const updatedOrder = await Order.findByIdAndUpdate(id, { orderStatus })

        if (!updatedOrder) {
            return new NextResponse(
                { error: 'Order not found' },
                { status: 404 }
            )
        }

        return new NextResponse(
            { success: true, order: updatedOrder },
            { status: 200 }
        )

    } catch (error) {
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

export async function DELETE(req, { params }) {
    try {
        const { id } = params

        if (!id) {
            return NextResponse.json({
                success: false,
                message: "Order ID is required!"
            }, { status: 400 })
        }

        const isAuthUser = await auth()

        if (isAuthUser) {
            const order = await Order.findById(id)

            if (!order) {
                return NextResponse.json({
                    success: false,
                    message: "Order not found!"
                }, { status: 404 })
            }

            const deletedAOrder = await Order.findByIdAndDelete(id)

            await User.updateMany(
                { orders: id },
                { $pull: { orders: id } }
            )

            if (deletedAOrder) {
                return NextResponse.json({
                    success: true,
                    message: "Xóa đơn hàng thành công!"
                })
            } else {
                return NextResponse.json({
                    success: false,
                    message: "Không thể xóa đơn hàng! Vui lòng thử lại"
                }, { status: 500 })
            }
        } else {
            return NextResponse.json({
                success: false,
                message: "Bạn chưa được xác thực!"
            }, { status: 401 })
        }
    } catch (e) {
        console.log(e)
        return NextResponse.json({
            success: false,
            message: "Đã xảy ra lỗi xảy ra! Vui lòng thử lại sau"
        }, { status: 500 })
    }
}

export const dynamic = "force-dynamic"
export const methods = ['PUT', 'DELETE'] 
