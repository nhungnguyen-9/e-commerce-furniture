import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import User from "@/backend/models/User"
import { signJwtToken } from "@/backend/config/jwt"
import bcrypt from 'bcrypt'
import { connect } from "@/backend/config/mongodb"
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials, req) {
                await connect()

                const { email, password } = credentials

                const user = await User.findOne({ email })

                if (!user) {
                    throw new Error('Đăng nhập không hợp lệ!')
                }

                const comparePassword = await bcrypt.compare(password, user.password)

                if (!comparePassword) {
                    throw new Error('Đăng nhập không hợp lệ!')
                } else {
                    const { password, ...others } = user._doc

                    const accessToken = signJwtToken(others, { expiresIn: "6d" })

                    return {
                        ...others,
                        accessToken
                    }
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/login'
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({ user, account }) {
            if (account.provider === 'google') {
                try {
                    const { name, email } = user
                    await connect()
                    const ifUserExists = await User.findOne({ email })
                    if (ifUserExists) {
                        return user
                    }
                    const newUser = new User({
                        name: name,
                        email: email
                    })
                    const res = await newUser.save()
                    if (res.status === 200 || res.status === 201) {
                        console.log(res)
                        return user
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        },
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.accessToken
                token._id = user._id
            }

            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user._id = token._id
                session.user.accessToken = token.accessToken
            }

            return session
        }
    }
})

export { handler as GET, handler as POST }