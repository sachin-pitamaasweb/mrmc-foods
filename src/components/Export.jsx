import React from "react";
import { Grid } from '@mui/material';

import '../style/Export.css';

const Export = () => {
    return (
        <>
            <Grid container spacing={2} className="export-grid-container">
                <Grid container spacing={2} className="export-grid-text">
                    <Grid item xs={12}>
                    <img src={require('../assets/images/flag.png')} alt="flag" className="flag" />
                        <h3 className="export-h3">MRMS Foods Pvt.Ltd: Government Approved Stars Export.</h3>
                       <div className="verified-div">
                       <img src={require('../assets/images/verified.png')} alt="verified" className="verified" />
                       </div>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default Export