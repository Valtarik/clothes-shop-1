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

                            {/*<a*/}
                            {/*    href="#"*/}
                            {/*    className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"*/}
                            {/*>*/}
                            {/*    Learn More*/}
                            {/*</a>*/}
                        </div>
                    </div>
                </div>
            </section>
            {/*<img src={homeLogo} alt="" className="block lg:hidden mt-12"/>*/}
            {/*<div className="flex justify-around items-center lg:my-12 mb-12 bg-violet-200 min-h-[200px]">*/}
            {/*    <img src={jolie} alt="" className="hidden lg:block"/>*/}
            {/*    <div className="flex flex-col justify-center items-center lg:mr-20">*/}
            {/*        <span className="mb-5 uppercase">Тренд {year} року</span>*/}
            {/*        <span className="mb-5 uppercase font-bold text-lg">Тому що ти цього варта</span>*/}
            {/*        <Link*/}
            {/*            to="/catalogue"*/}
            {/*            className="px-6 py-2.5 bg-purple-500 text-white  leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"*/}
            {/*        >Перейти до каталогу</Link>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <h2 className="my-5 text-center font-sans text-2xl font-semibold">Акційні пропозиції</h2>
            <Sale/>
            <About/>
        </>
    );
}

export default Home

// <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
//     < div className = "absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25" > < /div>
//
// <div
//     className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
// >
//     <div className="max-w-xl text-center sm:text-left">
//         <h1 className="text-3xl font-extrabold sm:text-5xl">
//             Let us find your
//
//             <strong className="block font-extrabold text-rose-700">
//                 Forever Home.
//             </strong>
//         </h1>
//
//         <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
//             tenetur fuga ducimus numquam ea!
//         </p>
//
//         <div className="mt-8 flex flex-wrap gap-4 text-center">
//             <a
//                 href="#"
//                 className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
//             >
//                 Get Started
//             </a>
//
//             <a
//                 href="#"
//                 className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
//             >
//                 Learn More
//             </a>
//         </div>
//     </div>
// </div>
// </section>
