import mongoose from "mongoose"

const connectDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL, {})
        console.log('MongoDB connected')
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit
    }
}

export default connectDatabase