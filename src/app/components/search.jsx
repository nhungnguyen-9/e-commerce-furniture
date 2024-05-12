'use client'
import React, {useState, useEffect} from 'react'

import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Autocomplete from '@mui/material/Autocomplete'

export default function Search() {
    const router = useRouter()
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchParam, setSearchParam] = useState('');

    useEffect(() => {
        // Fetch products from your API
        fetch('/api/products')
            .then(response => response.json())
            .then(data => {
                console.log(data.products); // Log the data to check its structure
                setProducts(data.products);
            });
    }, []);

    const handleSearch = async () => {
        if (searchParam.trim() !== '') {
          const { data } = await translate.batch(searchParam, ["vi"]);
          const translatedText = data.target[0].text;
      
          const regexPattern = `${searchParam}|${translatedText}`;
      
          router.push(`/shop?search=${encodeURIComponent(regexPattern)}`);
        } else {
          router.push('/shop');
        }
    };
      
    const handleInputChange = (event, value) => {
        if (value) {
          setSearchParam(value);
          const regex = new RegExp(`^${value}`, 'i');
          setFilteredProducts(products.filter(product => regex.test(product.name)));
        } else {
          setSearchParam('');
          setFilteredProducts([]);
        }
    };

    return (
        <div className='w-full h-[80px] mt-5 flex'>
            <Autocomplete
                freeSolo
                options={filteredProducts}
                getOptionLabel={(option) => option.name}
                onInputChange={handleInputChange}
                blurOnSelect
                className='w-full h-[45px]'
                renderInput={(params) => (
                    <TextField
                        {...params}
                        type='text'
                        placeholder='Tìm sản phẩm'
                        className='w-full h-[45px] px-3 border-2 shadow-inner focus:shadow-input_field outline-none text-[20px]'
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                handleSearch();
                                event.target.blur();
                            }
                        }}
                    />
                )}
            />
        </div>
    )
}
