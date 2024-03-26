'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import TextField from '@mui/material/TextField'

export default function Profile() {
    const { data } = useSession()
    const user = data?.user

    const [addresses, setAddresses] = useState([])
    const [showAddressForm, setShowAddressForm] = useState(false)

    const [fullName, setFullName] = useState('')
    const [address, setAddress] = useState('')
    const [province, setProvince] = useState('')
    const [city, setCity] = useState('')
    const [phoneNo, setPhoneNo] = useState('')

    async function handleAddOrUpdateAddress(){

    }

    return (
        <div>
            <div className="flex items-start sm:items-center">
                <div>
                    <h5 className="font-semibold text-lg">{user?.name}</h5>
                    <p>
                        <b>Email:</b> {user?.email}
                    </p>
                </div>
            </div>

            <hr className="my-4" />

            {/* <UserAddresses /> */}

            <div className='mt-6'>
                <h1 className='font-bold text-lg'>Địa chỉ của bạn: </h1>
                <div className='mt-4'>
                    {
                        addresses && addresses.length ?
                            addresses.map(item => <div className='border p-6' key={item._id}>
                                <p>Họ và tên: {item.fullName} </p>
                                <p>Địa chỉ: {item.address} </p>
                                <p>Quận / Huyện: {item.province} </p>
                                <p>Tỉnh / Thành phố: {item.city} </p>
                                <p>Số điện thoại: {item.phoneNo} </p>
                                <button className='mt-5 inline-block bg-black text-white px-5 py-3 text-xs font-medium'>CẬP NHẬP</button>
                        <button className='mt-5 inline-block bg-black text-white px-5 py-3 text-xs font-medium'>XÓA</button>
                            </div>)
                            : <p className='italic text-yellow-600'>* Không tìm thấy địa chỉ! Vui lòng thêm địa chỉ bên dưới</p>
                    }
                </div>
            </div>

                <button 
                className="px-4 py-2 inline-block text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100 mt-4" 
                onClick={() => setShowAddressForm(!showAddressForm)}
                >
                    {showAddressForm ? 'Ẩn địa chỉ' : 'Thêm địa chỉ'}
                </button>
            {showAddressForm
                ? (
                    <div className='flex flex-col mt-5 justify-center pt-4 items-center'>
                        <div>
                            <TextField label="Họ và tên" variant="outlined" className='w-full mr-0 mb-0 ml-0' value={fullName} onChange={() => setFullName(e.target.value)} />
                            <TextField label="Địa chỉ" variant="outlined" className='w-full mt-4 mr-0 mb-0 ml-0' value={address} onChange={() => setAddress(e.target.value)} />
                            <TextField label="Quận / Huyện" variant="outlined" className='w-full mt-4 mr-0 mb-0 ml-0' value={province} onChange={() => setProvince(e.target.value)} />
                            <TextField label="Tỉnh / Thành phố" variant="outlined" className='w-full mt-4 mr-0 mb-0 ml-0' value={city} onChange={() => setCity(e.target.value)} />
                            <TextField label="Số điện thoại" variant="outlined" className='w-full mt-4 mr-0 mb-0 ml-0' value={phoneNo} onChange={() => setPhoneNo(e.target.value)} />
                        </div>
                        <button onClick={handleAddOrUpdateAddress} className='mt-5 inline-block bg-black text-white px-5 py-3 text-xs font-medium'>CẬP NHẬP</button>
                    </div>
                )
                : null
            }

            <hr className="my-4" />
        </div>
    )
}
