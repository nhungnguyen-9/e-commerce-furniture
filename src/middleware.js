import { withAuth } from 'next-auth/react'
import { NextResponse } from 'next/server'
import { getSession } from 'next-auth/react'

const protectedRoute = ['/tai-khoan/edit-account']

export default async function middleware(req) {
    const session = await getSession()
    if (session && protectedRoute.includes(req.nextUrl.pathname)) {
        const absoluteURL = new URL('/login', req.nextUrl.origin)
        return NextResponse.redirect(absoluteURL.toString())
    }
}

// export default withAuth({
//     // Authorize roles
//     async authorize({ req, res }) {
//         const session = await getSession({ req })
//         console.log('🚀 ~ middleware ~ session:', session)
//         if (!session) {
//             return res.status(401).json({ error: 'Unauthorized' })
//         }
//         return true
//     },
//     config: {
//         // Define the routes you want to protect
//         matcher: ['/tai-khoan/edit-account']
//     }
// })
