import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    products: [],
    quantity: 0,
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1
            state.products.push(action.payload)
            state.total += action.payload.price
        },
        removeProduct: (state, action) => {
            state.quantity -= 1
            state.products.splice(action.payload.name, 1)
            state.total -= action.payload.price
        }
    },
})

export const cartData = state => state.cart
export const {addProduct, removeProduct} = cartSlice.actions
export const cartReducer = cartSlice.reducer