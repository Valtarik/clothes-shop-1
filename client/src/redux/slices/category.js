import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../http/axios";

export const getCategories = createAsyncThunk('category/getCategories', async () => {
    const {data} = await axios.get('/category')
    return data
})

export const createCategory = createAsyncThunk('category/createCategory', async (params) => {
    const {data} = await axios.post('/category/create', params)
    return data
})

export const updateCategory = createAsyncThunk('category/updateCategory', async (params) => {
    const response = await axios.post('/category/update', params)
    return response.data
})

export const deleteCategory = createAsyncThunk('product/deleteCategory', async (params) => {
    const response = await axios.post('/category/delete', params)
    return response.data
})


const initialState = {
    status: 'loading',
    data: null,
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: {
        // get categories
        [getCategories.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [getCategories.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [getCategories.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },
        // create category
        [createCategory.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [createCategory.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [createCategory.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },
        // update category
        [updateCategory.pending]: (state, action) => {
            state.status = 'loading'
            state.data = action.payload
        },
        [updateCategory.fulfilled]: (state) => {
            state.status = 'loaded'
        },
        [updateCategory.rejected]: (state, action) => {
            state.status = 'error'
            state.data = action.payload
        },
        // delete category
        [deleteCategory.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [deleteCategory.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [deleteCategory.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },
    }
})

export const categoryReducer = categorySlice.reducer

