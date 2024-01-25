/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nhaxinh.com',
                port: '',
                pathname: '/wp-content/**',
            },
        ],
    }
}

module.exports = nextConfig
