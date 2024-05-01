import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { carouselItemsforMobile, carouselItemsforDesktop } from '../Hepler.jsx';

import '../style/ImageCarousel.css';

const ExampleCarouselImage = ({ src, alt }) => {
    return (
        <img
            className="d-block w-100"
            src={src}
            alt={alt}
            style={{ objectFit: 'contain', height: 'auto' }}
        />
    );
};

const ImageCarousel = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    ;

    const carouselDivStyle = {
        position: 'relative',
        zIndex: '-1',
        marginTop: '0px'
    };

    const getCarouselItems = () => {
        if (windowWidth <= 768) {
            return (
                <Carousel style={carouselDivStyle} className='carousel-mobile'
                    controls={false} indicators={true}
                >

                    {carouselItemsforMobile.map((item, index) => (
                        <Carousel.Item key={index} interval={4000}
                            className='carousel-item'
                        >
                            <ExampleCarouselImage src={item.src} alt={item.alt} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            );
        } else {
            return (
                <Carousel style={carouselDivStyle} className='carousel'
                    controls={false} indicators={true}
                >
                    {carouselItemsforDesktop.map((item, index) => (
                        <Carousel.Item key={index} interval={4000}
                            className='carousel-item'

                        >
                            <ExampleCarouselImage src={item.src} alt={item.alt} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            );
        }
    };

    return getCarouselItems();
};

export default ImageCarousel;



