import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, IconButton, CssBaseline, Box, Typography, Drawer } from '@mui/material';

import '../style/Header.css';

import { navLinks } from '../Hepler.jsx';

function Header(props) {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (isOpen) => {
        setOpen(isOpen);
    };

    const handleDrawerToggle = () => {
        toggleDrawer(!open); 
    };

    const handleLinkClick = () => {
        toggleDrawer(false);
    };

    const handleNavLinkClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" className='appbar'>
                <Toolbar>
                    <Box >
                        <div className='appbar-logo-div'>
                            <img src={require('../assets/images/Logo.png')} className="appbar-logo" alt='logo' />
                        </div>
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle} // Corrected function name
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon className='menu-icon' />
                    </IconButton>
                    <Box className='appbar-nav-div'>
                        {navLinks.map((item) => (
                            <Typography key={item.text} className='appbar-nav' component={Link} to={item.to} onClick={handleNavLinkClick}>
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
                                <li key={index}><Link to={link.to} onClick={handleLinkClick}>{link.text}</Link></li>
                            ))}
                        </ul>
                    </div>
                </Drawer>
            </AppBar>
        </Box>
    );
}

export default Header;
