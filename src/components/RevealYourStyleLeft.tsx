// src/components/RevealYourStyleLeft.tsx
import React from 'react';
import { Box, Grid, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'; // Asegúrate de cambiar esta ruta según tu estructura de archivos

const RevealYourStyle: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box ref={ref} sx={{ py: 6, px: 2, backgroundColor: '#f8f3f3' }}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
        transition={{ duration: 0.5 }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Texto a la izquierda */}
          <Grid item xs={12} md={6}>
            <Typography variant="overline" display="block" gutterBottom sx={{ color: '#e91e63', fontWeight: 'bold' }}>
              Consigue tu brillo
            </Typography>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', mb: 2 }}>
              Feminidad brillante
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
              Nullam tempor sapien gravida donec and pretium ipsum porta integer justo odio velna a vitae auctor justo integer congue undo purus ligula a pretium rutrum egestas.
            </Typography>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
              Elegancia en cada trazo
            </Typography>
            <List>
              <ListItem disableGutters>
                <ListItemText primary="Aliquam vitae molestie at quisque sapien volutpat y justo, aliquet molestie purus efficitur ipsum" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Sagitario congue augue magna risus mauris volutpat y egestas magna suscipit egestas a vitae purus" />
              </ListItem>
            </List>
          </Grid>

          {/* Imagen a la derecha */}
          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default RevealYourStyle;
