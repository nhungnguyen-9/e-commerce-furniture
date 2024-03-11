import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

export default function Category() {
    return (
        <div>
            {/* Bulletin board */}
            <div className='overflow-hidden h-full w-full object-cover'>
                <div className='bg-category_image w-full h-[782px] hover:scale-110 transition duration-700 object-cover cursor-grab active:cursor-grabbing'>
                </div>

                <div className='w-fit h-fit left-[36%] small:left-[5%] average:left-[27%] absolute top-[350px] flex flex-col justify-center items-center cursor-grab active:cursor-grabbing'>
                    <p className='text-center text-white text-[18px]'>CLEARANCE</p>
                    <p className='text-center text-white text-[25px]'>DỌN TỒN KHO – ĐÓN HÀNG MỚI</p>
                    <p className='text-center text-white text-[18px]'>ƯU ĐÃI ĐẾN</p>
                    <p className='text-center text-white text-[100px]'>50%</p>
                    <button className='w-[220px] h-[40px] bg-slate-50 hover:bg-slate-300 transition duration-700'>
                        <Link href='#' className=''>XEM DANH SÁCH GIẢM GIÁ</Link>
                    </button>
                </div>
            </div>

            {/* Category */}
            <div>
                <div className='w-full h-fit bg-slate-500 flex flex-row small:flex-col average:flex-col'>
                    <div className='w-1/2 h-[580px] relative overflow-hidden pl-[20px] mt-[20px] small:w-full small:p-0 small:my-2 small:h-[250px] average:w-full average:p-0 average:my-2 average:h-[700px]'>
                        <div className='relative bottom-48'>
                            <Link href='#a'>
                                <Image
                                src='/category/BST-COASTAL-SOFA-VANG.jpg'
                                width={898}
                                height={1000}
                                quality={100}
                                alt='Sofa'
                                />
                                <p className='text-[20px] relative bottom-[350px] text-center uppercase text-white font-semibold small:bottom-[150px]'>sofa</p>
                            </Link>
                        </div>
                    </div>

                    <div className='flex flex-row flex-wrap items-start w-1/2 h-[600px] mb-[20px] small:flex-col small:w-full small:h-fit small:mb-2 average:flex-col average:w-full average:h-fit average:mb-2 average:overflow-hidden'>
                        <Link href='#1' className='w-[50%] h-[300px] overflow-hidden p-[20px] small:w-full small:p-0 small:m-0 small:h-[250px] average:w-full average:p-0 average:m-0 average:h-[500px]'>
                            <Image
                            src='/category/ban-an-vuong.jpg'
                            width={700}
                            height={700}
                            quality={100}
                            alt='Sofa'
                            />
                            <p className='text-[20px] text-center uppercase text-white font-semibold relative bottom-[300px]'>bàn ăn</p>
                        </Link> 
                        
                        <Link href='#2' className='w-[359px] h-[280px] overflow-hidden relative mt-[20px] mr-[20px] small:w-full small:mt-2 small:p-0 small:h-[250px] average:w-full average:p-0 average:m-0 average:h-[600px]'>
                            <Image
                            src='/category/giuong-ngu-pio.jpg'
                            fill = 'true'
                            quality={100}
                            alt='Sofa'
                            />
                            <p className='text-[20px] text-center uppercase text-white font-semibold relative -bottom-[100px]'>giường</p>
                        </Link>

                        <Link href='#3' className='w-[50%] h-[300px] overflow-hidden p-[20px] small:w-full small:p-0 small:mt-2 small:h-[250px] average:w-full average:p-0 average:m-0 average:h-[600px]'>
                            <Image
                            src='/category/banner-armchair.jpg'
                            width={600}
                            height={501}
                            quality={100}
                            alt='Sofa'
                            />
                            <p className='text-[20px] text-center uppercase text-white font-semibold relative bottom-[250px]'>armchair</p>
                        </Link>

                        <Link href='#4' className='w-[50%] h-[300px] overflow-hidden pt-[20px] pr-[20px] small:w-full small:p-0 small:mt-2 small:h-[250px] average:w-full average:p-0 average:m-0 average:h-[600px]'>
                            <Image
                            src='/category/ghe-phong-an.jpg'
                            width={749}
                            height={800}
                            quality={100}
                            alt='Sofa'
                            />
                            <p className='text-[20px] text-center uppercase text-white font-semibold relative bottom-[350px]'>ghế ăn</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
