import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { toast } from 'react-toastify'
import Link from 'next/link'
import { updateOrder } from '@/backend/services/admin/order'
import Image from 'next/image'
import MenuItem from '@mui/material/MenuItem'
import { useRouter } from 'next/navigation'

export default function OrderForm({ orderData }) {
    const [orderStatus, setOrderStatus] = useState(orderData?.orderStatus)
    const router = useRouter()

    const onChange = (e) => {
        setOrderStatus(e.target.value)
    }

    const submitHandler = async (e) => {
        e.preventDefault()

        try {
            const responseData = await updateOrder(orderData._id, { orderStatus })

            if (responseData) {
                toast.success('Cập nhật đơn hàng thành công!')
                router.push('/admin/orders')

            }
        } catch (error) {
            toast.error('Error: ' + error.message)
        }
    }

    const status = [
        { value: 'Đang xử lý', label: 'Đang xử lý' },
        { value: 'Đang trên đường giao', label: 'Đang trên đường giao' },
        { value: 'Đã nhận đơn hàng', label: 'Đã nhận đơn hàng' },
        { value: 'Hủy đơn hàng', label: 'Hủy đơn hàng' },
    ]

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }

    return (
        <div className='mx-10 my-5'>
            <div className='text-3xl font-bold text-gray-600'>Cập Nhật Đơn Hàng</div>
            <div className='bg-grey-800 mt-4 mb-7 border-2'></div>

            <form className='border-2 rounded-md p-4' onSubmit={submitHandler}>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-5'>
                    <div className='w-full'>
                        <label className='font-bold'>ID Đơn hàng</label><br />
                        <input type="text" value={orderData?._id} disabled className='w-full border-slate-300 border-2 rounded-md py-3 px-2 my-2' />
                    </div>
                    <div className='w-full'>
                        <label className='font-bold'>Tên người đặt</label><br />
                        <input type="text" value={orderData?.user.name} disabled className='w-full border-slate-300 border-2 rounded-md py-3 px-2 my-2' />
                    </div>
                    <div className='w-full'>
                        <label className='font-bold'>Email người đặt</label><br />
                        <input type="text" value={orderData?.user.email} disabled className='w-full border-slate-300 border-2 rounded-md py-3 px-2 my-2' />
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-5'>
                    <div className='w-full'>
                        <label className='font-bold'>Địa chỉ</label><br />
                        <input type="text" value={orderData?.shippingAddress.address} disabled className='w-full border-slate-300 border-2 rounded-md py-3 px-2 my-2' />
                    </div>
                    <div className='w-full'>
                        <label className='font-bold'>Thành phố</label><br />
                        <input type="text" value={orderData?.shippingAddress.city} disabled className='w-full border-slate-300 border-2 rounded-md py-3 px-2 my-2' />
                    </div>
                    <div className='w-full'>
                        <label className='font-bold'>Tỉnh</label><br />
                        <input type="text" value={orderData?.shippingAddress.province} disabled className='w-full border-slate-300 border-2 rounded-md py-3 px-2 my-2' />
                    </div>
                    <div className='w-full'>
                        <label className='font-bold'>Số điện thoại người đặt</label><br />
                        <input type="text" value={orderData?.shippingAddress.phoneNo} disabled className='w-full border-slate-300 border-2 rounded-md py-3 px-2 my-2' />
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5'>
                    <div className='w-full'>
                        <label className='font-bold'>Ngày tạo</label><br />
                        <input type="text" value={formatDate(orderData?.createdAt)} disabled className='w-full border-slate-300 border-2 rounded-md py-3 px-2 my-2' />
                    </div>
                    <div className='w-full'>
                        <label className='font-bold'>Tổng tiền</label><br />
                        <input type="text" value={new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(orderData?.totalPrice)).replace(/\./g, ',')} disabled className='w-full border-slate-300 border-2 rounded-md py-3 px-2 my-2' />
                    </div>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Chọn trạng thái đơn hàng"
                        value={orderStatus}
                        onChange={onChange}
                        className='w-full mt-7'
                    >
                        {status.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-5 overflow-x-auto'>
                    {orderData?.orderItems?.map((product) => (
                        <div key={product.productId} className='flex items-center gap-4 border-2 border-slate-500 rounded-md p-2'>
                            <div>
                                <Image src={product?.image} width={120} height={120} alt={product?.name} />
                            </div>
                            <div>
                                <div className='font-bold'>{product?.name}</div>
                                <div>{product?.quantity} {'x'} {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(product?.price)).replace(/\./g, ',')}</div>
                                <div>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(product?.quantity * ((1 - product?.discount / 100) * product?.price))).replace(/\./g, ',')}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex items-center gap-4 mt-6'>
                    <button type='submit' className='bg-blue-500 text-xl text-white rounded py-3 px-4 hover:bg-blue-700'>Cập nhật</button>
                    <Link href='/admin/orders'>
                        <button type='button' className='bg-red-500 text-xl text-white rounded py-3 px-4 hover:bg-red-700'>Quay lại</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}
