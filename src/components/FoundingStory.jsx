import React from 'react';
import { Grid } from '@mui/material';

import '../style/FoundingStory.css';

import { companyName } from '../Hepler';

const FoundingStory = () => {
    // const companyName = <span className='founding-story-span'>MRMC Foods Pvt. Ltd</span>;
    return (
        <Grid container spacing={2} className='founding-story'>
           
            <Grid item xs={12} sm={6}>
                <div className='founding-story-left'>
                    <h2 className='founding-story-heading'>Founding Story</h2>
                    <p className='founding-story-p'>
                        Welcome to {companyName}, your premier destination
                        for premium rice products. With a rich heritage and
                        a commitment to quality, we bring you the finest rice
                        varieties, carefully cultivated and processed to perfection.
                        From farm to table, we uphold sustainable practices to ensure
                        each grain maintains its purity and nutritional value. Join us
                        in creating memorable dining experiences that nourish the body and soul.
                        Choose {companyName} for excellence in every grain.
                    </p>

                </div>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} sm={6}>
                <div className='founding-story-right'>
                    <img src={require('../assets/images/founding-story.png')} alt='Founding Story' className='founding-story-img' />
                </div>
            </Grid>
        </Grid>
    );
};

export default FoundingStory;
