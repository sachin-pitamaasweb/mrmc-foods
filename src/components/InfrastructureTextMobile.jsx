import React from "react";
import { Grid } from '@mui/material';

const InfrastructureTextMobile = () => {
    return(
        <>
       
            <Grid items xs={12} md={6} sm={12} lg={6} className="infrastructure-text-container-1">
                <div className="infrastructure-img-text-1">
                    <img src={require('../assets/images/Infrastructure2.png')} alt="Infrastructure" className="infrastructure-img-4" />
                </div>
            </Grid>
            <Grid items xs={12} md={6} sm={12} lg={6}>
                <div>
                    <p className="infrastructure-text-2">
                        The rice mill's infrastructure at MRMC is modern and efficient, featuring state-of-the-art machinery for processing rice.
                        Automated systems ensure quality control at every stage, while eco-friendly practices promote
                        sustainability. With spacious warehouses and stringent hygiene standards, we deliver premium rice to customers worldwide.
                        Moreover, our eco-friendly practices go beyond mere compliance with regulations. We actively seek out sustainable solutions,
                        such as energy-efficient processes and responsible waste management, to minimize our environmental footprint
                        At MRMC Foods, we are not just rice processors;
                    </p>
                </div>
            </Grid>
        </>
    )
}

export default InfrastructureTextMobile;