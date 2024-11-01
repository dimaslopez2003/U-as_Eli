// src/components/ImageGallery.tsx
import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
  { img: 'https://via.placeholder.com/400', title: 'Evento 1' },
  { img: 'https://via.placeholder.com/400', title: 'Evento 2' },
  { img: 'https://via.placeholder.com/400', title: 'Evento 3' },
];

const ImageGallery: React.FC = () => {
  return (
    <ImageList sx={{ width: '100%', height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImageGallery;
