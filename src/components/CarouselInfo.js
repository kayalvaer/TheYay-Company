import React from 'react';
import image from "./home/caimgs/carousel-1.jpg";
import image2 from "./home/caimgs/carousel-2.jpg";
import image3 from "./home/caimgs/carousel-3.jpg";
import Carousel from 'react-bootstrap/Carousel';

function CarouselContent() {
    return (
        <Carousel className="img-responsive "control="true">
                <Carousel.Item interval={1000} >
                <img
                    className="d-block w-100"
                    src={image}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={image2}                        
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        
        
    )
}

export default CarouselContent
