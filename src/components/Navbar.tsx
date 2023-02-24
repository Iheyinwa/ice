import { Avatar, IconButton} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ice from '../images/ice.jpg';
import Menu from '@mui/material/Menu';
import React from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
export default function Navbar() {
  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);
  const settings = ["First", "Second", "Third"];


  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  
  };
  const closeMenu = () => {
    setAnchor(null);
 
  };
  // const onMenuItemClick = (e, index) => {
  //   setAnchor(null);
  //   setSelected(index);
  // };
  return (
    <Box sx={{
      flexGrow: 1, border: 'rgba(17, 17, 17, 0.5);', boxShadow: 3, borderRadius: '16px',mx:15,mt:3, backdropFilter: 'blur(41)'}}>
      <AppBar position='static' sx={{ bgcolor: 'rgba(17, 17, 17, 0.5);', boxShadow: 3, borderRadius: '16px', backdropFilter: 'blur(41)' }}>
        <Toolbar>
          <IconButton sx={{p:0}}>
            <Avatar alt='ice' src={ice} sx={{ width: 40, height: 40 }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,mr:4 }}>
            ICE
          </Typography>
          <Button arial-label='menu' size='large' onClick={openMenu} endIcon={anchor ? <CloseRoundedIcon htmlColor='white' fontSize='large'/> :
            <MenuRoundedIcon htmlColor='white' fontSize='large' />}>
            
          </Button>
          <Menu sx={{ mt: '45px' }} anchorEl={anchor} open={Boolean(anchor)} onClose={closeMenu}>
            {settings.map((setting) => (
              <MenuItem key={setting}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

