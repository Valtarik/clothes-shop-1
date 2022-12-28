import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import {updateProduct} from "../../redux/slices/product"
import {useNavigate} from "react-router-dom";

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

const EditProduct = ({setOpen, product}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [color, setColor] = useState('')
    const [colors, setColors] = useState([...product.info.colors])
    const [name, setName] = useState(product.product.name)
    const [price, setPrice] = useState(product.product.price)
    const [discount, setDiscount] = useState(product.product.discount)
    const [description, setDescription] = useState(product.info.description)
    const [file, setFile] = useState(null)
    const [productSizes, setProductSizes] = useState([...product.info.sizes])

    const handleSizes = (event) => {
        if (!event.target.checked) {
            productSizes.splice(productSizes.indexOf(event.target.value), 1)
            setProductSizes([...productSizes])
        } else {
            productSizes.push(event.target.value)
            setProductSizes([...productSizes])
        }
    }

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

    const handleFile = (event) => {
        setFile(event.target.files[0])
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('id', product.product.id)
        formData.append('name', name)
        formData.append('price', price)
        formData.append('discount', discount)
        formData.append('img', file)
        formData.append('description', description)
        formData.append('sizes', JSON.stringify(productSizes))
        formData.append('colors', JSON.stringify(colors))
        dispatch(updateProduct(formData))
        setName('')
        setPrice('')
        setDiscount('')
        setColors([])
        setDescription('')
        setFile(null)
        setProductSizes([])
        setOpen(false)
        navigate(0)
    }

    return (
        <>
            <div
                className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none h-full overflow-y-auto pt-32 md:overflow-none md:pt-0">
                <div className="relative w-full my-6 mx-auto max-w-3xl">
                    <form action="#" method="POST" onSubmit={handleSubmit}>
                        <div className="shadow md:overflow-hidden sm:rounded-md">
                            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">

                                <div className="md:flex">
                                    <div className="w-1/2">
                                        {/*name*/}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Назва
                                            </label>
                                            <input
                                                onChange={e => setName(e.target.value)}
                                                value={name}
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        {/*price*/}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Вартість
                                            </label>
                                            <input
                                                onChange={e => setPrice(e.target.value)}
                                                value={price}
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        {/*discount*/}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Відсоток знижки
                                            </label>
                                            <input
                                                onChange={e => setDiscount(e.target.value)}
                                                value={discount}
                                                type="text"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="w-full ml-5">
                                        {/*description*/}
                                        <div className="w-full">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Опис
                                            </label>
                                            <div className="mt-1">
                                  <textarea
                                      onChange={e => setDescription(e.target.value)}
                                      value={description}
                                      rows={5}
                                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      placeholder="Опис товару"
                                  />
                                            </div>
                                        </div>
                                        {/*image*/}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Фото</label>
                                            <label htmlFor="file-upload"
                                                   className="mt-1 cursor-pointer flex">
                                                <div className="space-y-1 text-center">
                                                    <div className="flex text-sm text-gray-600">
                                                        <div
                                                            className="relative rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                                        >
                                                            <span>Upload a file</span>
                                                            <input
                                                                id="file-upload"
                                                                name="file-upload"
                                                                type="file"
                                                                className="sr-only"
                                                                onChange={handleFile}
                                                            />
                                                        </div>
                                                    </div>
                                                    <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:flex">
                                    {/*sizes*/}
                                    <div>
                                        <span className="text-sm font-medium text-gray-700">Розміри</span>
                                        <ul className="flex mt-5">
                                            {sizes.map(size => (
                                                <li key={size} className="mr-3" onClick={handleSizes}>
                                                    <label className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            defaultChecked={productSizes.includes(size)}
                                                            value={size}
                                                            className="w-5 h-5 border-gray-300 rounded"
                                                        />
                                                        <span
                                                            className="text-sm font-medium text-gray-700">{size}</span>
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/*colors*/}
                                    <div className="ml-5">
                                        <span className="text-sm font-medium text-gray-700">Кольори</span>
                                        <ul className="flex my-5">
                                            {colors.map(color => (
                                                <li key={color} className="mr-3" onClick={handleColorClick}>
                                                    <span
                                                        className="text-sm font-medium text-gray-700 cursor-pointer">{color}</span>
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

                            </div>

                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button
                                    onClick={() => setOpen(false)}
                                    className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                >
                                    Відміна
                                </button>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ml-2"
                                >
                                    Оновити
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default EditProduct