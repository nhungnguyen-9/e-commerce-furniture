import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    orderItems: [
        {
            product:
            {
                type: mongoose.Schema.Types.ObjectId,
                require: true,
                ref: 'Product'
            },
        }
    ],
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Address'
    },
    paymentMethod: {
        type: String,
        require: true
    },
    totalPrice: {
        type: Number,
        require: true,
        default: 0.0
    },
    orderStatus: {
        type: String,
        default: "Đang xử lý"
    },
    createAt: {
        type: Date,
        default: Date.now
    },
},
    {
        timestamps: true
    }
)

export default mongoose.models.Order || mongoose.model('Order', orderSchema)