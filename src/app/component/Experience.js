"use client";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";
import { useLanguage } from "../hooks/useLanguage";
import ar from "../locales/ar.json";
import en from "../locales/en.json";

export default function Experience() {
  const { language } = useLanguage();
  const t = language === "ar" ? ar : en;

  const stats = [
    { label: t.experience.stat1, value: "100%" },
    { label: t.experience.stat2, value: "500+" },
    { label: t.experience.stat3, value: "1000+" },
    { label: t.experience.stat4, value: "15+" }
  ];

  return (
    <Box component="section" sx={{ width: '100%', bgcolor: '#F9F6F3', py: { xs: 6, sm: 8, md: 10 } }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: { xs: 4, sm: 5, lg: 6 }, alignItems: 'center' }}>
          {/* Left Side - Content */}
          <Box sx={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: { xs: 2.5, sm: 3 }, order: { xs: 2, lg: 1 } }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '1.5rem', sm: '1.875rem', md: '2.25rem' }, 
                fontWeight: 700, 
                color: '#A89B8F', 
                lineHeight: 1.4, 
                fontFamily: 'var(--font-cairo)' 
              }}
            >
              {t.experience.title}
            </Typography>
            
            <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' }, color: 'rgba(89, 69, 52, 0.65)', lineHeight: 1.8 }}>
              {t.experience.description}
            </Typography>

            {/* Stats Grid - 4 columns */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1.5, sm: 2 }, pt: 2, justifyContent: 'flex-end' }}>
              {stats.map((stat, index) => (
                <Box 
                  key={index} 
                  sx={{ 
                    textAlign: 'center', 
                    bgcolor: '#F5F1ED', 
                    borderRadius: '32px', 
                    px: { xs: 4, sm: 5 },
                    py: { xs: 2.5, sm: 3 },
                    border: '1px solid rgba(168, 155, 143, 0.15)',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    '&:hover': { boxShadow: '0 4px 16px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' }, 
                    transition: 'all 0.3s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: { xs: '140px', sm: '160px' },
                  }}
                >
                  <Typography sx={{ fontSize: { xs: '1rem', sm: '1.125rem' }, color: '#5A4A3A', fontWeight: 400, whiteSpace: 'nowrap', letterSpacing: '0.01em' }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* CTA Buttons */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 1.5, sm: 2 }, justifyContent: 'flex-end', pt: { xs: 2, sm: 3 } }}>
              <Button
                component={Link}
                href="/contact"
                sx={{
                  bgcolor: '#594534',
                  color: 'white',
                  px: { xs: 3, sm: 4 },
                  py: 1.5,
                  borderRadius: '8px',
                  '&:hover': { bgcolor: '#6d5442', boxShadow: 3 },
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1.5,
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  textTransform: 'none',
                  fontWeight: 500,
                }}
              >
                <Box component="svg" sx={{ width: { xs: 16, sm: 18 }, height: { xs: 16, sm: 18 } }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </Box>
                <span>{t.experience.cta}</span>
              </Button>
              
              <Button
                component={Link}
                href="/projects"
                sx={{
                  bgcolor: 'white',
                  color: '#594534',
                  px: { xs: 3, sm: 4 },
                  py: 1.5,
                  borderRadius: '8px',
                  border: '1px solid rgba(168, 155, 143, 0.2)',
                  '&:hover': { bgcolor: '#F9F6F3', boxShadow: 2 },
                  transition: 'all 0.3s',
                  textAlign: 'center',
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  textTransform: 'none',
                  fontWeight: 500,
                }}
              >
                {t.experience.watchVideo}
              </Button>
            </Box>
          </Box>

          {/* Right Side - Video Player */}
          <Box sx={{ position: 'relative', height: { xs: '400px', sm: '500px', lg: '550px' }, order: { xs: 1, lg: 2 } }}>
            <Box 
              sx={{ 
                position: 'relative', 
                width: '100%', 
                height: '100%', 
                borderRadius: '16px', 
                overflow: 'hidden', 
                bgcolor: 'black', 
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                cursor: 'pointer',
                '&:hover .play-button': {
                  transform: 'translate(-50%, -50%) scale(1.1)',
                }
              }}
            >
              <Image
                src="/images/viewer img.png"
                alt="المهندس أحمد المبيض"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              
              {/* Play Button Overlay */}
              <Box
                className="play-button"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: { xs: '60px', sm: '70px', md: '80px' },
                  height: { xs: '60px', sm: '70px', md: '80px' },
                  bgcolor: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                  '&:hover': {
                    bgcolor: 'white',
                  }
                }}
              >
                {/* Play Icon */}
                <Box
                  component="svg"
                  sx={{ 
                    width: { xs: '24px', sm: '28px', md: '32px' }, 
                    height: { xs: '24px', sm: '28px', md: '32px' },
                    ml: '4px',
                    color: '#594534'
                  }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
