'use client'
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

export default function SelectTextFieldsCategory({ value, onChange, categoriesId, productCategoryData }) {
    const [inputValue, setInputValue] = useState([])

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSelect = (categoryId) => {
        onChange(categoryId)
        setInputValue(categoriesId.find(category => category._id === categoryId).name)
    }

    return (
        <Box className="overflow-visible bg-white">
            <div className="flex gap-1 flex-wrap border rounded-md">
                <TextField
                    select
                    value={inputValue}
                    label={productCategoryData ? productCategoryData?.name : 'Chọn danh mục'}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                    SelectProps={{
                        MenuProps: {
                            PaperProps: {
                                style: {
                                    maxHeight: 200,
                                },
                            },
                        },
                    }}
                >
                    {categoriesId.map((category) => (
                        <MenuItem
                            key={category._id}
                            value={category._id}
                            onClick={() => handleSelect(category._id)}
                        >
                            {category.name}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        </Box>
    )
}