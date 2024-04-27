import React from 'react';
import { Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import '../style/EventsCards.css';

import { eventGroups } from '../Hepler';

// Reusable EventCard Component
const EventCard = ({ image, alt }) => (
  <img
    src={image}
    alt={alt}
    data-aos="zoom-out-right"
    style={{
      width: '100%',
      height: '100%',
    }}
  />
);

EventCard.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

// Main EventsCards Component
const EventsCards = () => {
  return (
    <Grid container spacing={2} className="custom-container-events">
      {eventGroups.map((group, groupIndex) => (
        <React.Fragment key={groupIndex}>
          <Grid item xs={12}>
            <Typography
              className="event-heading"
              textAlign="center"
              variant="h3"
              gutterBottom
              component="div"
              sx={{
                textTransform: "uppercase",
                marginTop: '20px',
                fontFamily: 'Libre Baskerville',
                fontSize: {
                  xs: '25px', // Extra small devices
                  sm: '35px', // Small devices
                  md: '40px', // Medium devices
                  lg: '60px', // Large devices
                  xl: '70px', // Extra-large devices
                },
              }}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              {group.title}
            </Typography>
            <Typography
              className="event-heading"
              textAlign="center"
              variant="h3"
              gutterBottom
              component="div"
              sx={{
                textTransform: "uppercase",
                // marginTop: '20px',
                fontFamily: 'Libre Baskerville',
                fontSize: {
                  xs: '20px', // Extra small devices
                  sm: '20px', // Small devices
                  md: '30px', // Medium devices
                  lg: '40px', // Large devices
                  xl: '50px', // Extra-large devices
                },
                marginTop:" !important"
              }}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              {group.subTitle}
            </Typography>
          </Grid>

          {group.events.map((event, eventIndex) => (
            <Grid
              item
              key={eventIndex}
              xs={12}
              sm={event.sm}
              md={event.md}
              lg={event.lg}

            >
              <EventCard
                image={event.image}
                alt={event.alt}
              />
            </Grid>
          ))}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default EventsCards;
