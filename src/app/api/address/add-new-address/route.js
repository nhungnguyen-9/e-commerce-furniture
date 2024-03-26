import { connect } from '@/backend/config/mongodb'
import { NextResponse, NextRequest } from "next/server"
import Address from '@/backend/models/Address'

connect()

export async function POST(req) {
    try {
        // kiểm tra xem người dùng có authorize hay không
        const session =  await getSession({req})

        if (!session) {
            return NextResponse.json({
                message: "Bạn phải đăng nhập để thêm địa chỉ!",
                success: false,
            }, { status: 401 })
        }

        const { fullName, address, province, city, phoneNo } = await req.json()

        const newAddress = new Address({
            fullName,
            address,
            province,
            city,
            phoneNo
        })

        const savedAddress = await newAddress.save()

        return NextResponse.json({
            message: "Thêm địa chỉ thành công!",
            success: true,
            savedAddress,
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
