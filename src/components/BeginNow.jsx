import React, { useState } from "react";
import { Grid, Typography, TextField } from "@mui/material";

import '../style/BeginNow.css';

const BeginNow = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        phone: "",
        email: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
     
        console.log(formData); 
    };

    return (
        <>
            <Grid container className="begin-now-container" spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5" className="begin-now-text">
                        Begin Now
                    </Typography>
                </Grid>
                <Grid item xs={12} className="begin-now-form">
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} sm={6} lg={6}>
                                <TextField
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} md={6} sm={6} lg={6}>
                                <TextField
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sm={12} lg={12}>
                                <TextField
                                    label="company Name"
                                    variant="outlined"
                                    fullWidth
                                    id="companyName"
                                    name="companyName"
                                    type="text"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sm={12} lg={12}>
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sm={12} lg={12}>
                                <TextField
                                    label="Phone"
                                    variant="outlined"
                                    fullWidth
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} className='drop-us-a-line-button-container'>
                                <button type="submit" className='drop-us-a-line-button'>Send</button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </>
    );
};

export default BeginNow;
