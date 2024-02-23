import * as React from 'react';
import Box from '@mui/material/Box';
import home from "../imgs/home.jpg"
import Typography from '@mui/material/Typography';
import { keyframes } from '@emotion/react';
import { useTheme } from '@mui/material/styles';


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const flowAnimation = keyframes`
  0% {
    transform: translateY(-10%);
  }
  50% {
    transform: translateY(10%);
  }
  100% {
    transform: translateY(-10%);
  }
`;

function First() {

  const theme = useTheme();

  return (
    <Box
    sx={{
        height:  { xs: "100vh", sm: "auto", md: "100vh", lg: "100vh" },
    }}
    >

    
      <Box sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "70%" }, marginTop: {  xs: "10%", sm: "10%", md: "0", lg: "0" }, marginLeft: "7%" }}>
      <Typography
        variant="h1"
        sx={{
          color: "orange",
          fontFamily: 'Roboto',
          fontSize: { xs: "2rem", sm: "3rem" }, 
          fontWeight: "bold",
          margin: "0 auto",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          lineHeight: "1.2",
          animation: `${flowAnimation} 4s ${theme.transitions.easing.easeInOut} infinite`,
        }}
      >
        PatchWork Global
      </Typography>
      <Typography
        sx={{
          color: "white",
          fontFamily: 'Roboto',
          fontSize: { xs: "2rem", sm: "2.9rem" }, 
          fontWeight: "bold",
          margin: "0 auto",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", 
          lineHeight: "1.5",
          animation: `${flowAnimation} 4s ${theme.transitions.easing.easeInOut} infinite`,
        }}
      >
        is an <span style={{color:"orange"}}> Audio Engineering company</span> generally involved in installation, procurement, design and training of  <span style={{color:"orange"}}> audio gears and individuals.</span>
      </Typography>
    </Box>
    </Box>

  );
}
export default First;


