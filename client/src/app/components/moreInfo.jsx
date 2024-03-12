import React from 'react'

import Image from 'next/image'

export default function MoreInfo() {
    return (
        <div className='w-full flex flex-row h-[500px] mb-[50px] small:flex-col small:h-[800px]'>
            <div className='w-[50%] pl-[16%] pt-[100px] pr-[2%] flex flex-col justify-center items-center small:w-full small:h-[500px] small:px-0 small:mx-0'>
                <h1 className='text-[30px] font-medium mb-[10px] text-about_text text-center small:w-full'>NỘI THẤT TINH TẾ</h1>
                <p className='text-[18px] text-about_text mb-[20px] text-center w-[400px]'>
                    Với kinh nghiệm hơn 24 năm trong hoàn thiện nội thất, Nhà Xinh mang đến giải pháp toàn diện trong bao gồm thiết kế, trang trí và cung cấp nội thất trọn gói. Sở hữu đội ngũ chuyên nghiệp và hệ thống 10 cửa hàng, Nhà Xinh là lựa chọn cho không gian tinh tế và hiện đại.
                </p>
                <button className='text-button_about bg-white hover:text-white hover:bg-hover_button_about px-[20px] py-[10px] font-semibold text-[18px] border-border_button_about border-2'>
                    XEM THÊM
                </button>
            </div>
            <div className='flex-1 h-[500px] overflow-hidden small:h-[300px]'>
                <Image
                    src='/moreinfo/nha-xinh-thiet-ke-noi-that-ecopark-16523-1200x800.jpg'
                    width={1200}
                    height={800}
                    quality={100}
                    alt="Item 1"
                />
            </div>
        </div>
    )
}
