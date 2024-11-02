// src/components/ServiceDetail.tsx
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Grid } from '@mui/material';
import images from '../data/ImagesSlider';

const ServiceDetail: React.FC = () => {
  return (
    <Box sx={{ py: 6, px: 2 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Contenido textual */}
        <Grid item xs={12} md={6}>
          <Typography variant="overline" display="block" gutterBottom sx={{ color: '#e91e63', fontWeight: 'bold' }}>
            Get Your Shine On
          </Typography>
          <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', mb: 2 }}>
            Skilled Nail Art
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
            Nullam tempor sapien gravida donec and pretium ipsum porta integer justo an odio velna vitae auctor integer
            congue magna undo purus a pretium ligula rutrum magna egestas.
          </Typography>
          <List>
            <ListItem disableGutters>
              <ListItemText primary="Aliquam vitae molestie at quisque sapien volutpat and justo, aliquet molestie purus efficitur ipsum" />
            </ListItem>
            <ListItem disableGutters>
              <ListItemText primary="Sagittis congue augue magna risus mauris volutpat and egestas magna suscipit egestas a vitae purus" />
            </ListItem>
          </List>
        </Grid>

        {/* Imagen */}
        <Grid item xs={12} md={6}>
          <img src={images[2].url} alt="Imagen 3" style={{ width: '100%', borderRadius: '8px' }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServiceDetail;
