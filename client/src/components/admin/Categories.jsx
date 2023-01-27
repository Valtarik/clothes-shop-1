import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {categoryList, createCategory, deleteCategory, getCategories, updateCategory} from "../../redux/slices/category"

const Categories = () => {
    const dispatch = useDispatch()
    const [category, setCategory] = useState('')
    const [newCategory, setNewCategory] = useState('')
    const allCategories = useSelector(categoryList)
    const [change, setChange] = useState(false)
    const [categoryId, setCategoryId] = useState('')

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(createCategory({name: category})).then(res => dispatch(getCategories()))
        setCategory('')
    }

    const handleUpdate = (event) => {
        event.preventDefault()
        const data = {
            id: categoryId,
            name: newCategory
        }
        dispatch(updateCategory(data)).then(res => dispatch(getCategories()))
        setCategory('')
        setChange(false)
    }

    const handleDelete = (id) => {
        dispatch(deleteCategory({id})).then(res => dispatch(getCategories()))
    }
    return (
        <div>
            <div className="flex flex-col md:flex-row">
                <div className="w-96 ml-5">
                    <h1 className="my-5 ml-5 text-2xl font-bold">Категорії</h1>
                    <ul className="divide-y divide-gray-200">
                        {allCategories.status === 'loading' &&
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                                <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                                <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                            </div>
                        }
                        {allCategories.status === 'loaded' && allCategories.data.length > 0 &&
                            (allCategories.data.map((category) => (
                                <li key={category.id} id={category.id} className="flex py-2  justify-between ">
                                    <p>{category.name}</p>
                                    <div>
                                        <button onClick={() => {
                                            setChange(!change)
                                            setCategoryId(category.id)
                                        }}
                                                className="text-indigo-600 hover:underline mr-3">Редагувати
                                        </button>
                                        <button className="text-indigo-600 hover:underline"
                                                onClick={() => {
                                                    handleDelete(category.id)
                                                }}>Видалити
                                        </button>
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
                    {change && (
                        <div>
                            <h1 className="my-5 ml-5 text-2xl font-bold">Оновити категорію</h1>
                            <div className="flex mt-1 rounded-md shadow-sm w-80 mt-5">
                                <input
                                    onChange={e => setNewCategory(e.target.value)}
                                    value={newCategory}
                                    type="text"
                                    name="category"
                                    className="block w-full rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Назва категорії"
                                />
                                <button
                                    type="submit"
                                    onClick={handleUpdate}
                                    className="inline-flex justify-center rounded-r-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Оновити
                                </button>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories