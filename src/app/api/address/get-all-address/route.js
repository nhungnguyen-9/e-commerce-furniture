import { connect } from '@/backend/config/mongodb'
import { NextResponse } from "next/server"
import Address from '@/backend/models/Address'
import { getServerSession } from 'next-auth'
import { isAuthUser } from '@/backend/middlewares/auth'

connect()

export async function GET(req, res) {
    try {
        const authUser = await isAuthUser(req)
        if (authUser) {
            const addresses = await Address.find()
            return NextResponse.json({ addresses })
        } else {
            return NextResponse.json({ error: error.message }, { status: 401 })
        }
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

// export async function GET(req) {
//     try {
//         const session = await getServerSession(req)

//         if (!session) {
//             return NextResponse.json({
//                 message: "Bạn phải đăng nhập để thêm địa chỉ!",
//                 success: false,
//             })
//         }

//         const userId = session.user.id
//         // const user = await User.findOne({ email })

//         if (userId) {
//             const getAllAddresses = await Address.find({ userID: userId })

//             if (getAllAddresses) {
//                 return NextResponse.json({
//                     success: true,
//                     data: getAllAddresses,
//                 })
//             } else {
//                 return NextResponse.json({
//                     success: false,
//                     message: "failed to get addresses ! Please try again",
//                 })
//             }
//         }

//     } catch (error) {
//         console.error('Error finding address by userId', error)
//         return NextResponse.json({ error: error.message }, { status: 500 })
//     }
// }