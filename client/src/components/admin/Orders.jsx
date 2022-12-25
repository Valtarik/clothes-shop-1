import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getAllOrders, orderState} from "../../redux/slices/order"
import OrderDetails from "./OrderDetails"
import Pagination from "../Pagination"

const Orders = () => {
    const dispatch = useDispatch()
    const orders = useSelector(orderState)
    const [openOrder, setOpenOrder] = useState(false)
    const [orderItem, setOrderItem] = useState({})
    const [currentOrders, setCurrentOrders] = useState(null)
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const limit = 100
    useEffect(() => {
        dispatch(getAllOrders())
    }, [dispatch, page])

    useEffect(() => {
        if (orders) {
            const indexOfLastProduct = page * limit
            const indexOfFirstProduct = indexOfLastProduct - limit
            setCurrentOrders(orders.slice(indexOfFirstProduct, indexOfLastProduct))
            setTotal(orders.length)
        }
    }, [orders])

    const handleOrder = (id) => {
        setOpenOrder(true)
        setOrderItem(id)
    }
    return (
        <div className="overflow-hidden overflow-x-auto">
            <h1 className="my-5 ml-5 text-2xl font-bold">Замовлення</h1>
            <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-100">
                <tr>
                    <th
                        className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                    >
                        <div className="flex items-center gap-2">
                            Номер замовлення
                        </div>
                    </th>
                    <th
                        className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                    >
                        <div className="flex items-center gap-2">
                            Ім'я
                        </div>
                    </th>
                    <th
                        className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                    >
                        <div className="flex items-center gap-2">
                            Email
                        </div>
                    </th>
                    <th
                        className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                    >
                        <div className="flex items-center gap-2">
                            Сумма
                        </div>
                    </th>
                    <th
                        className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                    >
                        Статус
                    </th>
                    <th className="px-4 py-2"></th>
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                {!currentOrders &&
                    <tr className="flex items-center justify-center space-x-2">
                        <td className="flex mt-5">
                            <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                            <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                            <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                        </td>
                    </tr>
                }
                {currentOrders && (
                    currentOrders.map((order) => (
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {order.id}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                {order.firstName + ' ' + order.lastName}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{order.email}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{order.totalPrice} грн</td>
                            <td className="whitespace-nowrap px-4 py-2">
                                <strong
                                    className="rounded bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700"
                                >
                                    {order.status}
                                </strong>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2">
                                <button onClick={() => handleOrder(order.id)}
                                        className="text-sm font-medium text-blue-600 hover:underline">
                                    Переглянути
                                </button>
                            </td>
                        </tr>
                    ))
                )}
                {openOrder
                    ? (
                        <OrderDetails setOpen={setOpenOrder} orderId={orderItem}/>
                    )
                    : null
                }
                </tbody>
            </table>
            <div className="flex justify-center mt-5">
                {total > limit && (
                    <Pagination
                        count={total}
                        setPage={setPage}
                        limit={limit}
                        page={page}
                    />
                )}
            </div>
        </div>

    );
};

export default Orders;