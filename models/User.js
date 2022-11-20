import { Schema, model } from "mongoose";

const schema = new Schema({
    email: {type: String, require: true},
    password: {type: String, required: true},
    nickName: {type: String, required: true, unique: true},
    firstName: {type: String},
    lastName: {type: String},
    cart: {type: Array},
})

export default model('User', schema);