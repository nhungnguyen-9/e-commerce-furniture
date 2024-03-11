import React from 'react'

import Image from 'next/image'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Decoration() {
    return (
        <div className='flex flex-row relative z-[2px] right-[260px] small:flex-col small:w-full small:mb-4 small:right-0'>
            <div className='ml-[40px] w-[250px] pl-[30px] small:hidden block'>
                <h1 className='text-wrap text-[33px] font-medium mt-[300px]'>Đồ trang trí</h1>
                <p className='my-[10px] text-[14px]'>Mang lại những nguồn cảm hứng và nét sinh động cho không gian</p>
                <a href='' className='text-gallery_text_link text-[14px]'>
                    KHÁM PHÁ
                    <ArrowForwardIcon />
                </a>
            </div>
            <div className='w-[450px] h-[450px] overflow-hidden object-cover small:w-full small:h-[280px]'>
                <div href='' className='h-full w-full hover:scale-110 transition duration-700'>
                    <a href=''>
                        <Image
                            src="/gallery/nha-xinh-do-trang-tri-banner-31-1-24.jpg"
                            width={533}
                            height={600}
                            alt="Phòng khách nhà xinh"
                        />
                    </a>
                </div>
            </div>
            <div className='ml-[40px] w-[250px] pl-[30px] small:block hidden small:p-0 small:ml-[5%] small:w-[90%]'>
                <h1 className='text-wrap text-[33px] font-medium mt-[300px] small:mt-[10px]'>Đồ trang trí</h1>
                <p className='my-[10px] text-[14px]'>Mang lại những nguồn cảm hứng và nét sinh động cho không gian</p>
                <a href='' className='text-gallery_text_link text-[14px]'>
                    KHÁM PHÁ
                    <ArrowForwardIcon />
                </a>
            </div>
        </div>
    )
}
