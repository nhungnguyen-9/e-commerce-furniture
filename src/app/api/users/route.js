import User from '@/backend/models/User';
import { connect } from '@/backend/config/mongodb'
import { auth } from "@/utils/auth";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        const { userId } = auth()
        console.log('🚀 ~ GET ~ userId:', userId)

        let user = await User.findById({ userId })
        console.log('🚀 ~ GET ~ user:', user)
        // When the user sign-in for the 1st, immediately we will create a new user for them
        if (!user) {
            user = await User.create({ id })
            await user.save()
        }

        return NextResponse.json(user, { status: 200 })
    } catch (err) {
        console.log("[users_GET]", err)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}