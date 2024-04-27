import React from "react";
import { Grid, Typography } from '@mui/material';

import '../style/OurProducts.css';

import BasmatiRice from '../components/BasmatiRice';
import NonBasmatiRice from "./NonBasmatiRice";

const OurProducts = () => {
    return(
        <>
        <Grid container spacing={2}  className="our-products-container">
            <Grid item xs={12} className="our-products-grid-text">
                <Typography variant="h4" gutterBottom align="center" className="our-products-h4" data-aos="fade-right">
                    Our Products
                </Typography>
            </Grid>
            <BasmatiRice />
            <NonBasmatiRice />
        </Grid>
        </>
    )
}
export default OurProducts;