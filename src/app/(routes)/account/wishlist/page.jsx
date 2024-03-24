import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function WishList() {
    //const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(product.price * (1 - product.discount / 100))).replace(/\./g, ',');

    return (
        <div>
            <div className='w-[90%] ml-[5%] flex flex-row'>
                <div className='bg-gray-100 w-[23%] pt-[2%]'>
                    <h1 className='pl-[10%] border-l-[3px] mb-[10px] border-orange-400 font-semibold text-[17px]'>Tài khoản cá nhân</h1>
                    <div className='pl-[10%] flex flex-col space-y-[10px]'>
                        <a href=''>Thông tin của tôi</a>
                        <a href=''>Đơn hàng</a>
                        <a href=''>Sản phẩm vừa xem</a>
                        <a href=''>Wishlist</a>
                        <a href=''>Đăng xuất</a>
                    </div>
                </div>

                <div className='w-[77%] pl-[5%] pr-[5%]'>
                    <h1 className='text-[30px] font-medium mb-[20px]'>My wishlist</h1>
                    <div className='w-full flex flex-row flex-wrap justify-start'>

                        {/* Wishlist Product */}
                        <div className='w-[30%] mr-[3%] h-[320px] mb-[10px]'>
                                <div className='w-full h-[200px] overflow-hidden'>
                                    <img
                                        src='https://nhaxinh.com/wp-content/uploads/2024/02/armchair-xoay-jadora-360-do-nhieu-lua-chon-4-300x200.jpg'
                                        alt='Ảnh sản phẩm'
                                    />
                                </div>

                                <div className='w-full mt-[5px] relative'>
                                    <div className='flex flex-row w-full items-center'>
                                        <h1 className='text-[17px] mb-[10px] w-[90%]'>Tên sản phẩm</h1>
                                        <button className='group'>
                                            <FavoriteBorderIcon 
                                            className='group-hover:text-black text-[#e60073]'
                                            />
                                        </button>
                                    </div>
                                    <p className='w-full text-[15px] text-right'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(100000).replace(/\./g, ',')}</p>
                                </div>
                        </div>

                        <div className='w-[30%] mr-[3%] h-[320px] mb-[10px]'>
                                <div className='w-full h-[200px] overflow-hidden'>
                                    <img
                                        src='https://nhaxinh.com/wp-content/uploads/2024/02/armchair-xoay-jadora-360-do-nhieu-lua-chon-4-300x200.jpg'
                                        alt='Ảnh sản phẩm'
                                    />
                                </div>

                                <div className='w-full mt-[5px] relative'>
                                    <div className='flex flex-row w-full items-center'>
                                        <h1 className='text-[17px] mb-[10px] w-[90%]'>Tên sản phẩm</h1>
                                        <button className='group'>
                                            <FavoriteBorderIcon 
                                            className='group-hover:text-black text-[#e60073]'
                                            />
                                        </button>
                                    </div>
                                    <p className='w-full text-[15px] text-right'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(100000).replace(/\./g, ',')}</p>
                                </div>
                        </div>

                        <div className='w-[30%] mr-[3%] h-[320px] mb-[10px]'>
                                <div className='w-full h-[200px] overflow-hidden'>
                                    <img
                                        src='https://nhaxinh.com/wp-content/uploads/2024/02/armchair-xoay-jadora-360-do-nhieu-lua-chon-4-300x200.jpg'
                                        alt='Ảnh sản phẩm'
                                    />
                                </div>

                                <div className='w-full mt-[5px] relative'>
                                    <div className='flex flex-row w-full items-center'>
                                        <h1 className='text-[17px] mb-[10px] w-[90%]'>Tên sản phẩm</h1>
                                        <button className='group'>
                                            <FavoriteBorderIcon 
                                            className='group-hover:text-black text-[#e60073]'
                                            />
                                        </button>
                                    </div>
                                    <p className='w-full text-[15px] text-right'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(100000).replace(/\./g, ',')}</p>
                                </div>
                        </div>

                        <div className='w-[30%] mr-[3%] h-[320px] mb-[10px]'>
                                <div className='w-full h-[200px] overflow-hidden'>
                                    <img
                                        src='https://nhaxinh.com/wp-content/uploads/2024/02/armchair-xoay-jadora-360-do-nhieu-lua-chon-4-300x200.jpg'
                                        alt='Ảnh sản phẩm'
                                    />
                                </div>

                                <div className='w-full mt-[5px] relative'>
                                    <div className='flex flex-row w-full items-center'>
                                        <h1 className='text-[17px] mb-[10px] w-[90%]'>Tên sản phẩm</h1>
                                        <button className='group'>
                                            <FavoriteBorderIcon 
                                            className='group-hover:text-black text-[#e60073]'
                                            />
                                        </button>
                                    </div>
                                    <p className='w-full text-[15px] text-right'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(100000).replace(/\./g, ',')}</p>
                                </div>
                        </div>

                        <div className='w-[30%] mr-[3%] h-[320px] mb-[10px]'>
                                <div className='w-full h-[200px] overflow-hidden'>
                                    <img
                                        src='https://nhaxinh.com/wp-content/uploads/2024/02/armchair-xoay-jadora-360-do-nhieu-lua-chon-4-300x200.jpg'
                                        alt='Ảnh sản phẩm'
                                    />
                                </div>

                                <div className='w-full mt-[5px] relative'>
                                    <div className='flex flex-row w-full items-center'>
                                        <h1 className='text-[17px] mb-[10px] w-[90%]'>Tên sản phẩm</h1>
                                        <button className='group'>
                                            <FavoriteBorderIcon 
                                            className='group-hover:text-black text-[#e60073]'
                                            />
                                        </button>
                                    </div>
                                    <p className='w-full text-[15px] text-right'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(100000).replace(/\./g, ',')}</p>
                                </div>
                        </div>
                    </div>
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
