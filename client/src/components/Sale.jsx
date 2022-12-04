import React, {useEffect} from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Card from "./Card"
import {useDispatch, useSelector} from "react-redux"
import {categoryList, getCategories} from "../redux/slices/category"
import {getProducts, productList} from "../redux/slices/product"

function Sale() {
    const dispatch = useDispatch()
    const categories = useSelector(categoryList)
    const products = useSelector(productList)

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getProducts())
    }, [])
    const responsive = {
        point3: {
            breakpoint: {max: 4000, min: 3000},
            items: 6,
        },
        point2: {
            breakpoint: {max: 3000, min: 2000},
            items: 5,
        },
        point: {
            breakpoint: {max: 2000, min: 1500},
            items: 4,
        },
        desktop: {
            breakpoint: {max: 1500, min: 1024},
            items: 3,
        },
        tablet: {
            breakpoint: {max: 1024, min: 630},
            items: 2,
        },
        mobile: {
            breakpoint: {max: 630, min: 0},
            items: 1,
        }
    };
    return (
        <>
            {products.status === 'loading' && categories.status === 'loading' &&
                <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                </div>
            }
            {products.status === 'loaded' &&
                products.data.length > 0 &&
                categories.status === 'loaded' &&
                categories.data.length > 0 &&
                (<Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {products.data.map((el) => {
                            if (el.discount > 0) {
                                return (<Card
                                    name={el.name}
                                    price={el.price}
                                    img={el.img}
                                    category={categories.data[el.categoryId - 1].name}
                                    discount={el.discount}
                                    key={el.id}
                                />)
                            }
                            return null
                        }
                    )}
                </Carousel>)}
        </>
    )
}

export default Sale