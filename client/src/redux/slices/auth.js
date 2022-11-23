import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../http/axios";

export const registration = createAsyncThunk('auth/registration', async (params) => {
    const {data} = await axios.post('/user/registration', params)
    localStorage.setItem('token', data.accessToken)
    localStorage.setItem('user', data.user.role)
    return data
})

export const login = createAsyncThunk('auth/login', async (params) => {
    const {data} = await axios.post('/user/login', params)
    data.isAuth = true
    localStorage.setItem('token', data.accessToken)
    localStorage.setItem('user', data.user.role)
    return data
})

export const logout = createAsyncThunk('auth/logout', async () => {
    const response = await axios.post('/user/logout')
    localStorage.removeItem('token')
    localStorage.removeItem('user')
})

export const refresh = createAsyncThunk('auth/refresh', async () => {
    const response = await axios.get('/user/refresh')
    console.log(response)
    localStorage.setItem('token', response.data.accessToken)
    return response.data
})

export const google = createAsyncThunk('auth/google', async () => {
    const response = await axios.get('/auth/google')
    console.log(response)
    localStorage.setItem('token', response.data.accessToken)
    return response
})

const initialState = {
    data: null,
    status: 'loading',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        // registration
        [registration.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [registration.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [registration.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },
        // login
        [login.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [login.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [login.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },
        // logout
        [logout.pending]: (state, action) => {
            state.status = 'loading'
            state.data = action.payload
        },
        [logout.fulfilled]: (state) => {
            state.status = 'loaded'
        },
        [logout.rejected]: (state, action) => {
            state.status = 'error'
            state.data = action.payload
        },
        // refresh
        [refresh.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [refresh.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [refresh.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },
    }
})

export const selectIsAuth = (state) => Boolean(state.auth.data)
export const authReducer = authSlice.reducer

