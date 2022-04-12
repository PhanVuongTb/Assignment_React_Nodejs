import mongoose, { ObjectId } from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
    },
    description: {
        type: String,
    },
    detail: {
        type: String,
    },
    category: {
        type: String,
        // ref: 'Category'
    }
})

export default mongoose.model('Product', productSchema)