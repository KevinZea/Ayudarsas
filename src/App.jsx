// src/App.jsx
import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AOS from 'aos';

function App() {
  useEffect(() => {
    // Refrescar AOS en la carga del componente
    AOS.refresh();
  }, []);

  return (
    <Box>
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
      {/* <ScrollToTop /> */}
    </Box>
  );
}

export default App;