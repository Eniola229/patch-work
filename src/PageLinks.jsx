import React from 'react';
import Box from '@mui/material/Box';
import First from './components/First';
import WhatWeDo from './components/WhatWeDo';
import OurImg from './components/OurImg';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import bg from './imgs/bg.jpg';


const PageLinks = () => {
  return (
 <Box 
  component="section" 
  sx={{ 
    p: 0, 
    margin: 0,
    boxSizing: "border-box",
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
  <Header/>
  <First /> 
  <WhatWeDo/>
  <OurImg/>
  <About/>
  <Footer/>
</Box>


  );
  
};

export default PageLinks;
