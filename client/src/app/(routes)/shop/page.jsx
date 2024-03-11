'use client'
import React from 'react'

import Image from 'next/image';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Carousel from 'react-material-ui-carousel'

import { mockData } from '@/app/api/mock-data';

export default function NewProduct() 
{
    // Giới hạn số lượng sản phẩm hiển thị
    const limitedProducts = mockData.products.slice(0, 12);

    return (
        <div className='w-[90%] ml-[5%] h-fit mb-[40px]'>
            <div className='flex flex-row border-b-2 border-gray-200'>
                <h1 className='text-[18px] font-bold mr-4 border-b-2 border-gray-400'>SẢN PHẨM MỚI</h1>   
                <a href=''>
                    Xem tất cả
                    <NavigateNextIcon/>
                </a>
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

function Item({ product })
{
    const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.Price);

    return (
        <div className='border-2 hover:border-gray-200 border-white w-[300px] h-[370px] p-[10px] small:w-full'>
            <div className='h-[200px]'>
                <img
                src={product.Image[0]}
                alt={product.Name}
                />
            </div>
            <p className='h-[60px]'>{product.ProductName}</p>
            <p className='text-right'>{formattedPrice}</p>
        </div>
    )
}
