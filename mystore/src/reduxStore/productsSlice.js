import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts', async (_, {rejectWithValue}) => {
    try {
        const res = await fetch('http://localhost:3030/products');
        if(!res.ok) {
            throw new Error('Server error')
        }
        const products = await res.json();
        return products;
    } catch(e) {
        return rejectWithValue(e.message);
    }

});
export const fetchProductsByCategory = createAsyncThunk('products/fetchProductsByCategory', async (param, {rejectWithValue}) => {

    try {
        const res = await fetch(`http://localhost:3030/products/${param}`)
        if(!res.ok) {
            throw new Error('Server error')
        }
        const products = await res.json();
        return products;
    } catch(e) {
        return rejectWithValue(e.message);
    }

})

const initialState = {
        items: [],
        loading: false,
        message: '',
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchAllProducts.pending]: (state) => {
            state.items = [];
            state.loading = true;
            state.message = 'Loading';
        },
        [fetchAllProducts.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.loading = false;
            state.message = '';
        },
        [fetchAllProducts.rejected]: (state, action) => {
            state.items = [];
            state.loading = false;
            state.message = action.payload;
        },
        [fetchProductsByCategory.pending]: (state) => {
            state.items = [];
            state.loading = true;
            state.message = 'Loading';
        },
        [fetchProductsByCategory.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.loading = false;
            state.message = '';
        },
        [fetchProductsByCategory.rejected]: (state, action) => {
            state.items = [];
            state.loading = false;
            state.message = action.payload;
        }
    }
})
export const productsReducer = productsSlice.reducer;
