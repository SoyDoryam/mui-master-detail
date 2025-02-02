import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from './components/Layout.tsx';
import Home from './views/Home.tsx';
import List from './views/List.tsx';
import Detail from './views/Detail.tsx';
import About from './views/About.tsx';
import Contact from './views/Contact.tsx';
import { AppProvider } from './context/AppContext.tsx';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/List" element={<List />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;