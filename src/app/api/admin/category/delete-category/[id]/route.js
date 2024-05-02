import { connect } from '@/backend/config/mongodb'
import { auth } from '@/utils/auth'
import { NextResponse } from "next/server"
import Category from '@/backend/models/Category'
import Room from '@/backend/models/Room'
import Product from '@/backend/models/Product'

connect()

export async function DELETE(req, { params }) {
    try {
        const { id } = params

        if (!id) {
            return NextResponse.json({
                success: false,
                message: "Category ID is required!"
            }, { status: 400 })
        }

        const isAuthUser = await auth()

        if (isAuthUser) {
            const category = await Category.findById(id)

            if (!category) {
                return NextResponse.json({
                    success: false,
                    message: "Category not found!"
                }, { status: 404 })
            }

            const deletedACategory = await Category.findByIdAndDelete(id)

            // update room
            const updatedRoom = await Room.updateMany(
                { category: id },
                { $pull: { category: id } }
            )

            await Product.updateMany(
                { categoryId: id },
                { $pull: { categoryId: id } }
            )

            if (deletedACategory && updatedRoom) {
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