import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import utilits from "./utilits/utilits.js";
import regValidator from "./utilits/validator.js";

const {getAll, getProductsbyCategory, regUser,chekAuth, authMe, authorization, addToCart, removeFromCart} = utilits();
const app = express();
app.use(cors());
app.use(express.json())
await mongoose.connect(('mongodb+srv://Andrew:Qwerty123@clustertest.t61mtcl.mongodb.net/store?retryWrites=true&w=majority'))
    .then(() => console.log('DB OK'))
    .catch(() => console.log('DB Error'))

app.get('/products', getAll);

app.get('/products/:category', getProductsbyCategory);

app.post('/registration', regValidator, regUser);

app.get('/authme', chekAuth, authMe);

app.post('/authorization', authorization);

app.patch('/cart/add', chekAuth, addToCart);

app.patch('/cart/remove', chekAuth, removeFromCart);




app.listen(3030, err => {
    if(err) {
        return console.log('Error')
    } else {
        return console.log('Server Ok!')
    }
})