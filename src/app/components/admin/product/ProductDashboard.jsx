'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Pencil, Plus } from 'lucide-react'
import Image from 'next/image'
import Pagination from '../../Pagination'
import { useRouter } from 'next/navigation'
import { getAllProducts } from '@/backend/services/admin/product'
import DeleteProduct from './DeleteProduct'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'

export default function ProductDashboard() {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [roomsPerPage] = useState(4)
    const [searchQuery, setSearchQuery] = useState('')
    const router = useRouter()

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const productData = await getAllProducts();
            setProducts(productData);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleDeleteSuccess = () => {
        fetchProducts()
        router.push('/admin/san-pham')
    };

    const extractPublicId = (image) => {
        if (!Array.isArray(image) || image.length === 0 || typeof image[0].url !== 'string') return ''; // Return an empty string if image is not an array or has no valid url
        const publicId = image[0].url.split('/').slice(-2).join('/').split('.')[0]
        return publicId
    }

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function escapeAccents(string) {
        return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    }

    const filterProduct = products?.filter(product => {
        const regex = new RegExp(escapeRegExp(searchQuery), 'gi')
        return escapeAccents(product.name).match(regex)
    })

    // Get current rooms
    const indexOfLastRoom = currentPage * roomsPerPage
    const indexOfFirstRoom = indexOfLastRoom - roomsPerPage
    const currentProducts = filterProduct.slice(indexOfFirstRoom, indexOfLastRoom)
    console.log('🚀 ~ ProductDashboard ~ currentProducts:', currentProducts)

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber)

    const handleSearchChange = (event) => {
        const query = event.target.value
        setSearchQuery(escapeAccents(query))
        setCurrentPage(1)
    }

    return (
        <div className='relative overflow-x-auto shadow-md m-10 sm:rounded-lg'>
            <div className="">
                <div className='flex justify-between items-center mx-2'>
                    <h1 className="text-2xl my-5 ml-4 font-bold">
                        Sản phẩm {''} ({filterProduct?.length})
                    </h1>
                    <TextField
                        id='outlined-basic'
                        label='Tìm sản phẩm'
                        variant='outlined'
                        size='small'
                        value={searchQuery}
                        onChange={handleSearchChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <SearchIcon style={{ cursor: 'pointer' }} onClick={fetchProducts} />
                                </InputAdornment>
                            ),
                            sx: { borderRadius: 20, width: '273px' }
                        }}
                    />
                    <Link href='/admin/san-pham/new'>
                        <button className='flex items-center bg-blue-500 gap-2 mr-4 rounded font-bold text-white p-3 w-full hover:bg-blue-700'>
                            <Plus />
                            Tạo sản phẩm
                        </button>
                    </Link>
                </div>

                <hr className='mx-4 text-lg' />
                <table className="w-full text-sm text-left">
                    <thead className="text-l text-green-700 uppercase">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Tên sản phẩm
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Hình ảnh
                            </th>
                            <th scope="col" className="px-12 py-3">
                                Giá
                            </th>
                            <th scope="col" className="px-12 py-3">
                                Trạng thái
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentProducts?.map((product, index) => (
                            <tr className="bg-white" key={index}>
                                <td className="px-6 py-2">{product?.name}</td>
                                <td className="px-6 py-2">
                                    <Image src={product?.image[0]?.url} alt='product' width={150} height={150} className='rounded' />
                                </td>
                                <td className="px-6 py-2">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(product?.price * (1 - product?.discount / 100))).replace(/\./g, ',')}</td>
                                <td className="px-6 py-2">{product?.inStock ? 'Còn hàng' : 'Hết hàng'}</td>
                                <td className="px-6 py-2">
                                    <div>
                                        <Link
                                            href={`/admin/san-pham/${product._id}`}
                                            className="px-2 py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                                        >
                                            <Pencil />
                                        </Link>
                                        <a className="px-2 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer">
                                            <DeleteProduct id={product._id} publicId={extractPublicId(product.image)} onDeleteSuccess={handleDeleteSuccess} />
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
                    totalRooms={products.length}
                    paginate={paginate}
                />
            </div>
        </div>
    )
}
