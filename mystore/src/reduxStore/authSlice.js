import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMakeAuth = createAsyncThunk('auth/fetchMakeAuth', async (userData, {rejectWithValue}) => {
    try {
        const res = await fetch('http://localhost:3030/authorization', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        const data = await res.json();
        if(!res.ok) {
            throw new Error(data.msg);
        }
        localStorage.setItem('token', data.token);
        return data;
    } catch(e) {
        return rejectWithValue(e.message);
    }
});

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async (token, {rejectWithValue}) => {
    try {
        const res = await fetch('http://localhost:3030/authme', {
            headers: 
            {
                authorization: localStorage.getItem('token')
            }
        });
        const data = await res.json();
        if(!res.ok) {
            throw new Error(data.msg);
        }
        return data;
    } catch(e) {
        rejectWithValue(e.message);
    }
})

export const fetchMakeRegistration = createAsyncThunk('auth/fetchMakeRegistration', async (userData, {rejectWithValue}) => {
    try {
        const res = await fetch('http://localhost:3030/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        const data = await res.json();

        if(!res.ok) {
            throw new Error(data.msg);
        }
        localStorage.setItem('token', data.token);
        console.log(data)
        return data;
    } catch(e) {
        console.log(e.message)
        return rejectWithValue(e.message);
    }
});

export const fetchAddToCart = createAsyncThunk('auth/fetchAddToCart', async (productId, {rejectWithValue}) => {
    try {
        const res = await fetch('http://localhost:3030/cart/add', {
            method: 'PATCH',
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
        return data;
    } catch(e) {
        return rejectWithValue(e.message);
    }
});

export const fetchRemoveFromCart = createAsyncThunk('auth/fetcRemoveFromCart', async (productId, {rejectWithValue}) => {
    try {
        const res = await fetch('http://localhost:3030/cart/remove', {
            method: 'PATCH',
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
        return data;
    } catch(e) {
        return rejectWithValue({msg: e.message});
    }
});



const initialState = {
        status: false,
        message: null,
        nickName: '',
        firstName: '',
        lastName: '',
        cart: [],

};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearError: state => {
            return {...state, message: null}
        }
    },
    extraReducers:{
        [fetchMakeAuth.pending]: (state) => {
            state.status = false;
            state.message = null;
            state.nickName = '';
            state.firstName = '';
            state.lastName = '';
            state.cart = [];
        },
        [fetchMakeAuth.fulfilled]: (state, action) => {
            state.status = true;
            state.message = null;
            state.nickName = action.payload.nickName;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.cart = action.payload.cart;
        },
        [fetchMakeAuth.rejected]: (state, action) => {
            state.status = false;
            state.message = action.payload;
            state.nickName = '';
            state.firstName = '';
            state.lastName = '';
            state.cart = [];
        },
        [fetchMakeRegistration.pending]: (state) => {
            state.status = false;
            state.message = null;
            state.nickName = '';
            state.firstName = '';
            state.lastName = '';
            state.cart = [];
        },
        [fetchMakeRegistration.fulfilled]: (state, action) => {
            state.status = true;
            state.message = null;
            state.nickName = action.payload.nickName;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.cart = [];
        },
        [fetchMakeRegistration.rejected]: (state, action) => {
            state.status = false;
            state.message = action.payload;
            state.nickName = '';
            state.firstName = '';
            state.lastName = '';
            state.cart = [];
        },
        [fetchAuthMe.pending]: (state) => {
            state.status = false;
            state.message = null;
            state.nickName = '';
            state.firstName = '';
            state.lastName = '';
            state.cart = [];
        },
        [fetchAuthMe.fulfilled]: (state, action) => {
            state.status = true;
            state.message = null;
            state.nickName = action.payload.nickName;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.cart = action.payload.cart;
        },
        [fetchAuthMe.rejected]: (state, action) => {
            state.status = false;
            state.message = action.payload;
            state.nickName = '';
            state.firstName = '';
            state.lastName = '';
            state.cart = [];
        },
        [fetchAddToCart.fulfilled]: (state, action) => {
            state.status = true;
            state.message = action.payload.msg;
            state.nickName = action.payload.nickName;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.cart = action.payload.cart;
        },
        [fetchAddToCart.rejected]: (state, action) => {
            state.message = action.payload;
        },
        [fetchRemoveFromCart.fulfilled]: (state, action) => {
            state.cart = action.payload.cart;
        },
        [fetchRemoveFromCart.rejected]: (state, action) => {
            state.message = action.payload.msg;
        }

    },
});

 export const authReducer = authSlice.reducer;
 export const {clearError} = authSlice.actions;