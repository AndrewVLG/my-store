import {configureStore} from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { dataReducer } from './dataSlice';

import { productsReducer } from './productsSlice';

const reduxStore = configureStore({
    reducer: {
        products: productsReducer,
        auth: authReducer,
        data: dataReducer,

    }
})

export default reduxStore;