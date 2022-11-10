import React from 'react';
import {Link} from "react-router-dom";

function Sidebar() {
    return (
        <div className="w-60 h-max bg-white px-1">
            <ul className="relative">
                <li className="relative">
                    <Link to='/catalogue' className="flex items-center
                    text-lg py-4 px-6 h-12 overflow-hidden text-gray-700
                    text-ellipsis whitespace-nowrap rounded hover:text-gray-900
                    hover:bg-gray-100 focus:bg-gray-100 transition duration-300
                    ease-in-out cursor-pointer">
                        Сукні
                    </Link>
                </li>
                <li className="relative">
                    <Link to='/catalogue' className="flex items-center
                    text-lg py-4 px-6 h-12 overflow-hidden text-gray-700
                    text-ellipsis whitespace-nowrap rounded hover:text-gray-900
                    hover:bg-gray-100 focus:bg-gray-100 transition duration-300
                    ease-in-out cursor-pointer">
                        Спідниці
                    </Link>
                </li>
                <li className="relative">
                    <Link to='/catalogue' className="flex items-center
                    text-lg py-4 px-6 h-12 overflow-hidden text-gray-700
                    text-ellipsis whitespace-nowrap rounded hover:text-gray-900
                    hover:bg-gray-100 focus:bg-gray-100 transition duration-300
                    ease-in-out cursor-pointer">
                        Лосини
                    </Link>
                </li>
                <li className="relative">
                    <Link to='/catalogue' className="flex items-center
                    text-lg py-4 px-6 h-12 overflow-hidden text-gray-700
                    text-ellipsis whitespace-nowrap rounded hover:text-gray-900
                    hover:bg-gray-100 focus:bg-gray-100 transition duration-300
                    ease-in-out cursor-pointer">
                        Костюми
                    </Link>
                </li>
                <li className="relative">
                    <Link to='/catalogue' className="flex items-center
                    text-lg py-4 px-6 h-12 overflow-hidden text-gray-700
                    text-ellipsis whitespace-nowrap rounded hover:text-gray-900
                    hover:bg-gray-100 focus:bg-gray-100 transition duration-300
                    ease-in-out cursor-pointer">
                        Сарафани
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar