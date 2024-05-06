import { connect } from '@/backend/config/mongodb'
import { NextResponse } from "next/server"
import Room from '@/backend/models/Room'
import Product from '@/backend/models/Product'
import Category from '@/backend/models/Category'

connect()

export async function GET(req, { params }) {
    const { roomSlug, categorySlug } = params;

    try {
        const category = await Category.findOne({ slug: categorySlug })
            .populate({
                path: 'room',
                match: { slug: roomSlug },
                populate: { path: 'product', model: 'Product' }
            })
            .exec();


        if (!category || !category.room.length) {
            throw new Error('Category or room not found');
        }

        // Extracting product IDs
        const productIds = category.product.map(product => product._id);

        // Fetching all product details based on product IDs
        const products = await Product.find({ _id: { $in: productIds } });

        return NextResponse.json({
            success: true,
            category,
            products
        })

    } catch (error) {
        console.log('🚀 ~ GET ~ error:', error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
