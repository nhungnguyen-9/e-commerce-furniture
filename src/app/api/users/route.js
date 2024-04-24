import { connect } from '@/backend/config/mongodb'
import { auth } from "@/utils/auth";

import { NextRequest, NextResponse } from "next/server";

connect()

export const GET = async (req) => {
  try {
    const { userId } = auth()
    console.log(userId)
    if (!userId) {
      return new NextResponse(JSON.stringify({ message: "Unauthorized" }), { status: 401 })
    }

    let user = await User.findOneById({userId: _id })
    console.log(user)
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