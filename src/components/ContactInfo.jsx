import React from 'react';
import { Grid, Card, CardContent } from '@mui/material';

import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import '../style/ContactInfo.css';

const ContactInfo = () => {
  return (
    <>
      <Grid container spacing={2} className="contacts-container">
        <Grid item xs={12} sm={3} md={3} lg={3} className='custom-grid-contacts'  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
          <div className='icon-div'>  <PhoneIcon className="icon" /></div>
          <Card className="contact-card">
            <CardContent className='contact-card-content'>
              <a style={{ textDecoration: 'none' }} href="tel:+919878400186"> <h4 className='contact-info centered'>+91 98784-00186</h4></a>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3} className='custom-grid-contacts'  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
          <div className='icon-div'>  <LocationOnIcon className="icon" /></div>
          <Card className="contact-card">
            <CardContent className='contact-card-content'>
              <a style={{ textDecoration: 'none' }}
                href="https://maps.app.goo.gl/KXxctzqzSZA7Ybhp7">
                <h4 className='contact-info centered'>
                  Village, Waan, Faridkot Road, Ferozpur-Punjab-India
                </h4></a>

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3} className='custom-grid-contacts' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
          <div className='icon-div'>    <MailIcon className="icon" /></div>
          <Card className="contact-card">
            <CardContent className='contact-card-content'>
              <a style={{ textDecoration: 'none' }} href="mailto:rajiv@mrmc.in"><h4 className='contact-info centered'>rajiv@mrmc.in</h4></a>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactInfo;
