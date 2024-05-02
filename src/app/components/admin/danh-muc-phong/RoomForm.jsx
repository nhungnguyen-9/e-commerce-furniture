'use client'
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import ImageUpload from './UploadImage'
import { createNewRoom, updateRoom } from '@/backend/services/admin/room'
import { toast } from 'react-toastify'
import Link from 'next/link'

export default function RoomForm({ roomData }) {
    const [room, setRoom] = useState({
        name: roomData ? roomData.name : '',
        image: roomData ? [roomData.image] : []
    })

    useEffect(() => {
        if (roomData) {
            setRoom({
                name: roomData.name,
                image: [roomData.image]
            })
        }
    }, [roomData])

    const onChange = (e) => {
        setRoom({ ...room, [e.target.name]: e.target.value })
    }

    const { name, image } = room

    const submitHandler = async (e) => {
        e.preventDefault()

        try {
            if (!name || image.length === 0) {
                toast.error('Vui lòng chọn hình ảnh cho phòng và đặt tên phòng!')
                return
            }

            let responseData
            if (roomData) {
                responseData = await updateRoom(roomData.slug, { name, image: image[0] })
            } else {
                responseData = await createNewRoom({ name, image: image[0] })
            }

            if (responseData) {
                toast.success(roomData ? 'Cập nhật phòng thành công!' : 'Tạo phòng thành công!')
            } else {
                toast.error('Lỗi tạo phòng!')
            }

            setRoom({
                name: '',
                image: []
            })
        } catch (error) {
            toast.error('Error: ' + error.message)
        }
    }

    return (
        <div className='mx-10 my-5'>
            <div className='text-3xl font-bold text-gray-600'>{roomData ? 'Cập Nhật Phòng' : 'Tạo Danh Mục Phòng'}</div>
            <div className='bg-grey-800 mt-4 mb-7 border-2'></div>

            <form className='border-2 rounded-md p-4' onSubmit={submitHandler}>
                <TextField id="outlined-basic" label="Tên phòng" variant="outlined" className='w-full mb-3' name='name' value={name} onChange={onChange} required /> <br />
                <div className='mt-3 mb-4'>
                    <div className=''>Hình ảnh</div>
                    <ImageUpload
                        value={image}
                        onChange={(url) => setRoom({ ...room, image: [...room.image, url] })}
                        onRemove={(urlToRemove) => setRoom({ ...room, image: room.image.filter(url => url !== urlToRemove) })}
                        required
                    />
                </div>

                <div className='flex items-center gap-4 mt-6'>
                    <button type='submit' className='bg-blue-500 text-xl text-white rounded py-3 px-4 hover:bg-blue-700'>{roomData ? 'Cập nhật' : 'Tạo mới'}</button>
                    <Link href='/admin/danh-muc-phong'>
                        <button type='button' className='bg-red-500 text-xl text-white rounded py-3 px-4 hover:bg-red-700'>Quay lại</button>
                    </Link>
                </div>
            </form>

        </div>
    )
}
