import React from "react";

import { Grid, Typography } from "@mui/material";

import '../style/YourBrandText.css';

const YourBrandText = () => {
    return (
        <>
            <Grid container sapcing={2} className="your-brand-container">
                <Grid item xs={12}>
                    <Typography variant="h5" className="your-brand-text" gutterBottom  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                        "Your Brand, Our Quality: Private Labeling Solutions by MRMC"
                    </Typography>
                </Grid>
            </Grid>
        </>

    )
}

export default YourBrandText