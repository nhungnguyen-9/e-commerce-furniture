import React from 'react'

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Location() {
    return (
        <div className='bg-location_image w-[100%] h-[550px] scale-125 mb-[69px] small:scale-100 small:m-0 small:h-[280px] small:bg-center small:bg-no-repeat small:bg-cover'>
            <div className='absolute top-0 right-0 bottom-0 left-0 bg-black opacity-25 small:w-full'></div>
            <h1 className='absolute ml-[30%] mt-[23%] text-center text-[60px] text-white small:w-full small:p-0 small:m-0 small:text-[28px] small:mt-[140px]'>Xem, chạm và cảm nhận</h1>
            <button className='absolute ml-[45%] mt-[30%] text-center text-[15px] p-1 text-white border-2 border-white hover:bg-white hover:text-black small:w-[30%] small:mt-[200px] small:ml-[140px] small:text-[10px]'>
                <p className='ml-1'>
                    Tìm cửa hàng
                    <ChevronRightIcon />
                </p>
            </button>
        </div>
    )
}
