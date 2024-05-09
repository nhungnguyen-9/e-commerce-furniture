'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Pencil, Plus } from 'lucide-react'
import Pagination from '../../Pagination'
import { useRouter } from 'next/navigation'
import { getAllOrders } from '@/backend/services/admin/order'
import DeleteOrder from './DeleteOrder'

export default function OrderList() {
    const [orders, setOrders] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [ordersPerPage] = useState(4)
    const router = useRouter()

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const ordersData = await getAllOrders();
            setOrders(ordersData);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    const handleDeleteSuccess = () => {
        fetchOrders()
        router.push('/admin/orders')
    };

    // Get current rooms
    const indexOfLastOrder = currentPage * ordersPerPage
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder)

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber)

    // Calculate total pages
    const totalPages = Math.ceil(orders.length / ordersPerPage);

    return (
        <div className='relative overflow-x-auto shadow-md m-10 sm:rounded-lg'>
            <div className="">
                <div className='flex justify-between items-center'>
                    <h1 className="text-2xl my-5 ml-4 font-bold">
                        Đơn hàng {''} ({orders?.length})
                    </h1>
                </div>

                <hr className='mx-4 text-lg' />
                <table className="w-full text-sm text-center">
                    <thead className="text-l text-green-700 uppercase">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID đơn hàng
                            </th>
                            <th scope="col" className="px-12 py-3">
                                Tổng tiền đơn hàng
                            </th>
                            <th scope="col" className="px-12 py-3">
                                Phương thức thanh toán
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Trạng thái đơn hàng
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentOrders?.map((order, index) => (
                            <tr className="bg-white" key={index}>
                                <td className="px-6 py-2">{order?._id}</td>
                                <td className="px-6 py-2">
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(order?.totalPrice)).replace(/\./g, ',')}
                                </td>
                                <td className="px-6 py-2">
                                    {order?.paymentMethod === 'cashOnDelivery' ? 'Thanh toán bằng tiền mặt' : 'Chuyển qua tài khoản ngân hàng'}
                                </td>
                                <td className="px-6 py-2">
                                    {order?.orderStatus}
                                </td>
                                <td className="px-6 py-2">
                                    <div>
                                        <Link
                                            href={`/admin/orders/${order?._id}`}
                                            className="px-2 py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                                        >
                                            <Pencil />
                                        </Link>
                                        <a className="px-2 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer">
                                            <DeleteOrder id={order?._id} onDeleteSuccess={handleDeleteSuccess} />
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {totalPages > 1 && (
                <div className="my-6">
                    <Pagination
                        currentPage={currentPage}
                        roomsPerPage={ordersPerPage}
                        totalRooms={orders.length}
                        paginate={paginate}
                    />
                </div>
            )}
        </div>
    )
}

