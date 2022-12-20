import {configureStore} from '@reduxjs/toolkit'
import {authReducer} from "./slices/auth"
import {productReducer} from "./slices/product";
import {categoryReducer} from "./slices/category";
import {cartReducer} from "./slices/cart";
import {orderReducer} from "./slices/order";

const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        category: categoryReducer,
        cart: cartReducer,
        order: orderReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store