import axios from 'axios'

export const createNewRoom = async (formData) => {
    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/room`, formData)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getAllRooms = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/room`)
        return response.data
    } catch (error) {
        console.error("Error fetching addresses:", error)
        throw error
    }
}

export const getOneRoom = async (slug) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/room/${slug}`)
        return response.data
    } catch (error) {
        console.error("Error fetching addresses:", error)
        throw error
    }
}

export const deleteRoom = async (id) => {
    try {
        const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/room/delete-room/${id}`)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export const updateRoom = async (slug, roomData) => {
    try {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/room/${slug}`, roomData)
        return res.data
    } catch (error) {
        console.log('🚀 ~ updateRoom ~ error:', error)
    }
}

