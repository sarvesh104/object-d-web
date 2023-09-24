import * as React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact Us', path: '/contact' }
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link} 
              to={item.path} // Set the path for each navigation item
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor:"#fff", color:"#707070", boxShadow:"none"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon fontSize='large' />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontWeight:"600", marginLeft:{md:"100px", xs:""},fontSize:"29px"  }}
          >
            Object Detection
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, marginRight:"100px" }}>
            {navItems.map((item) => (
              <Button key={item.label} component={Link} to={item.path} sx={{ color: '#707070', fontWeight:"600", marginRight:{md:"50px", xs:""}, textTransform:"none", fontSize:"20px" }}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Header;





























// const header = () => {
//   return (
//     <PageWidth sx={{ marginBottom: "px" ,maxWidth: "100%",
//  }}>
//       <Grid container rowspacing={2} sx={{display:"flex", alignItems:"center", backgroundColor:"#FFFFFF",boxShadow: "0px 10px 30px #A8A8A829" ,  position: "fixed",

// zIndex: "1100",   minHeight: "64px" ,}}>
//         <Grid item xs={6}>
//           <Box sx={{fontSize:"30px" , color: "#707070", fontWeight:"600", textAlign:"left",marginLeft:"120px"}}>Obect Detection</Box>
//         </Grid>
//         <Grid item xs={2}>
//           <Box sx={{fontSize:"20px", fontWeight:"600", textAlign:"end" , color: "#707070"}}>Home</Box>
//         </Grid>
//         <Grid  item xs={1}>
//           <Box sx={{fontSize:"20px", fontWeight:"600", textAlign:"end" , color: "#707070"}}>About</Box>
//         </Grid>
//         <Grid item xs={2}>
//           <Box sx={{fontSize:"20px", fontWeight:"600", textAlign:"center" , color: "#707070"}}>Contact Us</Box>
//         </Grid>
//       </Grid>
//     </PageWidth>
//   );
// };

// export default header;
