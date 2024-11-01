// src/pages/Home.tsx
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom>
        Página Principal
      </Typography>
      <Typography variant="body1">
        Bienvenidos a nuestra página principal. Aquí encontrarás toda la información que necesitas.
      </Typography>
    </Container>
  );
};

export default Home;
