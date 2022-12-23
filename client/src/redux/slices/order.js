import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "../../http/axios"

export const createOrder = createAsyncThunk('order/createOrder', async (params) => {
    const {data} = await axios.post('/order', params)
    return data
})

export const getAllOrders = createAsyncThunk('order/getAllOrders', async () => {
    const {data} = await axios.get('/order')
    return data
})

export const getUserOrders = createAsyncThunk('order/getUserOrders', async (params) => {
    const {data} = await axios.post(`/order/user`, params)
    return data
})

export const getOneOrder = createAsyncThunk('order/getOneOrder', async (params) => {
    const {data} = await axios.get(`/order/${params.id}`)
    return data
})

export const updateOrder = createAsyncThunk('order/updateOrder', async (params) => {
    const {data} = await axios.patch('/order', params)
    return data
})

const initialState = {
    status: 'loading',
    data: null,
    order: {},
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: {
        [createOrder.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [createOrder.fulfilled]: (state) => {
            state.status = 'loaded'
        },
        [createOrder.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },

        [getAllOrders.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [getAllOrders.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [getAllOrders.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },

        [getUserOrders.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [getUserOrders.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [getUserOrders.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },

        [getOneOrder.pending]: (state) => {
            state.status = 'loading'
        },
        [getOneOrder.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.order = action.payload
        },
        [getOneOrder.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },

        [updateOrder.pending]: (state) => {
            state.status = 'loading'
        },
        [updateOrder.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.order = action.payload
        },
        [updateOrder.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },
    }
})

export const orderState = state => state.order.data
export const orderDetails = state => state.order.order
export const orderReducer = orderSlice.reducer