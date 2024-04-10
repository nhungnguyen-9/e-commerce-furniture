'use client'
import ListProducts from '@/app/components/products/ListProducts'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState, Suspense } from 'react'

export default function Shop() {
    const [productData, setProductData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
                setProductData(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

    return (
        <Suspense>
            <div className=''>
                <div className='h-[500px] bg-cover bg-center overflow-hidden relative' >
                    <Image src='https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710854160/nhaxinh/rooms/banner-trang-chu-san-pham-dep-oki_r9i6kl.jpg' width={1461} height={522} alt='home' className='w-full  brightness-[70%]' />
                    <div className='absolute bottom-8 left-32'>
                        <div className='text-white font-bold text-3xl tracking-wider'>Sản phẩm</div>
                        <div className='text-white mt-3'>
                            <Link href='/'>Trang chủ</Link> {''} /
                            <div className='font-bold inline'> Sản phẩm</div>
                        </div>
                    </div>
                </div>
            </div>
            <ListProducts data={productData} />
        </Suspense>
    )
}
