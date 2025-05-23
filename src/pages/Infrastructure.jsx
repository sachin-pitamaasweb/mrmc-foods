import React from "react";
import { Grid } from '@mui/material';

// import InfrastructureImage from "../components/InfrastructureImage.jsx";
import InfrastructureText from "../components/InfrastructureText.jsx";
import InfrastructureProcessImages from '../components/InfrastructureProcessImages.jsx';

import HeroSection from "../common/HeroSection.jsx";

import '../style/Infrastructure.css';
import OurProcess from "../components/OurProcess.jsx";
import Capacity from "../components/Capacity.jsx";

const Infrastructure = () => {
    return (
        <>
            <Grid container className="infrastructure-container" spacing={2}>
                <div className="infrastructure-div-banner">
                    <HeroSection
                        imageSrc={require('../assets/images/Frame.png')}
                        text="Infrastructure"
                        isStyled={true}
                    />
                </div>
                <InfrastructureText />
                <InfrastructureProcessImages />
                <OurProcess />
                <Capacity />
                <Grid item xs={12} >
                    <div className="infrastructure-image-process" data-aos="zoom-in-down" data-aos-duration="3000">
                        <img src={require('../assets/images/pro.png')} alt="Infrastructure" className="infrastructure-process-img-1-process" />
                    </div>
                </Grid>
                <Grid item xs={12} >
                    <div className="infrastructure-image-process" data-aos="zoom-in-down" data-aos-duration="3000">
                        <img src={require('../assets/images/pro1.png')} alt="Infrastructure" className="infrastructure-process-img-1-process" />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default Infrastructure;