import { connect } from "@/backend/config/mongodb";
import Product from "@/backend/models/Product";
import { NextResponse } from "next/server";

connect()

export async function GET(req, res) {
  try {
    const { productSlug } = req.params;
    console.log('🚀 ~ GET ~ productSlug:', productSlug)

    const product = await Product.findOne({ slug: productSlug });

    if (product) {
      return NextResponse.json({
        success: true,
        data: product,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: 'Product not found',
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: 'Something went wrong! Please try again later',
    });
  }
}