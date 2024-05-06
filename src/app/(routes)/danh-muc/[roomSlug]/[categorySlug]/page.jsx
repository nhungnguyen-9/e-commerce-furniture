'use client'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs'
import ListProductsByCategory from '@/app/components/products/ListProductsByCategory'

export default function SpecificCategory({ params }) {
    const [categoryData, setCategoryData] = useState(null);
    const [products, setProducts] = useState([]);

    const roomSlug = params.roomSlug;
    const categorySlug = params.categorySlug;

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (roomSlug && categorySlug) {
                    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/danh-muc/${roomSlug}/${categorySlug}`);
                    setCategoryData(res.data.category);
                    setProducts(res.data.products);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [roomSlug, categorySlug]);

    return (
        <div>
            {categoryData && (
                <div className=''>
                    <div className='h-[500px] bg-cover bg-center overflow-hidden relative' >
                        <Image src={categoryData.image} width={1461} height={522} alt='home' className='w-full brightness-[70%] bg-auto bg-no-repeat bg-center' />
                        <div className='absolute top-[75%] left-32'>
                            <div className='text-white'>
                                <div className='font-bold text-white text-3xl mb-3'>{categoryData.name}</div>
                                <Breadcrumbs aria-label="breadcrumb" className='text-white'>
                                    <Link underline="hover" href="/" className='text-white'>
                                        Trang chủ
                                    </Link>
                                    {categoryData.room && categoryData.room[0] &&
                                        <Link
                                            underline="hover"
                                            className='text-white'
                                            href={`/danh-muc/${categoryData.room[0].slug}`}
                                        >
                                            {categoryData?.room[0].name}
                                        </Link>
                                    }
                                    <Typography className='text-white font-semibold'>{categoryData?.name}</Typography>
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
