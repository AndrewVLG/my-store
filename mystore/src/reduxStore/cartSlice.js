import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAddToCart = createAsyncThunk('cart/fetchAddToCart', async (productId, {rejectWithValue}) => {
    try {
        const res = await fetch('http://localhost:3030/cart/add', {
            method: 'POST',
            headers: {
                authorization: localStorage.getItem('token'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id: productId})
        });
        const data = await res.json();
        if(!res.ok) {
            throw new Error(data.msg)
        }

        return data.msg;
    } catch(e) {
        return rejectWithValue(e.message);
    }
})

const initialState = {
    loading: false,
    cart: [],
    message: null,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cleareMessage: (state) => {
            state.loading = false;
            state.cart = [];
            state.message = null;
        }
    },
    extraReducers: {
        [fetchAddToCart.pending]: (state) => {
            state.loading = true;
            state.cart = [];
            state.message = null;
        },
        [fetchAddToCart.fulfilled]: (state, action) => {
            state.loading = false;
            state.cart = [];
            state.message = action.payload;
        },
        [fetchAddToCart.rejected]: (state, action) => {
            state.loading = false;
            state.cart = [];
            state.message = action.payload;
        }
    },

});

export const cartReducer = cartSlice.reducer;
export const {cleareMessage} = cartSlice.actions;
