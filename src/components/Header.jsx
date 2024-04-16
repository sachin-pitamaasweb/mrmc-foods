// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Drawer } from '@mui/material';

// import '../style/Header.css';

// import { navLinks } from '../Hepler.jsx';

// import Logo from '../assets/images/the-flavors-of-tradition.png';

// const Header = () => {
//     const [open, setOpen] = useState(false);

//     const toggleDrawer = (isOpen) => {
//         setOpen(isOpen);
//     };

//     const handleLinkClick = () => {
//         toggleDrawer(false); 
//     };

//     const leftNavLinks = navLinks.filter(link => ['Home', 'About Us', 'Products'].includes(link.text));
//     const rightNavLinks = navLinks.filter(link => ['Events', 'Infrastructure', 'Contacts Us'].includes(link.text));


//     return (
//         <>
//             <header>
//                 <div className="menu-btn" onClick={() => toggleDrawer(true)}>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                 </div>
//                 <div className="container">
//                     <nav className="left-nav">
//                         <ul>
//                             {leftNavLinks.map((link, index) => (
//                              <li key={index}><Link to={link.to} onClick={handleLinkClick}>{link.text}</Link></li>
//                             ))}
//                         </ul>
//                     </nav>
//                     <div className="logo"><img src={Logo} width={90} height={90} alt='logo' /></div>
//                     <nav className="right-nav">
//                         <ul>
//                             {rightNavLinks.map((link, index) => (
//                                 <li key={index}><Link to={link.to} onClick={handleLinkClick}>{link.text}</Link></li>
//                             ))}
//                         </ul>
//                     </nav>
//                 </div>
//             </header>
//             <Drawer
//                 anchor="top"
//                 open={open}
//                 onClose={() => toggleDrawer(false)}
//             >
//                 <div className="drawer-content">
//                     <ul>
//                     {[...leftNavLinks, ...rightNavLinks].map((link, index) => (
//                             <li key={index}><Link to={link.to} onClick={handleLinkClick}>{link.text}</Link></li>
//                         ))}
//                     </ul>
//                 </div>
//             </Drawer>
//         </>
//     )
// }

// export default Header;


import React from 'react';

import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, IconButton, CssBaseline, Box, Typography } from '@mui/material';

import '../style/Header.css';


import { navLinks } from '../Hepler.jsx';

const drawerWidth = 240;

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" className='appbar'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          
        <Box>
            <div className='appbar-logo-div'>
                <img src={require('../assets/images/Logo.png')} className="appbar-logo" alt='logo' />
            </div>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'none' } }} className='appbar-nav-div'>
            {navLinks.map((item) => (
            <Typography key={item.text} className='appbar-nav' component={Link} to={item.to}>
                {item.text}
            </Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Header;
