import { withAuth } from 'next-auth/middleware'

export default withAuth(async function middleware(req) {
    // authorize roles
})

export const config = {
    matcher: ['/tai-khoan/edit-account']
}

// import { NextResponse } from "next/dist/server/web/spec-extension/response"

// export default function middleware(req){
//     let verify = req.cookies.get('loggedIn')

// }