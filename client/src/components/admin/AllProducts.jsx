import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {categoryList, getCategories} from "../../redux/slices/category"
import {getProducts, productList} from "../../redux/slices/product"
import {useNavigate} from "react-router-dom"
import Pagination from "../Pagination"

const AllProducts = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [currentProducts, setCurrentProducts] = useState([])
    const category = 0
    const sortOption = 0
    const dispatch = useDispatch()
    const categories = useSelector(categoryList)
    const allProducts = useSelector(productList)
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const limit = 30
    useEffect(() => {
        dispatch(getCategories())
        dispatch(getProducts({category, sortOption}))
    }, [dispatch, page])
    useEffect(() => {
        const indexOfLastProduct = page * limit
        const indexOfFirstProduct = indexOfLastProduct - limit
        setCurrentProducts(products.slice(indexOfFirstProduct, indexOfLastProduct))
        setTotal(products.length)
    }, [products])
    useEffect(() => {
        setProducts(allProducts)
    }, [allProducts])
    return (
        <div>
            <h1 className="my-5 ml-5 text-2xl font-bold">Всі товари</h1>
            <div>
                <div className="mt-8 mb-5 mx-5 overflow-hidden">
                    <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-200">
                            {currentProducts && categories.status === 'loaded' &&
                                (currentProducts.map((product) => (
                                    <li key={product.id} className="flex py-6">
                                        <div
                                            className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img
                                                src={'https://clothes-shop-production.up.railway.app/' + product.img}
                                                alt=""
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div
                                                    className="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>
                                                        <p>{product.name}</p>
                                                    </h3>
                                                    <p className="ml-4">{product.price}</p>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-500">Знижка {product.discount}%</p>
                                            </div>
                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                <p className="text-gray-500">{categories.data[product.categoryId - 1].name}</p>

                                                <div className="flex flex-col md:flex-row">
                                                    <button
                                                        onClick={() => {
                                                            navigate(`/product/${product.id}`)
                                                        }}
                                                        type="button"
                                                        className="font-medium text-indigo-600 hover:text-indigo-500 mb-2 md:mb-0"
                                                    >
                                                        Перейти
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-5">
                {total > limit && (
                    <Pagination
                        count={total}
                        setPage={setPage}
                        limit={limit}
                        page={page}
                    />
                )}
            </div>
        </div>
    )
}

export default AllProducts