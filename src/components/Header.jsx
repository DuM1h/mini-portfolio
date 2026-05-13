import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CodeIcon from '@mui/icons-material/Code';

const Header = () => {
  return (
    <AppBar 
      position="sticky" // Щоб хедер їздив за тобою при скролі
      sx={{ 
        background: 'rgba(13, 17, 23, 0.7)', // Напівпрозорий фон
        backdropFilter: 'blur(10px)', // Ефект скла
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: 'none'
      }}
    >
      <Toolbar>
        <CodeIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Misha.Dev
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button color="inherit" component={Link} to="/about" startIcon={<PersonIcon />}>
            Про мене
          </Button>
          <Button color="inherit" component={Link} to="/my-city" startIcon={<LocationCityIcon />}>
            Моє місто
          </Button>
          <Button color="inherit" component={Link} to="/my-future" startIcon={<TrendingUpIcon />}>
            Шлях
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;