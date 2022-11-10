import React from 'react';
import {Link} from "react-router-dom";

function Card() {
    return (
        <div className="flex justify-center mb-5">
            <div className="p-4 w-[300px] min-h-[300px] hover:scale-105 duration-200">
                <Link to="/product">
                    <img className=" h-80 w-full object-cover" src="https://nenka.ua/assets/images/product/2774/IMG_1364.JPG" alt=""/>
                    <span className="bg-red-600 text-white text-sm p-2.5 rounded-lg">ЗНИЖКА</span>
                    <h2 className="text-gray-900 text-xl font-medium my-2 text-center">Сукня</h2>
                    <h2 className='uppercase m-0 mb-2 text-[12px] text-gray-400'>Cукні</h2>
                </Link>
                <div className="p-6">
                    <span className="text-gray-400 line-through">700 грн</span>
                    <div className="flex justify-between">
                        <span className="font-bold">600 грн</span>
                        <button type="button"
                                className=" inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Купити
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Card;