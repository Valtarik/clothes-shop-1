import React, {useState, useEffect} from 'react'
import Card from "../components/Card"
import Pagination from "../components/Pagination"
import {useSelector} from "react-redux"
import {productList} from "../redux/slices/product"
import {categoryList} from "../redux/slices/category"

const SearchPage = () => {
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [currentProducts, setCurrentProducts] = useState([])
    const allProducts = useSelector(productList)
    const categories = useSelector(categoryList)
    const limit = 12

    useEffect(() => {
        setProducts(allProducts)
    }, [allProducts])

    useEffect(() => {
        const indexOfLastProduct = page * limit
        const indexOfFirstProduct = indexOfLastProduct - limit
        setCurrentProducts(products.slice(indexOfFirstProduct, indexOfLastProduct))
        setTotal(products.length)
    }, [products, page])

    return (
        <div className="mt-16 mx-5">
            <nav className="bg-gray-100 px-5 py-3 mx-10 my-3 rounded text-gray-500">Пошук</nav>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 lg:col-span-3 gap-y-10 gap-x-6 xl:gap-x-8">
                {!currentProducts &&
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                    </div>
                }
                {currentProducts && categories.status === 'loaded' &&
                    (currentProducts.map((el) => (
                        <Card
                            name={el.name}
                            price={el.price}
                            img={el.img}
                            category={categories.data[el.categoryId - 1].name}
                            discount={el.discount}
                            id={el.id}
                            key={el.id}
                        />
                    )))}
            </div>
            <div className="flex justify-center my-10">
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

export default SearchPage