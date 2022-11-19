import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Logout from "../Logout";

const UserSidebar = () => {

    const [open, setOpen] = useState(false)
    return (
        <div className="h-full p-3 space-y-2 md:flex mb-24">
            <div className="w-60">
                <h1 className="text-3xl font-bold">Users email here</h1>
                <div className="divide-y divide-gray-700">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li>
                            <NavLink to="/user"
                                     className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100 focus:bg-gray-200">Мої
                                замовлення</NavLink>
                        </li>
                    </ul>
                    <ul className="pt-4 pb-2 space-y-1 text-sm">
                        <li>
                            <NavLink onClick={() => setOpen(true)}
                                     className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100 focus:bg-gray-200">Вийти</NavLink>
                            {open && <Logout open={open} setOpen={setOpen}/>}
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default UserSidebar;