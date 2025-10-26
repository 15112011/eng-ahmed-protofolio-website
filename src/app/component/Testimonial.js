"use client";
import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";
import { useLanguage } from "../hooks/useLanguage";
import ar from "../locales/ar.json";
import en from "../locales/en.json";

export default function Testimonial() {
  const { language } = useLanguage();
  const t = language === "ar" ? ar : en;

  return (
    <Box component="section" sx={{ width: '100%', bgcolor: '#F3EEE9', py: { xs: 5, sm: 6, md: 8 }, overflow: 'hidden' }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <Box sx={{ bgcolor: '#3D3530', borderRadius: '16px', overflow: 'hidden', position: 'relative', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'row' }, minHeight: { xs: '320px', sm: '360px', md: '400px' }, position: 'relative' }}>
            {/* Left Side - Content */}
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', textAlign: 'right', p: { xs: 2.5, sm: 4, md: 6, lg: 8 }, position: 'relative', zIndex: 10, flex: { xs: '1', md: '1.2' } }}>
              {/* Subtitle with dash */}
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: { xs: '0.75rem', sm: '1rem' }, mb: { xs: 1.5, sm: 3 }, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box component="span" sx={{ width: '24px', height: '2px', bgcolor: 'rgba(255, 255, 255, 0.7)' }} />
                {t.testimonial.subtitle}
              </Typography>

              {/* Main Quote */}
              <Typography variant="h2" sx={{ fontSize: { xs: '1.1rem', sm: '1.875rem', md: '2.25rem', lg: '2.5rem' }, fontWeight: 700, color: 'white', lineHeight: 1.2, mb: { xs: 2, sm: 4 }, fontFamily: 'var(--font-cairo)' }}>
                &ldquo;{t.testimonial.title}&rdquo;
              </Typography>

              {/* CTA Button */}
              <Button
                component={Link}
                href="/contact"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.5,
                  bgcolor: 'white',
                  color: '#3D3530',
                  px: { xs: 2.5, sm: 4 },
                  py: { xs: 1.25, sm: 1.75 },
                  borderRadius: '8px',
                  '&:hover': { bgcolor: '#F5F5F5', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(0,0,0,0.15)' },
                  transition: 'all 0.3s',
                  fontWeight: 500,
                  fontSize: { xs: '0.8rem', sm: '1rem' },
                  textTransform: 'none',
                }}
              >
                <Box component="svg" sx={{ width: { xs: 14, sm: 18 }, height: { xs: 14, sm: 18 } }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </Box>
                <span>{t.testimonial.cta}</span>
              </Button>
            </Box>

            {/* Right Side - SVG Pattern - Visible on all screens */}
            <Box 
              sx={{ 
                position: 'relative', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                flex: { xs: '0 0 auto', md: '1' },
                width: { xs: '180px', sm: '220px', md: 'auto' },
                minWidth: { xs: '180px', sm: '220px', md: 'auto' },
                py: { xs: 2.5, sm: 3, md: 0 },
                px: { xs: 1, sm: 1.5, md: 0 },
              }}
            >
              <Box
                component="img"
                src="/pattern.svg"
                alt=""
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '95%',
                  objectFit: 'contain',
                  objectPosition: 'center',
                  opacity: 1,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
