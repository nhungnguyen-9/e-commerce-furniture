'use server'
import axios from "axios"
// import Cookies from 'js-cookie'
import { cookies } from 'next/headers'

export const fetchAllAddress = async () => {
    try {
        const nextCookies = cookies()
        const nextAuthSessionToken = nextCookies.get("next-auth.session-token")
        console.log('🚀 ~ fetchAllAddress ~ nextAuthSessionToken:', nextAuthSessionToken)
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/address/get-all-address`, {
            // headers: {
            //     Cookie: `next-auth.session-token=${nextAuthSessionToken}`,
            // },
        }
        );

        return response.data.addresses;
    } catch (error) {
        console.error("Error fetching addresses:", error);
        throw error;
    }
}