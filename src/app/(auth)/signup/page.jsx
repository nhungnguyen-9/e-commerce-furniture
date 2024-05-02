'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import axios from 'axios'
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import TextField from '@mui/material/TextField'

export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [showPassword, setShowPassword] = React.useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post('/api/signup', {
                name,
                email,
                password
            })

            if (res.status == 200 || res.status == 201) {
                toast.success("Đăng ký thành công!");
                router.push("/login");
            }
        } catch (error) {
            toast.error(error)
        }
    }

    const loginWithGoogle = () => {
        signIn('google', { callbackUrl: '/' })
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
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className='w-full rounded-lg mt-1'
                            />
                        </div>
                        <div className='w-full my-5'>
                            <label className='text-lg font-medium'>Email</label> <br />
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className='w-full rounded-lg mt-1'
                            />
                        </div>
                        <div className='w-full my-5'>
                            <label className='text-lg font-medium'>Mật khẩu</label> <br />
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                minLength={6}
                                required
                                className='w-full rounded-lg mt-1'
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </div>
                        <button
                            type='submit'
                            className='bg-blue-500 tracking-wide font-semibold text-lg text-white w-full rounded-md py-2 mt-5 mb-3 hover:bg-blue-600'
                        >
                            ĐĂNG KÝ
                        </button>

                        <button
                            className='bg-white tracking-wide font-semibold text-lg text-black w-full rounded-md py-2 mt-3 mb-8 flex items-center gap-4 justify-center border-2 shadow-lg'
                            onClick={loginWithGoogle}
                        >
                            <Image src='/google.jpg' width={40} height={40} alt='google' className='rounded-md' />
                            ĐĂNG KÝ BẰNG GOOGLE
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
