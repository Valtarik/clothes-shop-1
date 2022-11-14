import React from 'react';
import {Link} from "react-router-dom";
import Sale from "../components/Sale";
import About from "../components/About";
import jolie from "../assets/jolie.png"
import homeLogo from '../assets/home-logo.jpg'

function Home() {
    const year = new Date().getFullYear();
    return (
        <>

            <img src={homeLogo} alt="" className="block lg:hidden mt-12" />
            <div className="flex justify-around items-center lg:my-12 mb-12 bg-violet-200 min-h-[200px]">
                <img src={jolie} alt="" className="hidden lg:block" />
                <div className="flex flex-col justify-center items-center lg:mr-20">
                    <span className="mb-5 uppercase">Тренд {year} року</span>
                    <span className="mb-5 uppercase font-bold text-lg">Тому що ти цього варта</span>
                    <Link
                        to="/catalogue"
                        className="px-6 py-2.5 bg-purple-500 text-white  leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    >Перейти до каталогу</Link>
                </div>
            </div>
            <h2 className="my-5 text-center font-sans text-2xl font-semibold">Акційні пропозиції</h2>
            <Sale />
            <About />
        </>
    );
}

export default Home