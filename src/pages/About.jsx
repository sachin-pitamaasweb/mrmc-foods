import React from 'react';

import HeroSection from '../common/HeroSection';


import Vision from '../components/Vision';
import OurMission from '../components/OurMission ';
import FoundingStory from '../components/FoundingStory';
import ValuesAndPhilosophy from '../components/ValuesAndPhilosophy';

import '../style/About.css';



const About = () => {
    return (
        <>

            <div className='about'>
                <HeroSection
                    imageSrc={require('../assets/images/banner-about.png')}
                    text="About Us"
                    isStyled={true}
                />
            </div>
            <FoundingStory />
            <ValuesAndPhilosophy />
            <OurMission />
            <Vision />
        </>
    );
}

export default About;

