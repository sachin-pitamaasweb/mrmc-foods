import React from "react";

import { Typography, Grid } from "@mui/material";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

import '../style/OurProcessPrivateLabeling.css';

const OurProcessPrivateLabeling = () => {
    return (
        <>
            <Grid container className="our-process-container" spacing={2}>
                <Grid item xs={12} className="our-process-grid-text">
                    <Typography variant="h4" gutterBottom align="center" className="our-process-h4">
                        Our Process
                    </Typography>
                    <div className="our-process-img-grid-div">
                        <Grid item xs={12} className="our-process-grid">
                            <img src={require('../assets/images/OurProcess/Farming.png')} alt="Our Process" className="our-process-img" />
                            <TrendingFlatIcon className="our-process-icon" />
                            <Typography variant="h5" gutterBottom align="center" className="our-process-h5">
                                Farming
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className="our-process-grid">
                            <img src={require('../assets/images/OurProcess/Procurement.png')} alt="Our Process" className="our-process-img" />
                            <TrendingFlatIcon className="our-process-icon" />
                            <Typography variant="h5" gutterBottom align="center" className="our-process-h5">
                                Procurement
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className="our-process-grid">
                            <img src={require('../assets/images/OurProcess/Milling.png')} alt="Our Process" className="our-process-img" />
                            <TrendingFlatIcon className="our-process-icon" />
                            <Typography variant="h5" gutterBottom align="center" className="our-process-h5">
                                Milling
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className="our-process-grid">
                            <img src={require('../assets/images/OurProcess/Distribution.png')} alt="Our Process" className="our-process-img" />
                            <TrendingFlatIcon className="our-process-icon" />
                            <Typography variant="h5" gutterBottom align="center" className="our-process-h5">
                                Distribution
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className="our-process-grid">
                            <img src={require('../assets/images/OurProcess/Customer.png')} alt="Our Process" className="our-process-img" />
                            <Typography variant="h5" gutterBottom align="center" className="our-process-h5">
                                Customer
                            </Typography>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default OurProcessPrivateLabeling;