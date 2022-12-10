import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {categoryList, getCategories} from "../../redux/slices/category";
import {getProducts, productCount, productList} from "../../redux/slices/product";
import EditProduct from "./EditProduct";

const AllProducts = () => {
    const [products, setProducts] = useState([])
    const [category] = useState(0)
    const [page] = useState(1)
    const [limit, setLimit] = useState(0)
    const [open, setOpen] = useState(false)
    const [activeProduct, setActiveProduct] = useState(null)
    const dispatch = useDispatch()
    const categories = useSelector(categoryList)
    const allProducts = useSelector(productList)
    const productsCount = useSelector(productCount)
    useEffect(() => {
        dispatch(getCategories())
        dispatch(getProducts({category, page, limit}))
    }, [limit])
    useEffect(() => {
        setProducts(allProducts)
        setLimit(productsCount)
    }, [allProducts, productsCount])
    console.log(open)
    return (
        <div>
            <h1 className="my-5 ml-5 text-2xl font-bold">Всі товари</h1>
            <div>
                <div className="mt-8 mb-5 mx-5 overflow-hidden">
                    <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {products && categories.status === 'loaded' &&
                                (products.map((product) => (
                                    <li key={product.id} className="flex py-6">
                                        <div
                                            className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img
                                                src={'http://localhost:5000/' + product.img}
                                                alt=""
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div
                                                    className="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>
                                                        <a href="#">{product.name}</a>
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
                                                            setOpen(true)
                                                            setActiveProduct(product)
                                                        }}
                                                        type="button"
                                                        className="font-medium text-indigo-600 hover:text-indigo-500 mb-2 md:mb-0 md:mr-5"
                                                    >
                                                        Редагувати
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                    >
                                                        Видалити
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
        </div>
    );
};

export default AllProducts;