import React from 'react'
import AdminSidebar from "../components/admin/AdminSidebar";
import AddProduct from "../components/admin/AddProduct";

const Admin = () => {
    return (
        <div className="mt-12 md:flex">
            <AdminSidebar/>
            <AddProduct/>
        </div>
    )
}

export default Admin