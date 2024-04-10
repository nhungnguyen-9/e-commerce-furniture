import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function FilterProducts({ onFilterChange }) {
    const [filter, setFilter] = React.useState(null);

    const applyFilter = () => {
        onFilterChange(filter);
    };

    return (
        <div className='max-w-[1320px] mx-auto my-12 flex items-center gap-20'>
            <Autocomplete
                value={filter}
                onChange={(event, newfilter) => {
                    setFilter(newfilter);
                  }}
                options={[
                    { label: 'Mới nhất', value: 'newest' },
                    { label: 'Theo giá: Thấp đến cao', value: 'low_to_high' },
                    { label: 'Theo giá: Cao đến thấp', value: 'high_to_low' }
                ]}
                // getOptionLabel={(option) => option.label}
                sx={{ width: 300 }}
                renderInput={(params) => (
                    <TextField {...params} label="Giá" variant="standard" />
                )}
            />

            <button 
                className='bg-black py-2 px-5 text-white hover:bg-gray-700'
                onClick={applyFilter}
            >
                ÁP DỤNG
            </button>
        </div>
    );
}
