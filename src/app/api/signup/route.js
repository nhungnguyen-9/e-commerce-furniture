import { connect } from '@/backend/config/mongodb'
import bcrypt from 'bcrypt'
import User from "@/backend/models/User"
import { NextResponse, NextRequest } from "next/server"

connect()

export async function POST(req) {
    try {
        const { name, email, password } = await req.json()

        const isExisting = await User.findOne({ email })

        if (isExisting) {
            return NextResponse.json(
                { error: "Tài khoản đã tồn tại! Vui lòng đăng nhập" },
                { status: 400 }
            )
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()

        return NextResponse.json({
            message: "Đăng ký thành công!",
            success: true,
            savedUser,
        })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}