import * as React from 'react';
import { AppBar, Toolbar, Typography, TextField, MenuItem } from '@mui/material';
import logoSvg from '../img/thinq_app_logo.svg';

export default function Header() {
  return (
    <AppBar 
      component="header" 
      className='header' 
      position="fixed"
      color="inherit"
    >
      <Toolbar>        
        <Typography 
          variant="h1" 
          sx={{ flexGrow: 1 }}
        >
          <a href="/Tokens">
            <img src={logoSvg} alt="LG ThinQ App Logo"/>
            <span>LG ThinQ</span>
          </a>
        </Typography>
        <TextField
          select
          label="Language"
          defaultValue={1}
          size="small"
          sx={{ width: 'max(5.2083vw, 100px)' }}
        >
          <MenuItem value={1}>ko</MenuItem>
          <MenuItem value={2}>en</MenuItem>
          <MenuItem value={3}>es</MenuItem>
          <MenuItem value={4}>fr</MenuItem>
        </TextField>
      </Toolbar>
    </AppBar>
  );
}