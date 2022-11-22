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
import {refresh} from "./redux/slices/auth";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(refresh())
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
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/admin/*" element={<Admin/>}/>
                <Route path="/user" element={<User/>}/>
                <Route path="/user/*" element={<User/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
