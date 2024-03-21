'use client'
import React from 'react'
import ProductImage from './ProductImage'
import BreadCrumbs from '@/app/components/product/BreadCrumbs'
import Image from 'next/image'

export default function ProductDetail({ product }) {
    console.log(product)
    return (
        <div className=''>
            <BreadCrumbs />
            <div>
                <div>
                    <div>small images</div>
                    <div>
                        {/* <Image
                            src={
                                product?.image[0]
                                    ? product?.image[0].url
                                    : "/images/default_product.png"
                            }
                            alt="Product title"
                            width={340}
                            height={340}
                        /> */}
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}
