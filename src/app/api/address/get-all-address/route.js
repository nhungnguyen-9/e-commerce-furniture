import { connect } from '@/backend/config/mongodb'
import { NextResponse } from "next/server"
import Address from '@/backend/models/Address'
import { auth } from '@/utils/auth'

export const dynamic = "force-dynamic"

connect()

export async function GET(req) {
    try {
        const session = await auth()
        // console.log('🚀 ~ GET ~ session:', session)

        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }
        const getAllAddresses = await Address.find({ userID: session.user.id })

        if (getAllAddresses) {
            return NextResponse.json({
                success: true,
                data: getAllAddresses,
            })
        } else {
            return NextResponse.json({
                success: false,
                message: "Có vấn đề xảy ra! Vui lòng thử lại",
            })
        }
    } catch (error) {
        console.error('Error fetching user addresses:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}