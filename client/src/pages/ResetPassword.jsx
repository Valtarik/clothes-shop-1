import React from 'react';

const ResetPassword = () => {
    return (
        <div
            className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10 mx-auto mt-20 mb-5">
            <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl">
                Створити пароль
            </div>
            <div className="mt-8">
                <form action="#" autoComplete="off">
                    <div className="flex flex-col mb-2">
                        <div className="flex relative ">
                    <span
                        className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792"
                             xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                </path>
                            </svg>
                    </span>
                            <input type="password"
                                   className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent"
                                   placeholder="Введіть пароль"/>
                        </div>
                    </div>

                    <div className="flex w-full">
                        <button type="submit"
                                className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Змінити пароль
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;