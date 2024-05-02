import { authOptions } from "@/app/api/auth/[...nextauth]/route.js"
import { getServerSession } from "next-auth"
import { withAuth } from "next-auth/middleware"

const authorizeAdmin = () => {
    return (req, res, next) => {
        if (req.user && req.user.role !== 'admin') {
            return next(
                new ErrorHandler(
                    `Only admin users are allowed to access this resource.`
                )
            )
        }

        next()
    }
}

export const auth = () => {
    const session = getServerSession(authOptions)

    // Thêm middleware kiểm tra quyền admin vào sau khi lấy session
    return (req, res) => {
        session(req, res, (err) => {
            if (err) {
                // Xử lý lỗi khi không thể lấy session
                throw err
            }
            // Kiểm tra quyền admin
            authorizeAdmin()(req, res, () => {
                // Nếu là admin, tiếp tục xử lý
                next()
            })
        })
    }
}

export const config = {
    matcher: ["/tai-khoan/edit-account", "/admin/:path*"]
}