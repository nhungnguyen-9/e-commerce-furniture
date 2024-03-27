import { connect } from '@/backend/config/mongodb'
import { NextResponse } from "next/server"
import Address from '@/backend/models/Address'
import { getServerSession } from 'next-auth'
import User from '@/backend/models/User'
import { isAuthUser } from '@/backend/middlewares/auth'

connect()

export async function GET(req, res) {
    try {
        const { searchParams } = new URL(req.url)
        const id = searchParams.get('id')

        if (!id) {
            return NextResponse.json({
                success: false,
                message: 'Address ID is required'
            })
        }
        const isAuthUser = await isAuthUser(req)

        if (isAuthUser) {
            const deletedAddress = await Address.findByIdAndDelete(id)
            if (deletedAddress) {
                return NextResponse.json({
                    success: true,
                    message: 'Address is deleted successfully'
                })
            }
        } else {
            return NextResponse.json({
                success: false,
                message: 'Failed to delete address'
            })
        }
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}