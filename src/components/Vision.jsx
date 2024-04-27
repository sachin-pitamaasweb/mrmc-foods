import React from 'react';
import { Grid, Typography, Box, Paper, Card, CardContent } from '@mui/material';

import '../style/Vision.css';

const Vision = () => {
    return (
        <Paper sx={{ padding: '16px', margin: '45px', boxShadow: 'none' }}>
            <Grid container spacing={2} className='vision-container'>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box>
                        <Typography variant="h4" component="h2" gutterBottom align="center" className='vision-h4' data-aos="zoom-in-up">
                            Vision of Our Managing Directors
                        </Typography>
                        <Typography variant="body1" component="p" gutterBottom align="center" className='vision-p' data-aos="zoom-in-up">
                            MRMC Foods is your premier destination for quality rice, serving both as a manufacturer and exporter. Our commitment to excellence shines through in every grain we produce and ship globally. From fragrant Basmati to long-grain varieties, we ensure top-notch quality at every step. Trust MRMC Foods for consistent excellence in rice, enriching meals worldwide.
                        </Typography>
                    </Box>
                </Grid>
                <Box sx={{ flexGrow: 1 }} className='vision-box'>
                <Grid item xs={12} sm={3} md={3} lg={3} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                    <Typography variant="body1" component="p" gutterBottom align="center" className='vision-p-typo'>
                        Managing Director
                    </Typography>
                    <Card className="vision-card">
                        <CardContent className='vision-card-content'>
                            <Typography variant="body1" component="p" gutterBottom align="center" className='vision-p-card'>
                                Rajiv Mangal
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                    <Typography variant="body1" component="p" gutterBottom align="center" className='vision-p-typo'>
                        Founder
                    </Typography>
                    <Card className="vision-card">
                        <CardContent className='vision-card-content'>
                            <Typography variant="body1" component="p" gutterBottom align="center" className='vision-p-card'>
                                Late Sh.Krishan Avtar Mangal (Dabbu Seth)
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                    <Typography variant="body1" component="p" gutterBottom align="center" className='vision-p-typo'>
                        Director
                    </Typography>
                    <Card className="vision-card">
                        <CardContent className='vision-card-content'>
                            <Typography variant="body1" component="p" gutterBottom align="center" className='vision-p-card'>
                                Parveen Mangal
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                </Box>
            </Grid>
        </Paper>
    );
};

export default Vision;
