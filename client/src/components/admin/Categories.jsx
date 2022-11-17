import React from 'react';
import {products} from '../../assets/products'

const Categories = () => {
    return (
        <div>

            <div className="flex flex-col md:flex-row">
                <div className="w-60 ml-5">
                    <h1 className="my-5 ml-5 text-2xl font-bold">Категорії</h1>
                    <ul className="divide-y divide-gray-200">
                        {products.map((product) => (
                            <li key={product.id} className="flex py-2  justify-between ">
                                <p>{product.category}</p>
                                <button className="text-indigo-600 hover:underline">Видалити</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="ml-5 md:ml-10">
                    <h1 className="my-5 ml-5 text-2xl font-bold">Створити категорію</h1>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                            Назва
                        </label>
                        <div className="flex mt-1 rounded-md shadow-sm">
                            <input
                                type="text"
                                name="price"
                                id="price"
                                className="block w-full rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="..."
                            />
                            <button
                                type="submit"
                                className="inline-flex justify-center rounded-r-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Додати
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;