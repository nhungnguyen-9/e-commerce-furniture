'use client'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { mockData } from '@/app/data/mock-data'

export default function FilterProducts() {
    const [filteredProducts, setFilteredProducts] = useState(mockData.products)

    const handleFilterChange = (filterType) => {
        let filtered = mockData.products.slice()

        if (filterType === 'low_to_high') {
            filtered.sort((a, b) => a.price - b.price)
        } else if (filterType === 'high_to_low') {
            filtered.sort((a, b) => b.price - a.price)
        } else if (filterType === 'newest') {
            filtered.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
        }

        setFilteredProducts(filtered)
    }

    return (
        <div className='max-w-[1320px] mx-auto my-12 flex items-center gap-20'>
            <Autocomplete
                options={[
                    { label: 'Mới nhất', value: 'newest' },
                    { label: 'Theo giá: Thấp đến cao', value: 'low_to_high' },
                    { label: 'Theo giá: Cao đến thấp', value: 'high_to_low' }
                ]}
                getOptionLabel={(option) => option.label}
                onChange={(event, value) => handleFilterChange(value)}
                sx={{ width: 300 }}
                renderInput={(params) => (
                    <TextField {...params} label="Giá" variant="standard" />
                )}
            />

            <button className='bg-black py-2 px-5 text-white hover:bg-gray-700'>ÁP DỤNG</button>
        </div>
    )
}
