import React, { useState, useEffect } from "react";

import ProductsCards from "../components/ProductsCards";
import ProductLineup from "../components/ProductLineup";
import HeroSection from "../common/HeroSection";

import '../style/Products.css';

const Products = () => {
    const [imageSrc, setImageSrc] = useState('');

    // A function to set the correct image source based on screen size
    const updateImageSrc = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 600) {
        setImageSrc(require('../assets/images/banner-for-mobile3.png'));
      } else {
        setImageSrc(require('../assets/images/product-banner.jpg'));
      }
    };
  
    // UseEffect to set the image source on mount and window resize
    useEffect(() => {
      updateImageSrc(); // Set initial image source
      window.addEventListener('resize', updateImageSrc); // Add event listener for resizing
      return () => {
        window.removeEventListener('resize', updateImageSrc); // Cleanup on component unmount
      };
    }, []);
    
    return (
        <>

           <div className="product">
           <HeroSection
                imageSrc={imageSrc}
                isStyled={false}
            />
           </div>
            <ProductLineup />
            <ProductsCards />
        </>
    )
}

export default Products