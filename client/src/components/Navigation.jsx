import React from 'react';
import {Link} from "react-router-dom";
import cart from "../assets/cart.png"

function Navigation() {
    return (
        <nav className="flex justify-between items-center h-[30px] px-5 bg-white border-b text-gray-400 text-sm">
            <span>
                <Link to="/catalogue" className="mr-5">Каталог</Link>
                <Link to="/contacts" className="mr-5">Контакти</Link>
                <Link to="/payment" className="mr-5">Оплата</Link>
                <Link to="/delivery" className="mr-5">Доставка</Link>
                <Link to="/delivery" className="mr-5">Повернення</Link>
            </span>
            <div className="flex justify-between">
                <Link to="/login" className="mr-10">Авторизація</Link>
                <Link to="/cart"><img src={cart} alt="" className="h-6 w-6"/></Link>
            </div>
        </nav>
    );
}

export default Navigation