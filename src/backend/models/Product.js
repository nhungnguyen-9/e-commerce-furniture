import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema({
    name: {
        type: String
    },
    comment: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    }
})

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        lowercase: true
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
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Category'
    }
},
    {
        timestamps: true
    }
)

export default mongoose.models.Product || mongoose.model('Product', productSchema)
