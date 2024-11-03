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
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [galleryMenuAnchor, setGalleryMenuAnchor] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenGalleryMenu = (event: React.MouseEvent<HTMLElement>) => {
    setGalleryMenuAnchor(event.currentTarget);
  };

  const handleCloseGalleryMenu = () => {
    setGalleryMenuAnchor(null);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleCloseMenu(); // Cierra el menú después de hacer scroll
  };

  const leftMenuItems = ["About", "Menu"];
  const galleryItems = ["Acripie", "Baño de acrílico", "Manicure", "Pedicure", "Planchado de cejas", "Rizado de pestañas", "Uñas Acrílicas"];

  return (
    <AppBar 
      position="fixed"
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
                  sx={{ fontSize: '2rem', mr: 2 }}
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
                  {[...leftMenuItems, "Gallery", "Contact"].map((item) => (
                    item === "Gallery" ? (
                      <MenuItem key={item} onClick={handleOpenGalleryMenu}>
                        {item}
                      </MenuItem>
                    ) : item === "Menu" ? (
                      <MenuItem key={item} onClick={() => scrollToSection("menu-section")}>
                        {item}
                      </MenuItem>
                    ) : item === "Contact" ? (
                      <MenuItem key={item} onClick={() => scrollToSection("contact-section")}>
                        {item}
                      </MenuItem>
                    ) : (
                      <MenuItem key={item} onClick={handleCloseMenu}>
                        {item}
                      </MenuItem>
                    )
                  ))}
                  <Menu
                    anchorEl={galleryMenuAnchor}
                    open={Boolean(galleryMenuAnchor)}
                    onClose={handleCloseGalleryMenu}
                  >
                    {galleryItems.map((item) => (
                      <MenuItem key={item} onClick={handleCloseGalleryMenu} component={Link} to={`/gallery/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                        {item}
                      </MenuItem>
                    ))}
                  </Menu>
                </Menu>

                <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                  <img
                    src={logos[1].url}
                    alt="Logo 2"
                    style={{
                      width: '40px',
                      height: '40px',
                      objectFit: 'contain',
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
                    onClick={() => item === "Menu" ? scrollToSection("menu-section") : null}
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
                    objectFit: 'contain',
                    marginRight: '10px',
                  }}
                />
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', fontStyle: 'italic !important' }}>
                  Elyzabethnails
                </Typography>
              </Box>

              <Box display="flex" alignItems="center">
                <Button
                  color="inherit"
                  sx={{
                    mx: 1,
                    transition: 'color 0.3s ease, transform 0.3s ease',
                    '&:hover': {
                      color: '#e91e63',
                      transform: 'scale(1.1)',
                    },
                  }}
                  onClick={handleOpenGalleryMenu}
                >
                  Gallery
                </Button>
                <Menu
                  anchorEl={galleryMenuAnchor}
                  open={Boolean(galleryMenuAnchor)}
                  onClose={handleCloseGalleryMenu}
                >
                  {galleryItems.map((item) => (
                    <MenuItem key={item} onClick={handleCloseGalleryMenu} component={Link} to={`/gallery/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                      {item}
                    </MenuItem>
                  ))}
                </Menu>
                <Button
                  color="inherit"
                  sx={{
                    mx: 1,
                    transition: 'color 0.3s ease, transform 0.3s ease',
                    '&:hover': {
                      color: '#e91e63',
                      transform: 'scale(1.1)',
                    },
                  }}
                  onClick={() => scrollToSection("contact-section")}
                >
                  Contact
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
