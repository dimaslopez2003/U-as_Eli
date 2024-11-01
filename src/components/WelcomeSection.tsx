// src/components/WelcomeSection.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const WelcomeSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f4f4f4',
        py: 8,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Bienvenidos a La Notte
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Ofrecemos la mejor experiencia en eventos, entretenimiento y mucho más.
        </Typography>
      </Container>
    </Box>
  );
};

export default WelcomeSection;
