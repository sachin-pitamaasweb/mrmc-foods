import React from "react";
import { Grid } from '@mui/material';

import '../style/Export.css';

const Export = () => {
    return (
        <>
            <Grid container spacing={2} className="export-grid-container">
                <Grid container spacing={2} className="export-grid-text">
                    <Grid item xs={12} md={4} lg={4}>
                        <img src={require('../assets/images/flag.png')} alt="flag" className="flag" data-aos="zoom-in-down"  data-aos-duration="1000" />
                      
                        <div className="export-div" data-aos="zoom-in-down"  data-aos-duration="1000">
                            <h3 className="export-h3">MRMC Foods Pvt. Ltd.:</h3>
                            <h3 className="export-h3">Government Approved 2 Stars Export House.</h3>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={8} lg={8} data-aos="zoom-in-down" data-aos-duration="1000">
                    <div className="verified-div">
                            <img src={require('../assets/images/certified.png')} alt="verified" className="verified" />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default Export