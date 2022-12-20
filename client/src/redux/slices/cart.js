import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    products: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    quantity: 0,
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const existing = state.products.find(item => item.name === action.payload.name)
            if (!existing) {
                state.quantity++
                state.products.push(action.payload)
                state.total += action.payload.price
                localStorage.setItem("cart", JSON.stringify(state.products))
            }
        },
        removeProduct: (state, action) => {
            state.quantity -= action.payload.quantity
            state.products = state.products.filter(item => item.name !== action.payload.name)
            state.total -= action.payload.price * action.payload.quantity
            localStorage.setItem("cart", JSON.stringify(state.products))
        },
        increment: (state, action) => {
            state.quantity++
            const found = state.products.find(item => item.name === action.payload.name)
            found.quantity++
            state.products = state.products.map(item => item.name === found.name ? found : item)
            state.total += found.price
            localStorage.setItem("cart", JSON.stringify(state.products))
        },
        decrement: (state, action) => {
            state.quantity--
            const found = state.products.find(item => item.name === action.payload.name)
            found.quantity--
            state.products = state.products.map(item => item.name === found.name ? found : item)
            state.total -= found.price
            localStorage.setItem("cart", JSON.stringify(state.products))
        },
        getTotal: (state, action) => {
            state.quantity = 0
            state.total = 0
            state.products.map(item => {
                state.quantity += item.quantity
                state.total += item.price * item.quantity
            })
        },
        clearCart: (state, action) => {
            state.products = []
            state.quantity = 0
            state.total = 0
            localStorage.setItem("cart", JSON.stringify(state.products))
        }
    },
})

export const cartData = state => state.cart
export const {addProduct, removeProduct, decrement, increment, getTotal, clearCart} = cartSlice.actions
export const cartReducer = cartSlice.reducer