import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from "../imgs/logo.jpeg";
import { Link } from 'react-router-dom';
import SideNav from "./SideNav";




export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ top: 0, backgroundColor: 'transparent', boxShadow: "none" }}>
      <Container maxWidth="xl" sx={{ margin: "10px" }}>
        <Toolbar disableGutters>
          <img
            src={logo}
            alt="Logo"
            style={{
             height: '80px',
              borderRadius: "50%",
              display: { xs: 'none', md: 'flex' },
              boxShadow: '0 0 80px rgba(0, 0, 255, 0.5)', 
              filter: 'brightness(120%)',
            }}
          />
          <Box sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: "flex-end",
            margin: "auto",
            display: "flex",
            width: '50%',
            padding: '20px',
            gap: "20px",
            display: { xs: 'none', md: 'flex' }
          }}>
           <Link to="/"  style={{  textDecoration: 'none', fontSize:"1.1rem", fontFamily:"monospace", color: "white", fontWeight: "900", textAlign: "center" }}>
            HOME
           </Link>
           <Link to="/"  style={{  textDecoration: 'none', fontSize:"1.1rem", fontFamily:"monospace", color: "white", fontWeight: "900", textAlign: "center" }}>
            PROJECTS
           </Link>
            <Link to="/"  style={{  textDecoration: 'none', fontSize:"1.1rem", fontFamily:"monospace", color: "white", fontWeight: "900", textAlign: "center" }}>
            IMAGES
           </Link>
            <Link to="/contact"  style={{  textDecoration: 'none', fontSize:"1.1rem", fontFamily:"monospace", color: "white", fontWeight: "900", textAlign: "center" }}>
            ABOUT US
           </Link>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
           <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                backgroundColor: "rgba(0, 6, 29, 1)",
                color: "white",
                width: "210px",
                borderRadius: "30px",
                size: "16px",
                height: "56px",
                padding: "27px 37px 20px 37px",
                '&:hover': {
                  // backgroundColor: "rgba(84, 61, 255, 1)"
                },
                display: { xs: 'none', md: 'flex' },
              }}
            >Contact Us
            </Button>
            </Link>
            
                <IconButton
                  size="small"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(255, 193, 7, 1)",
                    position: "fixed",
                    right: "40px", 
                    top: "40px", 
                    zIndex: '1000',
                    display: { xs: 'flex', md: 'none' },
                  }}
                >
                  <SideNav />
                </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

