import React from 'react';
import { 
  Typography, Box, Grid, Card, CardContent, CardActions, 
  Button, Chip, Divider, useTheme 
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const theme = useTheme();

  // Твій реальний список проєктів на основі коду
  const projects = [
    {
      id: 1,
      category: 'C# | AI & Algorithms',
      title: 'Chess Engine (CourseWork)',
      description: 'Повноцінний шаховий рушій на .NET 8.0. Реалізовано інтелектуальний пошук ходів через Minimax з Alpha-Beta відсіканням та систему оцінки позиції (матеріал, безпека короля, контроль центру). Підтримує парсинг та генерацію FEN-нотації.',
      link: 'https://github.com/DuM1h/CourseWork'
    },
    {
      id: 2,
      category: 'C# | Game Mechanics',
      title: 'Console Mini-RPG',
      description: 'Покрокова RPG з глибоким використанням ООП. Система включає ієрархію ворогів (Гобліни, Тролі, Дракони), систему станів персонажа (отруєння, приголомшення) та покроковий ігровий цикл.',
      link: 'https://github.com/DuM1h/mini-RPG'
    },
    {
      id: 3,
      category: 'Unity Mobile | Team',
      title: 'Mobile Game Project (W.I.P.)',
      description: 'Командна розробка мобільної гри. Відповідаю за архітектуру ігрової логіки на C#, створення гнучких систем взаємодії та інтеграцію піксель-арт асетів. Проєкт в активній розробці.',
      link: 'https://github.com/DuM1h'
    }
  ];

  return (
    <Box 
      component={motion.div} 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      {/* Секція: Хто я */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Михайло — C# / Unity Developer 🎮
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mb: 3 }}>
          IT-студент з України. Сфокусований на геймдеві, складній ігровій логіці та алгоритмах. 
          Мій стиль — системний підхід і порядок у коді.
        </Typography>
        
        <Box sx={{ mt: 3, mb: 4 }}>
          <Typography variant="h6" sx={{ color: 'grey.400', lineHeight: 1.6, fontWeight: 400 }}>
            Я пишу код, який не соромно закинути в спільний репозиторій. Моя стихія — це "м'ясо" ігор: 
            складні алгоритми, патерни проєктування та робота з даними. Мені цікаво брати 
            неочевидні задачі і перетворювати їх на стабільний, оптимізований продукт. 
            Люблю працювати в команді, де кожен знає свою справу, а процеси чітко налагоджені.
          </Typography>
        </Box>

        {/* Скілсет */}
        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
          {['C#', 'Unity', '.NET 8.0', 'OOP', 'Game Design', 'Algorithms'].map((skill) => (
            <Chip 
              key={skill} 
              label={skill} 
              color="primary" 
              variant="outlined" 
              sx={{ fontWeight: 'bold', borderRadius: '8px' }}
            />
          ))}
        </Box>
      </Box>

      <Divider sx={{ mb: 8, borderColor: 'rgba(255,255,255,0.05)' }} />

      {/* Секція: Проєкти */}
      <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" sx={{ mb: 4 }}>
        Реалізовані проєкти 🗡️
      </Typography>
      
      <Box sx={{ 
        display: 'grid', 
        gap: 4, 
        gridTemplateColumns: {
          xs: '1fr',
          sm: '1fr 1fr',
          md: 'repeat(3, 1fr)'
        }
      }}>
        {projects.map((project) => (
          <Card 
            key={project.id}
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              backgroundColor: 'background.paper',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.05)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: `0 12px 30px rgba(144, 202, 249, 0.15)`,
                borderColor: 'primary.main',
              }
            }}
          >
            <CardContent sx={{ flexGrow: 1, p: 3 }}>
              <Chip 
                label={project.category} 
                size="small" 
                color="secondary" 
                sx={{ mb: 2, fontWeight: 'bold', borderRadius: '4px' }} 
              />
              <Typography gutterBottom variant="h5" component="h3" fontWeight="bold">
                {project.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'grey.500', mt: 2, lineHeight: 1.6 }}>
                {project.description}
              </Typography>
            </CardContent>
            
            <CardActions sx={{ p: 3, pt: 0 }}>
              <Button 
                variant="text"
                color="primary" 
                startIcon={<GitHubIcon />} 
                href={project.link} 
                target="_blank"
                sx={{ fontWeight: 'bold' }}
              >
                Repo on GitHub
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default AboutMe;