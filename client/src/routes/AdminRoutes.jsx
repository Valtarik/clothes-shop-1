import React from 'react';
import {Navigate, Outlet} from 'react-router-dom'

const PrivateRoutes = () => {
    let auth = localStorage.getItem('token')
    let admin = localStorage.getItem('user')
    return (
        auth && admin === "ADMIN" ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default PrivateRoutes;