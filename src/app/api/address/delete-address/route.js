import { connect } from '@/backend/config/mongodb'
import { NextResponse } from 'next/server'
import Address from '@/backend/models/Address'
import { auth } from '@/utils/auth'
import User from '@/backend/models/User'

export const dynamic = "force-dynamic"

connect()

export async function DELETE(req) {
    try {
        const { searchParams } = new URL(req.url)
        const id = searchParams.get("id")

        if (!id) {
            return NextResponse.json({
                success: false,
                message: "Address ID is required"
            })
        }

        const isAuthUser = await auth()

        if (isAuthUser) {
            const deletedAddress = await Address.findByIdAndDelete(id)

            await User.updateMany(
                { address: id },
                { $pull: { address: id } }
            )

            if (deletedAddress) {
                return NextResponse.json({
                    success: true,
                    message: "Xóa địa chỉ thành công!"
                });
            } else {
                return NextResponse.json({
                    success: false,
                    message: "Không thể xóa địa chỉ! Vui lòng thử lại"
                });
            }
        } else {
            return NextResponse.json({
                success: false,
                message: "Bạn chưa được xác thực"
            });
        }
    } catch (e) {
        console.log(e)
        return NextResponse.json({
            success: false,
            message: "Đã xảy ra lỗi xảy ra! Vui lòng thử lại sau"
        })
    }
}