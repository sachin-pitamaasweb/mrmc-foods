import React from "react";

import HeroSection from '../common/HeroSection';

import WhyChooseUsPrivateLabeling from '../components/WhyChooseUsPrivateLabeling';

const PrivateLabeling = () => {
    return(
        <>
        <HeroSection
         text="Private Labeling"
         imageSrc={require('../assets/images/product-labeling-banner.png')}
         />
         <WhyChooseUsPrivateLabeling />
        </>
    )
}
export default PrivateLabeling