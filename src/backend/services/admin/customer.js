import axios from 'axios'

export const getAllCustomers = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/customer`)
        return response.data
    } catch (error) {
        console.error("Error fetching orders:", error)
        throw error
    }
}

export const getOneCustomer = async (id) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/customer/${id}`)
        return response.data
    } catch (error) {
        console.error("Error fetching addresses:", error)
        throw error
    }
}

export const updateCustomer = async (id, { userRole, userState }) => {
    try {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/customer/${id}`, { userRole, userState })
        return res.data
    } catch (error) {
        console.log('🚀 ~ updateOrder ~ error:', error)
    }
}