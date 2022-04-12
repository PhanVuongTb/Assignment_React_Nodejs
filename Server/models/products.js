import mongoose, {ObjectId} from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
    },
    description:{type:String, required: true},
    detail:{type:String,},
    category:{
        type:ObjectId,
        ref:'Category'
    }
},{timestamps:true})

export default mongoose.model('Product',productSchema)