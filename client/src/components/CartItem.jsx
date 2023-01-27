import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import {decrement, increment, removeProduct} from "../redux/slices/cart"

const CartItem = ({name, img, size, price, color, quantity, currentPrice, discount}) => {
    const [count, setCount] = useState(quantity)
    const dispatch = useDispatch()
    const handleRemove = () => {
        dispatch(removeProduct({name, price, quantity: count}))
    }
    const handleDecrement = () => {
        if (count > 1) {
            setCount(prev => prev - 1)
            dispatch(decrement({name}))
        } else {
            setCount(count)
        }

    }
    const handleIncrement = () => {
        setCount(prev => prev + 1)
        dispatch(increment({name}))
    }
    return (
        <div className="md:flex items-center mt-5 py-8 border-t border-gray-200 ">
            <div className="w-1/4">
                <img
                    src={`${process.env.REACT_APP_API_URL}` + '/' + img[0]}
                    alt=""
                    className="w-2/3 h-2/3 object-center object-cover"/>
            </div>
            <div className="md:pl-3 md:w-3/4">
                <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-base font-black leading-none text-gray-800">{name}</p>
                    <div className="flex h-10 rounded-lg relative w-28 bg-transparent">
                        <button onClick={handleDecrement}
                                className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                            <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <div
                            className="outline-none text-center bg-gray-300 font-semibold text-md flex items-center text-gray-700 px-4">{count}
                        </div>
                        <button onClick={handleIncrement}
                                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                            <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                    </div>
                </div>
                <p className="text-sm leading-3 text-gray-600 py-4">Колір: {color}</p>
                <p className="w-96 text-sm leading-3 text-gray-600">Розмір: {size}</p>
                <div className="flex items-center justify-between pt-5 pr-6">
                    <div className="flex itemms-center">
                        <p className="text-xs leading-3 underline text-red-500 cursor-pointer"
                           onClick={handleRemove}>Видалити</p>
                    </div>
                    <div className="flex flex-col">
                        {discount > 0 &&
                            <p className="text-base leading-none text-gray-500 line-through">{price * count} грн</p>
                        }
                        <p className="text-base font-black leading-none">{currentPrice * count} грн</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem