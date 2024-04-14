import React from "react";
import { List, ListItem, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

import '../style/QuickLinks.css';

import { googleMap } from '../Hepler';

const QuickLinks = () => {
    return (
        <><Grid item xs={12} lg={6}>
            <div className="quick-links">
                <List>
                    <Typography variant="h6" gutterBottom className="quick-links-title-typo" textAlign={"center"}>
                        Quick Links
                    </Typography>
                    <ListItem button component={Link} to="/" className="quick-links-items">
                        <Typography className="quick-links-text">Home</Typography>
                    </ListItem>
                    <ListItem button component={Link} to="/about" className="quick-links-items">
                        <Typography className="quick-links-text">About</Typography>
                    </ListItem>
                    <ListItem button component={Link} to="/products" className="quick-links-items">
                        <Typography className="quick-links-text">Products</Typography>
                    </ListItem>
                    <ListItem button component={Link} to="/events" className="quick-links-items">
                        <Typography className="quick-links-text">Events</Typography>
                    </ListItem>
                    <ListItem button component={Link} to="/infrastructure" className="quick-links-items">
                        <Typography className="quick-links-text">infrastructure</Typography>
                    </ListItem>
                    <ListItem button component={Link} to="/contacts" className="quick-links-items">
                        <Typography className="quick-links-text">Contact Us</Typography>
                    </ListItem>
                </List>
            </div>
        </Grid>
            <Grid item xs={12} lg={6}>
                <div className="contact-us-links">
                    <Grid item xs={12} className='footer-contact-grid'>
                        <PhoneIcon className="footer-contact-icons" />
                        <Typography
                            variant="body1"
                            className="footer-contact-info-links"
                            component="a"
                            href="tel:+919876543210"
                        >+91 9876543210
                        </Typography>
                    </Grid>
                    <hr className="footer-contact-hr" />
                    <Grid item xs={12} className='footer-contact-grid'>
                        <LocationOnIcon className="footer-contact-icons" />
                        <Typography
                            variant="body1"
                            className="footer-contact-info-links"
                            component="a"
                            href={googleMap}
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
