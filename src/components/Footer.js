import * as React from 'react';
import { Box, Link, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box className='footer' component="footer">
      <Typography className='copy' variant="caption" color="text.secondary">
        {'Copyright © ' + new Date().getFullYear() + ' '}
        <Link color="inherit" href="https://www.lg.co.kr/">
          LG Electronics 
        </Link>{'. All rights reserved.'}
      </Typography>
    </Box>
  );
}