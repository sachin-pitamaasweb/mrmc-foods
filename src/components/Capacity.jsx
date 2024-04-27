import React from "react";
import { Grid } from "@mui/material";

import '../style/Capacity.css';

const Capacity = () => {
    return (
        <>
            <Grid container className="capacity-container" spacing={2}>
                <Grid item xs={12} className="capacity-div-grid" >
                    <div className="capacity-div-mobile" data-aos="fade-up" data-aos-duration="3000">
                        <img src={require('../assets/images/capacity2.png')} alt="capacity" className="capacity" />
                    </div>
                    <div className="capacity-div-mobile" data-aos="fade-up" data-aos-duration="3000">
                        <img src={require('../assets/images/capacity1.png')} alt="capacity" className="capacity" />
                    </div>
                </Grid>

            </Grid>
        </>
    )
}
export default Capacity;