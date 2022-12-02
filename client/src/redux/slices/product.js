import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../http/axios";

export const getProducts = createAsyncThunk('product/getProducts', async (params) => {
    const {data} = await axios.get('/user/registration', params)
    localStorage.setItem('token', data.accessToken)
    localStorage.setItem('user', data.user.role)
    return data
})

export const createProduct = createAsyncThunk('product/createProduct', async (params) => {
    const {data} = await axios.post('/product', params)
    return data
})

export const getOneProduct = createAsyncThunk('product/getOneProduct', async () => {
    const response = await axios.get('/user/logout')
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    return response
})

export const deleteProduct = createAsyncThunk('product/deleteProduct', async () => {
    const response = await axios.get('/user/refresh')
    localStorage.setItem('token', response.data.accessToken)
    return response.data
})

export const updateProduct = createAsyncThunk('product/updateProduct', async (params) => {
    const response = await axios.post('/user/google', params)
    localStorage.setItem('token', response.data.accessToken)
    localStorage.setItem('user', response.data.user.role)

    return response.data
})


const initialState = {
    status: 'loading',
    data: null,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: {
        // get all products
        [getProducts.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [getProducts.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [getProducts.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },
        // create product
        [createProduct.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [createProduct.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [createProduct.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },
        // get one product
        [getOneProduct.pending]: (state, action) => {
            state.status = 'loading'
            state.data = action.payload
        },
        [getOneProduct.fulfilled]: (state) => {
            state.status = 'loaded'
        },
        [getOneProduct.rejected]: (state, action) => {
            state.status = 'error'
            state.data = action.payload
        },
        // delete product
        [deleteProduct.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [deleteProduct.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [deleteProduct.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },
        // update product
        [updateProduct.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [updateProduct.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [updateProduct.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },
    }
})

export const productReducer = productSlice.reducer

