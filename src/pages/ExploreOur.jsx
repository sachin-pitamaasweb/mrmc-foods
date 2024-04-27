import React from "react";
import { Grid, Typography } from '@mui/material';

import '../style/ExploreOur.css';

import { ProductsSlider } from '../Hepler';

import ProductCarousel from '../common/ProductCarousel';

const ExploreOur = () => {

    return (
        <Grid container className="explore-our-container-slider" spacing={2} >
            <Grid item xs={12} className="explore-text-grid">
                <Typography variant="h3" className="explore-h3" align="center" data-aos="flip-left" data-aos-duration="3000">
                    Explore our wide range
                </Typography>
            </Grid>
            <ProductCarousel
                images={ProductsSlider}
            />
        </Grid>
    );
};

export default ExploreOur;

