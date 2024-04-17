import React from "react";
import { Grid, Card, CardContent, Typography } from '@mui/material';

const WhyChooseUsPrivateLabeling = () => {
    return (
        <>

            <div>
                <Typography variant="h4" gutterBottom align="center">
                    Why Choose US?
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={4}>
                        <Card className="card">
                            <CardContent className="card-content">
                                <Typography variant="body1" className="card-text">
                                    Superior Taste
                                    Our Basmati Rice delights taste buds globally with its exceptional flavor and aroma.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
export default WhyChooseUsPrivateLabeling;