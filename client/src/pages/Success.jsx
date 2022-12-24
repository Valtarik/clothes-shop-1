import React from 'react'
import {Link} from "react-router-dom"
import {getCategories} from "../redux/slices/category"
import {getProducts} from "../redux/slices/product"
import {useDispatch} from "react-redux"

const Success = () => {
    const category = 0
    const sortOption = 0
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(getCategories())
        dispatch(getProducts({category, sortOption}))
    }
    return (
        <div class="bg-gray-100 mt-16">
            <div class="bg-white p-6  md:mx-auto">
                <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
                    <path fill="currentColor"
                          d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                    </path>
                </svg>
                <div class="text-center">
                    <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Замовлення створено!</h3>
                    <p class="text-gray-600 my-2">Слідкуйте за замовленням, зареєструвавшись за допомогою email адреси,
                        вказаної в замовленні</p>
                    <p> Гарного дня! </p>
                    <div class="py-10 text-center">
                        <Link to='/' onClick={handleClick}
                              class="px-12 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded transition duration-150 ease-in-out">
                            На головну
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success