import React from 'react'

export default function AdminHome() {
    return (
        <div>
            <h1 className='text-[30px] font-semibold m-[20px]'>Thêm sản phẩm</h1>
            <form className='w-full flex flex-col px-[50px] space-y-[10px] mb-[50px]'>
                <label>Mã sản phẩm</label>
                <input type="text" placeholder='' className='border-2 border-gray-300' />

                <label>Tên sản phẩm</label>
                <input type="text" placeholder='' className='border-2 border-gray-300' />

                <label>Mô tả sản phẩm</label>
                <input type="text" placeholder='' className='border-2 border-gray-300' />

                <label>Giá tiền</label>
                <input type="number" placeholder='' className='border-2 border-gray-300' />

                <label>Hình ảnh</label>
                <input type="file" multiple />
                
                <label>Vật liệu</label>
                <input type="text" placeholder='' className='border-2 border-gray-300' />

                <label>Kích cỡ</label>
                <input type="text" placeholder='' className='border-2 border-gray-300' />

                <label>Danh mục</label>
                <input type="text" placeholder='' className='border-2 border-gray-300' />

                <label>Bộ sưu tập</label>
                <input type="text" placeholder='1, 2, 3,...' className='border-2 border-gray-300' />

                <div>
                    <button className='w-[100px] h-[30px] border-2 border-gray-300 hover:border-gray-700'>Thêm</button>
                    <button className='ml-[20px] w-[100px] h-[30px] border-2 border-gray-300 hover:border-gray-700'>Hủy</button>
                </div>
            </form>
        </div>
    )
}