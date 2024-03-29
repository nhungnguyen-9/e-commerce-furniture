import { connect } from '@/backend/config/mongodb'
import { NextResponse } from "next/server"
import Address from '@/backend/models/Address'
import { auth } from '@/utils/auth'

connect()

export async function POST(req) {
    const session = await auth()

    if (!session) {
        return NextResponse.json({
            message: "Bạn phải đăng nhập để thêm địa chỉ!",
            success: false,
        }, { status: 401 })
    }

    try {
        const { fullName, address, province, city, phoneNo, userID } = await req.json()
        const newAddress = new Address({
            fullName,
            address,
            province,
            city,
            phoneNo,
            userID
        })

        const savedAddress = await newAddress.save()

        return NextResponse.json({
            message: "Thêm địa chỉ thành công!",
            success: true,
            savedAddress
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
