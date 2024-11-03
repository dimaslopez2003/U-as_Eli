import React from 'react';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import ImageSlider from './components/ImageSlider';
import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ServiceCards from './components/ServiceCards';
import ServiceDetail from './components/ServiceDetail';
import RevealYourStyle from './components/RevealYourStyle';
import ServiceList from './components/ServiceList';
import RevealYourStyleLeft from './components/RevealYourStyleLeft';
import TestimonialSlider from './components/TestimonialSlider';
import PhotoGallery from './components/PhotoGallery';
import WorkingHours from './components/WorkingHours';

function App() {
  return (
    <div style={{ marginTop: '80px' }}>
      <Header />

      {/* Container que aplica margen global */}
      <Container maxWidth="lg" sx={{ padding: '20px 0' }}>
        <Box mb={6}>
          <ImageSlider />
        </Box>

        <Box mb={6}>
          <ServiceCards />
        </Box>

        <Box mb={6}>
          <ServiceDetail />
        </Box>

        <Box mb={6}>
          <RevealYourStyle />
        </Box>

        {/* Agregamos el id="menu-section" para hacer scroll a esta sección */}
        <Box mb={6} id="menu-section">
          <ServiceList />
        </Box>

        <Box mb={6}>
          <RevealYourStyleLeft />
        </Box>

        <Box mb={6}>
          <TestimonialSlider />
        </Box>

        <Box mb={6}>
          <PhotoGallery />
        </Box>

        <Box mb={6}>
          <WorkingHours />
        </Box>
      </Container>

      <Box id="contact-section">
        <Footer />
      </Box>
    </div>
  );
}

export default App;
