import React from 'react'
import {useDispatch} from "react-redux"
import {removeProduct} from "../redux/slices/cart"

const CartItem = ({name, img, size, price, color}) => {
    const dispatch = useDispatch()
    const handleRemove = () => {
        dispatch(removeProduct({name}))
    }
    return (
        <div className="md:flex items-center mt-5 py-8 border-t border-gray-200 ">
            <div className="w-1/4">
                <img
                    src={'http://localhost:5000/' + img}
                    alt=""
                    className="w-2/3 h-2/3 object-center object-cover"/>
            </div>
            <div className="md:pl-3 md:w-3/4">
                <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-base font-black leading-none text-gray-800">{name}</p>
                    <div className="flex h-10 rounded-lg relative w-28 bg-transparent">
                        <button data-action="decrement"
                                className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                            <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <div
                            className="outline-none text-center bg-gray-300 font-semibold text-md flex items-center text-gray-700 px-4">1
                        </div>
                        <button data-action="increment"
                                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                            <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                    </div>
                </div>
                <p className="text-xs leading-3 text-gray-600 py-4">Color: {color}</p>
                <p className="w-96 text-xs leading-3 text-gray-600">Size: {size}</p>
                <div className="flex items-center justify-between pt-5 pr-6">
                    <div className="flex itemms-center">
                        <p className="text-xs leading-3 underline text-red-500 cursor-pointer"
                           onClick={handleRemove}>Remove</p>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800">{price} грн</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem