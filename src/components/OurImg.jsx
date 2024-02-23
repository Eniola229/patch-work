import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { keyframes } from '@emotion/react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img1 from '../imgs/imgone.jpeg';
import img2 from '../imgs/imgtwo.jpeg';
import img3 from '../imgs/imgthree.jpeg';
import img4 from '../imgs/imgsix.jpeg';
import img5 from '../imgs/imgfour.jpeg';
import img6 from '../imgs/imgfive.jpeg';
import img7 from '../imgs/mic.jpg';
import Button from '@mui/material/Button';


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const BlurBox = styled(Box)({
  background: 'radial-gradient(circle at 50% 50%, rgba(221, 217, 255, 0.5) 0%, rgba(206, 206, 255, 0.5) 50%, rgba(147, 145, 163, 0.5) 100%)',
  backdropFilter: 'blur(10px)',
});

const ImageGallery = () => {
  return (
    <BlurBox
      style={{
        minHeight: '30vh',
        paddingTop: '50px',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '80%', margin: '0 auto', animation: `${fadeIn} 1s ease-out` }}>
        <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
        fontFamily: 'Roboto',
        color: 'white',
        fontWeight: 'bold',
        animation: `${fadeIn} 1s ease-out`,
      }}
    >
      Image Gallary
    </Typography>
        <ImageList sx={{ width: '100%', height: 450 }} cols={3} gap={8}>
          {[
            { img: img1, title: 'Image 1' },
            { img: img2, title: 'Image 2' },
            { img: img3, title: 'Image 3' },
            { img: img4, title: 'Image 4' },
            { img: img5, title: 'Image 5' },
            { img: img6, title: 'Image 6' },
            { img: img7, title: 'Image 7' },
            
          ].map((item, index) => (
            <ImageListItem key={index}>
              <img src={item.img} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
       
    </BlurBox>
  );
};

export default ImageGallery;
