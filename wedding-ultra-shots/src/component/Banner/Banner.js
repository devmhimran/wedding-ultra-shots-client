import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import Banner1 from '../../Assets/Banner-img/banner-1.jpg'
import Banner2 from '../../Assets/Banner-img/banner-2.jpg'
import Banner3 from '../../Assets/Banner-img/banner-3.jpg'
import Banner4 from '../../Assets/Banner-img/banner-4.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (

        <div className="banner">
            <div className="hero__area">
                <div className="banner__hero">
                    <h1>Welcome to <br /> Wedding <br /> Ultrashots</h1>
                </div>
            </div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner__img"
                        src={Banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner__img"
                        src={Banner2}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner__img"
                        src={Banner3}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner__img"
                        src={Banner4}
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;