import Profile from '@/app/components/User/Profile'
import Sidebar from '@/app/components/User/Sidebar'
import React from 'react'

export default function ProfilePage() {
    return (
        <div>
            <hr className='mx-28' />
            <div className='py-10'>
                <div className='container max-w-screen-xl mx-auto px-4 my-4'>
                    <div className='flex gap-10'>
                        <Sidebar />
                        <Profile />
                    </div>
                </div>

            </div>
        </div>
    )
}
