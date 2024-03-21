import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProductCard({ product }) {
    const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(product.price)).replace(/\./g, ',')
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    return (
        <div>
            <Link href={`/product/${product.slug}`}>
                <div className='relative group border-2 hover:border-gray-200 border-white w-[300px] h-[380px] p-[10px] small:w-full'
                    onMouseEnter={() => {
                        const nextIndex = (currentImageIndex + 1) % product.image.length
                        setCurrentImageIndex(nextIndex)
                    }}
                    onMouseLeave={() => setCurrentImageIndex(0)}
                >
                    <div className='h-[200px]'>
                        <img
                            src={
                                product?.image[currentImageIndex]
                                    ? product?.image[currentImageIndex].url
                                    : "/images/default_product.png"
                            }
                            alt="product name"
                            className='w-full h-full object-cover transition duration-300'
                        />
                    </div>
                    {product.discount > 0 && (
                        <div className='z-10 text-white text-center'>
                            <Image
                                src={'/bg_bage.png'}
                                width={28}
                                height={10}
                                alt='bage'
                                className='absolute top-4 right-4'
                            />
                            <p className='text-white absolute top-6 right-4 z-20 text-xs'>-{product.discount}%</p>
                        </div>
                    )}
                    <div className='h-[60px]'>{product.name}</div>
                    <div className='text-right'>{formattedPrice}</div>

                    <div className='flex items-center justify-between mt-6 opacity-0 group-hover:opacity-100 transition-opacity'>
                        <button className='border-black border-2 px-3 py-2 font-semibold hover:bg-black hover:text-white'>THÊM VÀO GIỎ</button>
                        <button className='border-black border-2 px-3 py-2 bg-black text-white'>XEM THÊM</button>
                    </div>
                </div>
            </Link>
        </div>
    )
}
