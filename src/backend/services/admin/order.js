import axios from 'axios'

export const getAllOrders = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/order`)
        return response.data
    } catch (error) {
        console.error("Error fetching orders:", error)
        throw error
    }
}

export const getOneOrder = async (id) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/order/${id}`)
        return response.data
    } catch (error) {
        console.error("Error fetching addresses:", error)
        throw error
    }
}

export const deleteOrder = async (id) => {
    try {
        const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/order/${id}`)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export const updateOrder = async (id, orderStatus) => {
    try {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/order/${id}`, orderStatus)
        return res.data
    } catch (error) {
        console.log('🚀 ~ updateOrder ~ error:', error)
    }
}
