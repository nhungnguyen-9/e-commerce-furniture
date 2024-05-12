import { withAuth } from 'next-auth/react'

export default withAuth({
    // Authorize roles
    async authorize({ req, res }) {
        const session = await getSession({ req })
        console.log('🚀 ~ middleware ~ session:', session)
        if (!session) {
            return res.status(401).json({ error: 'Unauthorized' })
        }
        return true
    },
    config: {
        // Define the routes you want to protect
        matcher: ['/tai-khoan/edit-account']
    }
})