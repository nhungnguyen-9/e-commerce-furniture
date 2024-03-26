import Profile from '@/app/components/User/Profile'
import Sidebar from '@/app/components/User/Sidebar'
import React from 'react'

export default function ProfilePage() {
    return (
        <div className='container max-w-screen-xl mx-auto px-4 my-4'>
            <div className='flex flex-col md:flex-row -mx-4'>
                <Sidebar />
                <Profile />
            </div>
        </div>
    )
}
