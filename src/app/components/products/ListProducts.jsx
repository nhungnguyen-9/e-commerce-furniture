import React, { useState, useEffect } from 'react';
import FilterProducts from '@/app/components/products/FilterProducts';
import ProductCard from './productCard';
import { useSearchParams } from 'next/navigation';
import Pagination from '../Pagination';

export default function ListProducts({ data }) {
    const searchParams = useSearchParams();

    const [filteredProducts, setFilteredProducts] = useState(data?.products);
    const [currentPage, setCurrentPage] = useState(1);
    const roomsPerPage = 48;

    useEffect(() => {
        if (searchParams && searchParams.has('search')) {
            const searchValue = searchParams.get('search');
            searchProducts(searchValue);
        } else {
            // If there's no search parameter, display all products
            setFilteredProducts(data?.products || []);
        }
    }, [data, searchParams]);

    const searchProducts = (search) => {
        if (data && data.products && data.products.length > 0) {
            // Tạo một biểu thức regex từ chuỗi tìm kiếm
            // 'i' là cờ không phân biệt chữ hoa chữ thường
            const regex = new RegExp(search, 'i');
    
            const filtered = data.products.filter(product =>
                // Sử dụng phương thức test của regex để kiểm tra tên sản phẩm
                regex.test(product.name)
            );
            setFilteredProducts(filtered);
        }
    };

    const handleFilterChange = (filterType) => {
        let filtered = filteredProducts.slice();

        if (filterType.value === 'low_to_high') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (filterType.value === 'high_to_low') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (filterType.value === 'newest') {
            filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        }

        setFilteredProducts(filtered);
    };

    // Get current products
    const indexOfLastRoom = currentPage * roomsPerPage;
    const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
    const currentRooms = filteredProducts?.slice(indexOfFirstRoom, indexOfLastRoom);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='max-w-[1320px] mx-auto'>
            <FilterProducts onFilterChange={handleFilterChange} />

            <div className='grid grid-cols-4'>
                {currentRooms?.map((product) => (
                    <ProductCard key={product?.slug} product={product} />
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                roomsPerPage={roomsPerPage}
                totalRooms={filteredProducts?.length}
                paginate={paginate}
            />
        </div>
    );
}
