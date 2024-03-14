'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { signup } from '@/app/pages/api/auth/signup'

export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await signup({ name, email, password })
            router.push('/')
            toast.success('Đăng ký thành công!')
        } catch (error) {
            toast.error('Đăng ký không thành công!')
        }
    }

    return (
        <div className='mb-8 mt-4'>
            <form onSubmit={handleSubmit}>
                <div className='flex justify-center'>
                    <div className='shadow-2xl shadow-indigo-500/40 py-2 px-6 sm:w-6/12 md:w-4/12'>
                        <div className='flex items-center justify-center my-4'>
                            <h1 className='font-semibold text-center text-4xl tracking-widest mb-6'>ĐĂNG KÝ</h1>
                            <Image src='/header/logo-nha-xinh.png'
                                width={110}
                                height={50}
                                quality={100}
                                alt='Picture of the author'
                                className='mt-[-20px] sm:hidden md:block'
                            />
                        </div>
                        <div className='w-full my-5'>
                            <label className='text-lg font-medium'>Tên đăng nhập</label> <br />
                            <input
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className='border-2 border-gray-300 w-full p-2 rounded-md mt-1'
                            />
                        </div>
                        <div className='w-full my-5'>
                            <label className='text-lg font-medium'>Email</label> <br />
                            <input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className='border-2 border-gray-300 w-full p-2 rounded-md mt-1'
                            />
                        </div>
                        <div className='w-full my-5'>
                            <label className='text-lg font-medium'>Mật khẩu</label> <br />
                            <input
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                minLength={6}
                                required
                                className='border-2 border-gray-300 w-full p-2 rounded-md mt-1'
                            />
                        </div>
                        <button
                            type='submit'
                            className='bg-blue-500 tracking-wide font-semibold text-lg text-white w-full rounded-md py-2 mt-5 mb-3 hover:bg-blue-600'
                        >
                            ĐĂNG KÝ
                        </button>

                        <p className='text-center my-6 '>
                            Đã có tài khoản?{' '}
                            <Link href='/login' className='font-bold text-green-500 hover:text-green-400'>
                                Đăng nhập ở đây
                            </Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
}
