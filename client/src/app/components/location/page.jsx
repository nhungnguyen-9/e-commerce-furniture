import React from 'react'

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Location() {
    return (
        <div className='relative bg-location_image bg-cover bg-center w-full h-[630px] small:scale-100 small:m-0 small:h-[280px] small:bg-center small:bg-no-repeat small:bg-cover'>
            <div className='absolute top-0 right-0 bottom-0 left-0 bg-black opacity-25 small:w-full'></div>
            <div className='relative top-10 left-0 right-0 text-center'>
                <h1 className='absolute left-0 right-0 top-96 m-auto text-7xl font-extrabold text-white small:w-full small:p-0 small:m-0 small:text-[28px]'>Xem, chạm và cảm nhận</h1>
                <button className='absolute mt-[33%] ml-[-65px] text-[15px] py-2 px-4 text-white border-2 border-white hover:bg-white hover:text-[#666] small:w-[30%] small:mt-[200px] small:ml-[140px] small:text-[10px]'>
                    <p className='ml-1 font-bold text-xl'>
                        Tìm cửa hàng
                        <ChevronRightIcon />
                    </p>
                </button>
            </div>
        </div>
    )
}
