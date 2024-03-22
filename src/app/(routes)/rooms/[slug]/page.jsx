'use client'
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { mockData } from "@/app/data/mock-data"
import { useSearchParams } from 'next/navigation'

const Room = () => {
    const searchParams = useSearchParams();
    const backgroundImageUrl = `url('${searchParams.get('image')}')`;
    // const roomId = searchParams.get('id');
    // const categoriesProduct = mockData.categories.rooms.find(room => room._id === roomId).categoriesProduct;

    // Get the room slug from the query parameters
    const roomSlug = searchParams.get('slug');

    const room = mockData.categories.rooms.find(room => room.slug === roomSlug);

    const categoriesProduct = room ? room.category : [];

    return (
        <div>
            <div className='relative overflow-hidden w-full h-fit mb-[50px]'>
                <div className='w-full h-[600px] brightness-[70%] relative bg-bottom bg-cover' style={{ backgroundImage: backgroundImageUrl }}>
                </div>
                <h1 className='absolute bottom-[50px] left-[100px] text-white font-bold text-[50px]'>{searchParams.get('name')}</h1>
                <div className='absolute bottom-[50px] right-[100px] flex flex-row text-white text-[20px]'>
                    <a href=''>Trang chủ</a>
                    <div className='mx-[10px]'>/</div>
                    <div className='font-semibold'>{searchParams.get('name')}</div>
                </div>
            </div>

            <div className='w-[90%] ml-[5%] flex flex-row'>
                <div className='bg-gray-100 w-[23%] pt-[2%]'>
                    <h1 className='pl-[10%] border-l-[3px] mb-[10px] border-orange-400 font-semibold text-[17px]'>Nội thất phòng</h1>
                    <div className='pl-[10%] flex flex-col space-y-[10px]'>
                        {categoriesProduct.map((item) => (
                            <a key={item.slug} href=''>{item.name}</a>
                        ))}
                    </div>
                </div>

                <div className='w-[77%] flex flex-row flex-wrap pl-[5%] pr-[5%] justify-between'>
                    {categoriesProduct.map((item) => (
                        <div key={item.slug} className='w-[45%] h-[350px] mb-[30px]'>
                            <div className='w-full h-[200px] overflow-hidden'>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                />
                            </div>

                            <div className='mt-[5px]'>
                                <h1 className='font-semibold text-[20px] mb-[10px]'>{item.name}</h1>
                                <p className='text-[15px]'>{item.description}</p>
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
                        <p className='ml-1 font-bold text-xl'>
                            Tìm cửa hàng
                            <ChevronRightIcon />
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Room