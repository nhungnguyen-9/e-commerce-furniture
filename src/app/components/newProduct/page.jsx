'use client'
import React, { useState } from 'react'

import Image from 'next/image';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Carousel from 'react-material-ui-carousel'

import { mockData } from '@/app/data/mock-data';
import Link from 'next/link';

export default function NewProduct() {
    // Giới hạn số lượng sản phẩm hiển thị
    const limitedProducts = mockData.products.slice(0, 12);

    return (
        <div className='w-[90%] ml-[5%] h-fit mb-[40px]'>
            <div className='flex flex-row border-b-2 border-gray-200'>
                <h1 className='text-[18px] font-bold mr-8 border-b-3 pb-2 border-gray-400'>SẢN PHẨM MỚI</h1>
                <Link href='/shop' className='text-gray-500'>
                    xem tất cả
                    <NavigateNextIcon />
                </Link>
            </div>

            <div className='flex flex-row flex-wrap justify-start content-around grid-cols-4 mt-[40px] ml-[40px] small:hidden'>
                {limitedProducts.map((product, index) => (
                    <div key={index} className='w-[25%]'>
                        <Item product={product} />
                    </div>
                ))}
            </div>

            <Carousel
                className='small:block hidden'
                animation='slide'
                navButtonsAlwaysInvisible={true}
                indicators={false}
            >
                {limitedProducts.map((product, index) => (
                    <div key={index} className='w-[100%]'>
                        <Item product={product} />
                    </div>
                ))}
            </Carousel>

        </div>
    )
}

function Item({ product }) {
    const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(product.price)).replace(/\./g, ',')

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <Link href={`/product/${product.slug}`}>
            <div className='relative group border-2 hover:border-gray-200 border-white w-[300px] h-[380px] p-[10px] small:w-full'
                onMouseEnter={() => {
                    const nextIndex = (currentImageIndex + 1) % product.image.length;
                    setCurrentImageIndex(nextIndex);
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
                        alt={product.name}
                        className="w-full h-full object-cover transition duration-300"
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
                <p className='h-[60px]'>{product.name}</p>
                <p className='text-right'>{formattedPrice}</p>

                <div className='flex items-center justify-between mt-6 opacity-0 group-hover:opacity-100 transition-opacity'>
                    <button className='border-black border-2 px-3 py-2 font-semibold hover:bg-black hover:text-white'>THÊM VÀO GIỎ</button>
                    <button className='border-black border-2 px-3 py-2 bg-black text-white'>XEM THÊM</button>
                </div>
            </div>
        </Link>
    )
}
