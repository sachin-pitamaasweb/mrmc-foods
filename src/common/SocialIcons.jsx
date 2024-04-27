import React from "react";
import { IconButton } from "@mui/material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";

import '../style/SocialIcons.css';

const SocialIcons = () => {

    return (
        <div
            className="social-icons-container"
            data-aos="fade-right"
            data-aos-duration="3000"
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
                <a href="https://wa.me/9878400186" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                    <IconButton>
                        <WhatsApp className="mui-social-icons" />
                    </IconButton>
                </a>
            </div>
        </div>
    );
};

export default SocialIcons;
