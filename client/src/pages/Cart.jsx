import React from 'react';
import {Link} from "react-router-dom";
import CartItem from "../components/CartItem";
import CartForm from "../components/CartForm";
import {useSelector} from "react-redux";
import {cartData} from "../redux/slices/cart";
import empty from "../assets/empty.png"

const Cart = () => {
    const cart = useSelector(cartData)
    return (
        <div className="mt-10 w-full overflow-x-hidden">
            <h1 className="sr-only">Cart</h1>
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
                        {cart.products.length === 0 &&
                            <div className="mt-5">
                                <img src={empty} alt="" className="mb-10"/>
                                <span className="flex justify-center text-xl">Ваша корзина порожня :(</span>
                            </div>}
                        {cart.products.length > 0 && cart.products.map(product => (
                            <CartItem
                                name={product.name}
                                img={product.img}
                                color={product.color}
                                size={product.size}
                                price={product.price}
                                key={product.name}
                            />
                        ))}

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



