'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Pencil, Plus } from 'lucide-react'
import Image from 'next/image'
import Pagination from '../../Pagination'
import { useRouter } from 'next/navigation'
import { getAllCategories } from '@/backend/services/admin/category'
import DeleteCategory from './DeleteCategory'

export default function CategoryDashboard() {
    const [categories, setCategories] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [roomsPerPage] = useState(4)
    const router = useRouter

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const categoriesData = await getAllCategories();
            setCategories(categoriesData);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleDeleteSuccess = () => {
        fetchCategories()
        router.push('/admin/danh-muc')
    };

    const extractPublicId = (url) => {
        const publicId = url.split('/').slice(-2).join('/').split('.')[0]
        return publicId
    }

    // Get current rooms
    const indexOfLastRoom = currentPage * roomsPerPage
    const indexOfFirstRoom = indexOfLastRoom - roomsPerPage
    const currentCategories = categories.slice(indexOfFirstRoom, indexOfLastRoom)

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <div className='relative overflow-x-auto shadow-md m-10 sm:rounded-lg'>
            <div className="">
                <div className='flex justify-between items-center'>
                    <h1 className="text-2xl my-5 ml-4 font-bold">
                        Danh mục sản phẩm {''} ({categories?.length})
                    </h1>
                    <Link href='/admin/danh-muc/new'>
                        <button className='flex items-center bg-blue-500 gap-2 mr-4 rounded font-bold text-white p-3 hover:bg-blue-700'>
                            <Plus />
                            Tạo danh mục sản phẩm
                        </button>
                    </Link>
                </div>

                <hr className='mx-4 text-lg' />
                <table className="w-full text-sm text-left">
                    <thead className="text-l text-green-700 uppercase">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Tên danh mục
                            </th>
                            <th scope="col" className="px-12 py-3">
                                Hình ảnh
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentCategories?.map((category, index) => (
                            <tr className="bg-white" key={index}>
                                <td className="px-6 py-2">{category?.name}</td>
                                <td className="px-6 py-2">
                                    <Image src={category?.image} alt='category' width={150} height={150} className='rounded' />
                                </td>
                                <td className="px-6 py-2">
                                    <div>
                                        <Link
                                            href={`/admin/danh-muc/${category._id}`}
                                            className="px-2 py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                                        >
                                            <Pencil />
                                        </Link>
                                        <a className="px-2 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer">
                                            <DeleteCategory id={category._id} publicId={extractPublicId(category.image)} onDeleteSuccess={handleDeleteSuccess} />
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="my-6">
                <Pagination
                    currentPage={currentPage}
                    roomsPerPage={roomsPerPage}
                    totalRooms={categories.length}
                    paginate={paginate}
                />
            </div>
        </div>
    )
}
