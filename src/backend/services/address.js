import axios from "axios"

export const fetchAllAddress = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/address/get-all-address`)
        // console.log('🚀 ~ fetchAllAddress ~ response.data:', response.data)
        return response.data
    } catch (error) {
        console.error("Error fetching addresses:", error)
        throw error
    }
}

export const updateAddress = async (addressData) => {
    try {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/address/update-address`, addressData)
        // console.log('🚀 ~ updateAddress ~ res.data:', res.data)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export const deleteAddress = async (id) => {
    try {
        const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/address/delete-address?id=${id}`)
        return res.data
    } catch (e) {
        console.log(e)
    }
}