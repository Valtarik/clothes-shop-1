import Sizes from "../components/Sizes"
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import React, {useEffect, useState} from "react"
import {getOneProduct, productList} from "../redux/slices/product"
import {categoryList} from "../redux/slices/category"
import EditProduct from "../components/admin/EditProduct";
import DeleteModal from "../components/admin/DeleteModal";

export default function Product() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const product = useSelector(productList)
    const [role, setRole] = useState('')
    const [openEdit, setOpenEdit] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    useEffect(() => {
        dispatch(getOneProduct({id}))
        if (localStorage.getItem('user') === 'ADMIN') {
            setRole('ADMIN')
        }
    }, [])


    return (
        // Back button needed
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 pt-24 mx-auto">
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
                             src={'http://localhost:5000/' + product.product.img}/>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.product.name}</h1>
                            <div className="flex mb-4">


                            </div>
                            <p className="leading-relaxed">{product.info.description}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex items-center">
                                    <span className="mr-3">Колір</span>
                                    <div className="relative">
                                        <select
                                            className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-base pl-3 pr-10">
                                            {product.info.colors.map((color) => (
                                                <option key={color}>{color}</option>
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
                                            className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-base pl-3 pr-10">
                                            {product.info.sizes.map((size) => (
                                                <option key={size}>{size}</option>
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
                            <div className="flex items-center">
                                <span
                                    className="title-font font-medium text-xl text-gray-900">{product.product.price + ' грн'}</span>

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
                                            className="flex ml-10 text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Видалити
                                        </button>
                                        {openDelete && <DeleteModal open={openDelete} setOpen={setOpenDelete}
                                                                    id={product.product.id}/>}
                                    </div>
                                ) : (
                                    <button
                                        className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Додати
                                        в кошик
                                    </button>
                                )}


                            </div>
                        </div>
                    </div>
                }
            </div>
            <Sizes/>
        </section>
    )
}
