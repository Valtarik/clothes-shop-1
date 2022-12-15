import React from 'react'

const CartForm = () => {
    return (
        <div className="mx-auto max-w-lg px-4 lg:px-8">
            <form className="grid grid-cols-6 gap-4">
                <div className="col-span-3">
                    <label className="mb-1 block text-sm text-gray-600" htmlFor="first_name">
                        Ім'я*
                    </label>

                    <input
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                        type="text"
                        id="first_name"
                    />
                </div>

                <div className="col-span-3">
                    <label className="mb-1 block text-sm text-gray-600" htmlFor="last_name">
                        Прізвище*
                    </label>

                    <input
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                        type="text"
                        id="last_name"
                    />
                </div>

                <div className="col-span-6">
                    <label className="mb-1 block text-sm text-gray-600" htmlFor="email">
                        Email*
                    </label>

                    <input
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                        type="email"
                        id="email"
                    />
                </div>

                <div className="col-span-6">
                    <label className="mb-1 block text-sm text-gray-600" htmlFor="phone">
                        Телефон*
                    </label>

                    <input
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                        type="tel"
                        id="phone"
                    />
                </div>

                <div className="col-span-6">
                    <label className="mb-1 block text-sm text-gray-600">
                        Місто*
                    </label>

                    <input
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                        type="text"
                        id="phone"
                    />
                </div>

                <div className="col-span-6">
                    <label className="mb-1 block text-sm text-gray-600" htmlFor="phone">
                        Адреса*
                    </label>

                    <input
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                        type="text"
                        id="phone"
                    />
                </div>

                <div className="col-span-6">
                    <label className="mb-1 block text-sm text-gray-600" htmlFor="phone">
                        Метод сплати*
                    </label>

                    <input
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                        type="text"
                        id="phone"
                    />
                </div>

                <div className="col-span-6">
                    <label className="mb-1 block text-sm text-gray-600" htmlFor="phone">
                        Коментар
                    </label>

                    <input
                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm mb-5"
                        type="text"
                        id="phone"
                    />
                </div>

                <div className="col-span-6">
                    <button
                        className="block w-full rounded-lg bg-purple-600 p-2.5 text-sm text-white"
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