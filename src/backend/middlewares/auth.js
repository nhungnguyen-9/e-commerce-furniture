import { getSession } from "next-auth/react"
import ErrorHandler from "../utils/errorHandler"

const isAuthUser = async (req, res, next) => {
    const session = await getSession({ req })

    if (!session) {
        throw new ErrorHandler("Login first to access this route", 401)
    }

    req.user = session.user

    next()
}

export { isAuthUser }