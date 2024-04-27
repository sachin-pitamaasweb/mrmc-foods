import React from "react";
import { Grid } from '@mui/material';

import '../style/Established.css';

const Established = () => {
    return (
        <>
            <Grid container className="established" spacing={2}>

                <Grid item xs={12} lg={6} md={6} data-aos="fade-up-right">
                    <img src={require('../assets/images/Established.png')} alt="Established" className="established-img" />
                </Grid>
                <Grid item xs={12} lg={6} md={6}>
                    <h3 className="established-h3" data-aos="fade-up-left" data-aos-duration="3000">
                        Established in 2000
                    </h3>
                    <p className="established-p" data-aos="fade-left" data-aos-duration="3000">
                        MRMC supplies rice to over 75 countries, including the USA, UAE, UK, Australia, Mauritius, Russia, Israel, Kuwait,
                        Qatar & Turkey. With 30+ years of experience, we offer top-quality rice at competitive prices, ensuring timely delivery worldwide.
                    </p>
                    <div className="cft-div">
                        <img src={require('../assets/images/cft.png')} alt="cft" className="cft" data-aos="fade-right" />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default Established