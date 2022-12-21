import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getOneOrder, orderDetails} from "../../redux/slices/order"

const OrderDetails = ({setOpen, orderId}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOneOrder({id: orderId}))
    }, [dispatch])
    const order = useSelector(orderDetails)
    return (
        <>
            <section
                className="justify-center items-center flex fixed inset-0 z-50 outline-none">
                <div
                    className="relative w-full my-6 mx-auto max-w-5xl space-y-6 bg-white px-4 py-5 sm:p-6 shadow md:overflow-hidden sm:rounded-md">
                    {Object.keys(order).length > 0 &&
                        <span className="flex justify-center text-2xl">Замовлення №{order.info.id}</span>}
                    {Object.keys(order).length > 0 &&
                        <div className="grid md:grid-cols-2">
                            <div>
                                <span className="font-bold text-base">Дані замовлення</span>
                                <div className="mt-5">
                                    <p>Ім'я та прізвище: <span
                                        className="font-bold">{order.info.firstName + ' ' + order.info.lastName}</span>
                                    </p>
                                    <p>Email: <span className="font-bold">{order.info.email}</span></p>

                                    <p>Телефон: <span className="font-bold">{order.info.phone}</span></p>

                                    <p>Місто: <span className="font-bold">{order.info.city}</span></p>

                                    <p>Адреса (№ відділення): <span className="font-bold">{order.info.address}</span>
                                    </p>

                                    <p>Коментар до замовлення:</p>
                                    <p className="font-bold">{order.info.comment}</p>
                                    <p>Загальна сума замовлення: <span
                                        className="font-bold">{order.info.totalPrice}</span></p>

                                    <p>Статус замовлення:</p>
                                    <p className="font-bold">{order.info.status}</p>
                                </div>
                            </div>
                            <div className="max-h-96 overflow-auto">
                                <span className="font-bold text-base">Товари</span>
                                <ul className=" divide-y divide-gray-200 mt-5">
                                    {order.products.map(product => (
                                        <li className="flex py-6">
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
                                                            <p>{product.name}</p>
                                                        </h3>
                                                        <p className="ml-4">{product.price} грн</p>
                                                    </div>
                                                    <p className="mt-1 text-sm text-gray-500">Знижка {product.discount}%</p>
                                                </div>
                                                <p className="text-gray-500 text-right">{order.orderProducts.map(item => {
                                                    if (item.productId === product.id) {
                                                        return item.quantity
                                                    }
                                                })}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    }
                    <div className="text-right">
                        <button
                            onClick={() => setOpen(false)}
                            className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                            Відміна
                        </button>
                        <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ml-2"
                        >
                            Оновити
                        </button>
                    </div>
                </div>

            </section>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default OrderDetails