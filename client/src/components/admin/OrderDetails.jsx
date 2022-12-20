import React from 'react'

const OrderDetails = () => {
    return (
        <>
            <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
                <div
                    className="relative w-full my-6 mx-auto max-w-3xl space-y-6 bg-white px-4 py-5 sm:p-6 shadow md:overflow-hidden sm:rounded-md">
                    <span className="flex justify-center text-2xl">Замовлення №</span>
                    <div className="flex justify-around">
                        <div>Дані замовлення</div>
                        <div>Товари</div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default OrderDetails