import React from "react";

import { Grid, Typography } from '@mui/material';

import '../style/AboutUsPrivateLabeling.css';

const AboutUsPrivateLabeling = () => {
    return (
        <>
            <div className="about-us-container">
                <Grid item xs={12} className="about-us-grid-text">
                    <Typography variant="h5" className="about-us-h5" gutterBottom data-aos="fade-up-right" data-aos-duration="3000">
                        About Us
                    </Typography>
                    <Typography variant="subtitle1" className="about-us-text" data-aos="fade-up-left"  data-aos-duration="3000">
                        MRMC is a rice manufacturing and export oriented company situated in Ferozepur, Punjab, India. We have more than 25 years of experience in the rice industry.
                    </Typography>
                </Grid>
                <div className="about-us-img-container">
                    <Grid
                        item xs={12}
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000"
                    >
                        <div className="about-us-img-div">
                            <img src={require('../assets/images/about1.png')} alt="about-us" className="about-us-img" />
                        </div>
                        <Typography variant="h5" className="about-us-img-text-h5" gutterBottom>
                            25 Acers
                        </Typography>
                        <Typography variant="h6" className="about-us-img-text-h6" gutterBottom>
                            Factory Spread
                        </Typography>
                    </Grid>
                    <Grid
                        item xs={12}
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000"
                    >
                        <div className="about-us-img-div">
                            <img src={require('../assets/images/about2.png')} alt="about-us" className="about-us-img" />
                        </div>
                        <Typography variant="h5" className="about-us-img-text-h5" gutterBottom>
                            20,000 Tons +
                        </Typography>
                        <Typography variant="h6" className="about-us-img-text-h6" gutterBottom>
                            Storage Capacity
                        </Typography>
                    </Grid>
                    <Grid
                        item xs={12}
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000"
                    >
                        <div className="about-us-img-div">
                            <img src={require('../assets/images/about3.png')} alt="about-us" className="about-us-img" />
                        </div>
                        <Typography variant="h5" className="about-us-img-text-h5" gutterBottom>
                            Satake
                        </Typography>
                        <Typography variant="h6" className="about-us-img-text-h6" gutterBottom>
                            Japanese Technology
                        </Typography>
                    </Grid>
                    <Grid
                        item xs={12}
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000"
                    >
                        <div className="about-us-img-div">
                            <img src={require('../assets/images/about4.png')} alt="about-us" className="about-us-img" />
                        </div>
                        <Typography variant="h5" className="about-us-img-text-h5" gutterBottom>
                            600 Megatons/day
                        </Typography>
                        <Typography variant="h6" className="about-us-img-text-h6" gutterBottom>
                            Milling Capacity
                        </Typography>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default AboutUsPrivateLabeling;




