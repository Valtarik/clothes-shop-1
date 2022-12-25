import React, {useEffect, useState} from 'react'

const Pagination = ({count, setPage, limit, page}) => {
    let [allPages, setAllPages] = useState([])
    useEffect(() => {
        let pages = []
        let totalPages = Math.ceil(count / limit)
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i)
        }
        setAllPages(pages)
    }, [count, page])

    return (
        <div>
            <ul className="flex items-center space-x-1 font-light">
                {page > 1 && (
                    <li className="border border-gray-300 rounded-full text-gray-500 hover:bg-gray-200 hover:border-gray-200 bg-white cursor-pointer">
                    <span onClick={() => setPage(page - 1)} className="w-8 h-8 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                        </svg>
                    </span>
                    </li>
                )}
                {allPages.map((pageNumber, index) => (
                        <li
                            key={index}
                            className={
                                pageNumber === page
                                    ? "border rounded-full bg-purple-500 border-purple-500 text-white cursor-pointer"
                                    : "border border-gray-300 rounded-full text-gray-500 hover:bg-gray-200 hover:border-gray-200 bg-white cursor-pointer"
                            }>
                            <span onClick={() => setPage(pageNumber)}
                                  className="w-8 h-8 flex items-center justify-center">{pageNumber}</span>
                        </li>
                    )
                )}
                {page < allPages.length && (
                    <li onClick={() => setPage(page + 1)}
                        className="border border-gray-300 rounded-full text-gray-500 hover:bg-gray-200 hover:border-gray-200 bg-white cursor-pointer">
                    <span className="w-8 h-8 flex items-center justify-center">
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
                    </span>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Pagination