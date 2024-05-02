import axios from 'axios'
import sha1 from 'sha1'

const apiSecret = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET

const generateSignature = async (publicId) => {
    const timestamp = Math.floor(Date.now() / 1000)
    return sha1(`public_id=${publicId}&timestamp=${timestamp}${apiSecret}`)
}

export const deleteImage = async (publicId) => {
    try {
        const timestamp = Math.floor(Date.now() / 1000)
        const signature = await generateSignature(publicId)

        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/destroy`,
            { public_id: publicId, timestamp, signature },
            {
                params: {
                    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY
                }
            }
        );

        return response.data
    } catch (error) {
        console.error('Error removing image from Cloudinary:', error)
        throw error
    }
}
