import React from 'react'

import Image from 'next/image'

export default function MoreInfo() {
    return (
        <div className='w-full flex flex-row h-[500px] mb-[50px] mobile:flex-col mobile:h-[700px] mobile:mt-[30px]'>
            <div className='w-[50%] flex flex-col justify-center items-center mobile:w-full mobile:mb-[30px]'>
                <h1 className='text-[30px] font-medium mb-[10px] text-about_text text-center w-full'>NỘI THẤT TINH TẾ</h1>
                <p className='text-[18px] text-about_text mb-[20px] text-center w-[80%] mobile:w-full'>
                    Với kinh nghiệm hơn 24 năm trong hoàn thiện nội thất, Nhà Xinh mang đến giải pháp toàn diện trong bao gồm thiết kế, trang trí và cung cấp nội thất trọn gói. Sở hữu đội ngũ chuyên nghiệp và hệ thống 10 cửa hàng, Nhà Xinh là lựa chọn cho không gian tinh tế và hiện đại.
                </p>
                <button className='text-button_about bg-white hover:text-white hover:bg-hover_button_about px-[20px] py-[10px] font-semibold text-[18px] border-border_button_about border-2'>
                    XEM THÊM
                </button>
            </div>

            <div className='flex-1 h-[500px] overflow-hidden bg-moreinfo_img bg-cover bg-bottom mobile:w-full'>
            </div>
        </div>
    )
}
