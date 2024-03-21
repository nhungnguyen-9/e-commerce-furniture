import { connect } from '@/backend/config/mongodb'
import { NextResponse, NextRequest } from "next/server"
import Product from '@/backend/models/Product'

connect()

export async function GET(req) {
    try {
        const product = await Product.find({ slug: req.query.slug })
        if (!product) {
            return NextResponse.json(
                { error: "Product not found!" },
                { status: 404 }
            )
        }
        return NextResponse.json({
            success: true,
            product
        })
    } catch (error) {
        console.error('Error finding product by slug', req.query.slug, error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}