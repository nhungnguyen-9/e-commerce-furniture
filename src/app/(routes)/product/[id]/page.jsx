import React from 'react'
import ProductDetail from '../../../components/product/ProductDetail'
import { product } from '@/app/utils/product'

export default function Product({ params }) {
    // const selectedProduct = product.products.find(item => item._id === productId);

    return (
        <div>
            <ProductDetail />
        </div>
    )
}
