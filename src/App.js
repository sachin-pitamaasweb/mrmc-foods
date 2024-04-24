import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import Products from './pages/Products.jsx';
import Events from './pages/Events.jsx';
import Contacts from './pages/Contacts.jsx';
import Infrastructure from './pages/Infrastructure.jsx';
import PrivateLabeling from './pages/PrivateLabeling.jsx';

import StickySocialMedia  from '../src/common/StickySocialMedia.jsx';
import FooterBottom from './common/FooterBottom.jsx';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path ="/private-labeling" element={<PrivateLabeling />} />
      </Routes>
      <Footer />
      <FooterBottom />
      <StickySocialMedia  />
    </Router>
  );
}

export default App;
