import React, { useState, useEffect } from 'react';
import { 
  Typography, Box, Card, CardContent, CircularProgress, 
  Alert, Grid, Divider, ImageList, ImageListItem, Chip 
} from '@mui/material';
import { motion } from 'framer-motion';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

const MyCity = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cityInfo = {
    name: 'Бердичів',
    region: 'Житомирська область',
    tags: ['Історія', 'Архітектура', 'Бальзак', 'Кармеліти'],
    description: `Бердичів — це не просто точка на мапі, а справжня історична локація з особливим характером. Місто, де перетиналися культури, де стіни величного монастиря Босих Кармелітів пам'ятають облоги, а Костел Святої Варвари зберігає історію вінчання Оноре де Бальзака. Це місце з власною атмосферою, яку неможливо передати сухими фактами — її треба відчути.`,
    lat: 49.8917,
    lon: 28.5956
  };

  const cityPhotos = [
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Carmelite_Monastery_aerophto.jpg/1280px-Carmelite_Monastery_aerophto.jpg',
      title: 'Монастир Босих Кармелітів',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BB_%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D1%97_%D0%92%D0%B0%D1%80%D0%B2%D0%B0%D1%80%D0%B8%2C_%D0%91%D0%B5%D1%80%D0%B4%D0%B8%D1%87%D1%96%D0%B2.jpg/1920px-%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BB_%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D1%97_%D0%92%D0%B0%D1%80%D0%B2%D0%B0%D1%80%D0%B8%2C_%D0%91%D0%B5%D1%80%D0%B4%D0%B8%D1%87%D1%96%D0%B2.jpg',
      title: 'Костел Святої Варвари',
    },
    {
      img: 'https://landmarks.in.ua/images/05berdychiv-saint-nicolas-cathedrial-1000x667zhytomyrska.jpg',
      title: 'Свято-Миколаївський собор',
    },
    {
      img: 'https://landmarks.in.ua/images/05berdychiv-monastery-fortress1000x667zhytomyrska.jpg',
      title: 'Стіни Монастиря',
    }
  ];

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${cityInfo.lat}&longitude=${cityInfo.lon}&current_weather=true`);
        if (!response.ok) throw new Error('API тимчасово недоступне');
        const data = await response.json();
        setWeather(data.current_weather);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); 
      }
    };
    fetchWeather();
  }, []); 

  return (
    <Box 
      component={motion.div} 
      initial={{ opacity: 0, x: -20 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.5 }}
    >
      {/* Заголовок та основний опис */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          {cityInfo.name} <Typography component="span" variant="h4" color="text.secondary">/ {cityInfo.region}</Typography>
        </Typography>
        
        <Box sx={{ mt: 3, mb: 4 }}>
          <Typography variant="h6" sx={{ color: 'grey.400', lineHeight: 1.7, fontWeight: 400, maxWidth: '900px' }}>
            {cityInfo.description}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
          {cityInfo.tags.map((tag) => (
            <Chip key={tag} label={tag} variant="outlined" color="secondary" sx={{ borderRadius: '8px', fontWeight: 'bold' }} />
          ))}
        </Box>
      </Box>

      <Divider sx={{ mb: 6, borderColor: 'rgba(255,255,255,0.05)' }} />

      <Grid container spacing={4}>
        {/* Погода */}
        <Grid item xs={12} md={5}>
          <Card sx={{ 
            backgroundColor: 'background.paper', 
            borderRadius: '16px', 
            border: '1px solid rgba(255,255,255,0.05)',
            height: '100%'
          }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ThermostatIcon color="primary" /> Поточний стан
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Дані з метеостанції в реальному часі
              </Typography>

              {loading ? (
                <Box sx={{ py: 4, textAlign: 'center' }}><CircularProgress color="primary" /></Box>
              ) : error ? (
                <Alert severity="error">{error}</Alert>
              ) : weather ? (
                <Box>
                  <Typography variant="h2" fontWeight="bold" color="primary.main">
                    {weather.temperature}°C
                  </Typography>
                  <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AirIcon sx={{ color: 'grey.500' }} />
                    <Typography variant="h6" sx={{ color: 'grey.300' }}>
                      Вітер: {weather.windspeed} км/год
                    </Typography>
                  </Box>
                </Box>
              ) : null}
            </CardContent>
          </Card>
        </Grid>

        {/* Галерея */}
        <Grid item xs={12} md={7}>
          <Box>
            <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <PhotoLibraryIcon color="secondary" /> Візуальний ряд
            </Typography>
            <ImageList cols={2} gap={16} sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              {cityPhotos.map((item) => (
                <ImageListItem key={item.img} component={motion.div} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                  <img
                    src={`${item.img}?w=400&h=400&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    style={{ borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyCity;