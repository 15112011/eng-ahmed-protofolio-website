"use client";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { useLanguage } from "../hooks/useLanguage";
import { useSiteData } from "../hooks/useSiteData";

/**
 * Articles Component - Showcases featured articles/projects
 * 
 * Features:
 * - Responsive design: vertical stack on mobile, 3x3 grid on desktop
 * - Bilingual support (Arabic/English)
 * - Interactive hover effects
 * - Category badges
 * 
 * @returns {JSX.Element} Articles section component
 */
export default function Articles() {
  const { language } = useLanguage();
  const { articles } = useSiteData();

  // Article data with the provided images
  const articlesData = [
    {
      id: 1,
      image: "/images/article img 1.jpg",
      category: "سكني",
      title: "صممت شقة فاخرة في دبامك هايت مع التركيز على التفاصيل المعمارية والفخامة",
      author: "شاهد المزيد",
      link: "/articles/luxury-apartment"
    },
    {
      id: 2,
      image: "/images/article img 2.jpg", 
      category: "تجاري",
      title: "صممت مشروع صالة انتظار مبتكراً يجمع بين الجمالية والوظيفية لتجربة مريحة وفاخرة",
      author: "شاهد المزيد",
      link: "/articles/waiting-lounge"
    },
    {
      id: 3,
      image: "/images/article img 3.jpg",
      category: "تجاري", 
      title: "صممت مركز تجميل عصرياً يوازن بين الراحة والفخامة مع مراعاة تدفق الحركة بدقة هندسية",
      author: "شاهد المزيد",
      link: "/articles/beauty-center"
    }
  ];

  return (
    <Box component="section" sx={{ width: '100%', py: { xs: 6, sm: 8, md: 10 } }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 3 } }}>
        
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6, md: 8 } }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' }, 
              fontWeight: 700, 
              color: '#594534', 
              lineHeight: 1.2, 
              fontFamily: 'var(--font-cairo)',
              mb: 2
            }}
          >
            {articles?.title}
          </Typography>
          <Typography sx={{ 
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, 
            color: 'rgba(89, 69, 52, 0.7)', 
            lineHeight: 1.6,
            maxWidth: '600px',
            mx: 'auto'
          }}>
            {articles?.subtitle}
          </Typography>
        </Box>

        {/* Articles Grid */}
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { 
            xs: '1fr', 
            md: 'repeat(3, 1fr)' 
          },
          gap: { xs: 3, sm: 4, md: 5 },
          alignItems: 'start'
        }}>
          {articlesData.map((article, index) => (
            <Box
              key={article.id}
              component={Link}
              href={article.link}
              sx={{
                display: 'block',
                textDecoration: 'none',
                bgcolor: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(89, 69, 52, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(89, 69, 52, 0.15)',
                  '& .article-image': {
                    transform: 'scale(1.05)',
                  },
                  '& .article-category': {
                    transform: 'scale(1.05)',
                  }
                }
              }}
            >
              {/* Article Image */}
              <Box sx={{ 
                position: 'relative', 
                height: { xs: '240px', sm: '280px', md: '320px' },
                overflow: 'hidden'
              }}>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="article-image"
                  style={{ 
                    objectFit: 'cover',
                    transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                  priority={index < 3}
                />
                
                {/* Category Badge */}
                <Box 
                  className="article-category"
                  sx={{ 
                    position: 'absolute', 
                    top: 16, 
                    right: 16, 
                    bgcolor: 'rgba(139, 115, 85, 0.9)', 
                    backdropFilter: 'blur(10px)',
                    color: 'white', 
                    px: 2.5, 
                    py: 1, 
                    borderRadius: '8px', 
                    fontWeight: 600, 
                    fontSize: '0.875rem',
                    fontFamily: 'var(--font-cairo)',
                    transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                >
                  {article.category}
                </Box>
              </Box>

              {/* Article Content */}
              <Box sx={{ p: { xs: 3, sm: 4 } }}>
                <Typography 
                  sx={{ 
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem' }, 
                    fontWeight: 600, 
                    color: '#594534', 
                    lineHeight: 1.4,
                    fontFamily: 'var(--font-cairo)',
                    mb: 3,
                    textAlign: 'right',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {article.title}
                </Typography>

                {/* Author/CTA */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'flex-end',
                  pt: 2,
                  borderTop: '1px solid rgba(89, 69, 52, 0.1)'
                }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1,
                    color: '#8B7355',
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    fontFamily: 'var(--font-cairo)'
                  }}>
                    <Typography sx={{ 
                      fontSize: '0.875rem', 
                      color: '#8B7355',
                      fontWeight: 400,
                      fontFamily: 'var(--font-cairo)'
                    }}>
                      {articles?.readMore}
                    </Typography>
                    {/* Left Arrow */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 12H5M12 19L5 12L12 5" stroke="#8B7355" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

      </Box>
    </Box>
  );
}
