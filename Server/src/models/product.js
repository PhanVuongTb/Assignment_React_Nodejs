import mongoose, {ObjectId} from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5
    },
    slug: {
        type: String,
        minLength: 5,
        lowercase: true,
        unique:  true,
        index: true
    },
    image : {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    detail : {
        type: String,
        required: true
    },
    category: {
        type: String,
        ref: "Category"
    }

}, { timestamps: true} )

export default mongoose.model('Product', productSchema);