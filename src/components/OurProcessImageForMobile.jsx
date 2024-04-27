// import React from 'react';
// import { Grid } from '@mui/material';

// import '../style/OurProcessImageForMobile.css';

// const OurProcessImageForMobile = () => {
//     // Define an array containing objects with image paths and corresponding text
//     const processSteps = [
//         { image: 'Pre-Cleaning.png', text: 'Pre-Cleaning' },
//         { image: 'Parboiling.png', text: 'Parboiling' },
//         { image: 'De-Stone.png', text: 'De-Stone' },
//         { image: 'Husking.png', text: 'Husking' },
//         { image: 'HuskAspiration.png', text: 'Husking Aspiration' },
//         { image: 'PaddySeparation.png', text: 'Paddy Separation' },
//         { image: 'Whitening.png', text: 'Weighing & Bagging' },
//         { image: 'Polishing.png', text: 'Polishing' },
//         { image: 'Sorting&Grading.png', text: 'Sorting & Grading' },
//         { image: 'Weighing&Bagging.png', text: 'Weighing & Bagging' },
//     ];

//     return (
//         <>
//             <Grid container className="our-process-image-for-mobile" spacing={2}>
//                 {/* Map over the processSteps array to generate grid items dynamically */}
//                 {processSteps.map((step, index) => (
//                     <Grid item xs={12} md={12} sm={12} lg={12} key={index}>
//                         <div className="our-process-image">
//                             <img src={require(`../assets/images/${step.image}`)} alt={step.text} className="our-process-img-mobile" />
//                         </div>
//                         <div className="our-process-text"> {/* Add text below images */}
//                             <h5>{step.text}</h5>
//                         </div>
//                         {processSteps.length - 1 !== index && (
//                             <div className="arrow-container">
//                                 <img src={require('../assets/images/arrow.png')} alt="Arrow" className="arrow-img" />
//                             </div>
//                         )}

//                     </Grid>
//                 ))}
//             </Grid>
//         </>
//     );
// }

// export default OurProcessImageForMobile;


import React, { useEffect, useRef, useState } from 'react';
import { Grid } from '@mui/material';
import '../style/OurProcessImageForMobile.css';

const OurProcessImageForMobile = () => {
    const processSteps = [
        { image: 'Pre-Cleaning.png', text: 'Pre-Cleaning' },
        { image: 'Parboiling.png', text: 'Parboiling' },
        { image: 'De-Stone.png', text: 'De-Stone' },
        { image: 'Husking.png', text: 'Husking' },
        { image: 'HuskAspiration.png', text: 'Husking Aspiration' },
        { image: 'PaddySeparation.png', text: 'Paddy Separation' },
        { image: 'Whitening.png', text: 'Weighing & Bagging' },
        { image: 'Polishing.png', text: 'Polishing' },
        { image: 'Sorting&Grading.png', text: 'Sorting & Grading' },
        { image: 'Weighing&Bagging.png', text: 'Weighing & Bagging' },
    ];

    // State to track if the section is in view
    const [isInView, setIsInView] = useState(false);

    // Reference to the grid container
    const gridRef = useRef(null);

    // Function to handle scroll event
    const handleScroll = () => {
        if (gridRef.current) {
            const rect = gridRef.current.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
                setIsInView(true);
            } else {
                setIsInView(false);
            }
        }
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        
        // Check initial scroll position
        handleScroll();

        return () => {
            // Clean up event listener
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Grid
            container
            className={`our-process-image-for-mobile ${isInView ? 'slide-down' : ''}`}
            spacing={2}
            ref={gridRef}
        >
            {processSteps.map((step, index) => (
                <Grid item xs={12} md={12} sm={12} lg={12} key={index}>
                    <div className="our-process-image">
                        <img
                            src={require(`../assets/images/${step.image}`)}
                            alt={step.text}
                            className="our-process-img-mobile"
                        />
                    </div>
                    <div className="our-process-text">
                        <h5>{step.text}</h5>
                    </div>
                    {processSteps.length - 1 !== index && (
                        <div className="arrow-container">
                            <img src={require('../assets/images/arrow.png')} alt="Arrow" className="arrow-img" />
                        </div>
                    )}
                </Grid>
            ))}
        </Grid>
    );
};

export default OurProcessImageForMobile;
