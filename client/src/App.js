import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Product from "./pages/Product";
import ForgotPassword from "./pages/ForgotPassword";
import Cart from "./pages/Cart";
import Faq from "./pages/Faq";
import Admin from "./pages/Admin";
import User from "./pages/User";
import {useDispatch} from "react-redux";
import {refresh, google} from "./redux/slices/auth";
import PrivateRoutes from "./routes/PrivateRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import {useCookies} from 'react-cookie'
import ResetPassword from "./pages/ResetPassword";

function App() {
    const [cookies, removeCookie] = useCookies(['user'])
    const [role, setRole] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(refresh())
        }
        if (cookies.user && cookies.user !== 'undefined') {
            const user = {
                "email": cookies.user,
            }
            dispatch(google(user))
            removeCookie('user')

        }
    }, [])


    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/catalogue" element={<Catalogue/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/faq" element={<Faq/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/reset-password/:id/:link" element={<ResetPassword/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/cart" element={<Cart/>}/>

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
        </>
    );
}

export default App;
