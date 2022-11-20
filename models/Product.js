import { model, Schema, Types } from "mongoose";

const schema = new Schema({
    category: {type: String, required: true},
    description: {type: String, required: true},
    imageUrl: {type: String, required: true},
    price: {type: Number, required: true},
    rating: {type: Number, required:true},
    title: {type: String, required: true, unique: true}

});

export default model('Product', schema);