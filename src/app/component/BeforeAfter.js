"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";
import { useLanguage } from "../hooks/useLanguage";
import ar from "../locales/ar.json";
import en from "../locales/en.json";

export default function BeforeAfter() {
  const { language } = useLanguage();
  const t = language === "ar" ? ar : en;
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e) => {
    if (!isDragging) return;
    
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = (e.clientX || e.touches?.[0]?.clientX) - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleStart = () => setIsDragging(true);
  const handleEnd = () => setIsDragging(false);

  return (
    <Box component="section" sx={{ width: '100%', bgcolor: 'white', py: { xs: 6, sm: 8, md: 10 } }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: { xs: 4, md: 6 }, alignItems: 'center' }}>
          
          {/* Left Side - Content */}
          <Box sx={{ 
            textAlign: language === 'ar' ? 'right' : 'left', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: { xs: 2.5, sm: 3 }, 
            order: { xs: 2, lg: language === 'ar' ? 1 : 2 },
            pr: { lg: language === 'ar' ? 4 : 0 },
            pl: { lg: language === 'ar' ? 0 : 4 }
          }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' }, 
                fontWeight: 700, 
                color: '#594534', 
                lineHeight: 1.3, 
                fontFamily: 'var(--font-cairo)' 
              }}
            >
              {t.beforeAfter.title}
            </Typography>
            
            <Typography sx={{ 
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem' }, 
              color: 'rgba(89, 69, 52, 0.75)', 
              lineHeight: 1.8 
            }}>
              {t.beforeAfter.description}
            </Typography>

            {/* CTA Button */}
            <Box sx={{ pt: { xs: 1, sm: 2 } }}>
              <Button
                component={Link}
                href="/contact"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.5,
                  bgcolor: '#594534',
                  color: 'white',
                  px: { xs: 3.5, sm: 4.5 },
                  py: { xs: 1.25, sm: 1.5 },
                  borderRadius: '8px',
                  '&:hover': { bgcolor: '#6d5442', boxShadow: 3 },
                  transition: 'all 0.3s',
                  textTransform: 'none',
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  fontWeight: 500,
                }}
              >
                <Box component="svg" sx={{ width: { xs: 16, sm: 20 }, height: { xs: 16, sm: 20 } }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === 'ar' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
                </Box>
                <span>{t.beforeAfter.cta}</span>
              </Button>
            </Box>
          </Box>

          {/* Right Side - Before/After Slider */}
          <Box 
            sx={{ 
              position: 'relative', 
              order: { xs: 1, lg: language === 'ar' ? 2 : 1 },
              height: { xs: '350px', sm: '450px', md: '500px' },
              borderRadius: '12px',
              overflow: 'hidden',
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            }}
            onMouseMove={handleMove}
            onMouseDown={handleStart}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchMove={handleMove}
            onTouchStart={handleStart}
            onTouchEnd={handleEnd}
          >
            {/* After Image (Background) */}
            <Box sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <Image
                src="/images/beforeafter 2.jpg"
                alt={t.beforeAfter.before}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              {/* After Badge */}
              <Box sx={{ 
                position: 'absolute', 
                top: { xs: 16, sm: 20, md: 24 }, 
                right: { xs: 16, sm: 20, md: 24 }, 
                bgcolor: '#E91E63', 
                color: 'white', 
                px: { xs: 2, sm: 2.5, md: 3 }, 
                py: { xs: 0.75, sm: 1 }, 
                borderRadius: '8px', 
                fontWeight: 600, 
                fontSize: { xs: '0.875rem', sm: '1rem' },
                boxShadow: '0 2px 8px rgba(233, 30, 99, 0.4)',
                fontFamily: 'var(--font-cairo)'
              }}>
                {t.beforeAfter.before}
              </Box>
            </Box>

            {/* Before Image (Clipped) */}
            <Box 
              sx={{ 
                position: 'absolute', 
                inset: 0, 
                width: '100%', 
                height: '100%',
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                transition: isDragging ? 'none' : 'clip-path 0.1s ease-out',
              }}
            >
              <Image
                src="/images/beforeafter.jpg"
                alt="قبل"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              {/* Before Badge */}
              <Box sx={{ 
                position: 'absolute', 
                top: { xs: 16, sm: 20, md: 24 }, 
                left: { xs: 16, sm: 20, md: 24 }, 
                bgcolor: '#1BACA6', 
                color: 'white', 
                px: { xs: 2, sm: 2.5, md: 3 }, 
                py: { xs: 0.75, sm: 1 }, 
                borderRadius: '8px', 
                fontWeight: 600, 
                fontSize: { xs: '0.875rem', sm: '1rem' },
                boxShadow: '0 2px 8px rgba(27, 172, 166, 0.4)',
                fontFamily: 'var(--font-cairo)'
              }}>
                {t.beforeAfter.after}
              </Box>
            </Box>

            {/* Slider Handle */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: `${sliderPosition}%`,
                width: '4px',
                bgcolor: 'white',
                transform: 'translateX(-50%)',
                cursor: 'ew-resize',
                zIndex: 10,
                boxShadow: '0 0 10px rgba(0,0,0,0.3)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '40px',
                  height: '40px',
                  bgcolor: 'white',
                  borderRadius: '50%',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                '&::after': {
                  content: '"⟷"',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '20px',
                  color: '#594534',
                  fontWeight: 'bold',
                  zIndex: 1,
                }
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
