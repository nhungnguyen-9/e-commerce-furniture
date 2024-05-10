import axios from "axios"

export const createNewOrder = async (orderData) => {
    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/order/create-order`, orderData)

        const data = await res.data
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getOrderById = async (orderId) => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/order/${orderId}`)
        return res
    } catch (error) {
        console.log(error)
    }
}

export const getAllOrdersByUserId = async () => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/order/get-all-orders`)
        return res.data
    } catch (error) {
        console.log('🚀 ~ getAllOrdersByUserId ~ error:', error)
    }
}