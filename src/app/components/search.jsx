import React from 'react'

import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
    return (
        <div className='w-full h-[45px] mt-5 flex'>
            <input type='text' placeholder='Tìm sản phẩm' className='w-full h-[45px] px-3 border-2 shadow-inner focus:shadow-input_field outline-none text-[20px]'/>
            <button type='submit' className='bg-black h-[45px] w-[45px]'>
                <SearchIcon sx={{ color: 'white', fontSize: 30 }} />
            </button>
        </div>
    )
}
