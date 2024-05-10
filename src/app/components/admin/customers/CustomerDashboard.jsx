'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Pagination from '../../Pagination'
import Link from 'next/link'
import { Pencil, Plus } from 'lucide-react'
import { getAllCustomers } from '@/backend/services/admin/customer'
import { InputAdornment } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import { Ban } from 'lucide-react'

export default function CustomerDashboard() {
    const [customers, setCustomers] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [customersPerPage] = useState(6)
    const [searchTerm, setSearchTerm] = useState('')
    const router = useRouter()

    useEffect(() => {
        fetchAllCustomers()
    }, [])

    const fetchAllCustomers = async () => {
        try {
            const customersData = await getAllCustomers();
            setCustomers(customersData);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    }

    // Get current rooms
    const indexOfLastCustomer = currentPage * customersPerPage
    const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage
    const filterCustomers = customers?.filter(customer => customer.name.toLowerCase().includes(searchTerm.toLowerCase()))
    const currentCustomers = filterCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer)

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber)

    // Calculate total pages
    const totalPages = Math.ceil(filterCustomers.length / customersPerPage);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
        setCurrentPage(1)
    }

    return (
        <div className='relative overflow-x-auto shadow-md m-10 sm:rounded-lg'>
            <div className="">
                <div className='flex justify-between items-center'>
                    <h1 className="text-2xl my-5 ml-4 font-bold">
                        Danh sách khách hàng {''} ({filterCustomers?.length})
                    </h1>
                    <TextField
                        id='outlined-basic'
                        label='Tìm khách hàng'
                        variant='outlined'
                        size='small'
                        value={searchTerm}
                        onChange={handleSearch}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <SearchIcon style={{ cursor: 'pointer' }} />
                                </InputAdornment>
                            ),
                            sx: { borderRadius: 20, width: '273px' }
                        }}
                    />
                </div>

                <hr className='mx-4 text-lg' />
                <table className="w-full text-sm text-center">
                    <thead className="text-l text-green-700 uppercase">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Tên tài khoản
                            </th>
                            <th scope="col" className="px-12 py-3">
                                Số đơn hàng
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Trạng thái
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentCustomers?.map((customer, index) => (
                            <tr className="bg-white" key={index}>
                                <td className="px-6 py-2">{customer?.name}</td>
                                <td className="px-6 py-2">
                                    {customer?.orders?.length}
                                </td>
                                <td className="px-6 py-2">
                                    {customer?.role}
                                </td>
                                <td className={`px-6 py-2 font-bold ${customer.status === 'Active' ? 'text-black' : 'text-red-500'}`}>
                                    {customer?.status}
                                </td>
                                <td className="px-6 py-2">
                                    <div>
                                        {customer?.status === 'Active' ? (
                                            <Link
                                                href={`/admin/customers/${customer?._id}`}
                                                className="px-2 py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                                            >
                                                <Pencil />
                                            </Link>
                                        ) : (
                                            <div></div>
                                        )}
                                        {customer?.status === 'In Active' ? (
                                            <button disabled
                                                className="px-2 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                                            >
                                                <Ban />
                                            </button>

                                        ) : (
                                            <div></div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {totalPages > 1 && (
                <div className="my-6">
                    <Pagination
                        currentPage={currentPage}
                        customersPerPage={customersPerPage}
                        totalCustomers={customers.length}
                        paginate={paginate}
                    />
                </div>
            )}
        </div>
    )
}

