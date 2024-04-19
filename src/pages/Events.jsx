import React from 'react';

import HeroSection from '../common/HeroSection';

import EventsCards from '../components/EventsCards';

import '../style/Events.css';

const Events = () => {
    return (
        <>
         <div className='event'>
         <HeroSection 
            imageSrc={require('../assets/images/event-banner.png')}
            text="Events"
            isStyled={true}
            />
         </div>
            <EventsCards />
        </>
    )
}
export default Events;