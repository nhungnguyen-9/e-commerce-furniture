import User from '@/backend/models/User';
import { connect } from '@/backend/config/mongodb'

import { auth } from "@/utils/auth";
import { NextRequest, NextResponse } from "next/server";

connect()

export const POST = async (req) => {
    console.log(req)
  try {
    const { userId } = auth()
    console.log(userId)
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const user = await User.findById({ userId: _id})
    console.log(user)
    // if (!user) {
    //   return new NextResponse("User not found", { status: 404 })
    // }

    const { productId } = await req.json()
    console.log(productId)
    if (!productId) {
      return new NextResponse("Product Id required", { status: 400 })
    }

    const isLiked = user.wishlist.includes(productId)

    if (isLiked) {
      // Dislike
      user.wishlist = user.wishlist.filter((id) => id !== productId)
    } else {
      // Like
      user.wishlist.push(productId)
    }

    await user.save()
    
    return NextResponse.json(user, { status: 200 })
  } catch (err) {
    console.log("[wishlist_POST]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}