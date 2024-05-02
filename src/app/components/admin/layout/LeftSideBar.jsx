'use client'
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { navLinks } from '@/app/utils/constant'
import { usePathname } from 'next/navigation'

export default function LeftSideBar() {
    const pathname = usePathname()
    return (
        <div className='left-0 top-0 sticky p-10 flex flex-col gap-16 bg-blue-2 shadow-xl max-lg:hidden'>
            <Image src='https://res.cloudinary.com/dq7vzcw0s/image/upload/v1712549382/nhaxinh/logo/logo-nha-xinh-moi-200422_whpzow.png' alt="logo" width={150} height={70} />

            <div className="flex flex-col gap-12">
                {navLinks.map((link) => (
                    <Link
                        href={link.url}
                        key={link.label}
                        className={`flex gap-4 text-body-medium ${pathname === link.url ? "text-blue-1" : "text-grey-1"}`}
                    >
                        {link.icon} <p>{link.label}</p>
                    </Link>
                ))}
            </div>

            <div className="flex gap-4 text-body-medium items-center">
                {/* <UserButton /> */}
                <p>Edit Profile</p>
            </div>
        </div>
    )
}
