import React from 'react'

import Image from 'next/image'

import CallIcon from '@mui/icons-material/Call';

export default function Support() {
    return (
        <div className='flex flex-row w-full h-[683px] mb-[170px] px-[20px] mobile:flex-col mobile:h-[780px] mobile:mb-[100px]'>
            <div className='relative bg-support_background w-[50%] mobile:w-full mobile:m-0 mobile:p-0 tablet:w-1/2 tablet:m-0 tablet:p-0'>
                <div className='bg-hotline_background w-fit h-fit absolute right-[15%]'>
                    <p className='px-[20px] py-[10px] text-white'>
                        <CallIcon />
                        HOTLINE: 1800 7200
                    </p>
                </div>
                <form className='mt-[50px] ml-[7%] mr-[7%] space-y-4 flex flex-col mobile:w-full mobile:mx-0'>
                    <h1 className='text-[30px] font-semibold'>Bạn cần hỗ trợ?</h1>
                    <h3 className='text-[18px] font-normal'>Xin vui lòng để lại yêu cầu hỗ trợ của bạn.</h3>
                    <div className='flex h-[45px]'>
                        <input className='flex-1 pl-4 border-[1px] border-gray-300 outline-none focus:border-blue-400 mobile:w-[45%] tablet:w-[45%]' type='text' placeholder='Họ tên' />
                        <div className='w-[7%] mobile:w-[10%] tablet:w-[10%]'></div>
                        <input className='flex-1 pl-4 border-[1px] border-gray-300 outline-none focus:border-blue-400 mobile:w-[45%] tablet:w-[45%]' type='number' placeholder='+(84) 0123 456' /> 
                    </div>
                    <input className='w-full h-[40px] pl-4 border-[1px] border-gray-300 outline-none focus:border-blue-400' type='email' placeholder='Enter email' />
                    <textarea className='w-full h-[80px] min-h-[45px] max-h-[250px] pt-2 pl-4 border-[1px] border-gray-300 outline-none focus:border-blue-400' placeholder='Nội dung liên hệ'></textarea>
                    <input type="file" />
                    <input className='relative text-[16px] font-semibold p-[10px] bg-slate-900 text-white mobile:w-[20%] mobile:ml-[40%]' type="submit" value="GỬI YÊU CẦU" />
                    <div className='hidden *:ml-[20px] text-center border-orange-300 border-2 rounded-[8px] text-[18px] w-fit h-fit px-3 py-1'>One or more fields have an error. Please check and try again.</div>
                </form>
            </div>

            <div className='w-1/2 bg-support_img bg-cover bg-bottom mobile:w-full tablet:w-full tablet:mx-[0px]'>
            </div>
        </div>
    )
}
