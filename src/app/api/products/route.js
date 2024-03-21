import { connect } from '@/backend/config/mongodb'
import { NextResponse, NextRequest } from "next/server"
import Category from '@/backend/models/Category'
import slugify from 'slugify'
import Product from '@/backend/models/Product'

connect()

export async function POST(req) {
    try {
        const { name, description, price, discount, inStock, material, size, review, image, categoryId } = await req.json()

        const category = await Category.findById(categoryId)

        if (!category) {
            return NextResponse.json({ error: "Danh mục sản phẩm không tồn tại!" }, { status: 404 })
        }

        const existingProduct = await Product.findOne({ name })
        if (existingProduct) {
            return NextResponse.json(
                { error: "Đã có sản phẩm này!" },
                { status: 200 }
            )
        }

        const newProduct = new Product({
            name,
            slug: slugify(name),
            description,
            price,
            discount,
            inStock,
            material,
            size,
            review,
            image
        })

        const savedProduct = await newProduct.save()

        if (!category.product.includes(savedProduct._id)) {
            category.product.push(savedProduct._id)
            await category.save()
        }

        return NextResponse.json({
            message: "Sản phẩm đã được tạo!",
            success: true,
            savedProduct,
        })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}


export async function GET(req) {
    try {
        const products = await Product.find()
        return NextResponse.json({ products })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}