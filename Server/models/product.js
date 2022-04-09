import mongoose, { Schema, ObjectId } from "mongoose";
const productSchema = new Schema({
    name: {
        type: String,
        minLength: 5,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        // type: ObjectId,
        // ref: "Category"
        type: String,
        required: true
    },
    image: {
        type: String,

    },
    detail: {
        type: String,

    }
}, { timestamps: true });
export default mongoose.model('Product', productSchema);