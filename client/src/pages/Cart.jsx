import React from 'react';
import {Link} from "react-router-dom";
import CartItem from "../components/CartItem";
import CartForm from "../components/CartForm";

const Cart = () => {
    return (
        <div className="mt-10 w-full overflow-x-hidden">
            <h1 className="sr-only">Checkout</h1>

            <div className="mx-auto max-w-screen-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="bg-gray-50 py-5 w-full px-8">
                        <Link to="/catalogue"
                              className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="icon icon-tabler icon-tabler-chevron-left" width={16}
                                 height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                                 strokeLinecap="round"
                                 strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <polyline points="15 6 9 12 15 18"/>
                            </svg>
                            <p className="text-sm pl-2 leading-none">До каталогу</p>
                        </Link>
                        <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Кошик</p>
                        <CartItem/>
                    </div>

                    <div className="bg-white py-12 ">
                        <p className="text-4xl font-black leading-10 text-gray-800 pb-10 text-center">Оформлення
                            замовлення</p>
                        <CartForm/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Cart;



