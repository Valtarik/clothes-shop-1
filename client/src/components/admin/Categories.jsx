import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {categoryList, createCategory, getCategories} from "../../redux/slices/category";

const Categories = () => {
    const dispatch = useDispatch()
    const [category, setCategory] = useState('')
    const allCategories = useSelector(categoryList)


    useEffect(() => {
        dispatch(getCategories())
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(createCategory({name: category}))
        dispatch(getCategories())
        setCategory('')
    }
    return (
        <div>
            <div className="flex flex-col md:flex-row">
                <div className="w-96 ml-5">
                    <h1 className="my-5 ml-5 text-2xl font-bold">Категорії</h1>
                    <ul className="divide-y divide-gray-200">
                        {allCategories.status === 'loading' && <div>Loading...</div>}
                        {allCategories.status === 'loaded' && allCategories.data.length > 0 &&
                            (allCategories.data.map((category) => (
                                <li key={category.id} className="flex py-2  justify-between ">
                                    <p>{category.name}</p>
                                    <div>
                                        <button className="text-indigo-600 hover:underline mr-3">Редагувати</button>
                                        <button className="text-indigo-600 hover:underline">Видалити</button>
                                    </div>
                                </li>
                            )))}
                    </ul>
                </div>
                <div className="ml-5 md:ml-10">
                    <h1 className="my-5 ml-5 text-2xl font-bold">Створити категорію</h1>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                            Назва
                        </label>
                        <div className="flex mt-1 rounded-md shadow-sm w-80">
                            <input
                                onChange={e => setCategory(e.target.value)}
                                value={category}
                                type="text"
                                name="category"
                                className="block w-full rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Назва категорії"
                            />
                            <button
                                type="submit"
                                onClick={handleSubmit}
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