'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import TextField from '@mui/material/TextField'
import axios from 'axios'
import { toast } from 'react-toastify'
import { fetchAllAddress } from '@/backend/services/address'
import { isAuthUser } from '@/backend/middlewares/auth'

export default function Profile() {
    const { data } = useSession()
    const user = data?.user

    const [addresses, setAddresses] = useState([])
    const [showAddressForm, setShowAddressForm] = useState(false)
    const [currentEditedAddressId, setCurrentEditedAddressId] = useState(null)

    const [fullName, setFullName] = useState('')
    const [address, setAddress] = useState('')
    const [province, setProvince] = useState('')
    const [city, setCity] = useState('')
    const [phoneNo, setPhoneNo] = useState('')

    const handleAddOrUpdateAddress = async (e) => {
        e.preventDefault();

        try {
            const newAddress = {
                fullName,
                address,
                province,
                city,
                phoneNo
            };
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/address/add-new-address`, newAddress)
            const data = res.data

            if (data.success) {
                toast.success('Thêm địa chỉ thành công!');
                await getAllAddress()
                setFullName('')
                setAddress('')
                setProvince('')
                setCity('')
                setPhoneNo('')
                setShowAddressForm(false)
            } else {
                toast.error('Không thể thêm địa chỉ! Vui lòng thử lại');
            }
        } catch (error) {
            console.log('🚀 ~ handleAddOrUpdateAddress ~ error:', error);
        }
    }

    async function getAllAddress() {
        const res = await fetchAllAddress()
        if (res) {
            setAddresses(res)
        }
    }

    useEffect(() => {
        getAllAddress()
    }, [])

    function handleUpdateAddress(getCurrentAddress) {
        setShowAddressForm(true)
        setFullName(getCurrentAddress.fullName);
        setAddress(getCurrentAddress.address);
        setProvince(getCurrentAddress.province);
        setCity(getCurrentAddress.city);
        setPhoneNo(getCurrentAddress.phoneNo);
        setCurrentEditedAddressId(getCurrentAddress._id)

        setCurrentEditedAddressId(getCurrentAddress._id)
    }

    return (
        <div className='w-full'>
            <div className="flex items-start sm:items-center">
                <div>
                    <h5 className="font-semibold text-lg">{user?.name}</h5>
                    <p>
                        <b>Email:</b> {user?.email}
                    </p>
                </div>
            </div>

            <hr className="my-4" />

            <div className='mt-6'>
                <h1 className='font-bold text-lg'>Địa chỉ của bạn: </h1>
                <div className='mt-4 flex flex-col gap-4'>
                    {
                        addresses && addresses.length ?
                            addresses.map(item => <div className='border p-6 w-full' key={item?._id}>
                                <p>Họ và tên: {item?.fullName} </p>
                                <p>Địa chỉ: {item?.address} </p>
                                <p>Quận / Huyện: {item?.province} </p>
                                <p>Tỉnh / Thành phố: {item?.city} </p>
                                <p>Số điện thoại: {item?.phoneNo} </p>
                                <button className='mt-5 mr-5 inline-block bg-black text-white px-5 py-3 text-xs font-medium' onClick={() => handleUpdateAddress(item)}>CẬP NHẬP</button>
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
                    <form onSubmit={handleAddOrUpdateAddress} className='flex flex-col mt-5 justify-center pt-4 items-center'>
                        <div>
                            <TextField label="Họ và tên" variant="outlined" className='w-full mr-0 mb-0 ml-0' value={fullName} onChange={(e) => setFullName(e.target.value)} />
                            <TextField label="Địa chỉ" variant="outlined" className='w-full mt-4 mr-0 mb-0 ml-0' value={address} onChange={(e) => setAddress(e.target.value)} />
                            <TextField label="Quận / Huyện" variant="outlined" className='w-full mt-4 mr-0 mb-0 ml-0' value={province} onChange={(e) => setProvince(e.target.value)} />
                            <TextField label="Tỉnh / Thành phố" variant="outlined" className='w-full mt-4 mr-0 mb-0 ml-0' value={city} onChange={(e) => setCity(e.target.value)} />
                            <TextField label="Số điện thoại" variant="outlined" className='w-full mt-4 mr-0 mb-0 ml-0' value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                        </div>
                        <button type='submit' className='mt-5 inline-block bg-black text-white px-5 py-3 text-xs font-medium'>CẬP NHẬP</button>
                    </form>
                )
                : null
            }

            <hr className="my-4" />
        </div>
    )
}
