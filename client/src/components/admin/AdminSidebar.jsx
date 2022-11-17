import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Logout from "../Logout";

function AdminSidebar() {
    const [open, setOpen] = useState(false)

    return (
        <div className="h-full p-3 space-y-2 md:flex">
            <div className="w-60">
                <h1 className="text-3xl font-bold">Адміністратор</h1>
                <div className="divide-y divide-gray-700">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li>
                            <NavLink to="/admin"
                                     className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100 focus:bg-gray-200">Додати
                                товар</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/products"
                                     className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100 focus:bg-gray-200">Керування
                                товарами</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/sizes"
                                     className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100 focus:bg-gray-200">Керувати
                                розмірами</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/categories"
                                     className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100 focus:bg-gray-200">Керувати
                                категоріями</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/orders"
                                     className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100 focus:bg-gray-200">Замовлення</NavLink>
                        </li>
                    </ul>
                    <ul className="pt-4 pb-2 space-y-1 text-sm">
                        <li>
                            <NavLink to="/admin/themes"
                                     className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-100 focus:bg-gray-200">Змінити
                                тему</NavLink>
                        </li>
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
}

export default AdminSidebar