import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid, Typography } from '@mui/material';

const ProductLineup = () => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const isLargeDesktop = useMediaQuery(theme.breakpoints.up('lg'));


    const ProductLineupH4 = {
        textAlign: 'center',
        fontWeight: 400,
        color: '#316C2F',
        fontFamily: 'Libre Baskerville',
        fontSize: isLargeDesktop ? '50px' : isDesktop ? '50px' : isTablet ? '40px' : isMobile ? '30px' : '30px',
    
    };

    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center" marginTop={isLargeDesktop ? '100px' : isDesktop ? '100px' : isTablet ? '50px' : isMobile ? '50px' : '50px'}>
            <Grid item xs={12} md={10} lg={8} xl={6} xxl={4}>
                <Typography variant="h5" style={ProductLineupH4} data-aos="fade-down" data-aos-duration="3000">
                    Discover our diverse Product lineup!
                </Typography>
            </Grid>
        </Grid>
    );
};

export default ProductLineup;
