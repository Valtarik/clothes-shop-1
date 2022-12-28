import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {cartData, clearCart} from "../redux/slices/cart"
import {createOrder} from "../redux/slices/order"
import {useNavigate} from "react-router-dom"

const CartForm = () => {
    const navigate = useNavigate()
    const cart = useSelector(cartData)

    const dispatch = useDispatch()
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
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        address: ''
    })

    useEffect(() => {
        setData({...data, cart})
    }, [cart])

    const handleSubmit = (event) => {
        event.preventDefault()

        Object.keys(errors).map(error => {
            if (data[error] === '') {
                setErrors(prevState => ({...prevState, [error]: 'Це поле є обов\'язковим'}))
            } else {
                setErrors(prevState => ({...prevState, [error]: null}))
            }
        })
        if (Object.values(errors).every(error => error === null) && cart.products.length > 0) {
            dispatch(createOrder(data))
            dispatch(clearCart())
            navigate('/success')
        }
    }

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
        if (e.target.value === '') {
            setErrors({...errors, [e.target.name]: 'Це поле є обов\'язковим'})
        } else {
            setErrors({...errors, [e.target.name]: null})
        }

    }

    return (
        <div className="mx-auto max-w-lg px-4 lg:px-8">
            <form className="grid grid-cols-6 gap-4" onSubmit={handleSubmit} noValidate={true}>
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
                        name='comment'
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