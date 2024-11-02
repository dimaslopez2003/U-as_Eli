// src/components/RevealYourStyle.tsx
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Grid } from '@mui/material';// Asegúrate de tener esta imagen en la carpeta assets

const RevealYourStyle: React.FC = () => {
  return (
    <Box sx={{ py: 6, px: 2, bgcolor: '#f9f5f5' }}>
      <Grid container spacing={4} alignItems="center">


        {/* Contenido textual */}
        <Grid item xs={12} md={6}>
          <Typography variant="overline" display="block" gutterBottom sx={{ color: '#e91e63', fontWeight: 'bold' }}>
            Reveal Your Style
          </Typography>
          <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', mb: 2 }}>
            Customize Your Look
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
            Nullam tempor sapien gravida donec and pretium ipsum porta integer justo odio velna vitae auctor justo integer 
            congue undo purus ligula a pretium rutrum egestas.
          </Typography>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
            Personal Touch
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
      </Grid>
    </Box>
  );
};

export default RevealYourStyle;
