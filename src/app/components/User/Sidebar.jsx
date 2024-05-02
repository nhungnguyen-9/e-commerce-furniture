'use client'
import React from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

export default function Sidebar() {
    const logoutHandler = () => {
        signOut({
            callbackUrl: '/'
        })
    }
    return (
        <div className="md:w-1/3 lg:w-1/4 px-4 bg-[#F6F7F8]">
            <div className='font-bold text-xl mt-5'>Tài khoản cá nhân</div>
            <ul className="sidebar mt-4 font-semibold">
                <li>
                    {" "}
                    <Link
                        href='/tai-khoan/edit-account'
                        className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    >
                        Thông tin cá nhân
                    </Link>
                </li>
                <li>
                    {" "}
                    <Link
                        href='/tai-khoan/order'
                        className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    >
                        Đơn hàng của bạn
                    </Link>
                </li>
                {/* <li>
                    {" "}
                    <Link
                        href="/me/update"
                        className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    >
                        Update Profile
                    </Link>
                </li> */}
                {/* <li>
                    {" "}
                    <Link
                        href="/me/update_password"
                        className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    >
                        Update Password
                    </Link>
                </li> */}

                <li>
                    {" "}
                    <a
                        className="block px-3 py-2 text-red-800 hover:bg-red-100 hover:text-white-500 rounded-md cursor-pointer"
                        onClick={logoutHandler}
                    >
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    )
}
