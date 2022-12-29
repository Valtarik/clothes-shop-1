import Sizes from "../components/Sizes"
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import React, {useEffect, useState} from "react"
import {getOneProduct, productList} from "../redux/slices/product"
import EditProduct from "../components/admin/EditProduct"
import DeleteModal from "../components/admin/DeleteModal"
import {addProduct} from "../redux/slices/cart"
import Breadcrumb from "../components/Breadcrumb"
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Product() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const productData = useSelector(productList)
    const [product, setProduct] = useState(null)
    const [role, setRole] = useState('')
    const [openEdit, setOpenEdit] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [color, setColor] = useState(null)
    const [size, setSize] = useState(null)
    const [colorErr, setColorErr] = useState('')
    const [sizeErr, setSizeErr] = useState('')

    useEffect(() => {
        dispatch(getOneProduct({id}))
        if (localStorage.getItem('user') === 'ADMIN') {
            setRole('ADMIN')
        }
    }, [dispatch])

    useEffect(() => {
        setProduct(productData)
    }, [productData])

    const handleAddToCart = (e) => {
        e.preventDefault()
        if (!color) {
            setColorErr('Оберіть колір')
        }
        if (!size) {
            setSizeErr('та оберіть розмір')
        }
        if (colorErr === null && sizeErr === null) {
            const productData = {
                productId: product.product.id,
                name: product.product.name,
                img: product.product.img,
                color,
                size,
                price: parseInt(product.product.price),
                currentPrice: product.product.currentPrice,
                quantity: 1,
                discount: product.product.discount
            }
            dispatch(addProduct({...productData}))
            toast.success(`${product.product.name} додано в кошик`, {
                position: "bottom-right",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            })
        }
    }

    const handleColor = (e) => {
        e.preventDefault()
        setColor(e.target.value)
        setColorErr(null)
    }
    const handleSize = (e) => {
        e.preventDefault()
        setSize(e.target.value)
        setSizeErr(null)
    }
    return (
        <section className="text-gray-600 body-font overflow-hidden pt-12">
            {product && (
                <Breadcrumb name={product.product.name}/>
            )}
            <div className="container px-5 pt-5 mx-auto">
                {!product &&
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                    </div>
                }
                {product &&
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full h-[600px] object-cover object-center rounded"
                             src={`${process.env.REACT_APP_API_URL}` + product.product.img}/>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.product.name}</h1>
                            <div className="flex mb-4">


                            </div>
                            <p className="leading-relaxed">{product.info.description}</p>
                            <div className="flex mt-6 items-center pb-5 ">
                                <div className="flex items-center">
                                    <span className="mr-3">Колір</span>
                                    <div className="relative">
                                        <select
                                            onChange={handleColor}
                                            className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-base pl-3 pr-10">
                                            <option value={''} selected disabled hidden>Колір</option>
                                            {product.info.colors.map((color, index) => (
                                                <option key={index}>{color}</option>
                                            ))}
                                        </select>
                                        <span
                                            className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round"
                                             strokeLinejoin="round" strokeWidth="2"
                                             className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                    </div>
                                </div>
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Розмір</span>
                                    <div className="relative">
                                        <select
                                            onChange={handleSize}
                                            className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-base pl-3 pr-10">
                                            <option value={''} selected disabled hidden>Розмір</option>
                                            {product.info.sizes.map((size) => (
                                                <option key={size} value={size}>{size}</option>
                                            ))}
                                        </select>
                                        <span
                                            className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round"
                                             strokeLinejoin="round" strokeWidth="2"
                                             className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                    </div>

                                </div>
                            </div>
                            <div className="border-b-2 border-gray-100 mb-5 items-center">
                                {(colorErr || sizeErr) && (
                                    <span
                                        className="text-sm text-red-500 ml-10 mt-2 opacity-80">{colorErr} {sizeErr}</span>
                                )}

                            </div>
                            <div className="flex items-center">
                                <div className="flex flex-col">
                                    {product.product.discount > 0 &&
                                        <span
                                            className="title-font font-medium text-xl text-gray-500 line-through">{product.product.price + ' грн'}</span>
                                    }
                                    <span
                                        className="title-font font-medium text-xl text-gray-900">{product.product.currentPrice + ' грн'}</span>
                                </div>


                                {role === 'ADMIN' ? (
                                    <div className="flex">
                                        <button
                                            onClick={() => setOpenEdit(true)}
                                            className="flex ml-20 text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Редагувати
                                        </button>
                                        {openEdit
                                            ? (<EditProduct
                                                setOpen={setOpenEdit}
                                                product={product}
                                            />)
                                            : null
                                        }
                                        <button
                                            onClick={() => setOpenDelete(true)}
                                            className="flex ml-10 text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Наявність
                                        </button>
                                        {openDelete && <DeleteModal open={openDelete} setOpen={setOpenDelete}
                                                                    id={product.product.id}/>}
                                    </div>
                                ) : (
                                    <button
                                        onClick={handleAddToCart}
                                        disabled={!product.product.stock}
                                        className={`flex ml-auto text-white  border-0 py-2 px-6 focus:outline-none  rounded ${product.product.stock ? 'bg-purple-500 hover:bg-purple-600' : 'bg-gray-500 opacity-50'}`}>Додати
                                        в кошик
                                    </button>
                                )}


                            </div>
                        </div>
                    </div>
                }
            </div>
            <Sizes/>
            <ToastContainer
                position="bottom-right"
                autoClose={1500}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
                theme="light"
            />
        </section>
    )
}
