import React from "react";

import { Typography, Grid } from "@mui/material";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

import '../style/OurProcessPrivateLabeling.css';

import { processStepsData } from '../Hepler';

const OurProcessPrivateLabeling = () => {
    return (
        <>
            <Grid container className="our-process-container" spacing={2}>
                <Grid item xs={12} className="our-process-grid-text">
                    <Typography variant="h4" gutterBottom align="center" className="our-process-h4" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000">
                        Our Process
                    </Typography>
                    <div className="our-process-img-grid-div">
                        {processStepsData.map((step, index) => (
                            <Grid item xs={12} key={index} className="our-process-grid">
                                <img src={step.image} alt={step.title} className="our-process-img" data-aos="fade-right" data-aos-duration="3000" />
                                {(window.innerWidth >= 320 && window.innerWidth < 500 && (index !== processStepsData.length - 1)) && (
                                    <div className="our-process-icon-div" >
                                        <TrendingFlatIcon className="our-process-icon"  data-aos="fade-up" data-aos-duration="3000" />
                                    </div>
                                )}

                                {(index !== processStepsData.length - 1 && window.innerWidth > 500) && <TrendingFlatIcon className="our-process-icon" data-aos="fade-right" data-aos-duration="2000" />}
                                <Typography variant="h5" gutterBottom align="center" className="our-process-h5" data-aos="fade-right" data-aos-duration="3000" >
                                    {step.title}
                                </Typography>
                            </Grid>
                        ))}
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default OurProcessPrivateLabeling;