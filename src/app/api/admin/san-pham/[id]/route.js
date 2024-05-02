import { connect } from '@/backend/config/mongodb'
import { NextResponse } from "next/server"
import Category from '@/backend/models/Category'
import Room from '@/backend/models/Room'
import Product from '@/backend/models/Product'
import slugify from 'slugify'
import { auth } from '@/utils/auth'

connect()

export async function GET(req, { params }) {
    try {
        const { id } = params
        const product = await Product.findById(id).populate('roomId').populate('categoryId')
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

    } catch (e) {
        console.log(e)
        return NextResponse.json({
            success: false,
            message: "Đã xảy ra lỗi xảy ra! Vui lòng thử lại sau"
        })
    }
}

export async function PUT(req, { params }) {
    try {
        const { id } = params;
        const { name, description, price, discount, inStock, material, size, roomId, categoryId, image } = await req.json();

        const product = await Product.findById(id);

        if (!product) {
            return new NextResponse(
                { error: 'Product not found' },
                { status: 404 }
            );
        }

        const imageArrays = image.map(url => ({ url }))

        const addNewRoom = roomId !== product.roomId ? roomId : null;
        const removeRoom = product.roomId !== roomId ? product.roomId : null;
        const addNewCategory = categoryId !== product.categoryId ? categoryId : null;
        const removeCategory = product.categoryId !== categoryId ? product.categoryId : null;

        await Promise.all([
            addNewRoom !== null ?
                Room.findByIdAndUpdate(addNewRoom, { $addToSet: { product: product._id } }) : null,
            removeRoom !== null ?
                Room.findByIdAndUpdate(removeRoom, { $pull: { product: product._id } }) : null,
            addNewCategory !== null ?
                Category.findByIdAndUpdate(addNewCategory, { $addToSet: { product: product._id } }) : null,
            removeCategory !== null ?
                Category.findByIdAndUpdate(removeCategory, { $pull: { product: product._id } }) : null,
            addNewRoom !== null || removeRoom !== null ?
                Product.findByIdAndUpdate(id, { roomId: addNewRoom }, { new: true }) : null,
            addNewCategory !== null || removeCategory !== null ?
                Product.findByIdAndUpdate(id, { categoryId: addNewCategory }, { new: true }) : null
        ]);

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            {
                name,
                slug: slugify(name),
                description,
                price: parseFloat(price),
                discount: parseFloat(discount),
                inStock,
                material,
                size,
                image: imageArrays
            },
            { new: true }
        ).populate('roomId').populate('categoryId');


        return new NextResponse(
            { success: true, product: updatedProduct },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    try {
        const { id } = params

        if (!id) {
            return NextResponse.json({
                success: false,
                message: "Product ID is required!"
            }, { status: 400 })
        }

        const isAuthUser = await auth()

        if (isAuthUser) {
            const product = await Product.findById(id)

            if (!product) {
                return NextResponse.json({
                    success: false,
                    message: "Product not found!"
                }, { status: 404 })
            }

            const deletedAProduct = await Product.findByIdAndDelete(id)

            // update room
            const updatedRoom = await Room.updateMany(
                { product: id },
                { $pull: { product: id } }
            )

            const updatedCategory = await Category.updateMany(
                { product: id },
                { $pull: { product: id } }
            )


            if (deletedAProduct && updatedRoom && updatedCategory) {
                return NextResponse.json({
                    success: true,
                    message: "Xóa sản phẩm thành công!"
                })
            } else {
                return NextResponse.json({
                    success: false,
                    message: "Không thể xóa phòng! Vui lòng thử lại"
                }, { status: 500 })
            }
        } else {
            return NextResponse.json({
                success: false,
                message: "Bạn chưa được xác thực!"
            }, { status: 401 })
        }
    } catch (e) {
        console.log(e)
        return NextResponse.json({
            success: false,
            message: "Đã xảy ra lỗi xảy ra! Vui lòng thử lại sau"
        }, { status: 500 })
    }
}

export const dynamic = "force-dynamic"
export const methods = ['PUT', 'DELETE'] 
