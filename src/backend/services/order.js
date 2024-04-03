import axios from "axios"

export const createNewOrder = async (formData) => {
    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/order/create-order`, formData)

        console.log('🚀 ~ createNewOrder ~ res:', res)
        const data = await res.data
        console.log('🚀 ~ createNewOrder ~ data:', data)
        return data
    } catch (error) {
        console.log(error)
    }
}