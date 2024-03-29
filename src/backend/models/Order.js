import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    orderItems: [
        {
            name: { type: String, require: true },
            qty: { type: Number, require: true },
            image: { type: String, require: true },
            product:
            {
                type: mongoose.Schema.Types.ObjectId,
                require: true,
                ref: 'Product'
            },
        }
    ],
    shippingAddress: {
        address: { type: String, require: true },
        city: { type: String, require: true },
    },
    paymentMethod: {
        type: String,
        require: true,
        default: 'Paypal'
    },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String }
    },
    shippingPrice: {
        type: Number,
        require: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        require: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        require: true,
        default: false
    },
    paidAt: {
        type: Date
    },
    isDelivered: {
        type: Boolean,
        require: true,
        default: false
    },
    deliveredAt: {
        type: Date
    }
},
    {
        timestamps: true
    }
)

export default mongoose.models.Order || mongoose.model('Order', orderSchema)