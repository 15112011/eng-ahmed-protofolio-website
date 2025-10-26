"use client";
import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";
import { useLanguage } from "../hooks/useLanguage";
import ar from "../locales/ar.json";
import en from "../locales/en.json";

export default function Stats() {
  const { language } = useLanguage();
  const t = language === "ar" ? ar : en;

  return (
    <Box component="section" sx={{ width: '100%', bgcolor: 'white', py: { xs: 8, sm: 10, md: 12 } }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 3, sm: 4 } }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, sm: 8, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '1.875rem', md: '2.25rem' }, fontWeight: 700, color: '#594534', mb: { xs: 2, sm: 3 }, fontFamily: 'var(--font-cairo)', lineHeight: 1.4 }}>
            {t.stats.title}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.0625rem' }, color: 'rgba(89, 69, 52, 0.65)', maxWidth: '42rem', mx: 'auto', lineHeight: 1.7, px: 2 }}>
            {t.stats.subtitle}
          </Typography>
        </Box>

        {/* Stats Grid with subtle dividers */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' }, gap: { xs: 0, sm: 0 }, mb: { xs: 6, sm: 8, md: 10 }, position: 'relative' }}>
          {/* Stat 1 - Left (smaller, aligned top) */}
          <Box sx={{ textAlign: 'center', bgcolor: 'white', p: { xs: 4, sm: 5, md: 6 }, pt: { sm: 3, md: 4 }, borderRight: { xs: 'none', sm: '1px solid rgba(89, 69, 52, 0.08)' }, borderBottom: { xs: '1px solid rgba(89, 69, 52, 0.08)', sm: 'none' } }}>
            <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1.0625rem', md: '1.275rem' }, fontWeight: 600, color: '#594534', mb: { xs: 1.5, sm: 2 }, fontFamily: 'var(--font-cairo)' }}>
              {t.stats.stat1Label}
            </Typography>
            <Typography variant="h3" sx={{ fontSize: { xs: '2.125rem', sm: '2.55rem', md: '2.975rem' }, fontWeight: 700, color: '#594534', mb: 1, fontFamily: 'var(--font-cairo)' }}>
              {t.stats.stat1Value}
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.69rem', sm: '0.74rem', md: '0.8rem' }, color: 'rgba(89, 69, 52, 0.6)', lineHeight: 1.6 }}>
              {t.stats.stat1Sub}
            </Typography>
          </Box>

          {/* Stat 2 - Center with orange accent */}
          <Box sx={{ textAlign: 'center', bgcolor: 'white', p: { xs: 4, sm: 5, md: 6 }, borderRight: { xs: 'none', sm: '1px solid rgba(89, 69, 52, 0.08)' }, borderBottom: { xs: '1px solid rgba(89, 69, 52, 0.08)', sm: 'none' } }}>
            <Typography variant="h3" sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem' }, fontWeight: 700, color: '#594534', mb: 1, fontFamily: 'var(--font-cairo)' }}>
              {t.stats.stat2Value}<Box component="span" sx={{ color: '#FF6B35' }}>+</Box>
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.8125rem', sm: '0.875rem', md: '0.9375rem' }, color: 'rgba(89, 69, 52, 0.6)', lineHeight: 1.6, maxWidth: '200px', mx: 'auto' }}>
              {t.stats.stat2Label}
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.75rem', sm: '0.8125rem', md: '0.875rem' }, color: 'rgba(89, 69, 52, 0.5)', mt: 0.5 }}>
              {t.stats.stat2Sub}
            </Typography>
          </Box>

          {/* Stat 3 - Right (smaller, aligned top) */}
          <Box sx={{ textAlign: 'center', bgcolor: 'white', p: { xs: 4, sm: 5, md: 6 }, pt: { sm: 3, md: 4 } }}>
            <Typography sx={{ fontSize: { xs: '0.95rem', sm: '1.0625rem', md: '1.275rem' }, fontWeight: 600, color: '#594534', mb: { xs: 1.5, sm: 2 }, fontFamily: 'var(--font-cairo)' }}>
              {t.stats.stat3Label}
            </Typography>
            <Typography variant="h3" sx={{ fontSize: { xs: '2.125rem', sm: '2.55rem', md: '2.975rem' }, fontWeight: 700, color: '#594534', mb: 1, fontFamily: 'var(--font-cairo)' }}>
              {t.stats.stat3Value}
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.69rem', sm: '0.74rem', md: '0.8rem' }, color: 'rgba(89, 69, 52, 0.6)', lineHeight: 1.6 }}>
              {t.stats.stat3Sub}
            </Typography>
          </Box>
        </Box>

        {/* CTA Button */}
        <Box sx={{ textAlign: 'center' }}>
          <Button
            component={Link}
            href="/contact"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.5,
              bgcolor: '#594534',
              color: 'white',
              px: { xs: 4, sm: 5 },
              py: { xs: 1.5, sm: 1.75 },
              borderRadius: '8px',
              '&:hover': { bgcolor: '#6d5442', transform: 'translateY(-2px)', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' },
              transition: 'all 0.3s',
              fontSize: { xs: '0.9375rem', sm: '1rem' },
              textTransform: 'none',
              fontWeight: 500,
            }}
          >
            <Box component="svg" sx={{ width: { xs: 18, sm: 20 }, height: { xs: 18, sm: 20 } }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </Box>
            <span>{t.stats.cta}</span>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
