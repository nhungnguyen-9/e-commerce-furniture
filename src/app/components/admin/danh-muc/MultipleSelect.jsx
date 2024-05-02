'use client'
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

export default function SelectTextFields({ value, onChange, roomIds, categoryRoomData }) {
    const [inputValue, setInputValue] = useState([])

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSelect = (roomId) => {
        onChange(roomId)
        setInputValue(roomIds.find(room => room._id === roomId).name)
    }

    return (
        <Box className="overflow-visible bg-white">
            <div className="flex gap-1 flex-wrap border rounded-md">
                <TextField
                    select
                    value={inputValue}
                    label={categoryRoomData ? categoryRoomData[0]?.name : 'Chọn phòng'}
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
                    {roomIds.map((room) => (
                        <MenuItem
                            key={room._id}
                            value={room._id}
                            onClick={() => handleSelect(room._id)}
                        >
                            {room.name}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        </Box>
    )
}