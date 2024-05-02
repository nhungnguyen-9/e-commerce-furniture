'use client'
import React, { useEffect, useState } from 'react'
import ProductForm from '@/app/components/admin/product/ProductForm'
import { getOneProduct } from '@/backend/services/admin/product'

export default function ProductDetailPage({ params }) {
    const { id } = params
    const [productData, setProductData] = useState(null)

    useEffect(() => {
        const fetchOneProduct = async () => {
            try {
                const data = await getOneProduct(id)
                setProductData(data.product)
            } catch (error) {
                console.log('🚀 ~ fetchOneProduct ~ error:', error)
            }
        }

        if (id) {
            fetchOneProduct()
        }
    }, [id])

    return (
        <div>
            <ProductForm productData={productData} />
        </div>
    )
}
