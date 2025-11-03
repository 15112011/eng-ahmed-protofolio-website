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
    <Box component="section" sx={{ width: '95%', py: { xs: 6, sm: 8, md: 10 },marginX:'auto' }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 3 } }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, sm: 6, md: 8 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, fontWeight: 600, color: '#594534', mb: 2, fontFamily: 'var(--font-cairo)' }}>
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
                borderRadius: { xs: 1.2, sm: 2.2 },
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
              
              {/* Logo */}
              <Box sx={{ position: 'relative', width: { xs: 160, sm: 200 }, height: { xs: 60, sm: 80 }, mb: { xs: 1, sm: 2 } }}>
                <Image
                  src={partner.logo}
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
                  px: { xs: 4.5, sm: 6 },
                  py: { xs: 1.25, sm: 1.5 },
                  borderRadius: 1.2,
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

      
      </Box>
    </Box>
  );
}
