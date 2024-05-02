'use client'
import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { getAllRooms } from '@/backend/services/admin/room'
import { getAllCategories } from '@/backend/services/admin/category'
import SelectTextFieldsCategory from './MultipleSelectCategory'
import ImageProductUpload from './ImageProduct'
import Link from 'next/link'
import { createNewProduct, updateProduct } from '@/backend/services/admin/product'
import { toast } from 'react-toastify'
import SelectTextFieldsRoom from './MultipleSelectRoom'

export default function ProductForm({ productData }) {
    console.log('🚀 ~ ProductForm ~ productData:', productData)
    const [product, setProduct] = useState({
        name: productData ? productData.name : '',
        description: productData ? productData.description : '',
        price: productData ? productData.price : 0,
        discount: productData ? productData.discount : 0,
        inStock: productData ? productData.inStock : true,
        material: productData ? productData.material : '',
        size: productData ? productData.material : '',
        categoryId: productData ? productData.categoryId : '',
        roomId: productData ? productData.roomId : '',
        image: productData ? productData.image.map(image => image.url) : []
    })

    const [roomIds, setRoomIds] = useState([])
    const [categoriesId, setCategoriesId] = useState([])

    const getRooms = async () => {
        try {
            const res = await getAllRooms()
            setRoomIds(res)
        } catch (error) {
            console.log('🚀 ~ getRooms ~ error:', error)
        }
    }

    const getCategories = async () => {
        try {
            const res = await getAllCategories()
            console.log('🚀 ~ getCategories ~ res:', res)
            setCategoriesId(res)
        } catch (error) {
            console.log('🚀 ~ getCategories ~ error:', error)
        }
    }

    useEffect(() => {
        getRooms()
        getCategories()
    }, [])

    useEffect(() => {
        if (productData) {
            setProduct({
                name: productData.name,
                description: productData.description,
                price: productData.price,
                discount: productData.discount,
                inStock: productData.inStock,
                material: productData.material,
                size: productData.size,
                roomId: productData.roomId,
                categoryId: productData.categoryId,
                image: productData.image.map(image => image.url)
            })
        }
    }, [productData])

    const { name, description, price, discount, inStock, material, size, roomId, categoryId, image } = product

    const submitHandler = async (e) => {
        e.preventDefault()

        console.log(product)
        try {
            if (!name || image.length === 0 || !description || !price || !material || !size || !roomId) {
                toast.error('Vui lòng điền đầy đủ thông tin sản phẩm!')
                return
            }

            let responseData
            if (productData) {
                responseData = await updateProduct(productData._id, { name, description, price, discount, inStock, material, size, roomId, categoryId, image })
            } else {
                responseData = await createNewProduct({ name, description, price, discount, inStock, material, size, roomId, categoryId, image })
            }

            if (responseData) {
                toast.success(productData ? 'Cập nhật danh mục thành công!' : 'Tạo danh mục thành công!')
            } else {
                toast.error('Lỗi tạo danh mục!')
            }

            setProduct({
                name: '',
                description: '',
                price: 0,
                discount: 0,
                inStock: true,
                material: '',
                size: '',
                roomId: '',
                categoryId: '',
                image: []
            })
        } catch (error) {
            toast.error('Error: ' + error.message)
        }
    }

    return (
        <div className='mx-10 my-5'>
            <div className='text-3xl font-bold text-gray-600'>{productData ? 'Cập nhập sản phẩm' : 'Tạo Sản Phẩm'}</div>
            <div className='bg-grey-800 mt-4 mb-7 border-2'></div>

            <form className='border-2 rounded-md p-4' onSubmit={submitHandler}>
                <TextField id="outlined-basic" label="Tên sản phẩm" variant="outlined" className='w-full mb-3' value={name} onChange={(e) => setProduct({ ...product, name: e.target.value })} required /> <br />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Mô tả sản phẩm"
                    multiline
                    maxRows={4}
                    className='w-full mb-3'
                    value={description}
                    onChange={(e) => setProduct({ ...product, description: e.target.value })}
                    required
                /> <br />
                <div className='flex gap-2 mb-3'>
                    <TextField id="outlined-basic" label="Giá sản phẩm" variant="outlined" type='number' className='md:w-[33%] sm:w-full'
                        value={price} onChange={(e) => setProduct({ ...product, price: e.target.value })} required /> <br />
                    <TextField id="outlined-basic" label="Giảm giá (%)" variant="outlined" type='number' className='md:w-[33%] sm:w-full'
                        value={discount} onChange={(e) => setProduct({ ...product, discount: e.target.value })} required /> <br />
                    <TextField
                        id="outlined-basic"
                        select
                        label="Trạng thái"
                        variant="outlined"
                        className='md:w-[33%] sm:w-full'
                        name="inStock"
                        value={inStock}
                        onChange={(e) => setProduct({ ...product, inStock: e.target.value })}
                        required
                    >
                        <MenuItem value={true}>Còn hàng</MenuItem>
                        <MenuItem value={false}>Hết hàng</MenuItem>
                    </TextField>
                </div>
                <div className='flex gap-2 mb-3'>
                    <TextField id="outlined-basic" label="Vật liệu" variant="outlined" className='md:w-[50%] sm:w-full'
                        value={material} onChange={(e) => setProduct({ ...product, material: e.target.value })} required /> <br />
                    <TextField id="outlined-basic" label="Kích thước" variant="outlined" className='md:w-[50%] sm:w-full'
                        value={size} onChange={(e) => setProduct({ ...product, size: e.target.value })} required /> <br />
                </div>
                <div className='grid grid-cols-2 gap-4 mb-3'>
                    <SelectTextFieldsRoom
                        value={roomId}
                        roomIds={roomIds}
                        productRoomData={productData?.roomId}
                        onChange={(_id) => setProduct({ ...product, roomId: [_id] })}
                        required
                    />
                    <SelectTextFieldsCategory
                        value={categoryId}
                        categoriesId={categoriesId}
                        productCategoryData={productData?.categoryId}
                        onChange={(_id) => setProduct({ ...product, categoryId: [_id] })}
                        required
                    />
                </div>

                <div className='mt-6 mb-4'>
                    <div className=''>Hình ảnh</div>
                    <ImageProductUpload
                        value={image}
                        onChange={(url) => setProduct({ ...product, image: url })}
                        onRemove={(urlToRemove) => setProduct({ ...product, image: product.image.filter(url => url !== urlToRemove) })}
                        required
                    />
                </div>

                <div className='flex items-center gap-4 mt-6'>
                    <button type='submit' className='bg-blue-500 text-xl text-white rounded py-3 px-4 hover:bg-blue-700'>{productData ? 'Cập nhập' : 'Tạo mới'}</button>
                    <Link href='/admin/san-pham'>
                        <button type='button' className='bg-red-500 text-xl text-white rounded py-3 px-4 hover:bg-red-700'>Quay lại</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}
