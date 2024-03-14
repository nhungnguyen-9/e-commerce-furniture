import React from 'react'
import Image from 'next/image'

export default function About() {
    return (
        <div className='w-full flex h-[500px] mb-[50px] small:flex-col small:h-[540px]'>
            <div className='w-[50%] bg-about_background pl-[16%] pt-[100px] pr-[2%] small:w-full small:p-[0px] small:py-[20px]'>
                <h1 className='text-[30px] font-medium mb-[10px] text-about_text'>Tổ ấm của người tinh tế</h1>
                <p className='text-[18px] text-about_text mb-[20px]'>
                    Trong suốt hơn 24 năm qua, cảm hứng từ gu thẩm mỹ tinh tế và tinh thần “Việt” đã giúp Nhà Xinh tạo ra những thiết kế độc đáo, hợp thời và chất lượng. Nhà Xinh hiện đã mở 10 cửa hàng tại Việt Nam.
                </p>
                <button className='text-white bg-button_about hover:bg-hover_button_about px-[20px] py-[10px] font-semibold text-[18px]'>VỀ NHÀ XINH</button>
            </div>
            <div className='flex-1 h-[500px] overflow-hidden'>
                <Image
                    src='/blogs/about/gioi-thieu-nha-xinh-moi-25-7-22-1200x800.jpg'
                    width={1200}
                    height={800}
                    quality={100}
                    alt="Item 1"
                />
            </div>
        </div>
    )
}
