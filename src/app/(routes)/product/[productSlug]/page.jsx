'use client'
import ProductDetail from "@/app/components/product/ProductDetail"
import React, { useEffect, useState } from "react"

const ProductDetailsPage = ({ params }) => {
    console.log('🚀 ~ ProductDetailsPage ~ params:', params)

    const [product, setProduct] = useState(null);

    const getProductDetails = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/product${params.productSlug}`,
                {
                    method: 'GET'
                }
            )
            console.log('🚀 ~ getProductDetails ~ res:', res)
            const data = await res.json()
            console.log('data: ', data)
            setProduct(data)
        } catch (error) {
            console.log("[productId_GET]", error);
        }
    }

    useEffect(() => {
        getProductDetails();
    }, [])

    return (
        <div>
            <ProductDetail product={product} />
        </div>
    )

}

export default ProductDetailsPage