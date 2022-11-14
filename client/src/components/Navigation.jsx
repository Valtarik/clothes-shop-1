import React, {useState} from 'react'
import {Link} from "react-router-dom"
import cart from "../assets/cart.png"
import Search from "./Search"
import logo from "../assets/logo.png"

function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav
            className="flex justify-between items-center h-[50px] px-5 w-full bg-white border-b text-gray-400 text-sm fixed top-0 right-0 left-0 z-50">

            <Link to="/" className='hidden lg:block'>
                <img src={logo} alt="logo" className='h-[45px]'/>
            </Link>
            <span className='hidden lg:block'>
                    <Link to="/catalogue" className="mr-5">Каталог</Link>
                    <Link to="/contacts" className="mr-5">Контакти</Link>
                    <Link to="/faq" className="mr-5">Питання та відповіді</Link>
                </span>

            <div className='hidden lg:block'>
                <Search/>
            </div>
            <div className="hidden lg:flex justify-between">
                <Link to="/login" className="mr-10">Авторизація</Link>
                <Link to="/cart"><img src={cart} alt="" className="h-6 w-6"/></Link>
            </div>

            {/*Mobile nav*/}
            <div className='static bg-white flex justify-between items-center w-full lg:hidden'>
                <Link to="/" className='static'>
                    <img src={logo} alt="logo" className='h-[45px]'/>
                </Link>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="text-gray-500
                                    border-0
                                    hover:shadow-none hover:no-underline
                                    py-2
                                    px-2.5
                                    bg-transparent
                                    focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
                                    absolute
                                    right-5"

                >
                    {!isOpen ? (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    )}
                </button>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden mt-12 `}>

                <div
                    className="px-10 pt-2 pb-3 absolute left-0 sm:px-3 w-full flex flex-col items-start justify-center bg-white text-center">

                    <Link to="/catalogue" className="my-5" onClick={() => setIsOpen(!isOpen)}>Каталог</Link>
                    <Link to="/contacts" className="my-5" onClick={() => setIsOpen(!isOpen)}>Контакти</Link>
                    <Link to="/faq" className="my-5" onClick={() => setIsOpen(!isOpen)}>Питання та відповіді</Link>
                    <Link to="/login" className="my-5" onClick={() => setIsOpen(!isOpen)}>Авторизація</Link>
                    <Link to="/cart" className="my-5" onClick={() => setIsOpen(!isOpen)}>Кошик</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation