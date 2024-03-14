import axios from 'axios'

export const login = async ({ email, password }) => {
    try {
        const response = await axios.post('http://localhost:8017/api/auth/login', { email, password })
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || 'Có lỗi xảy ra trong quá trình gửi yêu cầu đăng nhập!')
    }
};