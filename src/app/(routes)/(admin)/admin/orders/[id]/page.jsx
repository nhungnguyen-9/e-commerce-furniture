'use client'
import React, { useEffect, useState } from 'react'
import { getOneOrder } from '@/backend/services/admin/order'
import OrderForm from '@/app/components/admin/order/OrderForm'

export default function OrderDetailPage({ params }) {
    const { id } = params
    const [orderData, setOrderData] = useState(null)

    useEffect(() => {
        const fetchOneOrder = async () => {
            try {
                const data = await getOneOrder(id)
                setOrderData(data.order)
            } catch (error) {
                console.log('🚀 ~ fetchOneRoom ~ error:', error)
            }
        }

        if (id) {
            fetchOneOrder()
        }
    }, [id])

    return (
        <div>
            <OrderForm orderData={orderData} />
        </div>
    )
}
