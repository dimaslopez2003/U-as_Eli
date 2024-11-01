// src/components/ServiceCards.tsx
import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import iconos from '../data/IconsDetails'; // Importa el archivo de íconos personalizados // Icono para Nail Art
import SpaIcon from '@mui/icons-material/Spa'; // Icono para Add-Ons

const services = [
  {
    title: 'Arte de las uñas',
    description: 'Ligula risus auctor tempus and dolor vitae undo purus semper sodales',
    icon: <img src={iconos[0].url} alt={iconos[0].alt} style={{ width: 50, height: 50 }} />, // Usa el ícono personalizado
  },
  {
    title: 'Cuidado de los pies',
    description: 'Ligula risus auctor tempus and dolor vitae undo purus semper sodales',
    icon: <img src={iconos[1].url} alt={iconos[0].alt} style={{ width: 50, height: 50 }} />,
  },
  {
    title: 'Add-Ons',
    description: 'Ligula risus auctor tempus and dolor vitae undo purus semper sodales',
    icon: <SpaIcon style={{ fontSize: 50, color: '#333' }} />,
  },
];

const ServiceCards: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={3} sx={{ textAlign: 'center', p: 3 }}>
              <CardContent>
                {service.icon}
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mt: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ my: 2 }}>
                  {service.description}
                </Typography>
                <Button variant="text" sx={{ color: '#333', fontWeight: 'bold' }}>
                  FIND OUT MORE
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceCards;
