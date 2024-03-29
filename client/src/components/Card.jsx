import React from 'react'
import {Link} from "react-router-dom"

function Card(props) {
    const {id, name, price, img, category, discount, stock, currentPrice} = props
    return (
        <div className={`my-6 w-[300px] mx-auto ${stock ? '' : 'opacity-50'}`}>
            <div className="group relative">
                <div
                    className="h-96 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                    <img src={`${process.env.REACT_APP_API_URL}` + '/' + img[0]}
                         className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <Link to={'/product/' + id}>
                                <span aria-hidden="true" className="absolute inset-0"></span>
                                {name}
                            </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{category}</p>
                    </div>

                    <div className="flex flex-col">
                        {discount > 0 &&
                            <p className="text-sm font-medium text-gray-500 line-through">{price} грн</p>

                        }
                        <p className="text-sm font-medium text-gray-900">{currentPrice} грн</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;