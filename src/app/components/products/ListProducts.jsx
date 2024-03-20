'use client'
import React from 'react'
import FilterProducts from '@/app/components/products/FilterProducts'
import ProductCard from './productCard'

export default function ListProducts({ data }) {
    console.log(data)
    return (
        <div className='max-w-[1320px] mx-auto'>
            <FilterProducts />

            <div className='grid grid-cols-4'>
                {data?.products?.map((product) => {
                    return <ProductCard key={product?.slug} product={product} />
                })}
            </div>
        </div>
    )
}
