'use client'
import React, { useEffect, useState } from 'react'
import CustomerForm from '@/app/components/admin/customers/CustomerForm'
import { getOneCustomer } from '@/backend/services/admin/customer'

export default function CustomerDetailPage({ params }) {
    const { id } = params
    const [customerData, setCustomerData] = useState(null)

    useEffect(() => {
        const fetchOneCustomer = async () => {
            try {
                const data = await getOneCustomer(id)
                setCustomerData(data.customer)
            } catch (error) {
                console.log('🚀 ~ fetchOneCustomer ~ error:', error)
            }
        }

        if (id) {
            fetchOneCustomer()
        }
    }, [id])

    return (
        <div>
            <CustomerForm customerData={customerData} />
        </div>
    )
}
