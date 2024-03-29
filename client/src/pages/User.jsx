import React from 'react';
import {Route, Routes} from "react-router-dom";
import UserSidebar from "../components/user/UserSidebar";
import UserOrders from "../components/user/UserOrders";

const User = () => {
    return (
        <div className="mt-12 md:flex">
            <div>
                <UserSidebar/>
            </div>
            <div className="mb-5 w-full md:mx-5">
                <Routes>
                    <Route path="/" element={<UserOrders/>}/>
                </Routes>
            </div>

        </div>
    );
};

export default User;