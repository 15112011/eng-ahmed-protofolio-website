"use client";
import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";
import { useLanguage } from "../hooks/useLanguage";
import { processSiteData } from "../data/siteDataProcessor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

/**
 * Testimonial Component - Uses fake backend data with fallback to locale files
 * 
 * Updated to use the fake backend system while maintaining compatibility
 * with existing design and functionality.
 */
export default function Testimonial() {
  const { language } = useLanguage();
  const { testimonials } = processSiteData(language);
    
  // Use fake backend data with fallback to locale files
  const sectionSubtitle = testimonials.subtitle;
  const mainQuote = testimonials.testimonials[0].review;
  const buttonText = testimonials.cta;

  return (
    <Box component="section" sx={{ width: '100%', py: { xs: 5, sm: 6, md: 8 }, overflow: 'hidden' }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <Box sx={{ bgcolor: '#322a23', borderRadius: { xs: '16px', md: '16px' }, overflow: 'hidden', position: 'relative', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'row' }, minHeight: { xs: '240px', sm: '340px', md: '400px' }, position: 'relative' }}>
            {/* Left Side - Content */}
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', textAlign: 'right', p: { xs: 3, sm: 3.5, md: 6, lg: 8 }, position: 'relative', zIndex: 10, flex: 1 }}>
              {/* Subtitle with dash */}
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: { xs: '0.6rem', sm: '0.875rem', md: '1rem' }, mb: { xs: 1.5, sm: 2, md: 3 }, display: 'flex', alignItems: 'center', gap: { xs: 0.75, sm: 1.5 } }}>
                <Box component="span" sx={{ width: { xs: '14px', sm: '20px', md: '24px' }, height: '1.5px', bgcolor: 'rgba(255, 255, 255, 0.7)' }} />
                {sectionSubtitle}
              </Typography>

              {/* Main Quote */}
              <Typography variant="h2" sx={{ fontSize: { xs: '0.875rem', sm: '1.5rem', md: '2.25rem', lg: '2.5rem' }, fontWeight: 700, color: 'white', lineHeight: { xs: 1.4, sm: 1.25, md: 1.2 }, mb: { xs: 2, sm: 3, md: 4 }, fontFamily: 'var(--font-cairo)' }}>
                &ldquo;{mainQuote}&rdquo;
              </Typography>

              {/* CTA Button */}
              <Button
                component={Link}
                href="/contact"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: { xs: 0.75, sm: 1.5 },
                  bgcolor: '#ebe7df',
                  color: '#7b6553',
                  px: { xs: 2.5, sm: 3, md: 4 },
                  py: { xs: 0.875, sm: 1.5, md: 1.75 },
                  borderRadius: '8px',
                  '&:hover': { bgcolor: '#F5F5F5', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(0,0,0,0.15)' },
                  transition: 'all 0.3s',
                  fontWeight: 500,
                  fontSize: { xs: '0.65rem', sm: '0.875rem', md: '1rem' },
                  textTransform: 'none',
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '12px' }} />
                <span>{buttonText}</span>
              </Button>
            </Box>

            {/* Right Side - SVG Pattern - Takes full right side */}
            <Box 
              sx={{ 
                position: 'relative', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                flex: { xs: '0 0 35%', sm: '0 0 35%', md: '0 0 40%' },
              }}
            >
              <Box
                component="img"
                src="/pattern.svg"
                alt=""
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
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
