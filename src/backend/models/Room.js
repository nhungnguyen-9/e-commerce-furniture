import mongoose from "mongoose"

const roomSchema = new mongoose.Schema({
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
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Category'
    }],
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Product'
    }]
},
    {
        timestamp: true
    }
)

export default mongoose.models.Room || mongoose.model('Room', roomSchema)