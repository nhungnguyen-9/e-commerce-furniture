import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import User from "@/backend/models/User"
import bcrypt from 'bcrypt'
import { connect } from "@/backend/config/mongodb"
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {},
            async authorize(credentials, req) {
                await connect()

                const user = await User.findOne({ email: credentials.email })

                if (!user) {
                    throw new Error('Đăng nhập không hợp lệ!')
                }

                const comparePassword = await bcrypt.compare(credentials.password, user.password)

                if (!comparePassword) {
                    throw new Error('Đăng nhập không hợp lệ!')
                }

                return user
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
        signIn: '/'
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({ profile, account }) {
            if (account.provider === 'google') {
                try {
                    await connect()
                    let user = await User.findOne({ email: profile.email })
                    if (!user) {
                        user = await User.create({
                            email: profile.email,
                            name: profile.name,
                            avatar: profile.image,
                            wishlist: [],
                            cart: [],
                            orders: [],
                            products: []
                        })
                    }
                    return user

                } catch (error) {
                    console.log(error)
                }
            }
            return true
        },
        async jwt({ token, user }) {
            if (user) {
                token.email = user.email
                token.name = user.name
            }

            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.email = token.email
                session.user.name = token.name
            }

            return session
        }
    }
})

export { handler as GET, handler as POST }