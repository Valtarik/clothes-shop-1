import React from 'react'
import error from '../assets/error.jpg'
import {Link} from "react-router-dom"

const NotFound = () => {
    return (
        <section className="flex items-center h-full p-16">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <img src={error} alt="Error"/>
                    <p className="text-2xl font-semibold md:text-3xl">Упс, схоже ви трохи згубились.</p>
                    <p className="mt-4 mb-8">Та не хвилюйтесь, давайте почнемо спочатку</p>
                    <Link
                        to="/"
                        className="block w-full rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-500 sm:w-auto"
                    >
                        На головну
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default NotFound