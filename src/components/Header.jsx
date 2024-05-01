import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, CssBaseline, Box, Typography, Drawer, IconButton } from '@mui/material';

import '../style/Header.css';

import { navLinks } from '../Hepler.jsx';

function Header() {

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const toggleDrawer = (isOpen) => {
        setOpen(isOpen);
    };

    const handleDrawerToggle = () => {
        toggleDrawer(!open);
    };

    const handleLinkClick = () => {
        toggleDrawer(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleNavLinkClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const handleLogoClick = () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: "smooth" });
    }



    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" className='appbar'>
                <Toolbar className='appbar-toolbar'>
                    <Box >
                        <div className='appbar-logo-div' data-aos="fade-right" >
                            <img src={require('../assets/images/mrmc-logo.png')} className="appbar-logo" alt='logo' onClick={handleLogoClick} style={{ cursor: 'pointer' }} />
                        </div>
                    </Box>
                <Box>
                <IconButton
                        className="menu-icon"
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>

                    <Box className='appbar-nav-div'>
                        {navLinks.map((item) => (
                            <Typography key={item.text} className='appbar-nav' component={Link} to={item.to} onClick={handleNavLinkClick} data-aos="zoom-in">
                                {item.text}
                            </Typography>
                        ))}
                    </Box>
                </Toolbar>
                <Drawer
                    anchor="top"
                    open={open}
                    onClose={() => toggleDrawer(false)}
                >
                    <div className="drawer-content">
                        <ul>
                            {navLinks.map((link, index) => (
                                <li
                                    key={index}>
                                    <Link
                                        to={link.to}
                                        onClick={handleLinkClick}
                                        data-aos="fade-down"
                                        data-aos-easing="linear"
                                        data-aos-duration="1500"
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Drawer>
            </AppBar>
        </Box>
    );
}

export default Header;



