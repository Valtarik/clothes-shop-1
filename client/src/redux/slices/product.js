import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../http/axios";

export const getProducts = createAsyncThunk('product/getProducts', async () => {
    const {data} = await axios.get('/product')
    return data
})

export const createProduct = createAsyncThunk('product/createProduct', async (params) => {
    const {data} = await axios.post('/product', params)
    return data
})

export const getOneProduct = createAsyncThunk('product/getOneProduct', async (params) => {
    console.log(params)
    const response = await axios.get(`/product/${params.id}`)
    return response.data
})

export const deleteProduct = createAsyncThunk('product/deleteProduct', async () => {
    const response = await axios.get('/user/refresh')
    return response.data
})

export const updateProduct = createAsyncThunk('product/updateProduct', async (params) => {

    const response = await axios.post('/user/google', params)
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
        [getOneProduct.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [getOneProduct.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [getOneProduct.rejected]: (state) => {
            state.status = 'error'
            state.data = null
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

export const productList = state => state.product
export const productReducer = productSlice.reducer

