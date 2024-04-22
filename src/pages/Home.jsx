import React from 'react';

import ExploreOur from './ExploreOur.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Testimonial from '../components/Testimonial.jsx';
import Heritage from '../components/Heritage.jsx';
import Established from '../components/Established.jsx';

import ImageCarousel from '../common/ImageCarousel.jsx';
import Quality from '../common/Quality.jsx';
import Export from '../components/Export.jsx';


const Home = () => {
    return (
        <>
            <ImageCarousel />
            <Heritage />
            <Export />
            <WhyChooseUs />
            <Quality
             applyAnimation={true}
            />
            <Established />
            <ExploreOur />
            <Testimonial /> 
           
        </>
    )
}
export default Home;
