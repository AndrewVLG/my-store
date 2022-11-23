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

const initialState = {
        status: false,
        message: null,
        nickName: '',
        firstName: '',
        lastName: '',

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
        },
        [fetchMakeAuth.fulfilled]: (state, action) => {
            state.status = true;
            state.message = null;
            state.nickName = action.payload.nickName;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
        [fetchMakeAuth.rejected]: (state, action) => {
            state.status = false;
            state.message = action.payload;
            state.nickName = '';
            state.firstName = '';
            state.lastName = '';
        },
        [fetchMakeRegistration.pending]: (state) => {
            state.status = false;
            state.message = null;
            state.nickName = '';
            state.firstName = '';
            state.lastName = '';
        },
        [fetchMakeRegistration.fulfilled]: (state, action) => {
            state.status = true;
            state.message = null;
            state.nickName = action.payload.nickName;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
        [fetchMakeRegistration.rejected]: (state, action) => {
            state.status = false;
            state.message = action.payload;
            state.nickName = '';
            state.firstName = '';
            state.lastName = '';
        },
        [fetchAuthMe.pending]: (state) => {
            state.status = false;
            state.message = null;
            state.nickName = '';
            state.firstName = '';
            state.lastName = '';
        },
        [fetchAuthMe.fulfilled]: (state, action) => {
            state.status = true;
            state.message = null;
            state.nickName = action.payload.nickName;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
        [fetchAuthMe.rejected]: (state, action) => {
            state.status = false;
            state.message = action.payload;
            state.nickName = '';
            state.firstName = '';
            state.lastName = '';
        },
    },
});

 export const authReducer = authSlice.reducer;
 export const {clearError} = authSlice.actions;