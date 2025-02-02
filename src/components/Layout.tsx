import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Header from './Header.tsx';
import Sidebar from './Sidebar.tsx';
import Footer from './Footer.tsx';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Header />
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;