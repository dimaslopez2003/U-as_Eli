// src/components/ImageSlider.tsx
import React from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import images from '../data/ImagesSlider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <Box sx={{ width: '100%', maxWidth: '800px', overflow: 'hidden' }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={image.url}
                alt={image.alt}
                style={{
                  width: '100%',
                  height: '500px', // Establece una altura fija para todas las imágenes
                  objectFit: 'cover', // Recorta y ajusta la imagen al contenedor
                }}
              />
            </div>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ImageSlider;
