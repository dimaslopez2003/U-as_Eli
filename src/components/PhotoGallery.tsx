import React, { useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import designs from '../data/Images_Services'; // Importa el arreglo con las imágenes

const PhotoGallery: React.FC = () => {
  const [flipped, setFlipped] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlipped(flipped === index ? null : index);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
        Galería de fotos
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {designs.map((design, index) => (
          <Grid item xs={6} sm={6} md={4} key={index}>
            <Box
              onClick={() => handleFlip(index)}
              sx={{
                width: '100%',
                height: '300px', // Fija la altura para evitar superposición
                perspective: '1000px',
                cursor: 'pointer',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.6s',
                  transform: flipped === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Frente - Imagen */}
                <Box
                  component="img"
                  src={design.url}
                  alt={design.alt}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '16px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    backfaceVisibility: 'hidden',
                  }}
                />

                {/* Reverso - Información */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '90%',
                    height: '90%',
                    borderRadius: '16px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                    backgroundColor: '#fff',
                    color: '#333',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px',
                    transform: 'rotateY(180deg)',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  {/* Header */}
                  <Box
                    sx={{
                      width: '100%',
                      textAlign: 'center',
                      backgroundColor: '#F25CAF',
                      color: '#fff',
                      padding: '10px',
                      borderRadius: '16px 16px 0 0',
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {design.alt}
                    </Typography>
                  </Box>

                  {/* Contenido principal */}
                  <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <Typography variant="body1">
                      Información sobre el servicio aquí.
                    </Typography>
                  </Box>

                  {/* Footer */}
                  <Box
                    sx={{
                      width: '100%',
                      textAlign: 'center',
                      backgroundColor: '#F25CAF',
                      color: '#fff',
                      padding: '10px',
                      borderRadius: '0 0 16px 16px',
                    }}
                  >
                    <Typography variant="body2">Haz clic para regresar</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PhotoGallery;
