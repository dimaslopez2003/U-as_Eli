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

  const menuItems = ["About", "Pages", "Menu", "Gallery", "Booking", "Blog", "Contacts"];

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center">
            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
              LA NOTTÉ
            </Typography>
            <Typography variant="subtitle1" sx={{ ml: 1 }}>
              NAIL STUDIO
            </Typography>
          </Box>

          {isMobile ? (
            // Menú hamburguesa para dispositivos móviles
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleOpenMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                {menuItems.map((item) => (
                  <MenuItem key={item} onClick={handleCloseMenu}>
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            // Menú completo para escritorio con animación en hover
            <Box>
              {menuItems.map((item, index) => (
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
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
