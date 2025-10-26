"use client";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { useLanguage } from "../hooks/useLanguage";
import ar from "../locales/ar.json";
import en from "../locales/en.json";

export default function CTACards() {
  const { language } = useLanguage();
  const t = language === "ar" ? ar : en;

  const cards = [
    {
      id: 1,
      icon: "📝",
      title: language === "ar" ? "رسالة المهندس أحمد" : "Engineer Ahmed's Message",
      description: language === "ar" 
        ? "اسعى لتصميم فراغات مريحة لتناسب احتياجاتكم الشخصية" 
        : "I strive to design comfortable spaces to suit your personal needs",
      link: "/contact"
    },
    {
      id: 2,
      icon: "🌟",
      title: language === "ar" ? "رؤية المهندس أحمد" : "Engineer Ahmed's Vision",
      description: language === "ar" 
        ? "يحول كل افكارك إلى تصاميم تعبر عن ذوقك بأسلوب احترافي" 
        : "Transforms all your ideas into designs that express your taste professionally",
      link: "/about"
    }
  ];

  return (
    <Box component="section" sx={{ width: '100%', bgcolor: '#F3EEE9', py: { xs: 6, sm: 8, md: 10 } }}>
      <Box sx={{ maxWidth: '1400px', mx: 'auto', px: { xs: 3, sm: 4, md: 6 } }}>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
          gap: { xs: 3, sm: 4, md: 6 } 
        }}>
          {cards.map((card) => (
            <Link 
              key={card.id} 
              href={card.link}
              style={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  bgcolor: 'white',
                  borderRadius: '32px',
                  p: { xs: 4, sm: 5, md: 6, lg: 7 },
                  textAlign: language === 'ar' ? 'right' : 'left',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  minHeight: { xs: '180px', sm: '200px', md: '220px' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  '&:hover': {
                    boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                    transform: 'translateY(-8px)',
                    bgcolor: '#FAFAFA',
                  },
                }}
              >
                {/* Title with Icon */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: language === 'ar' ? 'flex-end' : 'flex-start',
                  gap: { xs: 2, sm: 2.5, md: 3 },
                  mb: { xs: 3, sm: 3.5, md: 4 }
                }}>
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontSize: { xs: '1.25rem', sm: '1.375rem', md: '1.5rem', lg: '1.625rem' }, 
                      fontWeight: 700, 
                      color: '#594534',
                      fontFamily: 'var(--font-cairo)',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' } }}>
                    {card.icon}
                  </Typography>
                </Box>

                {/* Description */}
                <Typography 
                  sx={{ 
                    fontSize: { xs: '0.9375rem', sm: '1rem', md: '1.0625rem', lg: '1.125rem' }, 
                    color: 'rgba(89, 69, 52, 0.65)',
                    lineHeight: 1.8,
                    letterSpacing: '0.01em'
                  }}
                >
                  {card.description}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
