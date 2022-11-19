export default function Product() {
    //const [selectedColor, setSelectedColor] = useState(product.colors[0])
    //const [selectedSize, setSelectedSize] = useState(product.sizes[2])

    return (
        // Back button needed

        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                         src="https://nenka.ua/assets/images/product/2774/IMG_1364.JPG"/>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the
                            Rye</h1>
                        <div className="flex mb-4">


                        </div>
                        <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave
                            tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole
                            raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue
                            bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami
                            cardigan.</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex">
                                <span className="mr-3">Color</span>
                                <button
                                    className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button
                                    className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button
                                    className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                            </div>
                            <div className="flex ml-6 items-center">
                                <span className="mr-3">Size</span>
                                <div className="relative">
                                    <select
                                        className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-base pl-3 pr-10">
                                        <option>SM</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    <span
                                        className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                     className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">58 грн</span>
                            <button
                                className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Додати
                                в кошик
                            </button>
                            {/*<button*/}
                            {/*    className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Редагувати*/}
                            {/*</button>*/}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}