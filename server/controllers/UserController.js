import User from '../models/UserModel.js'
import bcrypt from 'bcryptjs'
import generateToken from '../utils/generateToken.js'

export const getAllUser = async (req, res, next) => {
    let users
    try {
        users = await User.find()
    } catch (err) {
        console.log(err)
    }
    if (!users) {
        return res.status(404).json({ message: 'No Users Found' })
    }
    return res.status(200).json({ users })
}

export const signup = async (req, res, next) => {
    const { name, email, password } = req.body

    let existingUser
    try {
        existingUser = await User.findOne({ email })
    } catch (err) {
        return console.log(err)
    }
    if (existingUser) {
        return res.status(400).json({ message: 'Tài khoản đã tồn tại! Vui lòng đăng nhập' })
    }

    const hashedPassword = bcrypt.hashSync(password)

    const user = new User({
        name,
        email,
        password: hashedPassword
    })

    try {
        await user.save()
    } catch (err) {
        return console.log(err)
    }
    return res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
    })
}

export const login = async (req, res, next) => {
    const { email, password } = req.body
    let existingUser
    try {
        existingUser = await User.findOne({ email })
    } catch (error) {
        return console.log(error)
    }
    if (!existingUser) {
        return res.status(404).json({
            message: 'Không tìm thấy tên tài khoản!'
        })
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password)
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: 'Thông tin đăng nhập chưa đúng' })
    }
    return res.status(200).json({
        _id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
        token: generateToken(existingUser._id),
        createdAt: existingUser.createdAt
    })
}