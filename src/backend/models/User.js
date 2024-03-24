import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minLength: 6
    },
    avatar: {
        public_id: String,
        url: String,
    },
    role: {
        type: String,
        default: 'user'
    },
    wishlist: {
        type: Array,
        default: []
    },
    cart: {
        type: Array,
        default: []
    },
    products: {
        type: Array,
        default: []
    },
    orders: {
        type: Array,
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
    {
        timestamps: true
    }
)

export default mongoose.models.User || mongoose.model('User', userSchema)
