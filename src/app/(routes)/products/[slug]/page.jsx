'use client'
import React, { useState, useEffect } from 'react'
import ProductDetail from '../../../components/product/ProductDetail'
import axios from 'axios'

export default function Product({ params }) {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const getProductDetails = async () => {
            try {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${params.slug}`)
                setProduct(data.product)
            } catch (error) {
                console.log(error)
            }
        }

        getProductDetails()
    }, [params.slug])

    return (
        <div>
            <ProductDetail product={product} />
        </div>
    )
}
