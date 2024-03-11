import React from 'react'

import Image from 'next/image'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Bedroom() {
    return (
        <div className='flex flex-row relative z-[1px] ml-[90px] mt-[80px] small:flex-col small:m-0 small:p-0'>
            <div className='w-[400px] h-[400px] overflow-hidden object-cover small:w-full small:h-[280px]'>
                <div href='' className='h-full w-full hover:scale-110 transition duration-700'>
                    <a href='w-full h-full'>
                        <Image
                            src="/gallery/mau-phong-ngu-16-5-23.jpg"
                            width={800}
                            height={639}
                            alt="Phòng khách nhà xinh"
                        />
                    </a>
                </div>
            </div>
            <div className='ml-[40px] w-[180px] small:w-[90%] small:mt-[5px] small:ml-[5%]'>
                <h1 className='text-wrap text-[33px] font-medium w-[100px] small:w-full'>Không gian phòng ngủ</h1>
                <p className='my-[10px] text-[14px]'>Những mẫu phòng ngủ của Nhà Xinh mang đến cảm giác ấm cúng, gần gũi và thoải mái</p>
                <a href='' className='text-gallery_text_link text-[14px]'>
                    MẪU PHÒNG NGỦ
                    <ArrowForwardIcon />
                </a>
            </div>
        </div>
    )
}
