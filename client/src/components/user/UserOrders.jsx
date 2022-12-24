import React, {useState, useEffect} from 'react'
import {getOneOrder, getUserOrders, orderDetails, orderState} from "../../redux/slices/order"
import {useDispatch, useSelector} from "react-redux"
import {userData} from "../../redux/slices/auth"

const UserOrders = () => {
    const dispatch = useDispatch()
    const orders = useSelector(orderState)
    const user = useSelector(userData)
    const order = useSelector(orderDetails)
    useEffect(() => {
        if (user) {
            dispatch(getUserOrders({email: user.email}))
        }
    }, [user])
    const [openOrder, setOpenOrder] = useState(true)

    const handleOpenOrder = (id) => {
        setOpenOrder(false)
        dispatch(getOneOrder({id}))
    }
    return (
        <div className="mb-24 mt-5">
            <span className="my-5 ml-5 text-2xl font-bold">Історія замовлень</span>

            {openOrder
                ?
                (orders && orders.map(order => (
                        <div className="mt-5 mx-10 border rounded py-5 px-5 mb-2 flex justify-between items-center"
                             onClick={() => handleOpenOrder(order.id)}>
                            <div className="flex flex-col">
                                <span
                                    className="text-sm text-gray-500">Замовлення №{order.id} від {new Date(order.createdAt).toLocaleString()}</span>
                                <span>{order.status}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-500">Сума замовлення</span>
                                <span>{order.totalPrice} грн</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                            </svg>
                        </div>
                    ))
                )
                :
                (Object.keys(order).length > 0 &&
                    <div className="mt-5 mx-10 border rounded py-5 pl-5 px-5 mb-2">
                        <div onClick={() => setOpenOrder(!openOrder)}>
                            <div className="flex justify-between mb-5">
                                <div className="flex flex-col">
                                    <span
                                        className="text-sm text-gray-500">Замовлення №{order.info.id} від {new Date(order.info.createdAt).toLocaleString()}</span>
                                    <span>{order.info.status}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-500">Сума замовлення</span>
                                    <span>{order.info.totalPrice} грн</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                                </svg>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row">
                            <div className="flex flex-col basis-5/12 mb-5 md:mb-0">
                                <span className="text-sm text-gray-500 mb-3">Інформація про замовлення</span>
                                <span>Ім'я та прізвище: {order.info.firstName + ' ' + order.info.lastName}</span>
                                <span>Адреса: {order.info.address}, {order.info.city}</span>
                                <span>Телефон: {order.info.phone}</span>
                                <span>Email: {order.info.email}</span>
                            </div>
                            <div className="flex flex-col basis 7/12 w-full">
                                <span className="text-sm text-gray-500 mb-3">Товари</span>
                                <div>
                                    <div className="mt-8 mb-5 ">
                                        <div className="flow-root">
                                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                {order.products.map(product => (
                                                    <li key={product.id} className="flex py-6">
                                                        <div
                                                            className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                            <img
                                                                src={'http://localhost:5000/' + product.img}
                                                                alt=""
                                                                className="h-full w-full object-cover object-center"
                                                            />
                                                        </div>

                                                        <div className="ml-4 flex flex-1 flex-col">
                                                            <div>
                                                                <div
                                                                    className="flex justify-between text-base font-medium text-gray-900">
                                                                    <h3>
                                                                        <a href="#">{product.name}</a>
                                                                    </h3>
                                                                    <p className="ml-4">{product.price} грн</p>
                                                                </div>
                                                                <p className="mt-1 text-sm text-gray-500">Знижка {product.discount}%</p>
                                                            </div>
                                                            <div
                                                                className="text-right">
                                                                <span>{order.orderProducts.map(item => {
                                                                    if (item.productId === product.id) {
                                                                        return item.quantity
                                                                    }
                                                                })} шт.</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    )
}

export default UserOrders