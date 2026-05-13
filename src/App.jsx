import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, Container, Box, ThemeProvider, createTheme } from '@mui/material';

import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import MyCity from './pages/MyCity';
import MyFuture from './pages/MyFuture';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#ce93d8' },
    background: { default: '#0d1117', paper: '#161b22' }, // Кольори в стилі GitHub Dark
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontFamily: '"JetBrains Mono", monospace' },
    h2: { fontFamily: '"JetBrains Mono", monospace' },
    h3: { fontFamily: '"JetBrains Mono", monospace' },
    h4: { fontFamily: '"JetBrains Mono", monospace' },
    h5: { fontFamily: '"JetBrains Mono", monospace' },
    h6: { fontFamily: '"JetBrains Mono", monospace' },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <Container component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
            <Routes>
              <Route path="/about" element={<AboutMe />} />
              <Route path="/my-city" element={<MyCity />} />
              <Route path="/my-future" element={<MyFuture />} />
              <Route path="/*" element={<Navigate to="/about" />} />
            </Routes>
          </Container>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;