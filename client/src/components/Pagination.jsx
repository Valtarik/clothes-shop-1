import React from 'react';

const Pagination = () => {
    return (
        <div>
            <ul className="flex items-center space-x-1 font-light">
                <li
                    className="border border-gray-300 rounded-full text-gray-500 hover:bg-gray-200 hover:border-gray-200 bg-white"
                >
                    <a href="#" className="w-8 h-8 flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </a>
                </li>
                <li
                    className="border border-gray-300 rounded-full text-gray-500 hover:bg-gray-200 hover:border-gray-200 bg-white"
                >
                    <a href="#" className="w-8 h-8 flex items-center justify-center">1</a>
                </li>
                <li className="border rounded-full bg-purple-500 border-purple-500 text-white">
                    <a href="#" className="w-8 h-8 flex items-center justify-center">2</a>
                </li>
                <li
                    className="border border-gray-300 rounded-full text-gray-500 hover:bg-gray-200 hover:border-gray-200 bg-white"
                >
                    <a href="#" className="w-8 h-8 flex items-center justify-center">3</a>
                </li>
                <li
                    className="border border-gray-300 rounded-full text-gray-500 hover:bg-gray-200 hover:border-gray-200 bg-white"
                >
                    <a href="#" className="w-8 h-8 flex items-center justify-center">4</a>
                </li>
                <li
                    className="border border-gray-300 rounded-full text-gray-500 hover:bg-gray-200 hover:border-gray-200 bg-white"
                >
                    <a href="#" className="w-8 h-8 flex items-center justify-center">5</a>
                </li>
                <li
                    className="border border-gray-300 rounded-full text-gray-500 hover:bg-gray-200 hover:border-gray-200 bg-white"
                >
                    <a href="#" className="w-8 h-8 flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Pagination