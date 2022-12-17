import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {getCategories} from "../redux/slices/category"
import {getProducts} from "../redux/slices/product"
import {useDispatch} from "react-redux"

function Breadcrumb({name}) {
    const category = 0
    const sortOption = 0
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(getCategories())
        dispatch(getProducts({category, sortOption}))
    }
    return (
        <nav className="bg-gray-100 px-5 py-3 mx-10 my-3 rounded">
            <ol className="list-reset flex">
                <li><Link to="/" onClick={handleClick} className="text-purple-600 hover:underline">Головна</Link>
                </li>
                <li><span className="text-gray-500 mx-2">/</span></li>
                <li><Link to="/catalogue" className="text-purple-600 hover:underline">Каталог</Link></li>
                <li><span className="text-gray-500 mx-2">/</span></li>
                <li className="text-gray-400">{name}</li>
            </ol>
        </nav>
    )
}

export default Breadcrumb