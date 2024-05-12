import axios from "axios"

export const createNewProduct = async (formData) => {
    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/san-pham`, formData)
        const data = await res.data
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/san-pham`)
        return response.data
    } catch (error) {
        console.error("Error fetching categories:", error)
        throw error
    }
}

export const getOneProduct = async (id) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/san-pham/${id}`)
        return response.data
    } catch (error) {
        console.error("Error fetching category:", error)
        throw error
    }
}

export const updateProduct = async (id, productData) => {
    try {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/san-pham/${id}`, productData)
        return res.data
    } catch (error) {
        console.log('🚀 ~ updateCategory ~ error:', error)
    }
}

export const deleteProduct = async (id) => {
    try {
        const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/san-pham/${id}`)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

