import React from 'react';

const Sizes = () => {
    return (
        <div className="mb-5">
            <h1 className="my-5 ml-5 text-2xl font-bold">Розмірна таблиця</h1>
            <div className="overflow-x-auto border border-gray-200 mx-5">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">

                        </th>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            XS
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            S
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            M
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            L
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            XL
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            XXL
                        </th>
                    </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Обхват грудей, см
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">84</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">88</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">92</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">96</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">100</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">104</td>
                    </tr>

                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Обхват талії, см
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">64</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">68</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">72</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">76</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">80</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">84</td>
                    </tr>

                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Обхват стегон, см
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">90</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">94</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">98</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">102</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">106</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">110</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Sizes;