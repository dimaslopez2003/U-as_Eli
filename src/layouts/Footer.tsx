// src/layouts/Footer.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: 3, backgroundColor: '#333', color: 'white', mt: 5 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Elizabeth Martinez 2024.
        </Typography>
        <Typography variant="body2" align="center">
          <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
            Política de privacidad
          </Link>
          |
          <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
            Condiciones del servicio
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
