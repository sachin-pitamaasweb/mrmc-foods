import React from 'react';
import { Grid } from '@mui/material';
import '../style/EventsCards.css'; 

const EventsCards = () => {
  const eventList = [
    {
      image: require('../assets/images/event-1.png'),
      alt: 'Event 1',
      sm: 12,
      md: 12,
      lg: 12,
    },
    {
      image: require('../assets/images/event-2.png'),
      alt: 'Event 2',
      sm: 12,
      md: 12,
      lg: 12,
    },
    {
      image: require('../assets/images/event-3.png'),
      alt: 'Event 3',
      sm: 8,
      md: 8,
      lg: 8,

    },
    {
      image: require('../assets/images/event-4.png'),
      alt: 'Event 4',
      sm: 4,
      md: 4,
      lg: 4,
      marginLeft: '50px',
    },
    {
      image: require('../assets/images/event-5.png'),
      alt: 'Event 5',
      sm: 4,
      md: 4,
      lg: 4,
    },
    {
      image: require('../assets/images/event-6.png'),
      alt: 'Event 6',
      sm: 4,
      md: 4,
      lg: 4,
    },
    {
      image: require('../assets/images/event-7.png'),
      alt: 'Event 7',
      sm: 4,
      md: 4,
      lg: 4,
    },
    {
      image: require('../assets/images/event-8.png'),
      alt: 'Event 8',
      sm: 8,
      md: 8,
      lg: 8,
    },
    {
      image: require('../assets/images/event-9.png'),
      alt: 'Event 9',
      sm: 4,
      md: 4,
      lg: 4,
    },
  ];

  return (
    <Grid container spacing={2} className="custom-container-events">
      {eventList.map((event, index) => (
        <Grid
          item
          key={index}
          xs={12}
          sm={event.sm}
          md={event.md}
          lg={event.lg}
        >
          <img
            src={event.image}
            alt={event.alt}
            style={{
              width: '100%',
              height: '100%',
              // marginLeft: event.marginLeft || 0,
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default EventsCards;
