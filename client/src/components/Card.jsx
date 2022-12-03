import React from 'react';

function Card(props) {
    const {name, price, img, category, discount} = props
    let currentPrice = Math.ceil(price - (price * (discount / 100)))
    return (
        <div className="my-6 w-[300px] mx-auto">
            <div className="group relative">
                <div
                    className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img src={'http://localhost:5000/' + img}
                         className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <a href="#">
                                <span aria-hidden="true" className="absolute inset-0"></span>
                                {name}
                            </a>
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