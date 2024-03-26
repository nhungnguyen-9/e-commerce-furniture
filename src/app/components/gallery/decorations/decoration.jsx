import React from 'react'

import Image from 'next/image'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Decoration() {
    return (
        <div className='flex flex-row relative tablet:flex-col tablet:w-full tablet:mb-[20px] mobile:flex-col mobile:w-full mobile:mb-[20px]'>
            <div className='absolute -left-[200px] w-[200px] h-1/2 mt-[50%] tablet:hidden mobile:hidden'>
                <h1 className='text-wrap text-[33px] font-medium mt-[50px]'>Đồ trang trí</h1>
                <p className='my-[10px] text-[14px]'>Mang lại những nguồn cảm hứng và nét sinh động cho không gian</p>
                <a href='' className='text-gallery_text_link text-[14px] cursor-pointer'>
                    KHÁM PHÁ
                    <ArrowForwardIcon />
                </a>
            </div>

            <div className='w-[450px] h-[450px] overflow-hidden object-cover tablet:w-full tablet:h-[500px] mobile:w-full mobile:h-[500px]'>
                <div className='h-full w-full bg-gallery_decoration bg-bottom bg-cover hover:scale-110 transition duration-700'>
                </div>
            </div>

            <div className='absolute -left-[200px] w-[200px] h-1/2 mt-[50%] hidden tablet:m-0 tablet:block tablet:relative tablet:left-[0px] tablet:w-full mobile:w-full mobile:m-0 mobile:block mobile:relative mobile:left-[0px]'>
                <h1 className='text-wrap text-[33px] font-medium mt-[50px] tablet:m-0 mobile:m-0'>Đồ trang trí</h1>
                <p className='my-[10px] text-[14px]'>Mang lại những nguồn cảm hứng và nét sinh động cho không gian</p>
                <a href='' className='text-gallery_text_link text-[14px] cursor-pointer'>
                    KHÁM PHÁ
                    <ArrowForwardIcon />
                </a>
            </div>
        </div>
    )
}
