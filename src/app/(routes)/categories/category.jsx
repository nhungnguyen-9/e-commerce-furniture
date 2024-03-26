import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

export default function Category() {
    return (
        <div>
            {/* Bulletin board */}
            <div className='relative overflow-hidden h-full w-full object-cover'>
                <div className='bg-category_image w-full h-[782px] hover:scale-110 transition duration-700 object-cover cursor-grab active:cursor-grabbing'>
                </div>

                <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center cursor-grab active:cursor-grabbing'>
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
            <div className='p-[20px]'>
                <div className='w-full h-fit bg-white flex flex-row mobile:flex-col mobile:h-[1560px]'>
                    <div className='w-1/2 h-[620px] bg-category_sofa bg-cover bg-bottom mobile:w-full mobile:h-[300px] mobile:mb-[20px]'>
                        <Link href='#' className='w-full h-full flex flex-col items-center justify-center'>
                            <p className='text-[20px] text-center uppercase text-white font-semibold'>sofa</p>
                        </Link>
                    </div>

                    <div className='flex flex-row flex-wrap items-start w-1/2 h-[600px] mb-[20px] mobile:w-full'>
                        <div className='flex flex-row w-full pl-[20px] mb-[20px] mobile:p-0 mobile:m-0 mobile:flex-col mobile:mb-[20px]'>
                            <div className='w-1/2 h-[300px] bg-category_table bg-cover bg-bottom mobile:w-full mobile:mb-[20px]'>
                                <Link href='#1' className='w-full h-full flex flex-col items-center justify-center'>
                                    <p className='text-[20px] relative text-center uppercase text-white font-semibold'>bàn ăn</p>
                                </Link>
                            </div>

                            <div className='w-1/2 h-[300px] bg-category_bed bg-cover bg-bottom ml-[20px] mobile:w-full mobile:m-0'>
                                <Link href='#1' className='w-full h-full flex flex-col items-center justify-center'>
                                    <p className='text-[20px] relative text-center uppercase text-white font-semibold'>giường</p>
                                </Link>
                            </div>
                        </div>

                        <div className='flex flex-row w-full pl-[20px] mobile:p-0 mobile:m-0 mobile:flex-col'>
                            <div className='w-1/2 h-[300px] bg-category_armchair bg-cover bg-bottom mobile:w-full mobile:mb-[20px]'>
                                <Link href='#1' className='w-full h-full flex flex-col items-center justify-center'>
                                    <p className='text-[20px] relative text-center uppercase text-white font-semibold'>armchair</p>
                                </Link>
                            </div>

                            <div className='w-1/2 h-[300px] bg-category_chair bg-cover bg-bottom ml-[20px] mobile:w-full mobile:m-0'>
                                <Link href='#1' className='w-full h-full flex flex-col items-center justify-center'>
                                    <p className='text-[20px] relative text-center uppercase text-white font-semibold'>ghế ăn</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}