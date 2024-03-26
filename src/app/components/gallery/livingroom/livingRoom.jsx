import React from 'react'

import Image from 'next/image'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function LivingRoom() {
    return (
        <div className='flex flex-row w-[50%] relative tablet:w-full tablet:flex-col tablet:mb-[20px] mobile:w-full mobile:flex-col mobile:mb-[20px]'>
            <div className='w-full h-[500px] overflow-hidden object-cover'>
                <div className='h-full w-full bg-gallery_livingroom bg-cover bg-bottom hover:scale-110 transition duration-700'>
                </div>
            </div>

            <div className='absolute -right-[220px] w-[200px] h-1/2 tablet:static tablet:w-full mobile:static mobile:w-full'>
                <h1 className='text-wrap text-[33px] font-medium mt-[10px]'>Không gian phòng khách</h1>
                <p className='my-[10px] text-[14px]'>Phòng khách là không gian chính của ngôi nhà, là nơi sum họp gia đình</p>
                <a href='' className='text-gallery_text_link text-[14px] cursor-pointer'>
                    MẪU THIẾT KẾ
                    <ArrowForwardIcon />
                </a>
            </div>
        </div>
    )
}
