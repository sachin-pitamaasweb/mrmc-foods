import React from "react";

import { Grid, Typography } from "@mui/material";

import '../style/BasmatiRice.css';

const BasmatiRice = () => {

    const basmatiRiceTypes = [
        "1121 Steam Basmati Rice",
        "1121 White Parboiled (Sella) Basmati Rice",
        "1121 Golden Parboiled (Sella) Basmati Rice",
        "1121 Raw Old",
        "1509 Steam Basmati Rice",
        "1121 White Parboiled (Sella) Basmati Rice",
        "1121 Golden Parboiled (Sella) Basmati Rice",
        "1401 Steam Basmati Rice",
        "1401 White Parboiled (Sella) Basmati Rice",
        "1401 Golden Parboiled (Sella) Basmati Rice",
        "1401 Raw Old"
    ];

    const imagePathsLeft = [
        require('../assets/images/long-grain1.png'),
        require('../assets/images/long-grain2.png'),
    ];
    const imagePathsRight = [
        require('../assets/images/long-grain3.png'),
        require('../assets/images/long-grain4.png')
    ]

    return (
        <>
            <Grid container className="basmati-container" spacing={2}>
                <Grid item xs={12} className="basmati-grid-text">
                    <Typography variant="h5" className="basmati-h5" gutterBottom data-aos="fade-left" data-aos-duration="3000">
                        Basmati Rice
                    </Typography>
                </Grid>
                {/* left Grid */}
                <Grid item xs={12} sm={12} md={6} lg={6} className="basmati-grid-left" data-aos-duration="3000">
                    <Typography variant="h5" className="basmati-left-h5" data-aos="fade-up" data-aos-duration="3000">
                        Long Grain
                    </Typography>
                    <div className="basmati-left-div-ul">
                        <ul className="basmati-ul" data-aos="fade-up">
                            <li>
                                Light Fluffy & Separated
                            </li>
                        </ul>
                    </div>
                    <div className="basmati-img-div">
                        <div className="basmati-img-container-top" data-aos="fade-up-zoom" data-aos-duration="3000">
                            {imagePathsLeft.map((imagePath, index) => (
                                <Grid key={index} item xs={6} lg={6} md={6} sm={6} >
                                    <img src={imagePath} alt={`basmati-rice-${index}`} className="basmati-img-1" />
                                </Grid>
                            ))}
                        </div>

                        <div className="basmati-img-container-bottom" data-aos="fade-down-zoom" data-aos-duration="3000">
                            {imagePathsRight.map((imagePath, index) => (
                                <Grid key={index} item xs={6} lg={6} md={6} sm={6}>
                                    <img src={imagePath} alt={`basmati-rice-${index}`} className="basmati-img-2" />
                                </Grid>
                            ))}
                        </div>
                    </div>
                </Grid>
                {/* right Grid */}
                <Grid item xs={12} sm={12} md={6} lg={6} className="basmati-grid-right">
                    <Typography variant="h5" className="basmati-right-h5" data-aos="fade-up" data-aos-duration="3000">
                        Varieties
                    </Typography>
                    <div className="basmati-right-div-ul">
                        <ul className="basmati-ul-right">
                            {basmatiRiceTypes.map((riceType, index) => (
                                <li key={index} data-aos="fade-up" data-aos-duration="3000">{riceType}</li>
                            ))}
                        </ul>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default BasmatiRice