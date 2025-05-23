import React from 'react';

import { Grid } from '@mui/material';

import '../style/InfrastructureText.css';
import InfrastructureTextMobile from './InfrastructureTextMobile';

const InfrastructureText = () => {
    const isLargeScreen = window.innerWidth > 768;

    const InfrastructureTextRender = () => {

        if (isLargeScreen) {
            return (
                <>
                  <Grid item xs={12} md={6} sm={12} lg={6}>
                        <div>
                            <p className="infrastructure-text-2" data-aos="fade-right"  data-aos-duration="3000">
                                The rice mill's infrastructure at MRMC is modern and efficient, featuring state-of-the-art machinery for processing rice. Automated systems ensure quality control at every stage, while eco-friendly practices promote sustainability. With spacious warehouses and stringent hygiene standards, we deliver premium rice to customers worldwide. Moreover, our eco-friendly practices go beyond mere compliance with regulations. We actively seek out sustainable solutions, such as energy-efficient processes and responsible waste management, to minimize our environmental footprint At MRMC Foods, we are not just rice processors;
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} sm={12} lg={6} className="infrastructure-text-container-1" data-aos="fade-left"  data-aos-duration="3000">
                        <div className="infrastructure-img-text-1">
                            <img src={require('../assets/images/Infrastructure2.png')} alt="Infrastructure" className="infrastructure-img-4" />
                        </div>
                    </Grid>
                </>
            );
        } else {
            return <InfrastructureTextMobile />;
        }
    };

    return (
        <>
            <Grid item xs={12} md={6} sm={12} lg={6}>
                <div className="infrastructure-img-text" data-aos="fade-right"  data-aos-duration="3000">
                    <img src={require('../assets/images/Infrastructure1.png')} alt="Infrastructure" className="infrastructure-img-1" />
                </div>
            </Grid>
            <Grid item xs={12} md={6} sm={12} lg={6} className="infrastructure-text-container-1">
                <div data-aos="fade-right"  data-aos-duration="3000">
                    <p className="infrastructure-text-1">
                        <span className="infrastructure-span"> MRMC Foods</span>
                        proudly operates a state-of-the-art rice mill, employing advanced processing techniques to ensure premium quality.
                        Our infrastructure is designed for efficiency and sustainability, featuring cutting-edge machinery for sorting,
                        milling, and packaging. Dedicated to excellence, we are committed to delivering the finest rice to our customers worldwide.
                        At MRMC Foods, our journey began with a simple vision: to provide the highest quality rice products to families around the world.
                        With decades of experience in the industry, our state-of-the-art milling processes and dedication to sustainable farming practices
                        ensure that every grain of rice we produce meets our rigorous standards of excellence.
                        Discover our passion for rice milling and how we’re making a difference with every grain.
                    </p>
                </div>
            </Grid>
            {InfrastructureTextRender()}
        </>
    )
}

export default InfrastructureText;