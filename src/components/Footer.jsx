import React from 'react';
import { Box, Container, Typography, IconButton, Stack, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 6, 
        mt: 'auto', 
        backgroundColor: 'background.default',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <Container maxWidth="lg">
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          justifyContent="space-between" 
          alignItems="center" 
          spacing={2}
        >
          {/* Копірайт */}
          <Box>
            <Typography variant="body2" color="text.secondary" fontWeight="medium">
              © {new Date().getFullYear()} Mykhailo Dubravskyi
            </Typography>
            <Typography variant="caption" color="grey.600">
              Built with React & MUI
            </Typography>
          </Box>

          {/* Соцмережі */}
          <Stack direction="row" spacing={1}>
            <IconButton 
              href="https://github.com/DuM1h" 
              target="_blank" 
              sx={{ color: 'grey.500', '&:hover': { color: 'primary.main', backgroundColor: 'rgba(144, 202, 249, 0.08)' } }}
            >
              <GitHubIcon />
            </IconButton>
            
            <IconButton 
              href="https://t.me/dum1h"
              target="_blank" 
              sx={{ color: 'grey.500', '&:hover': { color: '#26A5E4', backgroundColor: 'rgba(38, 165, 228, 0.08)' } }}
            >
              <TelegramIcon />
            </IconButton>

            <IconButton 
              href="mailto:dumih00@gmail.com" 
              sx={{ color: 'grey.500', '&:hover': { color: 'secondary.main', backgroundColor: 'rgba(206, 147, 216, 0.08)' } }}
            >
              <EmailIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;