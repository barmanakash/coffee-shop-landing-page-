import React, { useState, useEffect, useRef } from 'react';
import { 
  AppBar, Toolbar, Typography, Button, Container, Grid, Card, 
  Box, IconButton, Badge, CssBaseline
} from '@mui/material';
import { ShoppingCart, Add } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
import RightBg from '../src/assests/bgcoffe.png'; 
import Bg from '../src/assests/bg.jpg';           
import Cup from './assests/cup.jpg';
import Bulb from './assests/bulb.png';              

const textEntrance = keyframes`
  0% { opacity: 0; transform: translateY(100px); }
  60% { opacity: 1; transform: translateY(-20px); } 
  100% { opacity: 1; transform: translateY(0); }
`;

const floatAnim = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-25px) rotate(3deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const glow = keyframes`
  0% { filter: drop-shadow(0 0 5px rgba(123, 168, 161, 0.3)); }
  50% { filter: drop-shadow(0 0 25px rgba(123, 168, 161, 0.7)); }
  100% { filter: drop-shadow(0 0 5px rgba(123, 168, 161, 0.3)); }
`;

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#7ba8a1' },
    background: { default: '#0f0a08' }
  },
  typography: { fontFamily: "'Montserrat', sans-serif" }
});

const COFFEE_ITEMS = [
  { id: 1, name: 'Espresso Roast', price: '4.50', desc: 'Bold & Intense' },
  { id: 2, name: 'Creamy Latte', price: '4.20', desc: 'Smooth & Milky' },
  { id: 3, name: 'Dark Mocha', price: '5.00', desc: 'Chocolatey Bliss' },
  { id: 4, name: 'Caramel Macchiato', price: '4.80', desc: 'Sweet & Layered' },
  { id: 5, name: 'Vanilla Bean', price: '4.50', desc: 'Pure & Aromatic' },
  { id: 6, name: 'Cold Brew', price: '3.90', desc: 'Refreshing & Strong' },
];

const CoffeeLanding = () => {
  const [cartCount, setCartCount] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const menuRef = useRef(null);

  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        backgroundImage: `url(${Bg})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        overflowX: 'hidden',
        perspective: '1500px'
      }}>
        <AppBar position="sticky" elevation={0} sx={{ background: 'rgba(15, 10, 8, 0.85)', backdropFilter: 'blur(12px)', zIndex: 1200 }}>
          <Container>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <Typography variant="h5" sx={{ fontWeight: 900, letterSpacing: 2 }}>BODR<span style={{color: '#7ba8a1'}}>I</span>N</Typography>
              <Badge badgeContent={cartCount} color="primary"><IconButton color="inherit"><ShoppingCart /></IconButton></Badge>
            </Toolbar>
          </Container>
          <Box component="img" src={Bulb} sx={{ 
              position: 'absolute', left: { xs: '20px', md: '60px' }, top: '100%', width: { xs: '80px', md: '140px' },
              zIndex: 1100, animation: `${glow} 4s infinite ease-in-out`, transform: `translateY(${offsetY * 0.03}px)`
          }} />
        </AppBar>
        <Box sx={{ position: 'fixed', right: { xs: '-30px', md: '40px' }, top: '25%', zIndex: 1, transform: `translateY(${offsetY * -0.15}px)`, transition: 'transform 0.1s ease-out' }}>
          <Box component="img" src={RightBg} sx={{ width: { xs: '220px', md: '450px' }, opacity: 0.8, animation: `${floatAnim} 6s infinite ease-in-out` }} />
        </Box>
        <Container sx={{ pt: 20, pb: 15, textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '6.5rem' }, fontWeight: 900, textShadow: '0 20px 50px rgba(0,0,0,0.5)', lineHeight: 1, animation: `${textEntrance} 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards` }}>
            BODRIN <br/> <span style={{color: '#7ba8a1'}}>COFFEE</span>
          </Typography>
          <Button variant="outlined" onClick={scrollToMenu} sx={{ mt: 5, color: 'white', borderColor: 'white', borderRadius: 10, px: 5, py: 1.5, animation: `${textEntrance} 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards` }}>
            Explore Menu
          </Button>
        </Container>
        <Container ref={menuRef} sx={{ py: 15, position: 'relative', zIndex: 10 }}>
          <Grid container spacing={8} justifyContent="center">
            {COFFEE_ITEMS.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <Box sx={{ 
                  position: 'relative', 
                  mt: 10,
                  perspective: '1000px',
                  '&:hover .main-card': { transform: 'rotateX(15deg) rotateY(-10deg) scale(1.05)' },
                  '&:hover .cup-img': { transform: 'translateX(-50%) translateZ(100px) translateY(-20px) scale(1.1)' }
                }}>
                  <Box 
                    component="img" 
                    src={Cup} 
                    className="cup-img"
                    sx={{ 
                      width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover',
                      position: 'absolute', top: '-90px', left: '50%',
                      transform: 'translateX(-50%) translateZ(50px)',
                      zIndex: 15, border: '8px solid #1a0f0a',
                      boxShadow: '0 30px 50px rgba(0,0,0,0.9)',
                      transition: '0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                    }} 
                  />
                  <Card className="main-card" sx={{ 
                    pt: 14, pb: 4, px: 3, textAlign: 'center', borderRadius: '40px',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(123, 168, 161, 0.2)',
                    transformStyle: 'preserve-3d',
                    transition: '0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                    overflow: 'visible'
                  }}>
                    <Box sx={{ transform: 'translateZ(40px)', transition: '0.6s' }}>
                      <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: 'white' }}>{item.name}</Typography>
                      <Typography variant="body2" sx={{ opacity: 0.6, mb: 4 }}>{item.desc}</Typography>
                      
                      <Box sx={{ 
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                        bgcolor: 'rgba(0,0,0,0.5)', p: 2, borderRadius: '25px',
                        transform: 'translateZ(20px)', border: '1px solid rgba(255,255,255,0.1)'
                      }}>
                        <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 900 }}>${item.price}</Typography>
                        <IconButton 
                          onClick={() => setCartCount(prev => prev + 1)} 
                          sx={{ bgcolor: 'primary.main', color: 'white', '&:hover': { bgcolor: 'white', color: 'black' } }}
                        >
                          <Add />
                        </IconButton>
                      </Box>
                    </Box>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default CoffeeLanding;