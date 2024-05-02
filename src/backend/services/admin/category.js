import axios from 'axios'

export const createNewCategory = async (formData) => {
    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/category`, formData)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getAllCategories = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/category`)
        return response.data
    } catch (error) {
        console.error("Error fetching categories:", error)
        throw error
    }
}

export const getOneCategory = async (id) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/category/${id}`)
        console.log('🚀 ~ getOneCategory ~ response:', response)
        return response.data
    } catch (error) {
        console.error("Error fetching category:", error)
        throw error
    }
}

export const updateCategory = async (id, categoryData) => {
    try {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/category/${id}`, categoryData)
        return res.data
    } catch (error) {
        console.log('🚀 ~ updateCategory ~ error:', error)
    }
}

export const deleteCategory = async (id) => {
    try {
        const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/category/delete-category/${id}`)
        return res.data
    } catch (e) {
        console.log(e)
    }
}


