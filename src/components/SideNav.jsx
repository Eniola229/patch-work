import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const drawerWidth = '100%';

export default function SideNav() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: drawerWidth,
        background: "linear-gradient(90deg, rgba(5, 31, 177, 1) 0%, rgba(1, 23, 139, 1) 50%, rgba(0, 6, 38, 1) 100%)",
        color: 'white',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
        
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
 <ListItem disablePadding>
  <ListItemButton to="/" style={{ textDecoration: 'none', color: 'white', display: 'inline-block', margin: '10px' }}>
    <ListItemIcon>
      <InboxIcon />
    </ListItemIcon>
    <Typography sx={{fontSize:"25px", fontWeight:"bolder"}}>
        HOME
    </Typography>
  </ListItemButton>
</ListItem>


  <ListItem disablePadding>
    <ListItemButton to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '30px', display: 'inline-block', margin: '10px' }}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <Typography sx={{fontSize:"25px", fontWeight:"bolder"}}>
      PROJECT
      </Typography>
    </ListItemButton>
  </ListItem>

  <ListItem disablePadding>
    <ListItemButton to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '30px', display: 'inline-block', margin: '10px' }}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <Typography sx={{fontSize:"25px", fontWeight:"bolder"}}>
      IMAGES
      </Typography>
    </ListItemButton>
  </ListItem>

  <ListItem disablePadding>
    <ListItemButton to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '30px', display: 'inline-block', margin: '10px' }}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
       <Typography sx={{fontSize:"25px", fontWeight:"bolder"}}>
      ABOUT US
      </Typography>
    </ListItemButton>
  </ListItem>

 
</List>
      <Divider />
      <Link to="/contact">
         <Button
            sx={{backgroundColor:"rgba(0, 6, 29, 1)", color:"white", width:"210px", borderRadius:"30px", size:"16px", height:"56px", padding:"27px 37px 20px 37px",  }}
            >Contact Us
          </Button>
        </Link>    
    </Box>
  );

  return (
    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <MenuIcon sx={{ color: 'white' }} />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
