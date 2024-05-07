import React, {useState} from 'react'

import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

export default function Search() {
    const router = useRouter()
    const [searchParam, setSearchParam] = useState('');
    const handleSearch = () => {
        router.push(`/shop?search=${encodeURIComponent(searchParam)}`);
      };

    return (
        <div className='w-full h-[45px] mt-5 flex'>
            <input 
            type='text' 
            placeholder='Tìm sản phẩm' 
            className='w-full h-[45px] px-3 border-2 shadow-inner focus:shadow-input_field outline-none text-[20px]'
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
            />
            <button type='submit' className='bg-black h-[45px] w-[45px]' onClick={handleSearch}>
                <SearchIcon sx={{ color: 'white', fontSize: 30 }} />
            </button>
        </div>
    )
}
