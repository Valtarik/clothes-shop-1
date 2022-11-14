import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import {products} from "../assets/products";

function Sale() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };
    return (
        <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            {products.map((el) => (
                <Card
                    name={el.name}
                    price={el.price}
                    img={el.images[0]}
                    category={el.category}
                    discount={el.discount}
                    key={el.id}
                />
            ))}
        </Carousel>
    );
}

export default Sale;