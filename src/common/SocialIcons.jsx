import React from "react";
import { IconButton } from "@mui/material";
import { Facebook, Instagram, WhatsApp, X } from "@mui/icons-material";

import '../style/SocialIcons.css';

const SocialIcons = () => {

    return (
        <div
            className="social-icons-container"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
        >
            <h2 className="follow-title">Follow Us</h2>
            <div className="social-icons-div">
                <a href="https://www.facebook.com/mrmcfoods/photos" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                    <IconButton>
                        <Facebook className="mui-social-icons" />
                    </IconButton>
                </a>
                <a href="https://www.instagram.com/mrmc_foods/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                    <IconButton>
                        <Instagram className="mui-social-icons" />
                    </IconButton>
                </a>
                <a href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                    <IconButton>
                        <WhatsApp className="mui-social-icons" />
                    </IconButton>
                </a>
                <IconButton>
                    <X className="mui-social-icons" />
                </IconButton>
            </div>
        </div>
    );
};

export default SocialIcons;
