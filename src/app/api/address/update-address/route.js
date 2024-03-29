import { connect } from '@/backend/config/mongodb'
import { NextResponse } from "next/server"
import Address from '@/backend/models/Address'
import { auth } from '@/utils/auth'

export const dynamic = "force-dynamic"

connect()

export async function PUT(req) {
    try {
        const session = await auth()

        if (session) {
            const data = await req.json()
            const { _id, fullName, address, province, city, phoneNo } = data

            const updateAddress = await Address.findOneAndUpdate(
                {
                    _id: _id,
                },
                { fullName, address, province, city, phoneNo },
                { new: true }
            )

            if (updateAddress) {
                return NextResponse.json({
                    success: true,
                    message: "Cập nhập địa chỉ thành công!"
                })
            } else {
                return NextResponse.json({
                    success: false,
                    message: "Cập nhập thất bại! Vui lòng thử lại"
                })
            }
        } else {
            return NextResponse.json({
                success: false,
                message: "Bạn chưa được xác thực"
            })
        }
    } catch (e) {
        console.log(e)
        return NextResponse.json({
            success: false,
            message: "Có vấn đề xảy ra! Vui lòng thử lại"
        })
    }
}