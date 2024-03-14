'use client'
import React from 'react'
import ProductImage from '@/app/components/product/productImage'
import { mockData } from '@/app/data/mock-data'

export default function ProductDetail({ }) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <ProductImage />
            </div>
            <div>
                {mockData.products.map((product, index) => {
                    <h1>{product.ProductName}</h1>

                })}
            </div>
        </div>
    )
}
