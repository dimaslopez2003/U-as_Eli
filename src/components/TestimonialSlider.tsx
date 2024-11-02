// src/components/TestimonialSlider.tsx
import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Container } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "Aliquam augue a suscipit luctus neque purus ipsum neque dolor primis libero at tempus blandit posuere magna sagittis congue augue magna risus mauris and volutpat egestas.",
    author: "AJ"
  },
  {
    text: "Etiam sapien sagittis congue augue massa varius egestas suscipit magna a tempus aliquet rutrum magna.",
    author: "Rachel A."
  },
  {
    text: "At sagittis congue augue undo egestas magna ipsum vitae purus primis suscipit and blandit a cursus molestie at.",
    author: "Wendy T."
  }
];

const TestimonialSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f3f3' }}>
      <Container maxWidth="md">
        <Typography variant="overline" display="block" gutterBottom sx={{ color: '#e91e63', fontWeight: 'bold', textAlign: 'center' }}>
          Testimonios
        </Typography>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
          Lo que la gente está diciendo
        </Typography>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} sx={{ textAlign: 'center', px: 4 }}>
              <Typography variant="h6" component="p" sx={{ fontStyle: 'italic', color: 'text.secondary', mb: 2 }}>
                &quot;{testimonial.text}&quot;
              </Typography>
              <Typography variant="subtitle1" component="p" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                –{testimonial.author}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default TestimonialSlider;
