import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import {searchProduct} from "../redux/slices/product"
import {useNavigate} from "react-router-dom"

function Search() {
    const [searchQuery, setSearchQuery] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSearch = () => {
        dispatch(searchProduct({searchQuery}))
        navigate('/search')
    }

    return (
        <div className="flex content-center">
            <div className="xl:w-96">
                <div className="input-group relative flex items-stretch w-full">
                    <input type="search"
                           onChange={e => setSearchQuery(e.target.value)}
                           value={searchQuery}
                           className="relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded-l transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:ring-0 focus:ring-offset-0"
                           placeholder="Пошук"/>
                    <button
                        onClick={handleSearch}
                        className="btn inline-block px-6 py-2.5 bg-purple-500 text-white font-medium text-xs leading-tight uppercase rounded-r hover:bg-purple-700 focus:bg-purple-700 focus:outline-none focus:ring-0 active:bg-purple-800 transition duration-150 ease-in-out flex items-center"
                        type="button">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search"
                             className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Search