import React from "react";
import { Grid, Typography } from '@mui/material';
import '../style/WhyChooseUsPrivateLabeling.css';

const WhyChooseUsPrivateLabeling = () => {

    const sectionInfo = [
        {
            title: "Appearance Quality",
            items: ["Grain Length", "Grain Width", "Grain Height", "Chalkiness"]
        },
        {
            title: "Milling Quality",
            items: ["Brown Rice Recovery", "Milled Rice Recovery", "Head Rice Recovery"]
        },
        {
            title: "Starch Biochemical Compounds",
            items: ["Amylase Content", "Gel Temperature", "Gel Consistency"]
        },
        {
            title: "Aroma Volatile Compounds",
            items: ["Starch-protein Biochemical Composition", "Pasting Properties", "Rheological Properties"]
        },
        {
            title: "Other Eating & Cooking Quality",
            items: ["Parameters", "Sensory Panelist", "Sensory Profiling"]
        },
        {
            title: "Textural Properties",
            items: ["Hardness", "Adhesiveness", "Springiness"]
        }
    ];

    return (
        <Grid container className="why-choose-us-container-private" spacing={2}>
            <Grid item xs={12} className="why-choose-us-text-private">
                <Typography variant="h4" gutterBottom align="center" className="why-choose-us-title-private">
                    Why Choose US?
                </Typography>
            </Grid>
            {/* left Grid */}
            <Grid item xs={12} sm={12} md={6} lg={6} className="why-choose-us-text-left-private">
                {sectionInfo.map((section, index) => (
                    <div key={index}>
                        <Typography variant="h5" className="why-choose-us-text-left-h5-private">
                            {section.title}
                        </Typography>
                        <div className="why-choose-us-left-div-ul">
                            <ul className="why-choose-us-ul">
                                {section.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <div>

                    <div className="why-choose-us-img-private-div1">
                        <img src={require('../assets/images/why1.png')} alt="why-choose-us-img" className="why-choose-us-img-private-1" />
                    </div>
                    <div className="why-choose-us-img-private-div2">
                        <img src={require('../assets/images/why3.png')} alt="why-choose-us-img" className="why-choose-us-img-private-2" />
                    </div>
                    <div className="why-choose-us-img-private-div3">
                        <img src={require('../assets/images/why2.png')} alt="why-choose-us-img" className="why-choose-us-img-private-3" />
                    </div>
                    <div className="why-choose-us-img-private-div4">
                        <img src={require('../assets/images/why4.png')} alt="why-choose-us-img" className="why-choose-us-img-private-4" />
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};

export default WhyChooseUsPrivateLabeling;
