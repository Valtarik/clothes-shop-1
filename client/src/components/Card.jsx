import React from 'react';
import {Link} from "react-router-dom";
import {getOneProduct} from "../redux/slices/product";
import {useDispatch} from "react-redux";

function Card(props) {
    const {id, name, price, img, category, discount} = props
    let currentPrice = Math.ceil(price - (price * (discount / 100)))
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(getOneProduct({id}))
    }
    return (
        <div className="my-6 w-[300px] mx-auto">
            <div className="group relative">
                <div
                    className="h-96 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                    <img src={'http://localhost:5000/' + img}
                         className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <Link to={'/product/' + id} onClick={handleClick}>
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