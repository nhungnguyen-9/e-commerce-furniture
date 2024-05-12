'use client'
import React, { useEffect, useState } from 'react'
import CategoryForm from '@/app/components/admin/danh-muc/CategoryForm'
import { getOneCategory } from '@/backend/services/admin/category'

export default function CategoryDetailPage({ params }) {
    const { id } = params
    const [categoryData, setCategoryData] = useState(null)

    useEffect(() => {
        const fetchOneCategory = async () => {
            try {
                const data = await getOneCategory(id)
                setCategoryData(data.category)
            } catch (error) {
                console.log('🚀 ~ fetchOneCategory ~ error:', error)
            }
        }

        if (id) {
            fetchOneCategory()
        }
    }, [id])

    return (
        <div>
            <CategoryForm categoryData={categoryData} />
        </div>
    )
}
