import mongoose from "mongoose"

const roomSchema = new mongoose.Schema({
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
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Category'
    }]
},
    {
        timestamp: true
    }
)

export default mongoose.models.Room || mongoose.model('Room', roomSchema)