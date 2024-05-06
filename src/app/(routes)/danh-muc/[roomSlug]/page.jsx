'use client'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import ListProductsByCategory from '@/app/components/products/ListProductsByCategory'

export default function SpecificCategory({ params }) {
    const [roomData, setRoomData] = useState(null);
    const [products, setProducts] = useState([]);

    const roomSlug = params.roomSlug;

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (roomSlug) {
                    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/danh-muc/${roomSlug}`);
                    setRoomData(res.data.room);
                    setProducts(res.data.products);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [roomSlug]);

    return (
        <div>
            {roomData && (
                <div className=''>
                    <div className='h-[500px] bg-cover bg-center overflow-hidden relative' >
                        <Image src={roomData.image} width={1461} height={522} alt='home' className='w-full brightness-[70%] bg-auto bg-no-repeat bg-center' />
                        <div className='absolute top-[75%] left-32'>
                            <div className='text-white'>
                                <div className='font-bold text-white text-3xl mb-3'>{roomData.name}</div>
                                <Breadcrumbs aria-label="breadcrumb" className='text-white'>
                                    <Link underline="hover" href="/" className='text-white'>
                                        Trang chủ
                                    </Link>
                                    <Typography className='text-white font-semibold'>{roomData.name}</Typography>
                                </Breadcrumbs>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <ListProductsByCategory data={products} />
        </div>
    )
}
