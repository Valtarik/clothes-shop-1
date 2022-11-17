import React from 'react';
import {Link} from "react-router-dom";
import Sale from "../components/Sale";
import About from "../components/About";
import hero from "../assets/hero.jpg"

function Home() {
    const year = new Date().getFullYear();
    return (
        <>
            <section
                className="relative  bg-cover bg-center bg-no-repeat mt-12"
                style={{backgroundImage: `url(${hero})`}}
            >
                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25">< /div>
                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Особлива колекція

                            <strong className="block font-extrabold text-purple-700">
                                {year} року.
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                            Тому що ти цього варта!
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <Link
                                to="/catalogue"
                                className="block w-full rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-500 sm:w-auto"
                            >
                                Перейти до каталогу
                            </Link>

                        </div>
                    </div>
                </div>
            </section>

            <h2 className="my-5 text-center font-sans text-2xl font-semibold">Акційні пропозиції</h2>
            <Sale/>
            <About/>
        </>
    );
}

export default Home
