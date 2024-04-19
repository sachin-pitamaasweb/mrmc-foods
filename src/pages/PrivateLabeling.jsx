import React from "react";

import HeroSection from '../common/HeroSection';


import BeginNow from '../components/BeginNow';
import OurProducts from '../components/OurProducts';
import OurPacakging from '../components/OurPacakging';
import YourBrandText from "../components/YourBrandText";
import AboutUsPrivateLabeling from "../components/AboutUsPrivateLabeling";
import OurProcessPrivateLabeling from '../components/OurProcessPrivateLabeling';
import WhyChooseUsPrivateLabeling from '../components/WhyChooseUsPrivateLabeling';

import '../style/PrivateLabeling.css';

const PrivateLabeling = () => {
    return (
        <>
            <div className="product">
            <HeroSection
                text="Private Labeling"
                imageSrc={require('../assets/images/product-labeling-banner.png')}
            />
            </div>
            <AboutUsPrivateLabeling />
            <OurProducts />
            <OurProcessPrivateLabeling />
            <OurPacakging />
            <WhyChooseUsPrivateLabeling />
            <YourBrandText />
            <BeginNow />
        </>
    )
}
export default PrivateLabeling