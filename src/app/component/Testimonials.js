"use client";
import { Box, Typography, Card, CardContent, Rating, Avatar } from "@mui/material";
import { useSiteData } from "../hooks/useSiteData";

/**
 * Testimonials Component - عملاؤنا السعداء يشاركون تجربتهم معنا
 * 
 * Features:
 * - Displays client testimonials with ratings
 * - Fully bilingual support (Arabic/English)
 * - Uses fake backend data system
 * - Responsive card layout
 * - Client photos and project details
 * 
 * @returns {JSX.Element} Testimonials section component
 */
export default function Testimonials() {
  const { testimonials } = useSiteData(); // Get processed testimonials data from fake backend

  return (
    <Box component="section" sx={{ py: { xs: 8, sm: 10, md: 12 }, bgcolor: '#f8f9fa' }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 3, sm: 4 } }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, sm: 8, md: 10 } }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, 
              fontWeight: 700, 
              color: '#594534', 
              mb: { xs: 2, sm: 3 }, 
              fontFamily: 'var(--font-cairo)', 
              lineHeight: 1.3 
            }}
          >
            {testimonials.title}
          </Typography>
          <Typography 
            sx={{ 
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' }, 
              color: 'rgba(89, 69, 52, 0.7)', 
              maxWidth: '600px', 
              mx: 'auto', 
              lineHeight: 1.6 
            }}
          >
            {testimonials.subtitle}
          </Typography>
        </Box>

        {/* Testimonials Grid */}
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: { xs: 3, sm: 4 },
            mb: { xs: 6, sm: 8 }
          }}
        >
          {testimonials.testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
                }
              }}
            >
              <CardContent sx={{ p: { xs: 3, sm: 4 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Client Info */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Avatar 
                    src={testimonial.image}
                    alt={testimonial.name}
                    sx={{ width: 60, height: 60, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#594534', mb: 0.5 }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(89, 69, 52, 0.6)' }}>
                      {testimonial.title}
                    </Typography>
                  </Box>
                </Box>

                {/* Rating */}
                <Box sx={{ mb: 2 }}>
                  <Rating value={testimonial.rating} readOnly size="small" />
                </Box>

                {/* Review Text */}
                <Typography 
                  sx={{ 
                    fontSize: '0.95rem', 
                    lineHeight: 1.6, 
                    color: '#333', 
                    mb: 3,
                    flexGrow: 1,
                    fontStyle: 'italic'
                  }}
                >
                  &ldquo;{testimonial.review}&rdquo;
                </Typography>

                {/* Project Details */}
                <Box sx={{ pt: 2, borderTop: '1px solid rgba(89, 69, 52, 0.1)' }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#594534', mb: 0.5 }}>
                    {testimonial.project}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(89, 69, 52, 0.6)' }}>
                    📍 {testimonial.location}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
