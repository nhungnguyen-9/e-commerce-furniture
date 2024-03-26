import React from 'react'

import Image from 'next/image'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function DiningRoom() {
    return (
        <div className='w-full flex flex-col relative mb-[20px] mr-[70px] tablet:m-0'>
            <div className='w- h-[400px] overflow-hidden object-cover'>
                <div className='h-full w-full bg-gallery_diningroom bg-bottom bg-cover hover:scale-110 transition duration-700'>
                </div>
            </div>
            <div className='w-[80%] tablet:w-full mobile:w-full'>
                <h1 className='text-wrap text-[33px] font-medium'>Không gian phòng ăn</h1>
                <p className='my-[10px] text-[14px]'>Một bữa ăn ngon luôn là mong ước của mỗi gia đình. Không gian phòng ăn đóng vai trò rất quan trọng trong văn hóa Việt</p>
                <a href='' className='text-gallery_text_link text-[14px] cursor-pointer'>
                    MẪU PHÒNG ĂN
                    <ArrowForwardIcon />
                </a>
            </div>
        </div>
    )
}
