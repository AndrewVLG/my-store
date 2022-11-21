import {configureStore} from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { productsReducer } from './productsSlice';

const reduxStore = configureStore({
    reducer: {
        products: productsReducer,
        auth: authReducer,
        cart: {},

    }
})

export default reduxStore;