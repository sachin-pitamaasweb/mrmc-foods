import React from 'react';
import { Typography, Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

import '../style/FooterContact.css';

const FooterContact = () => {
    return (
        <>
            <Grid container spacing={2} className='footer-contact'>
                <Grid item xs={12} className='footer-contact-grid'>
                    <PhoneIcon />
                    <Typography variant="body1" className="footer-contact-info">+91 9876543210</Typography>
                </Grid>
                <hr />
                <Grid item xs={12} className='footer-contact-grid'>
                    <LocationOnIcon />
                    <Typography variant="body1">Punjab-India</Typography>
                </Grid>
                <hr />
                <Grid item xs={12} className='footer-contact-grid'>
                    <EmailIcon />
                    <Typography variant="body1">xyz@gmail.com</Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default FooterContact;
