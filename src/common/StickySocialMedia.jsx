import React from 'react';
import '../style/StickySocialMedia.css';

const StickySocialMedia = () => {
  return (
    <div className="sticky-social-icons" >
      <a
        href="https://www.facebook.com/mrmcfoods/photos"
        className="facebook"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="flip-left"
      >
        <img  src={require('../assets/images/social/s1.png')} alt="facebook" style={{ width: '30px', height: '30px', objectFit: 'contain' }}  />
      </a>
      <a
        href="https://www.instagram.com/mrmc_foods/"
        className="instagram"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="flip-left"
      >
        <img  src={require('../assets/images/social/s2.png')} alt="Instagram" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
      </a>
      {/* <a
        href="https://twitter.com"
        className="twitter"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="flip-left"
      >
        <img  src={require('../assets/images/social/s3.png')} alt="X" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
      </a> */}
      <a
        href="https://wa.me/9878400186"
        className="whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="flip-left"
      >
        <img  src={require('../assets/images/social/s4.png')} alt="WhatsApp" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
      </a>
    </div>
  );
};

export default StickySocialMedia;
