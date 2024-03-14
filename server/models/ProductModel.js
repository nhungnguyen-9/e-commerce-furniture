import mongoose from "mongoose"

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    comment: {
        type: String,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    }
})

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
        default: 0
    },
    discount: {
        type: Number,
        require: null
    },
    inStock: {
        type: Boolean,
        require: true
    },
    material: {
        type: String,
        require: true
    },
    size: {
        type: String,
        require: true
    },
    review: [reviewSchema],
    image: [
        {
            public_id: {
                type: String
            },
            url: {
                type: String
            }
        }
    ],
    room: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Room'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Category'
    }
},
    {
        timestamps: true
    }
)

export default mongoose.model('Product', productSchema)