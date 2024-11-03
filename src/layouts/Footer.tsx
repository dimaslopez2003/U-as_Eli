import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: 5, backgroundColor: '#F25CAF', color: 'white', mt: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Puedes mandarme correo
            </Typography>
            <Button variant="contained" color="secondary" sx={{ width: '100%', backgroundColor: 'white', color: '#F25CAF' }}>
              karyynamtz@gmail.com
            </Button>
            <Typography variant="body2" sx={{ mt: 1, color: 'white' }}>
              By signing and clicking Submit, you affirm you have read and agree to the{' '}
              <Link href="#" underline="hover" sx={{ color: 'white' }}>
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="#" underline="hover" sx={{ color: 'white' }}>
                Terms of Use
              </Link>
              , and want to receive news.
            </Typography>
          </Grid>

          {/* Get in Touch Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Ubicación
            </Typography>
            <Typography variant="body2">Calle 36 349, 77535 Cancún, Q.R.</Typography>

            <Box sx={{ mt: 2 }}>
              <iframe
                title="Google Maps Location"
                src={`https://www.google.com/maps/embed/v1/place?q=Calle+36+349,+77535+Cancún,+Q.R.&key=AIzaSyCagKB5uT9vCXY9MylRm-Xmymy6LVamBwI`}
                style={{ border: 0, width: '100%', height: '200px', borderRadius: '8px' }}
                allowFullScreen
              ></iframe>
            </Box>
            <Link href="mailto:karyynamtz@gmail.com" underline="hover" sx={{ color: 'white', display: 'block', mt: 1 }}>
              karyynamtz@gmail.com
            </Link>
            <Typography variant="h6" sx={{ color: 'white', mt: 1 }}>998 186 3304</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Mon-Fri: 10AM - 9PM <br />
              Saturday: 10AM - 7PM <br />
              Sunday: 10AM - 7PM
            </Typography>
          </Grid>

          {/* Social Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Social
            </Typography>
            <Link
              href="https://www.instagram.com/elyzabethnails_/"
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center', color: 'white', mb: 1 }}
            >
              <InstagramIcon sx={{ mr: 1 }} /> Instagram
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100083072359852"
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center', color: 'white', mb: 1 }}
            >
              <FacebookIcon sx={{ mr: 1 }} /> Facebook
            </Link>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box sx={{ mt: 5, textAlign: 'center' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Elizabeth Martinez 2024. All Rights Reserved.
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
              Privacy Policy
            </Link>
            |
            <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
              Terms & Conditions
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
