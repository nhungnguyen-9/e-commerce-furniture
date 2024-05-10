'use client'
import React, { useEffect, useState } from 'react'
import { getOrderById } from '@/backend/services/order'
import Link from 'next/link'
import { Home } from 'lucide-react'

export default function ThankYouOrder({ params }) {
    const orderId = params.orderId;
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            if (orderId) {
                try {
                    const res = await getOrderById(orderId);
                    const data = res.data.data;
                    setOrder(data);
                } catch (error) {
                    console.error("Error fetching order:", error);
                }
            }
        };
        fetchOrderDetails();
    }, [orderId]);

    return (
        <div>
            <style>
                {`
                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-2%);
                    }
                }

                .animate-bounce {
                    animation: bounce 1s infinite;
                }
                `}
            </style>
            <div className='bg-[#f0f3f8] flex flex-col justify-center items-center w-full py-10'>
                <img
                    className='w-[180px] animate-bounce'
                    src={'https://res.cloudinary.com/dq7vzcw0s/image/upload/v1715098130/nhaxinh/uploads/tutorial-preview-large-removebg-preview_e4b1x5.png'}
                    alt="Thank you"
                />
                <div className='text-center block'>
                    <p className='text-green-700 font-bold text-2xl'>Đặt hàng thành công</p>
                    <p className='my-2 text-gray-500'>Đơn hàng của bạn đang được xử lý!</p>
                </div>
            </div>

            <div className='my-4'>
                {order && (
                    <div className='grid p-20 sm:grid-cols-1 sm:gap-8 md:grid-cols-2'>
                        <div>
                            <h1 className='font-bold text-3xl mb-10'>Chi tiết đơn hàng</h1>
                            {order.orderItems.map((product, index) => (
                                <div key={index} className='grid grid-cols-4 gap-8 text-center mb-8'>
                                    <div>
                                        <img src={product?.image} alt="" />
                                    </div>
                                    <div>
                                        <div className='font-bold text-gray-600 mb-4'>Tên sản phẩm</div>
                                        <div>{product?.name}</div>
                                    </div>
                                    <div>
                                        <div className='font-bold text-gray-600 mb-4'>Số lượng</div>
                                        <div>{product?.quantity}</div>
                                    </div>
                                    <div>
                                        <div className='font-bold text-gray-600 mb-4'>Giá</div>
                                        <div>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(product?.quantity * product?.price)).replace(/\./g, ',')}</div>
                                    </div>
                                </div>
                            ))}
                            <hr />
                            <div className='font-bold text-xl text-red-500 mt-5'>Tổng tiền: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(order?.totalPrice)).replace(/\./g, ',')}</div>
                        </div>
                        <div className='bg-[#eff2f7] p-[30px] rounded-md'>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <div className='font-bold text-lg mb-2'>Đơn hàng</div>
                                    <div className='mb-2 text-gray-500'>ID Đơn hàng: {order?._id}</div>
                                    <div className='mb-2 text-gray-500'>Ngày đặt hàng: {new Date(order.createdAt).toLocaleString()}</div>
                                    <div className='mb-2 text-gray-500'>Tổng tiền đơn hàng: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(order?.totalPrice)).replace(/\./g, ',')}</div>
                                </div>
                                <div>
                                    <div className='font-bold text-lg mb-2'>Địa chỉ giao hàng</div>
                                    <div className='mb-2 text-gray-500'>Tên người nhận: {order?.shippingAddress?.fullName}</div>
                                    <div className='mb-2 text-gray-500'>Địa chỉ: {order?.shippingAddress?.address}</div>
                                    <div className='mb-2 text-gray-500'>Tỉnh/Thành phố: {order?.shippingAddress?.province}</div>
                                    <div className='mb-2 text-gray-500'>Số điện thoại: {order?.shippingAddress?.phoneNo}</div>
                                </div>
                            </div>
                            <div>
                                <div className='font-bold text-lg mt-8'>Phương thức thanh toán</div>
                                <div className='mt-2 text-gray-500'>
                                    {order?.paymentMethod === "cashOnDelivery" ? 'Thanh toán khi nhận hàng' : 'Chuyển khoản qua ngân hàng'}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='flex items-center justify-center mb-6'>
                <button className='flex items-center gap-2 bg-green-500 rounded-lg py-4 px-5 text-white hover:bg-green-600'>
                    <Home />
                    <Link href='/' className='font-bold' >Quay về trang chủ</Link>
                </button>
            </div>
        </div>
    );
}
