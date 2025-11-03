"use client";
import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";
import { useLanguage } from "../hooks/useLanguage";
import { useSiteData } from "../hooks/useSiteData";
import ar from "../locales/ar.json";
import en from "../locales/en.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

/**
 * Stats Component - Displays key statistics and achievements
 * 
 * Features:
 * - Three-column statistics layout with visual separators
 * - Responsive design with flexible sizing
 * - Bilingual support for all text content
 * - Call-to-action button with hover effects
 * - Card-style design with shadow and rounded corners
 * 
 * @returns {JSX.Element} Statistics section component
 */
export default function Stats() {
  const { language } = useLanguage(); // Current language context
  const t = language === "ar" ? ar : en; // Translation object based on current language (fallback)
  const { stats } = useSiteData(); // Get processed stats data from fake backend
  
  // Use fake backend data with fallback to locale files
  const sectionTitle = stats.title || t.stats.title;
  const sectionSubtitle = stats.subtitle || t.stats.subtitle;
  const ctaText = stats.cta || t.stats.cta;

  return (
    <Box component="section" sx={{ width: '95%', bgcolor: 'white', py: { xs: 8, sm: 10, md: 12 } }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 3, sm: 4 } }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, sm: 8, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' }, fontWeight: 700, color: '#594534', mb: { xs: 2, sm: 3 }, fontFamily: 'var(--font-cairo)', lineHeight: 1.4 }}>
            {sectionTitle}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.0625rem' }, color: 'rgba(89, 69, 52, 0.65)', maxWidth: '30rem', mx: 'auto', lineHeight: 1.7, px: 2 }}>
            {sectionSubtitle}
          </Typography>
        </Box>
        {/* Statistics Container - Three-column layout with card styling */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'nowrap', // Keep all stats in same row
            gap: { xs: 2, sm: 3 },
            mb: { xs: 6, sm: 8, md: 10 },
            bgcolor: 'white', // Card background
            borderRadius: 3, // Rounded corners
            boxShadow: '0 6px 18px rgba(0,0,0,0.08)', // Subtle shadow
            p: { xs: 1, sm: 2 },
          }}
        >
          {/* Dynamically render statistics from fake backend */}
          {stats.statistics.map((stat, index) => (
            <Box
              key={stat.id}
              sx={{
                flex: '1 1 0', // Equal space distribution
                minWidth: 0, // Prevent overflow
                textAlign: 'center',
                p: { xs: 2, sm: 4 },
                borderRight: index < stats.statistics.length - 1 ? '1px solid rgba(89, 69, 52, 0.08)' : 'none',
              }}
            >
              <Typography sx={{ fontSize: { xs: '1.3rem', sm: '2.2rem', md: '2.5rem' }, fontWeight: 700, color: '#594534', mb: 1 }}>
                {stat.value}
                {stat.hasPlus && <Box component="span" sx={{ color: '#FF6B35' }}>+</Box>}
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.5rem', sm: '0.6rem', md: '0.8rem' }, fontWeight: 500, color: '#594534' }}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Call-to-Action Button - Links to contact page with hover effects */}
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
              '&:hover': { 
                bgcolor: '#6d5442', 
                transform: 'translateY(-2px)', 
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)' 
              },
              transition: 'all 0.3s',
              fontSize: { xs: '0.9375rem', sm: '1rem' },
              textTransform: 'none',
              fontWeight: 500,
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '16px' }} />
            <span>{ctaText}</span>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
