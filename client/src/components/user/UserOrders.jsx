import React, {useState, useEffect} from 'react'
import {products} from "../../assets/products"
import {getAllOrders, orderState} from "../../redux/slices/order"
import {useDispatch, useSelector} from "react-redux"

const UserOrders = () => {
    const dispatch = useDispatch()
    const orders = useSelector(orderState)
    useEffect(() => {
        dispatch(getAllOrders())
    }, [dispatch])
    const [openOrder, setOpenOrder] = useState(true)
    return (
        <div className="mb-24">
            <h1 className="my-5 ml-5 text-2xl font-bold">Історія замовлень</h1>


            {openOrder
                ?
                (orders && orders.map(order => (
                        <div className="mx-10 border rounded py-5 px-5 mb-2 flex justify-between items-center"
                             onClick={() => setOpenOrder(!openOrder)}>
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-500">Замовлення №{order.id}</span>
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
                (<div className="mx-10 border rounded py-5 pl-5 px-5 mb-2">
                    <div onClick={() => setOpenOrder(!openOrder)}>
                        <div className="flex justify-between mb-5">
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-500">№1232 від 01.12.22</span>
                                <span>Виконано</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-500">Сума замовлення</span>
                                <span>8000 грн</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                            </svg>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row pr-20">
                        <div className="flex flex-col basis-5/12 mb-5 md:mb-0">
                            <span className="text-sm text-gray-500 mb-3">Інформація про замовлення</span>
                            <span>Нова пошта</span>
                            <span className="mb-3">Відділення №1, м. Київ</span>
                            <span>Ловкайтес Віталій</span>
                            <span>+380685965803</span>
                            <span>lovkaitesvitalii@gmail.com</span>
                        </div>
                        <div className="flex flex-col basis 7/12">
                            <span className="text-sm text-gray-500 mb-3">Товари</span>
                            <div>
                                <div className="mt-8 mb-5 ">
                                    <div className="flow-root">
                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                            {products.map((product) => (
                                                <li key={product.id} className="flex py-6">
                                                    <div
                                                        className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                        <img
                                                            src={product.images}
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
                                                        <div className="flex flex-1 items-end justify-between text-sm">
                                                            <p className="text-gray-500">{product.category}</p>

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