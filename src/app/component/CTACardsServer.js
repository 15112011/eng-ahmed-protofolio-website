import Link from "next/link";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ar from "../locales/ar.json";
import en from "../locales/en.json";
import message from "../../../public/images/message.png"
import star from "../../../public/images/star.png"

/**
 * Server-Side CTACards Component - Call-to-action cards section
 * 
 * This is a server-side rendered version that accepts language as props
 * instead of using client-side hooks for better SEO performance.
 * 
 * @param {Object} props - Component props
 * @param {string} props.language - Current language ('ar' or 'en')
 * @returns {JSX.Element} CTA cards section component
 */
export default function CTACardsServer({ language = 'ar' }) {
  const t = language === "ar" ? ar : en;

  const cards = [
    {
      id: 1,
      icon: message,
      title: language === "ar" ? "رسالة المهندس أحمد" : "Engineer Ahmed's Message",
      description: language === "ar" 
        ? "اسعى لتصميم فراغات مريحة لتناسب احتياجاتكم الشخصية" 
        : "I strive to design comfortable spaces to suit your personal needs",
      link: "/contact"
    },
    {
      id: 2,
      icon: star,
      title: language === "ar" ? "رؤية المهندس أحمد" : "Engineer Ahmed's Vision",
      description: language === "ar" 
        ? "يحول كل افكارك إلى تصاميم تعبر عن ذوقك بأسلوب احترافي" 
        : "Transforms all your ideas into designs that express your taste professionally",
      link: "/about"
    }
  ];

  return (
    <Box component="section" sx={{ width: '94%', marginX: "auto", bgcolor: '#fff', py: { xs: 6, sm: 8, md: 10 } }}>
      <Box sx={{ maxWidth: '1400px', mx: 'auto', px: { xs: 1.4, sm: 2.2, md: 3 } }}>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
          gap: { xs: 2, sm: 3, md: 4 } 
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
                  p: { xs: 3, sm: 4, md: 5, lg: 6 },
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
                    <Image
                      src={card.icon} 
                      alt={card.title} 
                      width={60} 
                      height={60} 
                      style={{ objectFit: 'contain' }}
                    />
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
