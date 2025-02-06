/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nhaxinh.com',
                port: '',
                pathname: '/wp-content/**',
            },
        ],
        domains: ['res.cloudinary.com']
    },
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
    }
}

module.exports = nextConfig
