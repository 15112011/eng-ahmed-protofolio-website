"use client";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { useLanguage } from "../hooks/useLanguage";
import { useSiteData } from "../hooks/useSiteData";

/**
 * CircularSections Component - 4 circular sections with icons and labels
 * 
 * Features:
 * - 4 circular sections in a row
 * - Each with icon/image and Arabic label
 * - Responsive design
 * - Hover effects
 * 
 * @returns {JSX.Element} CircularSections component
 */
export default function CircularSections() {
  const { language } = useLanguage();
  const { circularSections } = useSiteData();

  // Get sections data from fake database
  const sectionsData = circularSections?.sections || [];

  return (
    <Box component="section" sx={{ 
      width: '100%', 
      py: { xs: 8, sm: 10, md: 12 },
      bgcolor: '#f8f6f3',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 3 }, width: '100%' }}>
        
        {/* Circular Sections Grid */}
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { 
            xs: 'repeat(2, 1fr)', 
            md: 'repeat(4, 1fr)' 
          },
          gap: { xs: 4, sm: 6, md: 8 },
          alignItems: 'center',
          justifyItems: 'center'
        }}>
          {sectionsData.map((section, index) => (
            <Box
              key={section.id}
              component={Link}
              href={section.link}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 3,
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  '& .circle': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 20px 40px rgba(139, 115, 85, 0.2)',
                  }
                }
              }}
            >
              {/* Circular Container */}
              <Box 
                className="circle"
                sx={{ 
                  width: { xs: '140px', sm: '160px', md: '180px' },
                  height: { xs: '140px', sm: '160px', md: '180px' },
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                {/* SVG Frame (Bottom Layer) */}
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 1,
                  pointerEvents: 'none',
                }}>
                  <Image
                    src="/images/circular.svg"
                    alt="Frame"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </Box>

                {/* Content Circle (Top Layer - slightly smaller) */}
                <Box sx={{
                  width: '80%',
                  height: '80%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  position: 'relative',
                  bgcolor: '#8B7355',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                }}
                >
                {section.icon === "whatsapp" ? (
                  // WhatsApp Icon
                  <svg 
                    width="50" 
                    height="50" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" 
                      fill="white"
                    />
                  </svg>
                ) : (
                  // Image for other sections
                  <Image
                    src={section.image}
                    alt={section.label}
                    fill
                    style={{ 
                      objectFit: 'cover',
                      filter: 'brightness(0.8)'
                    }}
                    priority={index < 2}
                  />
                )}
                </Box>
              </Box>

              {/* Label */}
              <Typography 
                sx={{ 
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, 
                  fontWeight: 500, 
                  color: '#594534', 
                  textAlign: 'center',
                  fontFamily: 'var(--font-cairo)',
                  lineHeight: 1.3,
                  maxWidth: '150px'
                }}
              >
                {section.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
