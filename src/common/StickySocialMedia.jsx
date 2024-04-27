import React from 'react';
import { Facebook, Instagram, X, WhatsApp } from '@mui/icons-material';
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
        {/* <Facebook /> */}
        <img  src={require('../assets/images/social/s1.png')} alt="facebook" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
      </a>
      <a
        href="https://www.instagram.com/mrmc_foods/"
        className="instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <Instagram /> */}
        <img  src={require('../assets/images/social/s2.png')} alt="Instagram" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
      </a>
      <a
        href="https://twitter.com"
        className="twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <X /> */}
        <img  src={require('../assets/images/social/s3.png')} alt="X" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone= +91 9876543210"
        className="whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <WhatsApp /> */}
        <img  src={require('../assets/images/social/s4.png')} alt="WhatsApp" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
      </a>
    </div>
  );
};

export default StickySocialMedia;
