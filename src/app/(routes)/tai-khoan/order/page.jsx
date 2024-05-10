'use client'
import Sidebar from '@/app/components/User/Sidebar'
import ListOrder from '@/app/components/order/listOrder'
import React from 'react'

export default function Order() {

    return (
        <div>
            <hr className='mx-28' />
            <div className='py-10'>
                <div className='container max-w-screen-xl mx-auto px-4 my-4'>
                    <div className='flex gap-10'>
                        <Sidebar />
                        <ListOrder />
                    </div>
                </div>

            </div>
        </div>
    )
}
