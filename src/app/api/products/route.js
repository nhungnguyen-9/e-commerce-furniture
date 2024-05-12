import { connect } from '@/backend/config/mongodb'
import { NextResponse } from "next/server"
import Product from '@/backend/models/Product'

export async function GET(req) {
    await connect()
    try {
        const products = await Product.find()
        return NextResponse.json({ products })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export const dynamic = "force-dynamic"