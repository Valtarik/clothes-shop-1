import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {categoryList, getCategories} from "../../redux/slices/category"

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

const AddProduct = () => {
    const dispatch = useDispatch()
    const [color, setColor] = useState('')
    const [colors, setColors] = useState([])
    const categories = useSelector(categoryList)

    useEffect(() => {
        dispatch(getCategories())
    }, [])


    const handleColors = (event) => {
        event.preventDefault()
        if (color) {
            setColors([...colors, color])
        }
        setColor('')
    }

    const handleColorClick = (event) => {
        event.preventDefault()
        colors.splice(colors.indexOf(event.target.innerText), 1)
        setColors([...colors])
    }
    return (
        <>
            <div>
                <h1 className="my-5 ml-5 text-2xl font-bold">Додати товар</h1>
                <form action="#" method="POST">
                    <div className="shadow sm:overflow-hidden sm:rounded-md">
                        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                            {/*name*/}
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    Назва
                                </label>
                                <input
                                    type="text"
                                    name="first-name"
                                    autoComplete="given-name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            {/*price*/}
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    Вартість
                                </label>
                                <input
                                    type="text"
                                    name="first-name"
                                    autoComplete="given-name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            {/*category*/}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Категорія
                                </label>
                                <select
                                    name="category"
                                    autoComplete="category"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                >
                                    {categories.status === 'loaded' && categories.data.length > 0 &&
                                        (categories.data.map(category => (
                                            <option>{category.name}</option>
                                        )))}
                                </select>
                            </div>
                            {/*discount*/}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Відсоток знижки
                                </label>
                                <input
                                    type="text"
                                    autoComplete="given-name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            {/*description*/}
                            <div>
                                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                    Опис
                                </label>
                                <div className="mt-1">
                      <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Опис товару"
                          defaultValue={''}
                      />
                                </div>
                            </div>
                            {/*image*/}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Фото</label>
                                <label htmlFor="file-upload"
                                       className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                    <div className="space-y-1 text-center">
                                        <svg
                                            className="mx-auto h-12 w-12 text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <div
                                                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file"
                                                       className="sr-only"/>
                                            </div>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                                    </div>
                                </label>
                            </div>
                            {/*sizes*/}
                            <div>
                                <span className="text-sm font-medium text-gray-700">Розміри</span>
                                <ul className="flex mt-5">
                                    {sizes.map(size => (
                                        <li className="mr-3">
                                            <label className="inline-flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    className="w-5 h-5 border-gray-300 rounded"
                                                />
                                                <span className="text-sm font-medium text-gray-700">{size}</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/*colors*/}
                            <div>
                                <span className="text-sm font-medium text-gray-700">Кольори</span>
                                <ul className="flex my-5">
                                    {colors.map(color => (
                                        <li key={color} className="mr-3" onClick={handleColorClick}>
                                            <span className="text-sm font-medium text-gray-700">{color}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex">
                                    <input type="text"
                                           onChange={e => setColor(e.target.value)}
                                           value={color}
                                           className="mr-3 block rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                           placeholder="Колір"/>
                                    <button
                                        onClick={handleColors}
                                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Додати
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Додати
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddProduct;