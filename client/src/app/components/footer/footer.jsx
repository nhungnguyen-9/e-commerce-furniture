'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import FooterSwiper from './SwiperSlide'

export default function Footer() {
    return (
        <div className='bg-[#303036] text-[#f1f1e6] px-5'>
            <div className='max-w-[1320px] mx-auto pb-7 pt-8'>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4'>
                    <div>
                        <span className='font-span text-span leading-span tracking-span'>KẾT NỐI VỚI NHÀ XINH</span>
                        <div className='bg-[rgba(255,255,255,.3)] font-[0.875em] h-[3px] max-w-[30px] my-[1em] mx-0'></div>
                        <div>
                            <Image
                                src='https://nhaxinh.com/wp-content/uploads/2021/09/logo.png'
                                alt="Nha Xinh"
                                width={130}
                                height={100}
                            />
                            <div className='mt-[2.8rem]'>
                                <h4 className='font-[14px] uppercase'>Follow us</h4>
                                <p className='mt-2'>
                                    <a href='https://www.instagram.com/nha_xinh/'>Instagram - </a>
                                    <a href='https://www.youtube.com/c/Nh%C3%A0Xinhvn'>Youtube - </a>
                                    <a href='https://www.facebook.com/nhaxinhvn'>Facebook</a>
                                </p>
                                <p className='mb-[1.3em] mt-8'>
                                    <a className='uppercase border-slate-100 border-solid border-[1px] sm:font-[12px] py-[8px] px-[15px] md:py-[8px] px-[20px] font-[14px]' href="https://nhaxinh.com/he-thong-cua-hang/">hệ thống cửa hàng</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='my-5 min-[549px]:ml-0 sm:my-0 sm:ml-10 md:my-0 ml-0 '>
                        <span className='font-span text-span leading-span tracking-span'>NHÀ XINH</span>
                        <div className='bg-[rgba(255,255,255,.3)] font-[0.875em] h-[3px] max-w-[30px] my-[1em] mx-0'></div>
                        <div className='font-[14px]'>
                            <ul>
                                <li className='mt-1'>
                                    <Link href='/about'>Giới thiệu</Link>
                                </li>
                                <li className='mt-1'>
                                    <Link href={'/'}>Chuyện Nhà Xinh</Link>
                                </li>
                                <li className='mt-1'>
                                    <Link href={'/'}>Tổng công ty</Link>
                                </li>
                                <li className='mt-1'>
                                    <Link href={'/recruit'}>Tuyển dụng</Link>
                                </li>
                                <li className='mt-1'>
                                    <Link href={'/'}>Thẻ hội viên</Link>
                                </li>
                                <li className='mt-1'>
                                    <Link href={'/'}>Đổi trả hàng</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <span className='font-span text-span leading-span tracking-span'>CẢM HỨNG #NHAXINH</span>
                        <div className='bg-[rgba(255,255,255,.3)] font-[0.875em] h-[3px] max-w-[30px] my-[1em] mx-0'></div>
                        <div>
                            <ul>
                                <li className='mt-1'>
                                    <Link href={'/shop'}>Sản phẩm</Link>
                                </li>
                                <li className='mt-1'>
                                    <Link href={'/'}>Ý tưởng và cảm hứng</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-8 mb-4 sm:mb-0 sm:mt-1 md:my-0'>
                        <span className='font-span text-span leading-span tracking-span'>NEWSLETTER</span>
                        <div className='bg-[rgba(255,255,255,.3)] font-[0.875em] h-[3px] max-w-[30px] my-[1em] mx-0'></div>
                        <div className='sm:w-[90vw] md:w-[23vw] text-wrap'>
                            <p className='mb-[1.3em]'>Hãy để lại email của bạn để nhận được những ý tưởng trang trí mới và những thông tin, ưu đãi từ Nhà Xinh</p>
                            <p className='md:mr-5'>Email: nhaxinhcare@akacompany.com.vn</p>
                            <p className='mt-[1em]'>Hotline: <strong>18007200</strong></p>
                        </div>
                        <div className='mt-4'>
                            <form className='flex w-[100%]'>
                                <span className='inline-block h-[2.507em] w-full min-[320px]:w-[50%] min-[480px]:w-[30%] md:w-[100%] sm:w-full'>
                                    <input type='email' size='40' placeholder='Nhập email của bạn' className='w-[100%] h-[2.507em] py-0 px-[0.75em] bg-[rgba(255,255,255,.2)] text-white border-1 border-[#ddd] placeholder:font-[10px] placeholder-white focus:outline-none' />
                                </span>
                                <button className='uppercase bg-[#0A0A0B] border-[rgba(0,0,0,.05)] h-[2.507em] min-[320px]:w-[30%] min-[480px]:w-[80%] sm:w-[50%] md:w-[33%] lg:w-[45%]'>Đăng ký</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='border-y-[1px] border-y-[#525459] mb-7 mt-12 py-2'>
                    <div className='my-6 mx-[15px]'>
                        <div className='ml-[33%] min-[549px]:ml-[13%] sm:ml-[10%] md:ml-[5%]'>
                            <FooterSwiper />
                        </div>
                    </div>
                </div>
                <div className='text-center text-[rgba(255,255,255,.5)] md:flex-row justify-between'>
                    <div>
                        <p>
                            © 2024 - Website này được xây dựng nhằm mục đích học tập - Dựa trên website nhaxinh.com
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}


