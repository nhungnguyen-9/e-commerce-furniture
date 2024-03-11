import React from 'react'

import Image from 'next/image'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function LivingRoom() {
    return (
        <div className='flex flex-row relative z-[1px] small:flex-col small:w-full small:mb-4'>
            <div className='w-[750px] h-[500px] overflow-hidden object-cover small:w-full small:h-[280px]'>
                <div href='' className='h-full w-full hover:scale-110 transition duration-700'>
                    <a href='w-full h-full'>
                        <Image
                            src="/gallery/nha-xinh-banner-phong-khach-31-1-24.jpg"
                            width={970}
                            height={640}
                            alt="Phòng khách nhà xinh"
                        />
                    </a>
                </div>
            </div>
            <div className='ml-[40px] w-[250px] small:ml-[5%] small:p-0 small:w-[90%] small:text-wrap'>
                <h1 className='text-wrap text-[33px] font-medium mt-[10px]'>Không gian phòng khách</h1>
                <p className='my-[10px] text-[14px]'>Phòng khách là không gian chính của ngôi nhà, là nơi sum họp gia đình</p>
                <a href='' className='text-gallery_text_link text-[14px]'>
                    MẪU THIẾT KẾ
                    <ArrowForwardIcon />
                </a>
            </div>
        </div>
    )
}
