import { getAllOrdersByUserId } from '@/backend/services/order'
import React, { useEffect, useState } from 'react'
import OrderItem from './orderItem'
import Pagination from '../Pagination'

export default function ListOrder() {
    const [orders, setOrders] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [ordersPerPage] = useState(2)

    // GET ALL ORDERS
    useEffect(() => {
        const fetchAllOrders = async () => {
            try {
                const res = await getAllOrdersByUserId()
                const data = res.data
                if (res.success) {
                    setOrders(data)
                }
            } catch (error) {
                console.log('🚀 ~ fetchAllOrders ~ error:', error)
            }
        }

        fetchAllOrders()
    }, [])

    // Get current orders
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculate total pages
    const totalPages = Math.ceil(orders.length / ordersPerPage);

    return (
        <div>
            <h3 className='font-bold text-2xl mb-4'>Đơn hàng của bạn</h3>
            {currentOrders?.map((order) => (
                <OrderItem key={order.id} order={order} />
            ))}
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
