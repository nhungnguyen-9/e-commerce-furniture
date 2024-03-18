import User from "../models/User"

export const getUsers = async (req, res) => {
    let users
    try {
        users = await User.find()
    } catch (err) {
        console.log(err)
    }
    if (!users) {
        return res.status(404).json({ message: 'Không tìm thấy user!' })
    }
    return res.status(200).json({ users })
}