import React from 'react';

function Contacts() {
    return (
        <div className="container my-24 px-6 mx-auto">

            <section className="mb-32 text-gray-800">
                <div className="flex flex-wrap">
                    <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                        <h2 className="text-3xl font-bold mb-6">Зв'яжіться з нами</h2>
                        <div className="flex flex-col">
                            <a className="text-gray-500 mb-2">м. Київ, вул. Бєломорська 1</a>
                            <a href="tel:+380502557378" className="text-gray-500 mb-2">+ 38 (050) 255-73-78</a>
                            <a href="mailto:info@gmail.com" className="text-gray-500 mb-2">info@gmail.com</a>
                        </div>
                    </div>
                    <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                        <form>
                            <div className="form-group mb-6">
                                <input type="text" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                                       placeholder="Ім'я" />
                            </div>
                            <div className="form-group mb-6">
                                <input type="email" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                                       placeholder="Email" />
                            </div>
                            <div className="form-group mb-6">
            <textarea className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none
            " placeholder="Коментар"></textarea>
                            </div>

                            <button type="submit" className="
            w-full
            px-6
            py-2.5
            bg-purple-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-purple-700 hover:shadow-lg
            focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-purple-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Відправити</button>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Contacts;