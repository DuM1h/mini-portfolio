import React from 'react';
import { 
  Typography, Box, Stepper, Step, StepLabel, StepContent, 
  Paper, Divider, useTheme, Grid 
} from '@mui/material';
import { motion } from 'framer-motion';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GroupsIcon from '@mui/icons-material/Groups';
import StarIcon from '@mui/icons-material/Star';

const MyFuture = () => {
  const theme = useTheme();

  // Твій оновлений шлях
  const steps = [
    {
      label: 'Прокачка навичок (Leveling Up)',
      icon: <UpgradeIcon color="primary" />,
      description: 'Глибоке занурення в архітектуру C# та можливості Unity. Опанування складних патернів проєктування, оптимізація коду та створення власних інструментів для розробки. Постійний рефакторинг і шліфування бази.',
    },
    {
      label: 'Перший серйозний реліз',
      icon: <RocketLaunchIcon color="primary" />,
      description: 'Перехід від прототипів до завершеного продукту. Випуск проєкту, який покаже рівень володіння системами AI, фізикою та геймплейними механіками. Створення імені в інді-спільноті.',
    },
    {
      label: 'Своя команда / Студія',
      icon: <GroupsIcon color="primary" />,
      description: 'Об’єднання талановитих розробників навколо спільних ідей. Побудова чітких процесів розробки, перетворення невеликої групи друзів на повноцінну інді-студію, що створює продукти світового рівня.',
    },
  ];

  return (
    <Box 
      component={motion.div} 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Мій Roadmap 🗺️
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px' }}>
          План розвитку від розробника-одинака до засновника власної студії. 
          Кожен крок — це новий рівень складності та відповідальності.
        </Typography>
      </Box>

      <Divider sx={{ mb: 6, borderColor: 'rgba(255,255,255,0.05)' }} />

      <Grid container spacing={6}>
        {/* Ліва частина: Степпер */}
        <Grid item xs={12} md={7}>
          <Stepper orientation="vertical" sx={{ 
            '& .MuiStepConnector-line': { borderColor: 'rgba(255,255,255,0.1)', borderLeftWidth: '2px' } 
          }}>
            {steps.map((step, index) => (
              <Step key={step.label} active={true}>
                <StepLabel 
                  icon={step.icon}
                  sx={{ 
                    '& .MuiStepLabel-label': { 
                      color: 'white', 
                      fontFamily: '"JetBrains Mono", monospace',
                      fontWeight: 'bold',
                      fontSize: '1.2rem'
                    } 
                  }}
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Box sx={{ 
                    pl: 2, py: 2, mb: 2, 
                    borderLeft: `2px solid ${theme.palette.primary.main}`,
                    backgroundColor: 'rgba(144, 202, 249, 0.03)',
                    borderRadius: '0 12px 12px 0'
                  }}>
                    <Typography sx={{ color: 'grey.400', lineHeight: 1.6 }}>
                      {step.description}
                    </Typography>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Grid>

        {/* Права частина: Робота мрії та цитата */}
        <Grid item xs={12} md={5}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Paper sx={{ 
              p: 4, 
              borderRadius: '16px', 
              backgroundColor: 'background.paper',
              border: '1px solid rgba(255,255,255,0.05)',
              transition: '0.3s',
              '&:hover': { borderColor: 'secondary.main', transform: 'scale(1.02)' }
            }}>
              <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <StarIcon color="secondary" /> Робота мрії
              </Typography>
              <Typography variant="body1" sx={{ color: 'grey.300', mt: 2 }}>
                Бути Lead Developer або CTO у власній інді-студії. 
                Створювати архітектурно складні ігри, де кожен байт на своєму місці, 
                а геймплей змушує гравців повертатися знову і знову.
              </Typography>
            </Paper>

            <Box sx={{ 
              p: 4, 
              textAlign: 'center', 
              border: '1px dashed rgba(255,255,255,0.1)', 
              borderRadius: '16px' 
            }}>
              <Typography variant="h6" sx={{ fontStyle: 'italic', color: 'primary.main', mb: 2 }}>
                "The only way to do great work is to love what you do."
              </Typography>
              <Typography variant="body2" color="text.secondary">
                — Стів Джобс
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyFuture;