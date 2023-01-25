import React, {useEffect} from 'react'
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Catalogue from "./pages/Catalogue"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import Product from "./pages/Product"
import ForgotPassword from "./pages/ForgotPassword"
import Cart from "./pages/Cart"
import Faq from "./pages/Faq"
import Admin from "./pages/Admin"
import User from "./pages/User"
import {useDispatch} from "react-redux"
import {refresh, google} from "./redux/slices/auth"
import PrivateRoutes from "./routes/PrivateRoutes"
import AdminRoutes from "./routes/AdminRoutes"
import ResetPassword from "./pages/ResetPassword"
import SearchPage from "./pages/SearchPage"
import Success from "./pages/Success"

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.getItem('token') && localStorage.getItem('token') !== undefined) {
            dispatch(refresh())
        }
        dispatch(google())
    }, [])


    return (
        <div className="flex flex-col min-h-screen">
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/catalogue" element={<Catalogue/>}/>
                <Route path="/faq" element={<Faq/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/reset-password/:id/:link" element={<ResetPassword/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/success" element={<Success/>}/>

                <Route element={<AdminRoutes/>}>
                    <Route path="/admin" element={<Admin/>}/>
                    <Route path="/admin/*" element={<Admin/>}/>
                </Route>

                <Route element={<PrivateRoutes/>}>
                    <Route path="/user" element={<User/>}/>
                    <Route path="/user/*" element={<User/>}/>
                </Route>


            </Routes>
            <Footer/>
        </div>
    )
}

export default App
