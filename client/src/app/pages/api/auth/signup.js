import axios from 'axios'

export const signup = async ({ name, email, password }) => {
    try {
        const response = await axios.post('http://localhost:8017/api/auth/signup', { name, email, password })
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message || 'Có lỗi xảy ra trong quá trình gửi yêu cầu đăng ký')
    }
};