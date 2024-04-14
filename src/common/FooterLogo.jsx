import React from "react";
import { Grid } from "@mui/material";

import '../style/FooterLogo.css';

const FooterLogo = () => {
    return(
        <>
        <Grid container className="footer-logo-container" spacing={2}>
            <Grid item xs={12} className="footer-logo-grid">
                <div className="footer-logo-div">
                   <div className="footer-logo-div1">
                   <img  src={require('../assets/images/Logo.png')} className="footer-logo-image" alt='footer-logo' />
                   </div>
                </div>
            </Grid>
        </Grid>
        </>
    )
}

export default FooterLogo