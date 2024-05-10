import Image from 'next/image'
import React from 'react'

export default function OrderItem({ order }) {
    return (
        <div className="p-3 lg:p-5 mb-5 bg-white border border-blue-600 rounded-md">
            <header className="lg:flex justify-between mb-4">
                <div className="mb-4 lg:mb-0">
                    <p className="font-semibold">
                        <span>ID Đơn hàng: {order?._id} </span>
                        {order?.orderStatus == "Đang xử lý" || order?.orderStatus == 'Hủy đơn hàng' ? (
                            <span className="text-red-500">
                                • {order?.orderStatus.toUpperCase()}
                            </span>
                        ) : (
                            <span className="text-green-500">
                                • {order?.orderStatus.toUpperCase()}
                            </span>
                        )}
                    </p>
                    <p className="text-gray-500">{order?.createdAt?.substring(0, 10)} </p>
                </div>
            </header>
            <div className="grid md:grid-cols-3 gap-2">
                <div>
                    <p className="text-gray-400 mb-1">Thông tin</p>
                    <ul className="text-gray-600">
                        <li>{order?.user?.name}</li>
                        <li>Số điện thoại: {order?.shippingAddress?.phoneNo}</li>
                        <li>email: {order?.user?.email}</li>
                    </ul>
                </div>
                <div>
                    <p className="text-gray-400 mb-1">Địa chỉ giao hàng</p>
                    <ul className="text-gray-600">
                        <li>Địa chỉ: {order?.shippingAddress?.address}</li>
                        <li>
                            Tỉnh/Thành phố: {order?.shippingAddress?.city}, {order?.shippingAddress?.province}
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="text-gray-400 mb-1">Phương thức thanh toán</p>
                    <ul className="text-gray-600">
                        <li className="text-green-400">
                            {order?.paymentInfo?.status?.toUpperCase()}
                        </li>
                        <li>Tổng tiền đơn hàng: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(order?.totalPrice)).replace(/\./g, ',')}</li>
                    </ul>
                </div>
            </div>

            <hr className="my-4" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                {order?.orderItems?.map((item) => (
                    <div key={item} className="flex flex-row mb-4 scroll-auto">
                        <div>
                            <div className="block w-20 h-20 rounded border border-gray-200 overflow-hidden p-3">
                                <Image
                                    src={item?.image}
                                    height="60"
                                    width="60"
                                    alt={item.name}
                                />
                            </div>
                        </div>
                        <div className="ml-3">
                            <p>{item.name.substring(0, 35)}</p>
                            <p className="mt-1 font-semibold">
                                {item.quantity}x = {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(item.price * item.quantity)).replace(/\./g, ',')}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
