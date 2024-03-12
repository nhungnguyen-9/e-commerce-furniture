import React from 'react'

import Image from 'next/image'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function DiningRoom() {
    return (
        <div className='flex flex-col relative z-[1px] ml-[140px] -mt-[30px] small:w-full small:m-0 small:p-0 small:mt-3'>
            <div className='w-[600px] h-[400px] overflow-hidden object-cover small:w-full small:h-[280px]'>
                <div href='' className='h-full w-full hover:scale-110 transition duration-700'>
                    <a href='w-full h-full'>
                        <Image
                            src="/gallery/banner-phong-an-nha-xinh-12-9-22.jpg"
                            width={850}
                            height={540}
                            alt="Phòng khách nhà xinh"
                        />
                    </a>
                </div>
            </div>
            <div className='w-[600px] small:w-[90%] small:mt-[5px] small:ml-[5%]'>
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
