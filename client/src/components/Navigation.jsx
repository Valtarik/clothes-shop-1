import React, {useState} from 'react'
import {Link} from "react-router-dom"
import Search from "./Search"
import logo from "../assets/logo.png"
import {useDispatch, useSelector} from 'react-redux'
import {selectIsAuth} from "../redux/slices/auth";
import {getProducts} from "../redux/slices/product";
import {getCategories} from "../redux/slices/category";
import {cartData} from "../redux/slices/cart";

function Navigation() {
    const cart = useSelector(cartData)
    const isAuth = useSelector(selectIsAuth)
    const userRole = localStorage.getItem('user')
    const [isOpen, setIsOpen] = useState(false)
    const [category] = useState(0)
    const [page] = useState(1)
    const limit = 12
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(getCategories())
        dispatch(getProducts({category, page, limit}))
    }
    return (
        <nav
            className="flex justify-between items-center h-[50px] px-5 w-full bg-white border-b text-gray-600 text-sm fixed top-0 right-0 left-0 z-50">

            <Link to="/" className='hidden lg:block' onClick={handleClick}>
                <img src={logo} alt="logo" className='h-[45px]'/>
            </Link>
            <span className='hidden lg:block'>
                    <Link to="/catalogue" className="mr-5" onClick={handleClick}>Каталог</Link>
                    <Link to="/contacts" className="mr-5">Контакти</Link>
                    <Link to="/faq" className="mr-5">Питання та відповіді</Link>
                </span>

            <div className='hidden lg:block'>
                <Search/>
            </div>
            <div className="hidden lg:flex justify-between">
                {isAuth && userRole === "ADMIN" ?
                    (
                        <Link to="/admin" className="mr-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>

                        </Link>
                    ) : isAuth ?
                        (
                            <Link to="/user" className="mr-10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>

                            </Link>
                        )
                        :
                        (
                            <Link to="/login" className="mr-10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                                </svg>
                            </Link>
                        )
                }

                <Link to="/cart">

                    {cart.quantity > 0 ?
                        (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="w-6 h-6">
                                <path fillRule="evenodd"
                                      d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                                      clipRule="evenodd"/>
                            </svg>
                        ) :
                        (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                            </svg>
                        )
                    }
                </Link>
            </div>

            {/*Mobile nav*/}
            <div className='static bg-white flex justify-between items-center w-full lg:hidden'>
                <Link to="/" className='static' onClick={handleClick}>
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

                    <Link to="/catalogue" className="my-5" onClick={() => {
                        setIsOpen(!isOpen)
                        handleClick()
                    }}>Каталог</Link>
                    <Link to="/contacts" className="my-5" onClick={() => setIsOpen(!isOpen)}>Контакти</Link>
                    <Link to="/faq" className="my-5" onClick={() => setIsOpen(!isOpen)}>Питання та відповіді</Link>
                    {isAuth && userRole === "ADMIN" ?
                        (
                            <Link to="/admin" className="my-5" onClick={() => setIsOpen(!isOpen)}>Профіль</Link>
                        )
                        : isAuth ?
                            (
                                <Link to="/user" className="my-5" onClick={() => setIsOpen(!isOpen)}>Профіль</Link>
                            ) :
                            (
                                <Link to="/login" className="my-5" onClick={() => setIsOpen(!isOpen)}>Авторизація</Link>
                            )
                    }
                    <Link to="/cart" className="my-5" onClick={() => setIsOpen(!isOpen)}>Кошик</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
