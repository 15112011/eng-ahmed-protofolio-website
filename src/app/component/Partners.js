"use client";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";
import { useLanguage } from "../hooks/useLanguage";
import ar from "../locales/ar.json";
import en from "../locales/en.json";
import { partners as partnersData } from "../data/content";

export default function Partners() {
  const { language } = useLanguage();
  const t = language === "ar" ? ar : en;
  const partners = partnersData[language] || partnersData.ar;

  return (
    <Box component="section" sx={{ width: '100%', bgcolor: '#F3EEE9', py: { xs: 6, sm: 8, md: 10 } }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 3 } }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, sm: 6, md: 8 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.875rem', sm: '2.25rem', md: '3rem' }, fontWeight: 700, color: '#594534', mb: 2, fontFamily: 'var(--font-cairo)' }}>
            {t.partners.title}
          </Typography>
        </Box>

        {/* Partners Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 2, sm: 3 }, maxWidth: '1152px', mx: 'auto' }}>
          {partners.map((partner, index) => (
            <Box
              key={index}
              sx={{
                bgcolor: '#5A4A3A',
                borderRadius: { xs: 3, sm: 4 },
                p: { xs: 3, sm: 4 },
                color: 'white',
                boxShadow: 3,
                '&:hover': { boxShadow: 6 },
                transition: 'all 0.3s',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                gap: { xs: 2, sm: 3 },
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Decorative dotted lines */}
              <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', borderTop: '2px dotted', borderColor: 'rgba(255, 255, 255, 0.2)' }} />
              <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', borderBottom: '2px dotted', borderColor: 'rgba(255, 255, 255, 0.2)' }} />
              <Box sx={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '1px', borderLeft: '2px dotted', borderColor: 'rgba(255, 255, 255, 0.2)' }} />
              <Box sx={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '1px', borderRight: '2px dotted', borderColor: 'rgba(255, 255, 255, 0.2)' }} />

              {/* Logo */}
              <Box sx={{ position: 'relative', width: { xs: 160, sm: 200 }, height: { xs: 60, sm: 80 }, mb: { xs: 1, sm: 2 } }}>
                <Image
                  src="/dream stodiu.svg"
                  alt={partner.name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </Box>

              {/* Description */}
              <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' }, lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.9)', maxWidth: '28rem' }}>
                {partner.description}
              </Typography>

              {/* CTA Button */}
              <Button
                component={Link}
                href={partner.link}
                sx={{
                  bgcolor: '#F3EEE9',
                  color: '#594534',
                  fontWeight: 500,
                  px: { xs: 4, sm: 5 },
                  py: { xs: 1.25, sm: 1.5 },
                  borderRadius: 2,
                  '&:hover': { bgcolor: 'white' },
                  transition: 'all 0.3s',
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  textTransform: 'none',
                }}
              >
                {partner.buttonText}
              </Button>
            </Box>
          ))}
        </Box>

        {/* Additional Info Cards */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 2, sm: 3 }, maxWidth: '896px', mx: 'auto', mt: { xs: 4, sm: 5, md: 6 } }}>
          <Box sx={{ bgcolor: 'white', borderRadius: { xs: 3, sm: 4 }, p: { xs: 3, sm: 4 }, boxShadow: 3, textAlign: 'right', border: '1px solid', borderColor: 'rgba(89, 69, 52, 0.2)' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: { xs: 1, sm: 1.5 }, mb: 1.5 }}>
              <Typography variant="h3" sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem' }, fontWeight: 700, color: '#594534', fontFamily: 'var(--font-cairo)' }}>
                {t.partners.visionTitle}
              </Typography>
              <Box component="svg" sx={{ width: { xs: 20, sm: 24 }, height: { xs: 20, sm: 24 }, color: '#594534' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </Box>
            </Box>
            <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' }, color: 'rgba(89, 69, 52, 0.8)', lineHeight: 1.6 }}>
              {t.partners.visionText}
            </Typography>
          </Box>

          <Box sx={{ bgcolor: 'white', borderRadius: { xs: 3, sm: 4 }, p: { xs: 3, sm: 4 }, boxShadow: 3, textAlign: 'right', border: '1px solid', borderColor: 'rgba(89, 69, 52, 0.2)' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1.5, mb: 1.5 }}>
              <Typography variant="h3" sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem' }, fontWeight: 700, color: '#594534', fontFamily: 'var(--font-cairo)' }}>
                {t.partners.missionTitle}
              </Typography>
              <Box component="svg" sx={{ width: 24, height: 24, color: '#594534' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </Box>
            </Box>
            <Typography sx={{ fontSize: { xs: '0.875rem', sm: '1rem' }, color: 'rgba(89, 69, 52, 0.8)', lineHeight: 1.6 }}>
              {t.partners.missionText}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
