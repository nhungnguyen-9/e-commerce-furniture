import { connect } from '@/backend/config/mongodb'
import { NextResponse } from 'next/server'
import Order from '@/backend/models/Order'
import Address from '@/backend/models/Address'

connect()

export async function GET(req) {
    try {
        const orders = await Order.find().sort({ timestamp: "desc" }).populate({ path: 'shippingAddress', model: Address })
        return NextResponse.json(orders, { status: 200 })
    } catch (error) {
        console.log('🚀 ~ GET ~ error:', error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}

export const dynamic = "force-dynamic"