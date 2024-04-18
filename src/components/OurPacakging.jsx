import React from "react";
import { Grid, Typography } from '@mui/material';

import '../style/OurPacakging.css';

const OurPacakging = () => {
    return (
        <>
            <Grid container className="our-pacakging-container" spacing={2}>
               <Grid item xs={12} className="our-pacakging-grid-text">
               <Typography variant="h4" gutterBottom align="center" className="our-pacakging-h4">
                    Our Pacakging
                </Typography>
               </Grid>
                <Grid items xs={12} className="our-pacakging-grid">
                    <img src={require('../assets/images/our-pacakging.png')} alt="Our Pacakging" className="our-pacakging-img" />
                </Grid>
            </Grid>
        </>
    )
}

export default OurPacakging;
