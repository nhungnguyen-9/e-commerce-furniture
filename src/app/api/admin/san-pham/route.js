import { connect } from '@/backend/config/mongodb'
import { NextResponse } from "next/server"
import Category from '@/backend/models/Category'
import slugify from 'slugify'
import Product from '@/backend/models/Product'
import Room from '@/backend/models/Room'

connect()

export async function POST(req) {
    try {
        const { name, description, price, discount, inStock, material, size, roomId, categoryId, image } = await req.json()

        const existingProduct = await Product.findOne({ name })

        if (existingProduct) {
            return NextResponse.json(
                { error: "Đã có sản phẩm này!" },
                { status: 200 }
            )
        }

        if (!name || !image || !description || !price || !material || !size || !roomId) {
            return new NextResponse('Phải điền đầy đủ thông tin!', { status: 400 })
        }

        const imageArrays = image.map(url => ({ url }))

        const newProduct = new Product({
            name,
            slug: slugify(name),
            description,
            price,
            discount,
            inStock,
            material,
            size,
            image: imageArrays,
            roomId: roomId,
            categoryId: categoryId && categoryId.length > 0 ? categoryId : undefined
        })

        const savedProduct = await newProduct.save()

        if (roomId) {
            for (const roomID of roomId) {
                const room = await Room.findById(roomID)
                if (room) {
                    room.product.push(savedProduct._id)
                    await room.save()
                }
            }
        }

        if (categoryId && categoryId.length > 0) {
            for (const categoryID of categoryId) {
                const category = await Category.findById(categoryID)
                if (category) {
                    category.product.push(savedProduct._id)
                    await category.save()
                }
            }
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
        const products = await Product.find().sort({ timestamp: "desc" }).populate('roomId').populate('categoryId')
        return NextResponse.json(products, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export const dynamic = "force-dynamic"
