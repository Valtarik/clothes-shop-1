import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Product from "./pages/Product";
import ResetPass from "./pages/ResetPass";
import Cart from "./pages/Cart";
import Faq from "./pages/Faq";
import Admin from "./pages/Admin";
import User from "./pages/User";
import {useDispatch} from "react-redux";
import {refresh, google} from "./redux/slices/auth";
import PrivateRoutes from "./routes/PrivateRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import {useCookies} from 'react-cookie'

function App() {
    const [cookies, removeCookie] = useCookies(['user', 'token'])
    const dispatch = useDispatch()
    useEffect(() => {
        // if (localStorage.getItem('token')) {
        //     dispatch(refresh())
        //     console.log('updated')
        // }
        if (cookies.user && cookies.user !== 'undefined' && cookies.token && cookies.token !== 'undefined') {
            const user = {
                "email": cookies.user,
                "token": cookies.token
            }
            dispatch(google(user))
            removeCookie('user')
            removeCookie('token')

        }
    })


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
                <Route path="/forgot-password" element={<ResetPass/>}/>
                <Route path="/product" element={<Product/>}/>
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
