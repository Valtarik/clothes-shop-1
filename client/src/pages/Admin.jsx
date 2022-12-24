import React from 'react'
import {Route, Routes} from "react-router-dom"
import AdminSidebar from "../components/admin/AdminSidebar"
import AddProduct from "../components/admin/AddProduct"
import AllProducts from "../components/admin/AllProducts"
import Categories from "../components/admin/Categories"
import Orders from "../components/admin/Orders"
import Themes from "../components/admin/Themes"

const Admin = () => {
    return (
        <div className="mt-12 md:flex">
            <div>
                <AdminSidebar/>
            </div>
            <div className="mb-5 w-full md:mx-5">
                <Routes>
                    <Route path="/" element={<AddProduct/>}/>
                    <Route path="products" element={<AllProducts/>}/>
                    <Route path="categories" element={<Categories/>}/>
                    <Route path="orders" element={<Orders/>}/>
                    <Route path="themes" element={<Themes/>}/>
                </Routes>
            </div>

        </div>
    )
}

export default Admin