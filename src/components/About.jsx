import React, { useState, useEffect, useRef } from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { keyframes } from '@emotion/react';
import imgtworemovebg from "../imgs/imgtworemovebg.png";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import logo from "../imgs/logo.jpeg";
import { Link } from 'react-router-dom';

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const zoomOut = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.5);
  }
`;

const ZoomOutImage = ({ src }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const element = document.getElementById('zoom-out-image');

      if (element && scrollY >= element.offsetTop - window.innerHeight / 2) {
        setAnimate(true);
        setTimeout(() => {
          setAnimate(false);
        }, 5000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="zoom-out-image"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <img
        src={src}
        alt="Image"
        style={{
          width: '100%',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'transform 1s ease-out',
          transform: animate ? 'scale(0.5)' : 'scale(1)',
        }}
      />
    </div>
  );
};

const About = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTextVisible(true);
        }
      });
    }, {
      threshold: 0.5 
    });

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setImageVisible(true);
        }
      });
    }, {
      threshold: 0.5 
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <Box
      style={{
        position: 'relative',
        minHeight: '30vh',
        paddingTop: '50px',
        width: "100%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(0, 0, 255, 0.5)', 
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 9, 109, 1) 0%, rgba(19, 7, 228, 1) 50%, rgba(14, 0, 65, 1) 100%)', 
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
         <Grid item xs={12} sm={6} ref={imageRef}>
            <ZoomOutImage src={imgtworemovebg} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box ref={textRef} sx={{ color: 'white', textAlign: 'left', animation: `${fadeInRight} 1s ease-out ${textVisible ? 'forwards' : 'none'}` }}>
              <Typography variant="h2" sx={{fontFamily:"roboto", fontWeight:"900", fontSize: { xs: "2rem", sm: "4rem" },}} gutterBottom>
                About Us
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Typography gutterBottom>
                  PatchWork Global is an Audio Engineering company generally involved in installation, procurement, design and training of audio gears and individuals. We run all levels of installation ranging from " home sound systems , live audio systems , music concerts, live production , podcasts etc..
                </Typography>
                <Link  to="/contact" style={{ textDecoration: 'none' }}>
                <Button
                  sx={{ justifyContent:"left", backgroundColor:"rgba(0, 6, 29, 1)", color:"white", width:"210px", borderRadius:"30px", size:"16px", height:"56px", padding:"27px 37px 20px 37px",}}
                  >Contact US
                  </Button>
                  </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
