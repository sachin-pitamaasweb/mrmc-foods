import React from "react";

import ProductsCards from "../components/ProductsCards";
import ProductLineup from "../components/ProductLineup";
import HeroSection from "../common/HeroSection";

import '../style/Products.css';

const Products = () => {
    return (
        <>

           <div className="product">
           <HeroSection
                imageSrc={require('../assets/images/product-banner.png')}
                isStyled={false}
            />
           </div>
            <ProductLineup />
            <ProductsCards />
        </>
    )
}

export default Products