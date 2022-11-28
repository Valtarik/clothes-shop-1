import {configureStore} from '@reduxjs/toolkit'
import {authReducer} from "./slices/auth"
import {productReducer} from "./slices/product";
import {categoryReducer} from "./slices/category";

const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        category: categoryReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store