// import React from "react";
// import { Grid } from "@mui/material";

// import '../style/FooterContact.css';

// const FooterContact = () => {
//     return (
//         <Grid item xs={12} className="contact-us">
//             <div className='contact-us'>
//                 <div className='contact-us-container'>
//                     <div className='contact-us-icons-details'>
//                         <img src={require('../assets/images/Phone.png')} alt="phone" className='contact-us-icons' />
//                         <a href="tel:+91 9876543210" className='contact-us-link'>
//                             <h3 className='contact-us-span'>+91 9876543210</h3>
//                         </a>
//                     </div>
//                     <hr className='hr-line' />
//                     <div className='contact-us-icons-details'>
//                         <img src={require('../assets/images/location.png')} alt="location" className='contact-us-icons' />
//                         <a href="https://www.google.com/maps/place/Feroz+Punjab/@30.8307583,74.0780589,17z/data=!3m1!4b1!4m5!3m4!1s0x3918f5d8b9b0b8b1:0x5c7d6e2e6a5e2b8d!8m2!3d30.8307577!4d74.0802476" className='contact-us-link'>
//                             <h3 className='contact-us-span'>Punjab-India</h3>
//                         </a>
//                     </div>
//                     <hr className='hr-line' />
//                     <div className='contact-us-icons-details'>
//                         <img src={require('../assets/images/Email.png')} alt="Email" className='contact-us-icons' />
//                         <a href="mailto:rajiv@mrmc.in" className='contact-us-link'>
//                             <h3 className='contact-us-span'>xyz@gmail.com</h3>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </Grid>
//     );
// };

// export default FooterContact;


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
