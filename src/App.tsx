// src/App.tsx
import React from 'react';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import ImageSlider from './components/ImageSlider';
import './App.css';
import Container from '@mui/material/Container';
import ServiceCards from './components/ServiceCards';

function App() {
  return (
    <div className="App">
      <Header />
      <ImageSlider /> {}
        <ServiceCards />
      <Container maxWidth="lg">
        <h2>Contenido principal</h2>
        <p>Descripción o contenido de ejemplo.</p>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
