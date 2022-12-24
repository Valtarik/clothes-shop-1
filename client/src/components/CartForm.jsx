import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {cartData, clearCart} from "../redux/slices/cart"
import {createOrder} from "../redux/slices/order"
import {useNavigate} from "react-router-dom"

const CartForm = () => {
    const navigate = useNavigate()
    const cart = useSelector(cartData)
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [comment, setComment] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            firstName,
            lastName,
            email,
            phone,
            city,
            address,
            comment,
            cart
        }
        dispatch(createOrder(data))
        dispatch(clearCart())
        navigate('/success')
    }

    return (
        <div className="mx-auto max-w-lg px-4 lg:px-8">
            <form className="grid grid-cols-6 gap-4" onSubmit={handleSubmit}>
                <div className="col-span-3">
                    <label className="mb-1 block text-sm text-gray-600">
                        Ім'я*
                    </label>

                    <input
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                        type="text"
                    />
                </div>

                <div className="col-span-3">
                    <label className="mb-1 block text-sm text-gray-600">
                        Прізвище*
                    </label>

                    <input
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                        type="text"
                    />
                </div>

                <div className="col-span-6">
                    <label className="mb-1 block text-sm text-gray-600">
                        Email*
                    </label>

                    <input
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                        type="email"
                    />
                </div>

                <div className="col-span-6">
                    <label className="mb-1 block text-sm text-gray-600">
                        Телефон*
                    </label>

                    <input
                        onChange={e => setPhone(e.target.value)}
                        value={phone}
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                        type="tel"
                    />
                </div>

                <div className="col-span-6">
                    <label className="mb-1 block text-sm text-gray-600">
                        Місто*
                    </label>

                    <input
                        onChange={e => setCity(e.target.value)}
                        value={city}
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                        type="text"
                    />
                </div>

                <div className="col-span-6">
                    <label className="mb-1 block text-sm text-gray-600">
                        Адреса (№ відділення)*
                    </label>

                    <input
                        onChange={e => setAddress(e.target.value)}
                        value={address}
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                        type="text"
                    />
                </div>

                <div className="col-span-6">
                    <label className="mb-1 block text-sm text-gray-600">
                        Коментар
                    </label>

                    <input
                        onChange={e => setComment(e.target.value)}
                        value={comment}
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm mb-5"
                        type="text"
                    />
                </div>

                <div className="col-span-6">
                    <button
                        className="block w-full rounded-lg bg-purple-600 p-2.5 text-sm text-white hover:bg-purple-700 focus:bg-purple-700 active:bg-purple-800 transition duration-150 ease-in-out"
                        type="submit"
                    >
                        Замовити
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CartForm