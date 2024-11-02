// src/layouts/Header.tsx
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import logos from '../data/Logo';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const leftMenuItems = ["About", "Menu"];
  const rightMenuItems = ["Gallery", "Contact"];

  return (
    <AppBar 
      position="fixed" // Mantiene el header fijo en la parte superior
      sx={{ 
        backgroundColor: '#F25CAF', 
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
        padding: '10px 0' 
      }} 
      elevation={3}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          {isMobile ? (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleOpenMenu}
                  sx={{ fontSize: '2rem', mr: 2 }} // Aumenta el tamaño del ícono del menú
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                  sx={{
                    '& .MuiPaper-root': {
                      width: '100%',
                      maxWidth: '300px',
                    },
                  }}
                >
                  {[...leftMenuItems, ...rightMenuItems].map((item) => (
                    <MenuItem key={item} onClick={handleCloseMenu}>
                      {item}
                    </MenuItem>
                  ))}
                </Menu>

                {/* Centra el logo en la versión móvil */}
                <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                  <img
                    src={logos[1].url}
                    alt="Logo 2"
                    style={{
                      width: '40px',
                      height: '40px',
                      objectFit: 'contain', // Mejora la claridad de la imagen
                    }}
                  />
                </Box>
              </Box>
            </>
          ) : (
            <>
              <Box display="flex" alignItems="center">
                {leftMenuItems.map((item, index) => (
                  <Button
                    key={index}
                    color="inherit"
                    sx={{
                      mx: 1,
                      transition: 'color 0.3s ease, transform 0.3s ease',
                      '&:hover': {
                        color: '#e91e63',
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>

              <Box display="flex" alignItems="center">
                <img
                  src={logos[1].url}
                  alt="Logo 2"
                  style={{
                    width: '60px',
                    height: '60px',
                    objectFit: 'contain', // Asegura claridad de la imagen
                    marginRight: '10px',
                  }}
                />
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                  Elyzabethnails
                </Typography>
              </Box>

              <Box display="flex" alignItems="center">
                {rightMenuItems.map((item, index) => (
                  <Button
                    key={index}
                    color="inherit"
                    sx={{
                      mx: 1,
                      transition: 'color 0.3s ease, transform 0.3s ease',
                      '&:hover': {
                        color: '#e91e63',
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
