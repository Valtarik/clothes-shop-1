import React from 'react';

const Orders = () => {
    return (
        <div className="overflow-hidden overflow-x-auto">
            <h1 className="my-5 ml-5 text-2xl font-bold">Замовлення</h1>
            <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-100">
                <tr>
                    <th className="sticky inset-y-0 left-0 bg-gray-100 px-4 py-2 text-left">
                        <label className="sr-only">Select All</label>

                        <input
                            className="h-5 w-5 rounded border-gray-200"
                            type="checkbox"
                            id="SelectAll"
                        />
                    </th>
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
                <tr>
                    <td className="sticky inset-y-0 left-0 bg-white px-4 py-2">
                        <label className="sr-only">Row 1</label>

                        <input
                            className="h-5 w-5 rounded border-gray-200"
                            type="checkbox"
                            id="Row1"
                        />
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        #00001
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        John Frusciante
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">john@rhcp.com</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">$783.23</td>
                    <td className="whitespace-nowrap px-4 py-2">
                        <strong
                            className="rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700"
                        >
                            Cancelled
                        </strong>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                        <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
                            Переглянути
                        </a>
                    </td>
                </tr>

                <tr>
                    <td className="sticky inset-y-0 left-0 bg-white px-4 py-2">
                        <label className="sr-only">Row 2</label>

                        <input
                            className="h-5 w-5 rounded border-gray-200"
                            type="checkbox"
                            id="Row2"
                        />
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        #00002
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        George Harrison
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        george@beatles.com
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">$128.99</td>
                    <td className="whitespace-nowrap px-4 py-2">
                        <strong
                            className="rounded bg-green-100 px-3 py-1.5 text-xs font-medium text-green-700"
                        >
                            Paid
                        </strong>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                        <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
                            Переглянути
                        </a>
                    </td>
                </tr>

                <tr>
                    <td className="sticky inset-y-0 left-0 bg-white px-4 py-2">
                        <label className="sr-only">Row 3</label>

                        <input
                            className="h-5 w-5 rounded border-gray-200"
                            type="checkbox"
                            id="Row3"
                        />
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        #00003
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">Dave Gilmour</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        dave@pinkfloyd.com
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">$459.43</td>
                    <td className="whitespace-nowrap px-4 py-2">
                        <strong
                            className="rounded bg-amber-100 px-3 py-1.5 text-xs font-medium text-amber-700"
                        >
                            Partially Refunded
                        </strong>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                        <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
                            Переглянути
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

    );
};

export default Orders;