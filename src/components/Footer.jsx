import React from 'react';
import { Grid } from '@mui/material';

import '../style/Footer.css';

import SocialIcons from '../common/SocialIcons.jsx';
import FooterLogo from '../common/FooterLogo.jsx';
import QuickLinks from './QuickLinks.jsx';

const Footer = () => {
    return (
        <>
            <Grid container className="footer-container" spacing={2}>
                <Grid className="footer-grid" item xs={12}>
                    <footer className='footer'>
                        <FooterLogo />
                        <SocialIcons />
                        <div className="QuickLinks-Contacts">
                            <QuickLinks />
                        </div>
                    </footer>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;