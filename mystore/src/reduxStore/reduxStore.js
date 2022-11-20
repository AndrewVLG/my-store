import {configureStore} from '@reduxjs/toolkit';
import { productsReducer } from './productsSlice';

const reduxStore = configureStore({
    reducer: {
        products: productsReducer,
        auth: {},
        cart: {},

    }
})

export default reduxStore;