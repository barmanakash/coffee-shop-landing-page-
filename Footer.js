import React from 'react';
import { 
  Box, Container, Grid, Typography, Link, Stack, 
  IconButton, Divider, Button 
} from '@mui/material';
import { 
  Facebook, Instagram, Twitter, Email, Phone, LocationOn, LocalCafe 
} from '@mui/icons-material';

import Cup from './assests/cup.jpg'; 

const Footer = () => {
  return (
    <Box sx={{ 
      position: 'relative',
      mt: 10,
      background: '#1a0f0a', 
      color: 'white',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: -80,
        left: 0,
        width: '100%',
        height: '80px',
        backgroundColor: '#1a0f0a',
        clipPath: 'ellipse(70% 100% at 50% 100%)',
      }
    }}>
      <Box 
        component="img"
        src={Cup}
        sx={{
          position: 'absolute',
          right: { xs: 10, md: 50 },
          top: -120,
          width: { xs: 120, md: 200 },
          height: { xs: 120, md: 200 },
          borderRadius: '50%',
          border: '8px solid #1a0f0a',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          zIndex: 1105,
          display: { xs: 'none', sm: 'block' }
        }}
      />

      <Container maxWidth="lg" sx={{ pt: 5, pb: 4, position: 'relative', zIndex: 1 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocalCafe sx={{ color: '#7ba8a1', fontSize: 35 }} />
                <Typography variant="h4" sx={{ fontWeight: 900, letterSpacing: 2 }}>
                  BODR<span style={{color: '#7ba8a1'}}>I</span>N
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ color: '#c4a484', fontStyle: 'italic', fontSize: '1.1rem' }}>
                "Where every bean tells a story of the highlands."
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                Crafting the perfect roast since 2026. Join us for a cup of artisanal perfection.
              </Typography>
              <Stack direction="row" spacing={2}>
                {[<Facebook />, <Instagram />, <Twitter />].map((icon, i) => (
                  <IconButton key={i} sx={{ 
                    border: '1px solid rgba(123, 168, 161, 0.3)', 
                    color: '#7ba8a1',
                    '&:hover': { bgcolor: '#7ba8a1', color: 'white' } 
                  }}>
                    {icon}
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 3, color: '#7ba8a1' }}>The Menu</Typography>
            <Stack spacing={1.5}>
              {['Espresso Bar', 'Cold Brews', 'Pastries', 'Seasonal'].map((text) => (
                <Link key={text} href="#" underline="none" sx={{ 
                  color: 'rgba(255,255,255,0.6)', 
                  '&:hover': { color: 'white', transform: 'translateX(5px)' },
                  transition: '0.3s'
                }}>
                  {text}
                </Link>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 3, color: '#7ba8a1' }}>Visit Us</Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="subtitle2" sx={{ color: '#c4a484' }}>DOWNTOWN ROASTERY</Typography>
                <Typography variant="body2" sx={{ opacity: 0.6 }}>123 Brew Lane, NY 10001</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ color: '#c4a484' }}>HOURS</Typography>
                <Typography variant="body2" sx={{ opacity: 0.6 }}>Mon - Sat: 7am - 9pm</Typography>
                <Typography variant="body2" sx={{ opacity: 0.6 }}>Sun: 8am - 6pm</Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3} sx={{ textAlign: { md: 'right' } }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 3, color: '#7ba8a1' }}>Stay Connected</Typography>
            <Button 
              variant="contained" 
              fullWidth
              sx={{ 
                bgcolor: '#7ba8a1', 
                borderRadius: '15px', 
                py: 2,
                mb: 2,
                fontWeight: 'bold',
                '&:hover': { bgcolor: '#5f847d' }
              }}
            >
              BOOK A TABLE
            </Button>
            <Typography variant="body2" sx={{ opacity: 0.5 }}>
              Questions? <br /> Call us: +1 (234) 567-890
            </Typography>
          </Grid>

        </Grid>

        <Divider sx={{ mt: 8, mb: 4, borderColor: 'rgba(255,255,255,0.05)' }} />

        <Box sx={{ display: 'flex', justifyContent: 'center', opacity: 0.4 }}>
          <Typography variant="caption" sx={{ letterSpacing: 2 }}>
            MADE WITH ♥ FOR COFFEE LOVERS • 2026
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;