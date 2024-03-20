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
            async authorize(credentials) {
                const { email, password } = credentials

                await connect()

                const user = await User.findOne({ email })

                if (!user) {
                    throw new Error('Đăng nhập không hợp lệ!')
                }

                const comparePassword = await bcrypt.compare(password, user.password)

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
                        return user
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            return user
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