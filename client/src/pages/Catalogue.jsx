import React, {Fragment, useState, useEffect} from 'react'
import {Dialog, Menu, Transition} from '@headlessui/react'
import {XMarkIcon} from '@heroicons/react/24/outline'
import {ChevronDownIcon, FunnelIcon} from '@heroicons/react/20/solid'
import Card from "../components/Card"
import Search from "../components/Search"
import {useDispatch, useSelector} from "react-redux"
import {categoryList, getCategories} from "../redux/slices/category"
import {getProducts, productList} from "../redux/slices/product"
import Pagination from "../components/Pagination";

const sortOptions = ['Сортувати', 'Новинки', 'Спочатку дешевше', 'Спочатку дорожче']

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Catalogue() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [sortOption, setSortOption] = useState(0)
    const dispatch = useDispatch()
    const categories = useSelector(categoryList)
    const allProducts = useSelector(productList)
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(allProducts)
    }, [allProducts])
    useEffect(() => {
        dispatch(getCategories())
        dispatch(getProducts())
    }, [])

    const handleCategory = (event) => {
        event.preventDefault()
        let filtered = allProducts.filter(product => {
            return parseInt(product.categoryId) === parseInt(event.target.value)
        })
        setProducts(filtered)
        setSortOption(0)
    }

    const handleSort = (option) => {
        if (option === 1) {
            let sorted = [...products].sort((a, b) => b.id - a.id)
            setProducts(sorted)
        } else if (option === 2) {
            let sorted = [...products].sort((a, b) => parseInt(a.price) - parseInt(b.price))
            setProducts(sorted)
        } else if (option === 3) {
            let sorted = [...products].sort((a, b) => parseInt(b.price) - parseInt(a.price))
            setProducts(sorted)
        }
    }

    return (
        <div className="bg-white">
            <div className='mt-20 flex justify-center lg:hidden'>
                <Search/>
            </div>
            <div>
                {/* Mobile filter dialog */}
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25"/>
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel
                                    className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                    <div className="flex items-center justify-between px-4 mt-12">
                                        <h2 className="text-lg font-medium text-gray-900">Категорії</h2>
                                        <button
                                            type="button"
                                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                            onClick={() => setMobileFiltersOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                        </button>
                                    </div>

                                    {/* Filters */}
                                    <form className="mt-4 border-t border-gray-200">
                                        <h3 className="sr-only">Categories</h3>
                                        <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                            {categories.status === 'loading' &&
                                                <div className="flex items-center justify-center space-x-2">
                                                    <div
                                                        className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                                                    <div
                                                        className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                                                    <div
                                                        className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                                                </div>
                                            }
                                            {categories.status === 'loaded' && categories.data.length > 0 &&
                                                (categories.data.map((category) => (
                                                    <li key={category.id}>
                                                        <button
                                                            onClick={handleCategory}
                                                            value={category.id}
                                                            className="block w-full text-start px-3 py-3 cursor-pointer hover:bg-gray-100 rounded-lg focus:bg-gray-200">
                                                            {category.name}
                                                        </button>
                                                    </li>
                                                )))}
                                        </ul>

                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 ml-10">Каталог</h1>

                        <div className="flex items-center">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button
                                        className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        {sortOptions[sortOption]}
                                        <ChevronDownIcon
                                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items
                                        className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {sortOptions.map((option, i) => (
                                                <Menu.Item key={option}>
                                                    {({active}) => (
                                                        <p
                                                            onClick={() => {
                                                                setSortOption(i)
                                                                handleSort(i)
                                                            }}

                                                            className={classNames(
                                                                sortOption === i ? 'font-medium text-gray-900' : 'text-gray-500',
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm cursor-pointer'
                                                            )}
                                                        >
                                                            {option}
                                                        </p>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                            <button
                                type="button"
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon className="h-5 w-5" aria-hidden="true"/>
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pt-6 pb-24">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                <ul role="list"
                                    className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                    {categories.status === 'loading' &&
                                        <div className="flex items-center justify-center space-x-2">
                                            <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                                            <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                                            <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                                        </div>
                                    }
                                    {categories.status === 'loaded' && categories.data.length > 0 &&
                                        (categories.data.map((category) => (
                                            <li key={category.id}>
                                                <button
                                                    onClick={handleCategory}
                                                    value={category.id}
                                                    className="block w-full text-start px-3 py-3 cursor-pointer hover:bg-gray-100 rounded-lg focus:bg-gray-200">
                                                    {category.name}
                                                </button>
                                            </li>
                                        )))}
                                </ul>

                            </form>
                            {/* Product grid */}
                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 lg:col-span-3 gap-y-10 gap-x-6 xl:gap-x-8">
                                {!products &&
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                                        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                                        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                                    </div>
                                }
                                {products && categories.status === 'loaded' &&
                                    (products.map((el) => (
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
                                <div className="col-start-1 xl:col-start-2 mx-auto">
                                    <Pagination/>
                                </div>
                            </div>

                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Catalogue

