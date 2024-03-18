import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
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

export default mongoose.models.Category || mongoose.model('Category', categorySchema)