import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { toast } from 'react-toastify'
import Link from 'next/link'
import MenuItem from '@mui/material/MenuItem'
import { updateCustomer } from '@/backend/services/admin/customer'
import { useRouter } from 'next/navigation'

export default function CustomerForm({ customerData }) {
    console.log('🚀 ~ CustomerForm ~ customerData:', customerData)
    const [userRole, setUserRole] = useState(customerData?.role || '')
    const [userState, setUserState] = useState(customerData?.status || '')

    const router = useRouter()
    console.log('🚀 ~ CustomerForm ~ userState:', userState)
    console.log('🚀 ~ CustomerForm ~ userRole:', userRole)

    useEffect(() => {
        setUserRole(customerData?.role || '');
        setUserState(customerData?.status || '');
    }, [customerData])

    const onChange = (e) => {
        const { name, value } = e.target;
        if (name === 'role') {
            setUserRole(value);
        } else if (name === 'state') {
            setUserState(value);
        }
    }


    const submitHandler = async (e) => {
        e.preventDefault()

        try {
            const responseData = await updateCustomer(customerData?._id, { userRole, userState })
            console.log('🚀 ~ submitHandler ~ responseData:', responseData)

            if (responseData) {
                toast.success('Cập nhật đơn hàng thành công!')
                router.push('/admin/customers')
            }
        } catch (error) {
            toast.error('Error: ' + error.message)
        }
    }

    const role = [
        {
            value: 'admin',
            label: 'admin',
        },
        {
            value: 'user',
            label: 'user',
        }
    ];

    const status = [
        {
            value: 'Active',
            label: 'Active',
        },
        {
            value: 'In Active',
            label: 'In Active',
        }
    ];

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }

    return (
        <div className='mx-10 my-5'>
            <div className='text-3xl font-bold text-gray-600'>Cập Nhật Khách Hàng</div>
            <div className='bg-grey-800 mt-4 mb-7 border-2'></div>

            <form className='border-2 rounded-md p-4' onSubmit={submitHandler}>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-5'>
                    <div className='w-full'>
                        <label className='font-bold'>Tên khách hàng</label><br />
                        <input type="text" value={customerData?.name} disabled className='w-full border-slate-300 border-2 rounded-md py-3 px-2 my-2' />
                    </div>
                    <div className='w-full'>
                        <label className='font-bold'>Email khách hàng</label><br />
                        <input type="text" value={customerData?.email} disabled className='w-full border-slate-300 border-2 rounded-md py-3 px-2 my-2' />
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-5'>

                    <div className='w-full'>
                        <label className='font-bold'>Tổng đơn hàng</label><br />
                        <input type="text" value={customerData?.orders?.length} disabled className='w-full border-slate-300 border-2 rounded-md py-3 px-2 my-2' />
                    </div>
                    <div className='w-full'>
                        <label className='font-bold'>Ngày tạo</label><br />
                        <input type="text" value={formatDate(customerData?.createdAt)} disabled className='w-full border-slate-300 border-2 rounded-md py-3 px-2 my-2' />
                    </div>
                    <div className='w-full'>
                        <label className='font-bold'>Ngày cập nhập</label><br />
                        <input type="text" value={formatDate(customerData?.updatedAt)} disabled className='w-full border-slate-300 border-2 rounded-md py-3 px-2 my-2' />
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mb-5'>
                    <TextField
                        id="outlined-select"
                        select
                        name="role"
                        value={userRole}
                        onChange={onChange}
                        className='w-full'
                    >
                        {role.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        id="outlined-select-currency"
                        select
                        name="state"
                        value={userState}
                        onChange={onChange}
                        className='w-full'
                    >
                        {status.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>

                <div className='flex items-center gap-4 mt-6'>
                    <button type='submit' className='bg-blue-500 text-xl text-white rounded py-3 px-4 hover:bg-blue-700'>Cập nhật</button>
                    <Link href='/admin/customers'>
                        <button type='button' className='bg-red-500 text-xl text-white rounded py-3 px-4 hover:bg-red-700'>Quay lại</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}
