import React from "react";
import { Grid, Typography } from '@mui/material';

import '../style/WhyChooseUsPrivateLabelingMobileView.css';

const WhyChooseUsPrivateLabelingMobileView = () => {
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
        <>

            <Grid container className="why-choose-us-container-private-mobile" spacing={2}>
                <Grid item xs={12} className="why-choose-us-text-private-mobile">
                    <Typography variant="h4" gutterBottom align="center" className="why-choose-us-title-private-mobile-main">
                        Why Choose US?
                    </Typography>
                </Grid>
                {sectionInfo.map((section, index) => (
                    <React.Fragment key={index}>
                        <Grid item xs={12} className="why-choose-us-text-private-mobile">
                            <div>
                                <Typography variant="h4" gutterBottom align="center" className="why-choose-us-title-private-mobile">
                                    {section.title}
                                </Typography>
                            </div>
                            <div className="why-choose-us-left-div-ul-mobile">
                                <ul>
                                    {section.items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </Grid>
                        {index < 4 && (
                            <Grid item xs={12}>
                                <img src={require(`../assets/images/why${index + 1}.png`)} alt={`why-choose-us-img-${index}`} className={`why-choose-us-img-private-${index + 1}-mobile`} />
                            </Grid>
                        )}
                    </React.Fragment>
                ))}
            </Grid>
        </>
    );
}

export default WhyChooseUsPrivateLabelingMobileView;
