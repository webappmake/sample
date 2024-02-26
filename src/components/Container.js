import * as React from 'react';
import { Box } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Footer from './Footer';
import Tokens from '../pages/Tokens';
import TokensNew from '../pages/TokensNew';
import TokensCreated from '../pages/TokensCreated';

export default function Container() { 
  
  return (      
    <PerfectScrollbar className='container-wrap'>
     
      <Box component='main' className='container'>
        <Box className='contents'>
          <Routes>
            <Route path="/Tokens" element={<Tokens />} />
            <Route path="/TokensNew" element={<TokensNew />} />
            <Route path="/TokensCreated" element={<TokensCreated />} />
            <Route path='/*' element={<Navigate replace to='/Tokens'/>} />
          </Routes>
        </Box>
        <Footer/>
      </Box>
    </PerfectScrollbar>
  );
} 