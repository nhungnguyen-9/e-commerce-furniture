import { connect } from '@/backend/config/mongodb'
import Category from '@/backend/models/Category'
import Product from '@/backend/models/Product'
import Room from '@/backend/models/Room'
import { auth } from '@/utils/auth'
import { NextResponse } from "next/server"

connect()

export async function DELETE(req, { params }) {
    try {
        const { id } = params

        if (!id) {
            return NextResponse.json({
                success: false,
                message: "Room ID is required!"
            }, { status: 400 })
        }

        const isAuthUser = await auth()

        if (isAuthUser) {
            const room = await Room.findById(id)

            if (!room) {
                return NextResponse.json({
                    success: false,
                    message: "Room not found!"
                }, { status: 404 })
            }

            const deletedARoom = await Room.findByIdAndDelete(id)

            const updateCategory = await Category.updateMany(
                { room: id },
                { $pull: { room: id } }
            )

            await Product.updateMany(
                { roomId: id },
                { $pull: { roomId: id } }
            )

            if (deletedARoom) {
                return NextResponse.json({
                    success: true,
                    message: "Xóa phòng thành công!"
                })
            } else {
                return NextResponse.json({
                    success: false,
                    message: "Không thể xóa phòng! Vui lòng thử lại"
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
export const methods = ['DELETE'] 