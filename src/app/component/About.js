"use client";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { useLanguage } from "../hooks/useLanguage";
import ar from "../locales/ar.json";
import en from "../locales/en.json";

export default function About() {
  const { language } = useLanguage();
  const t = language === "ar" ? ar : en;

  // Floating badges data
  const badges = [
    { text: "...", position: { top: '15%', left: '10%' }, size: 'small' },
    { text: "🛡️", position: { top: '20%', right: '15%' }, size: 'large', hasGlow: true },
    { text: "حلول مستدامة 😊", position: { bottom: '35%', left: '5%' }, size: 'medium' },
    { text: "ابتكار غير محدود 💡", position: { bottom: '30%', right: '10%' }, size: 'medium' },
  ];

  return (
    <Box component="section" sx={{ width: '100%', background: 'linear-gradient(135deg, #F5E6D3 0%, #FFF8E7 50%, #F3EEE9 100%)', py: { xs: 6, sm: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: { xs: 4, sm: 5, lg: 8 }, alignItems: 'center' }}>
          {/* Left Side - Content */}
          <Box sx={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: { xs: 2, sm: 3 }, order: { xs: 2, lg: 1 }, zIndex: 10 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.875rem', sm: '2.25rem', md: '3rem' }, fontWeight: 700, color: '#594534', lineHeight: 1.2, fontFamily: 'var(--font-cairo)' }}>
              {t.about.title}
            </Typography>
            
            <Typography sx={{ fontSize: { xs: '1rem', sm: '1.125rem' }, color: 'rgba(89, 69, 52, 0.8)', lineHeight: 1.6 }}>
              {t.about.description}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 1.5, sm: 2 }, justifyContent: 'flex-end', alignItems: { xs: 'stretch', sm: 'center' }, pt: 2 }}>
              <Button
                component={Link}
                href="/contact"
                sx={{
                  bgcolor: '#594534',
                  color: 'white',
                  px: { xs: 3, sm: 4 },
                  py: 1.5,
                  borderRadius: '8px',
                  '&:hover': { bgcolor: '#6d5442' },
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  textTransform: 'none',
                  fontWeight: 500,
                }}
              >
                <Box component="svg" sx={{ width: { xs: 16, sm: 20 }, height: { xs: 16, sm: 20 } }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </Box>
                <span>{t.about.cta}</span>
              </Button>
              
              <Button
                component={Link}
                href="/projects"
                sx={{
                  border: '2px solid #594534',
                  bgcolor: 'rgba(243, 238, 233, 0.5)',
                  color: '#594534',
                  px: { xs: 3, sm: 4 },
                  py: 1.5,
                  borderRadius: '8px',
                  '&:hover': { bgcolor: '#594534', color: 'white' },
                  transition: 'all 0.3s',
                  textAlign: 'center',
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  textTransform: 'none',
                  fontWeight: 500,
                }}
              >
                {t.about.viewWork}
              </Button>
            </Box>

            <Box sx={{ pt: { xs: 2, sm: 3 }, textAlign: 'right' }}>
              <Typography sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' }, color: 'rgba(89, 69, 52, 0.7)', mb: 1.5 }}>{t.about.followMe}</Typography>
              <Box sx={{ display: 'flex', gap: { xs: 1, sm: 1.5 }, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                {[
                  <path key="1" d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />,
                  <path key="2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>,
                  <path key="3" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>,
                  <path key="4" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                ].map((pathContent, idx) => (
                  <IconButton
                    key={idx}
                    href="#"
                    component="a"
                    sx={{
                      width: { xs: 36, sm: 40 },
                      height: { xs: 36, sm: 40 },
                      bgcolor: '#594534',
                      color: 'white',
                      borderRadius: '8px',
                      '&:hover': { bgcolor: '#6d5442', transform: 'translateY(-2px)' },
                      transition: 'all 0.3s',
                    }}
                  >
                    <Box component="svg" sx={{ width: { xs: 16, sm: 20 }, height: { xs: 16, sm: 20 } }} fill="currentColor" viewBox="0 0 24 24">
                      {pathContent}
                      {idx === 0 && <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />}
                    </Box>
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Right Side - Image with Floating Badges */}
          <Box sx={{ position: 'relative', order: { xs: 1, lg: 2 }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ position: 'relative', width: '100%', maxWidth: '600px', height: { xs: '500px', sm: '600px' }, overflow: 'hidden' }}>
              {/* Main Image with Glow Behind */}
              <Box sx={{ position: 'relative', width: '100%', height: '100%', zIndex: 10 }}>
                {/* Glow Effect Behind Image Only */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '70%',
                    height: '70%',
                    background: 'radial-gradient(circle, rgba(255,165,0,0.3) 0%, rgba(255,200,100,0.2) 30%, transparent 60%)',
                    filter: 'blur(50px)',
                    zIndex: -1,
                    pointerEvents: 'none',
                  }}
                />
                
                <Image
                  src="/images/eng img 3.png"
                  alt="المهندس أحمد المبيض"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  priority
                />
              </Box>
              
              {/* Floating Badge - Top Left (Three Dots) */}
              <Box 
                sx={{ 
                  position: 'absolute', 
                  top: '10%', 
                  left: '5%', 
                  bgcolor: 'white', 
                  px: 3, 
                  py: 1.5, 
                  borderRadius: 25, 
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)', 
                  zIndex: 20,
                  animation: 'float 3s ease-in-out infinite',
                  '@keyframes float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' }
                  }
                }}
              >
                <Typography sx={{ fontSize: '1.5rem', color: '#594534', letterSpacing: '4px' }}>•••</Typography>
              </Box>
              
              {/* Floating Badge - Top Right (Shield) */}
              <Box 
                sx={{ 
                  position: 'absolute', 
                  top: '15%', 
                  right: '8%', 
                  bgcolor: 'white', 
                  p: 2.5, 
                  borderRadius: '50%', 
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)', 
                  zIndex: 20,
                  animation: 'float 3.5s ease-in-out infinite',
                }}
              >
                <Typography sx={{ fontSize: '2rem' }}>🛡️</Typography>
              </Box>
              
              {/* Floating Badge - Middle Left (Sustainable Solutions) */}
              <Box 
                sx={{ 
                  position: 'absolute', 
                  top: '50%', 
                  left: '0%', 
                  bgcolor: 'white', 
                  px: 2.5, 
                  py: 1.5, 
                  borderRadius: 25, 
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)', 
                  zIndex: 20,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  animation: 'float 4s ease-in-out infinite',
                }}
              >
                <Typography sx={{ fontSize: '1rem', fontWeight: 500, color: '#594534' }}>حلول مستدامة</Typography>
                <Typography sx={{ fontSize: '1.25rem' }}>😊</Typography>
              </Box>
              
              {/* Floating Badge - Bottom Right (Unlimited Innovation) */}
              <Box 
                sx={{ 
                  position: 'absolute', 
                  bottom: '20%', 
                  right: '5%', 
                  bgcolor: 'white', 
                  px: 2.5, 
                  py: 1.5, 
                  borderRadius: 25, 
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)', 
                  zIndex: 20,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  animation: 'float 3.2s ease-in-out infinite',
                }}
              >
                <Typography sx={{ fontSize: '1rem', fontWeight: 500, color: '#594534' }}>ابتكار غير محدود</Typography>
                <Typography sx={{ fontSize: '1.25rem' }}>💡</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
