import { authOptions } from "@/app/api/auth/[...nextauth]/route.js"
import { getServerSession } from "next-auth"

export const auth = () => getServerSession(authOptions)