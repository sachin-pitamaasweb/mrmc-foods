import React from 'react';
import { Facebook, Instagram, Twitter, WhatsApp } from '@mui/icons-material';
import '../style/StickySocialMedia.css';

const StickySocialMedia = () => {
  return (
    <div className="sticky-social-icons">
      <a
        href="https://www.facebook.com/mrmcfoods/photos"
        className="facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook />
      </a>
      <a
        href="https://www.instagram.com/mrmc_foods/"
        className="instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram />
      </a>
      <a
        href="https://twitter.com"
        className="twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone= +91 9876543210"
        className="whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsApp />
      </a>
    </div>
  );
};

export default StickySocialMedia;
