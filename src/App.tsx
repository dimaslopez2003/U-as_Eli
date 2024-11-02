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

        <Box mb={6}>
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
          <h2>Contenido principal</h2>
          <p>Descripción o contenido de ejemplo.</p>
        </Box>
      </Container>

      <Footer />
    </div>
  );
}

export default App;
