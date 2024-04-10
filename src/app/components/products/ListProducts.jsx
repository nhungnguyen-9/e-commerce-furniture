import React, { useState, useEffect, Suspense } from 'react';
import FilterProducts from '@/app/components/products/FilterProducts';
import ProductCard from './productCard';
import { usePathname, useSearchParams } from 'next/navigation'
import { product } from '@/app/utils/product';

export default function ListProducts({ data }) {
    const searchParams = useSearchParams()

    const [filteredProducts, setFilteredProducts] = useState(data?.products);

    useEffect(() => {
        if (searchParams && searchParams.has('search'))
        {
            const searchValue = searchParams.get('search');
            searchProducts(searchValue);
        } else {
            // Nếu không có tham số tìm kiếm, hiển thị tất cả sản phẩm
            setFilteredProducts(data?.products || []);
          }
      }, [data, searchParams])

    const searchProducts = (search) => {
        if (data && data.products && data.products.length > 0) {
            const filtered = data.products.filter(product => 
                product.name.toLowerCase().includes(search.toLowerCase())
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

    return (
        <Suspense className='max-w-[1320px] mx-auto'>
            <FilterProducts onFilterChange={handleFilterChange} />

            <div className='grid grid-cols-4'>
                {filteredProducts?.map((product) => {
                    return <ProductCard key={product?.slug} product={product} />;
                })}
            </div>
        </Suspense>
    );
}
