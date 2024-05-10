import { connect } from '@/backend/config/mongodb'
import { NextResponse } from 'next/server'
import Order from '@/backend/models/Order'
import User from '@/backend/models/User'

await connect()

export async function GET(req) {
    try {
        const customers = await User.find().sort({ timestamp: "desc" }).populate({ path: 'orders', model: Order })
        return NextResponse.json(customers, { status: 200 })
    } catch (error) {
        console.log('🚀 ~ GET ~ error:', error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

export const dynamic = "force-dynamic"
export const methods = ['PUT'] 