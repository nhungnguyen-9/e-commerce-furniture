'use client'
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { toast } from 'react-toastify'
import Link from 'next/link'
import ImageCategoryUpload from './ImageCategory'
import SelectTextFields from './MultipleSelect'
import { createNewCategory, updateCategory } from '@/backend/services/admin/category'
import { useRouter } from 'next/navigation'
import { getAllRooms } from '@/backend/services/admin/room'

export default function CategoryForm({ categoryData }) {
    const [category, setCategory] = useState({
        name: categoryData ? categoryData.name : '',
        rooms: categoryData ? categoryData.room.map(room => room._id) : [],
        image: categoryData ? [categoryData.image] : []
    })

    const [roomIds, setRoomIds] = useState([])
    const router = useRouter()

    const getRooms = async () => {
        try {
            const res = await getAllRooms()
            setRoomIds(res)
        } catch (error) {
            console.log('🚀 ~ getRooms ~ error:', error)
        }
    }

    useEffect(() => {
        getRooms()
    }, [])

    useEffect(() => {
        if (categoryData) {
            setCategory({
                name: categoryData.name,
                rooms: categoryData.room.map(room => room._id),
                image: [categoryData.image]
            })
        }
    }, [categoryData])

    const handleKeyPress = (e) => {
        if (e.key == 'Enter') {
            e.preventDefault()
        }
    }

    const { name, rooms, image } = category

    const submitHandler = async (e) => {
        e.preventDefault()

        try {
            if (!name || image.length === 0) {
                toast.error('Vui lòng chọn hình ảnh cho phòng và đặt tên phòng!')
                return
            }

            let responseData
            if (categoryData) {
                responseData = await updateCategory(categoryData._id, { name, rooms, image: image[0] })
            } else {
                responseData = await createNewCategory({ name, rooms, image: image[0] })
            }

            if (responseData) {
                toast.success(categoryData ? 'Cập nhật danh mục thành công!' : 'Tạo danh mục thành công!')
            } else {
                toast.error('Lỗi tạo danh mục!')
            }

            setCategory({
                name: '',
                rooms: [],
                image: []
            })
        } catch (error) {
            toast.error('Error: ' + error.message)
        }
    }

    return (
        <div className='mx-10 my-5'>
            <div className='text-3xl font-bold text-gray-600'>{categoryData ? 'Cập Nhập Danh Mục Sản Phẩm' : 'Tạo Danh Mục Sản Phẩm'}</div>
            <div className='bg-grey-800 mt-4 mb-7 border-2'></div>

            <form className='border-2 rounded-md p-4' onSubmit={submitHandler}>
                <div className='grid gap-3 sm:grid-cols-1 md:grid-cols-2'>
                    <TextField id="outlined-basic" label="Tên danh mục" variant="outlined" className='w-full mb-3' name='name' value={name} onChange={(e) => setCategory({ ...category, name: e.target.value })} onKeyDown={handleKeyPress} required />
                    {roomIds.length > 0 && (
                        <SelectTextFields
                            value={rooms}
                            roomIds={roomIds}
                            categoryRoomData={categoryData?.room}
                            onChange={(_id) => setCategory({ ...category, rooms: [_id] })}
                            required
                        />
                    )}

                </div>
                <div className='mt-3 mb-4'>
                    <div className=''>Hình ảnh</div>
                    <ImageCategoryUpload
                        value={image}
                        onChange={(url) => setCategory({ ...category, image: [url] })}
                        onRemove={(urlToRemove) => setCategory({ ...category, image: category.image.filter(url => url !== urlToRemove) })}
                        required
                    />
                </div>

                <div className='flex items-center gap-4 mt-6'>
                    <button type='submit' className='bg-blue-500 text-xl text-white rounded py-3 px-4 hover:bg-blue-700'>{categoryData ? 'Cập nhập' : 'Tạo mới'}</button>
                    <Link href='/admin/danh-muc'>
                        <button type='button' className='bg-red-500 text-xl text-white rounded py-3 px-4 hover:bg-red-700'>Quay lại</button>
                    </Link>
                </div>
            </form>

        </div>
    )
}
