import React from 'react';
import { Grid, Typography } from '@mui/material';

import '../style/HeritageText.css';

const HeritageText = () => {
    return (
        <Grid container spacing={2} className='heritage-text-container'>
            <Grid item xs={12} sm={12} md={12} lg={12} className='heritage-text-grid'>
                <Typography variant="h4" align="center" gutterBottom className='heritage-text' data-aos="fade-right" data-aos-duration="1000">
                    OUR HERITAGE
                </Typography>
                <Typography variant="subtitle1" align="center" gutterBottom className='heritage-text-sub' data-aos="fade-left"  data-aos-duration="1000">
                    Taste the Essence of Excellence with MRMC Foods
                </Typography>
            </Grid>
        </Grid>
    );
};

export default HeritageText;