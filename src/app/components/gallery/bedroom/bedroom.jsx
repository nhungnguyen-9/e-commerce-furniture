import React from 'react'

import Image from 'next/image'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Bedroom() {
    return (
        <div className='w-full flex flex-row relative ml-[90px] mt-[80px] tablet:w-full tablet:flex-col tablet:m-0 tablet:mb-[20px] mobile:w-full mobile:flex-col mobile:m-0 mobile:mb-[20px]'>
            <div className='w-[80%] h-[400px] overflow-hidden object-cover tablet:w-full tablet:h-[500px] mobile:w-full mobile:h-[500px]'>
                <div className='h-full w-full bg-gallery_bedroom bg-cover bg-bottom hover:scale-110 transition duration-700'>
                </div>
            </div>
            <div className='ml-[40px] w-[180px] tablet:w-full tablet:m-0 mobile:w-full mobile:m-0'>
                <h1 className='text-wrap text-[33px] font-medium w-[100px] tablet:w-full mobile:w-full'>Không gian phòng ngủ</h1>
                <p className='my-[10px] text-[14px]'>Những mẫu phòng ngủ của Nhà Xinh mang đến cảm giác ấm cúng, gần gũi và thoải mái</p>
                <a href='' className='text-gallery_text_link text-[14px] cursor-pointer'>
                    MẪU PHÒNG NGỦ
                    <ArrowForwardIcon />
                </a>
            </div>
        </div>
    )
}
