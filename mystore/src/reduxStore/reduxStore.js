import {configureStore} from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { cartReducer } from './cartSlice';
import { productsReducer } from './productsSlice';

const reduxStore = configureStore({
    reducer: {
        products: productsReducer,
        auth: authReducer,
        cart: cartReducer,

    }
})

export default reduxStore;