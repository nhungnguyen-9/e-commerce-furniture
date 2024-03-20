import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        lowercase: true
    },
    image: {
        type: String,
        require: true
    },
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Product'
    }],
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Room'
    },
},
    {
        timestamp: true
    }
)

export default mongoose.models.Category || mongoose.model('Category', categorySchema)