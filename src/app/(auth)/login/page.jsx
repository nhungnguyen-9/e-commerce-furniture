'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const submitHandler = async (e) => {
        e.preventDefault()

        try {
            const res = await signIn('credentials', { email, password, redirect: false })
            if (res?.error == null) {
                router.push('/')
                toast.success('Đăng nhập thành công!')
            } else {
                toast.error('Email hoặc mật khẩu không đúng!')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='mb-8 mt-4'>
            <form onSubmit={submitHandler}>
                <div className='flex justify-center'>
                    <div className='shadow-2xl shadow-indigo-500/40 py-2 px-6 sm:w-6/12 md:w-4/12'>
                        <div className='flex items-center justify-center my-4'>
                            <h1 className='font-semibold text-center text-4xl tracking-widest mb-6'>ĐĂNG NHẬP</h1>
                            <Image src='/header/logo-nha-xinh.png'
                                width={110}
                                height={50}
                                quality={100}
                                alt='Picture of the author'
                                className='mt-[-20px] sm:hidden md:block'
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
                        <a href="" className='font-semibold cursor-pointer mt-[-10px] hover:text-gray-500'>Quên mật khẩu?</a>
                        <button
                            type='submit'
                            // onClick={submit}
                            className='bg-blue-500 tracking-wide font-semibold text-lg text-white w-full rounded-md py-2 mt-5 mb-3 hover:bg-blue-600'
                        >
                            ĐĂNG NHẬP
                        </button>

                        <button
                            type='submit'
                            className='bg-white tracking-wide font-semibold text-lg text-black w-full rounded-md py-2 mt-3 mb-8 flex items-center gap-4 justify-center border-2 shadow-lg'
                            onClick={() => signIn('google')}
                        >
                            <Image src='/google.jpg' width={40} height={40} alt='google' className='rounded-md' />
                            TIẾP TỤC VỚI GOOGLE
                        </button>

                        <p className='font-medium my-4 text-center'>
                            Chưa có tài khoản?{" "}
                            <Link href='/signup' className=' text-orange-600 hover:text-orange-300'> Đăng ký ngay </Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
}
