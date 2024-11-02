// src/components/ServiceList.tsx
import React from 'react';
import { Box, Grid, Typography, List, ListItem, ListItemText, Button, Card, CardContent } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const servicesLeft = [
  { name: 'Manicura clásica', price: '$19', duration: 'Duración del servicio 25 minutos.' },
  { name: 'Manicura spa', price: '$30', duration: 'Duración del servicio 35 minutos.' },
  { name: 'Manicura con aloe vera', price: '$48', duration: 'Duración del servicio 45 minutos.' },
  { name: 'Manicura en gel', price: '$35', duration: 'Duración del servicio 40 minutos.' },
  { name: 'Pedicura Express Orgánica', price: '$34', duration: 'Duración del servicio 35-45 minutos.' },
  { name: 'Manicura en gel con firma', price: '$50', duration: 'Duración del servicio 40 minutos.' },
  { name: 'Juego completo de gel duro', price: '$85', duration: 'Duración del servicio 100-120 minutos.' },
  { name: 'Mini Cura', price: '$17', duration: 'De 3 a 8 años. Duración del servicio: 20 a 30 minutos.' },
];

const servicesRight = [
  { name: 'Arte de uñas', price: '$11', duration: 'Duración del servicio 15 minutos.' },
  { name: 'Francés polaco', price: '$16', duration: 'Duración del servicio 20 minutos.' },
  { name: 'Mascarilla de parafina', price: '$18', duration: 'Duración del servicio 20 minutos.' },
  { name: 'Aplicaciones de gel', price: '$24', duration: 'Duración del servicio 15 minutos.' },
  { name: 'Eliminación de esmalte en gel', price: '$14', duration: 'Duración del servicio 25 minutos.' },
  { name: 'Tratamiento de callos', price: '$19', duration: 'Duración del servicio 30 minutos.' },
  { name: 'Mascarilla de colágeno', price: '$11', duration: 'Duración del servicio 20 minutos.' },
  { name: 'Efecto holográfico', price: '$16', duration: 'Duración del servicio 25 minutos.' },
];

const ServiceList: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box ref={ref} sx={{ py: 6, px: 2, textAlign: 'center', overflow: 'hidden' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        {/* Imagen decorativa */}
        <Typography variant="overline" display="block" gutterBottom sx={{ color: '#e91e63', fontWeight: 'bold' }}>
          Fresco, brillante, luminoso
        </Typography>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', mb: 4 }}>
          Haz que tu día brille con tus uñas brillantes
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Card para Uñas y Cócteles */}
          <Grid item xs={12} md={5}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
                  Uñas y Cócteles
                </Typography>
                <List>
                  {servicesLeft.map((service, index) => (
                    <ListItem key={index} disableGutters>
                      <ListItemText
                        primary={`${service.name} .................... ${service.price}`}
                        secondary={service.duration}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Card para Paquetes de Pintura */}
          <Grid item xs={12} md={5}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
                  Paquetes de Pintura
                </Typography>
                <List>
                  {servicesRight.map((service, index) => (
                    <ListItem key={index} disableGutters>
                      <ListItemText
                        primary={`${service.name} .................... ${service.price}`}
                        secondary={service.duration}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Botón de Ver Todos los Precios */}
        <Box textAlign="center" sx={{ mt: 4 }}>
          <Button variant="text" sx={{ color: '#333', fontWeight: 'bold' }}>
            VER TODOS LOS PRECIOS
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default ServiceList;
