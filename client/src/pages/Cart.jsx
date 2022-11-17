import React from 'react';
import {Link} from "react-router-dom";

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
                        <div className="md:flex items-center mt-5 py-8 border-t border-gray-200 ">
                            <div className="w-1/4">
                                <img src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller3.png" alt=""
                                     className="w-full h-full object-center object-cover"/>
                            </div>
                            <div className="md:pl-3 md:w-3/4">
                                <div className="flex items-center justify-between w-full pt-1">
                                    <p className="text-base font-black leading-none text-gray-800">North wolf
                                        bag</p>
                                    <select className="py-2 border border-gray-200 focus:outline-none">
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                                <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                                <p className="w-96 text-xs leading-3 text-gray-600">Size</p>
                                <div className="flex items-center justify-between pt-5 pr-6">
                                    <div className="flex itemms-center">
                                        <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                                    </div>
                                    <p className="text-base font-black leading-none text-gray-800">$9,000</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex items-center py-8 border-t border-gray-200">
                            <div className="w-1/4">
                                <img src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller2.png" alt=""
                                     className="w-full h-full object-center object-cover"/>
                            </div>
                            <div className="md:pl-3 md:w-3/4 w-full">
                                <div className="flex items-center justify-between w-full pt-1">
                                    <p className="text-base font-black leading-none text-gray-800">Luxe Signature
                                        Ring</p>
                                    <select className="py-2 border border-gray-200 focus:outline-none">
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                                <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                                <p className="w-96 text-xs leading-3 text-gray-600">Size</p>
                                <div className="flex items-center justify-between pt-5 pr-6">
                                    <div className="flex itemms-center">
                                        <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                                    </div>
                                    <p className="text-base font-black leading-none text-gray-800">$9,000</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex items-center py-8 border-t border-b border-gray-200">
                            <div className="h-full w-1/4">
                                <img src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller1.png" alt=""
                                     className="w-full h-full object-center object-cover"/>
                            </div>
                            <div className="md:pl-3 md:w-3/4 w-full">
                                <div className="flex items-center justify-between w-full pt-1">
                                    <p className="text-base font-black leading-none text-gray-800">Luxe Signature
                                        Shoes</p>
                                    <select className="py-2 border border-gray-200 focus:outline-none">
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                                <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                                <p className="w-96 text-xs leading-3 text-gray-600">Size: some size</p>
                                <div className="flex items-center justify-between pt-5 pr-6">
                                    <div className="flex itemms-center">
                                        <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                                    </div>
                                    <p className="text-base font-black leading-none text-gray-800">$9,000</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex items-center py-8 border-t border-b border-gray-200">
                            <div className="h-full w-1/4">
                                <img src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller1.png" alt=""
                                     className="w-full h-full object-center object-cover"/>
                            </div>
                            <div className="md:pl-3 md:w-3/4 w-full">
                                <div className="flex items-center justify-between w-full pt-1">
                                    <p className="text-base font-black leading-none text-gray-800">Luxe Signature
                                        Shoes</p>
                                    <select className="py-2 border border-gray-200 focus:outline-none">
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                                <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                                <p className="w-96 text-xs leading-3 text-gray-600">Size: some size</p>
                                <div className="flex items-center justify-between pt-5 pr-6">
                                    <div className="flex itemms-center">
                                        <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                                    </div>
                                    <p className="text-base font-black leading-none text-gray-800">$9,000</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white py-12 ">
                        <p className="text-4xl font-black leading-10 text-gray-800 pb-10 text-center">Оформлення
                            замовлення</p>
                        <div className="mx-auto max-w-lg px-4 lg:px-8">
                            <form className="grid grid-cols-6 gap-4">
                                <div className="col-span-3">
                                    <label className="mb-1 block text-sm text-gray-600" for="first_name">
                                        Ім'я*
                                    </label>

                                    <input
                                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                        type="text"
                                        id="first_name"
                                    />
                                </div>

                                <div className="col-span-3">
                                    <label className="mb-1 block text-sm text-gray-600" for="last_name">
                                        Прізвище*
                                    </label>

                                    <input
                                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                        type="text"
                                        id="last_name"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label className="mb-1 block text-sm text-gray-600" for="email">
                                        Email*
                                    </label>

                                    <input
                                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                        type="email"
                                        id="email"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label className="mb-1 block text-sm text-gray-600" for="phone">
                                        Телефон*
                                    </label>

                                    <input
                                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                        type="tel"
                                        id="phone"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label className="mb-1 block text-sm text-gray-600" htmlFor="phone">
                                        Місто*
                                    </label>

                                    <input
                                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                        type="text"
                                        id="phone"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label className="mb-1 block text-sm text-gray-600" htmlFor="phone">
                                        Адреса*
                                    </label>

                                    <input
                                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                        type="text"
                                        id="phone"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label className="mb-1 block text-sm text-gray-600" htmlFor="phone">
                                        Метод сплати*
                                    </label>

                                    <input
                                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                        type="text"
                                        id="phone"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label className="mb-1 block text-sm text-gray-600" htmlFor="phone">
                                        Коментар
                                    </label>

                                    <input
                                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm mb-5"
                                        type="text"
                                        id="phone"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <button
                                        className="block w-full rounded-lg bg-purple-600 p-2.5 text-sm text-white"
                                        type="submit"
                                    >
                                        Замовити
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Cart;



