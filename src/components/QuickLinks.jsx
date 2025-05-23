import React from "react";
import { List, ListItem, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

import '../style/QuickLinks.css';

const QuickLinks = () => {

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <><Grid item xs={12} lg={6}>
            <div className="quick-links">
                <List>
                    <Typography variant="h6" gutterBottom className="quick-links-title-typo" textAlign={"center"} data-aos="fade-down" data-aos-duration="3000">
                        Quick Links
                    </Typography>
                    <ListItem button component={Link} to="/" className="quick-links-items" onClick={handleClick}>
                        <Typography className="quick-links-text" data-aos="fade-down" data-aos-duration="3000">Home</Typography>
                    </ListItem>
                    <ListItem button component={Link} to="/about" className="quick-links-items" onClick={handleClick}>
                        <Typography className="quick-links-text" data-aos="fade-down" data-aos-duration="3000">About</Typography>
                    </ListItem>
                    <ListItem button component={Link} to="/products" className="quick-links-items" onClick={handleClick}>
                        <Typography className="quick-links-text" data-aos="fade-down" data-aos-duration="3000">Products</Typography>
                    </ListItem>
                    <ListItem button component={Link} to="/events" className="quick-links-items" onClick={handleClick}>
                        <Typography className="quick-links-text" data-aos="fade-down" data-aos-duration="3000">Events</Typography>
                    </ListItem>
                    <ListItem button component={Link} to="/infrastructure" className="quick-links-items" onClick={handleClick}>
                        <Typography className="quick-links-text" data-aos="fade-down" data-aos-duration="3000">infrastructure</Typography>
                    </ListItem>
                    <ListItem button component={Link} to="/contacts" className="quick-links-items" onClick={handleClick}>
                        <Typography className="quick-links-text" data-aos="fade-down" data-aos-duration="3000">Contact Us</Typography>
                    </ListItem>
                </List>
            </div>
        </Grid>
            <Grid item xs={12} lg={6}>
                <div className="contact-us-links" data-aos="fade-down" data-aos-duration="3000">
                    <Grid item xs={12} className='footer-contact-grid'>
                        <PhoneIcon className="footer-contact-icons" />
                        <Typography
                            variant="body1"
                            className="footer-contact-info-links"
                            component="a"
                            href="tel:+919878400186"
                        >+91 98784-00186
                        </Typography>
                    </Grid>
                    <hr className="footer-contact-hr" />
                    <Grid item xs={12} className='footer-contact-grid'>
                        <LocationOnIcon className="footer-contact-icons" />
                        <Typography
                            variant="body1"
                            className="footer-contact-info-links"
                            component="a"
                            href='https://maps.app.goo.gl/KXxctzqzSZA7Ybhp7'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Punjab-India
                        </Typography>
                    </Grid>
                    <hr className="footer-contact-hr" />
                    <Grid item xs={12} className='footer-contact-grid'>
                        <EmailIcon className="footer-contact-icons" />
                        <Typography
                            variant="body1"
                            className="footer-contact-info-links"
                            component="a"
                            target="_blank"
                            href="mailto:rajiv@mrmc.in"
                        >rajiv@mrmc.in
                        </Typography>
                    </Grid>
                </div>
            </Grid>
        </>
    );
};

export default QuickLinks;
