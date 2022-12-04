import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    emailError: false,
    passwordError: false,
    confirmPasswordError: false,
    email: '',
    password: '',
    nickName: '',
    firstName: '',
    lastName: '',
};

const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers: {
        writeEmail: (state, action) => {
            const reg = /@/;
            return {
                ...state,
                email: action.payload,
                emailError: action.payload.length > 0 && !reg.test(action.payload),
            }
        },
        writePassword: (state, action) => {
            return {
                ...state,
                password: action.payload,
                passwordError: action.payload.length > 0 && action.payload.length < 5,
            }
        },
        checkPassword: (state, action) => {
            return {
                ...state,
                confirmPasswordError: state.password !== action.payload,
            }
        },
        writeNickName: (state, action) => {
            return {
                ...state,
                nickName: action.payload,

            }
        },
        writeFirstName: (state, action) => {
            return {
                ...state,
                firstName: action.payload,
            }
        },
        writeLastName: (state, action) => {
            return {
                ...state,
                lastName: action.payload,
            }
        }
    }
});

export const dataReducer = dataSlice.reducer;
export const {writeEmail, writePassword, writeNickName, writeFirstName, writeLastName, checkPassword} = dataSlice.actions;
