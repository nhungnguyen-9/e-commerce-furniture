'use client'
import React, { useEffect, useState } from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'

const Room = ({ params }) => {
    const [categories, setCategories] = useState([])
    const [roomData, setRoomData] = useState(null)

    const roomSlug = params.slug

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (roomSlug) {
                    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/room/${roomSlug}`);
                    setCategories(res.data.categories);
                    setRoomData(res.data.room)
                }
            } catch (error) {
                console.log('🚀 ~ fetchData ~ error:', error)
            }
        }

        fetchData()
    }, [roomSlug])

    return (
        <div>
            {roomData && (
                <div>
                    <div className='relative overflow-hidden w-full h-fit mb-[50px]'>
                        <div className='w-full h-[500px] bg-center bg-cover'>
                            <img src={roomData.image} alt='home' className='w-full brightness-[70%] bg-auto bg-no-repeat bg-center' />
                        </div>
                        <h1 className='absolute bottom-[50px] left-[100px] text-white font-bold text-[50px]'>{roomData.name}</h1>
                        <div className='absolute bottom-[50px] right-[100px] flex flex-row text-white text-[20px]'>
                            <Link href='/'>Trang chủ</Link>
                            <div className='mx-[10px]'>/</div>
                            <div className='font-semibold'>{roomData.name}</div>
                        </div>
                    </div>

                    <div className='w-[90%] ml-[5%] flex flex-row'>
                        <div className='bg-gray-100 w-[23%] pt-[2%]'>
                            <h1 className='pl-[10%] border-l-[3px] mb-[10px] border-orange-400 font-semibold text-[17px]'>Nội thất phòng</h1>
                            <div className='pl-[10%] flex flex-col space-y-[10px]'>
                                {categories.map((item) => (
                                    <Link key={item.slug} href={`/danh-muc/${roomData.slug}/${item.slug}`}>{item.name}</Link>
                                ))}
                            </div>
                        </div>

                        <div className='w-[77%] flex flex-row flex-wrap pl-[5%] pr-[5%] justify-between'>
                            {categories.map((item) => (
                                <div key={item.slug} className='w-[45%] h-[350px]'>
                                    <div className='w-full h-[200px] overflow-hidden'>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                        />
                                    </div>

                                    <div className='mt-[5px]'>
                                        <h1 className='font-semibold text-[20px] mb-[10px]'>{item.name}</h1>
                                        <div className='text-[15px]'>{item.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='relative bg-location_image bg-cover bg-center w-full h-[630px] small:scale-100 small:m-0 small:h-[280px] small:bg-center small:bg-no-repeat small:bg-cover'>
                        <div className='absolute top-0 right-0 bottom-0 left-0 bg-black opacity-25 small:w-full'></div>
                        <div className='relative top-10 left-0 right-0 text-center'>
                            <h1 className='absolute left-0 right-0 top-96 m-auto text-7xl font-extrabold text-white small:w-full small:p-0 small:m-0 small:text-[28px]'>Xem, chạm và cảm nhận</h1>
                            <button className='absolute mt-[33%] ml-[-65px] text-[15px] py-2 px-4 text-white border-2 border-white hover:bg-white hover:text-[#666] small:w-[30%] small:mt-[200px] small:ml-[140px] small:text-[10px]'>
                                <div className='ml-1 font-bold text-xl'>
                                    Tìm cửa hàng
                                    <ChevronRightIcon />
                                </div>
                            </button>
                        </div>
                    </div>

                </div>

            )}
        </div>
    )
}

export default Room