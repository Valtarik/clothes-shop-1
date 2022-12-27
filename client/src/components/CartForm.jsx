import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {cartData, clearCart} from "../redux/slices/cart"
import {createOrder} from "../redux/slices/order"
import {useNavigate} from "react-router-dom"

const CartForm = () => {
    const navigate = useNavigate()
    const cart = useSelector(cartData)
    const dispatch = useDispatch()
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [email, setEmail] = useState('')
    // const [phone, setPhone] = useState('')
    // const [city, setCity] = useState('')
    // const [address, setAddress] = useState('')
    // const [comment, setComment] = useState('')
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        address: '',
        comment: ''
    })
    const [errors, setErrors] = useState({
        firstName: 'Це поле є обов\'язковим',
        lastName: 'Це поле є обов\'язковим',
        email: 'Це поле є обов\'язковим',
        phone: 'Це поле є обов\'язковим',
        city: 'Це поле є обов\'язковим',
        address: 'Це поле є обов\'язковим'
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        // const data = {
        //     firstName,
        //     lastName,
        //     email,
        //     phone,
        //     city,
        //     address,
        //     comment,
        //     cart
        // }
        // dispatch(createOrder(data))
        // dispatch(clearCart())
        // navigate('/success')
    }

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
        setErrors({...errors, [e.target.name]: ''})
        console.log(data)
        console.log(errors)
    }

    return (
        <div className="mx-auto max-w-lg px-4 lg:px-8">
            <form className="grid grid-cols-6 gap-4" onSubmit={handleSubmit}>
                <div className="col-span-3">
                    <label className="mb-1 block text-sm text-gray-600">
                        Ім'я*
                    </label>

                    <input
                        onChange={handleChange}
                        value={data.firstName}
                        name='firstName'
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm focus:border-purple-600 focus:ring-0 focus:ring-offset-0"
                        type="text"
                    />
                    {!data.firstName && (
                        <span className="text-xs text-red-500 ml-2 opacity-75">{errors.firstName}</span>
                    )}
                </div>

                <div className="col-span-3">
                    <label className="mb-1 block text-sm text-gray-600">
                        Прізвище*
                    </label>

                    <input
                        onChange={handleChange}
                        value={data.lastName}
                        name='lastName'
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm focus:border-purple-600 focus:ring-0 focus:ring-offset-0"
                        type="text"
                    />
                    {!data.lastName && (
                        <span className="text-xs text-red-500 ml-2 opacity-75">{errors.lastName}</span>
                    )}
                </div>

                <div className="col-span-6">
                    <label className="mb-1 block text-sm text-gray-600">
                        Email*
                    </label>

                    <input
                        onChange={handleChange}
                        value={data.email}
                        name='email'
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm focus:border-purple-600 focus:ring-0 focus:ring-offset-0"
                        type="email"
                    />
                    {!data.email && (
                        <span className="text-xs text-red-500 ml-2 opacity-75">{errors.email}</span>
                    )}
                </div>

                <div className="col-span-6">
                    <label className="mb-1 block text-sm text-gray-600">
                        Телефон*
                    </label>

                    <input
                        onChange={handleChange}
                        value={data.phone}
                        name='phone'
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm focus:border-purple-600 focus:ring-0 focus:ring-offset-0"
                        type="tel"
                    />
                    {!data.phone && (
                        <span className="text-xs text-red-500 ml-2 opacity-75">{errors.phone}</span>
                    )}
                </div>

                <div className="col-span-6">
                    <label className="mb-1 block text-sm text-gray-600">
                        Місто*
                    </label>

                    <input
                        onChange={handleChange}
                        value={data.city}
                        name='city'
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm focus:border-purple-600 focus:ring-0 focus:ring-offset-0"
                        type="text"
                    />
                    {!data.city && (
                        <span className="text-xs text-red-500 ml-2 opacity-75">{errors.city}</span>
                    )}
                </div>

                <div className="col-span-6">
                    <label className="mb-1 block text-sm text-gray-600">
                        Адреса (№ відділення)*
                    </label>

                    <input
                        onChange={handleChange}
                        value={data.address}
                        name='address'
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm focus:border-purple-600 focus:ring-0 focus:ring-offset-0"
                        type="text"
                    />
                    {!data.address && (
                        <span className="text-xs text-red-500 ml-2 opacity-75">{errors.address}</span>
                    )}
                </div>

                <div className="col-span-6">
                    <label className="mb-1 block text-sm text-gray-600">
                        Коментар
                    </label>

                    <textarea
                        onChange={handleChange}
                        value={data.comment}
                        rows={3}
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm mb-5 focus:border-purple-600 focus:ring-0 focus:ring-offset-0"
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