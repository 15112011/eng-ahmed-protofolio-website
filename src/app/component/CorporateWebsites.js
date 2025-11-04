import { Box, Typography, Card, CardContent, CardMedia, Chip, Button } from "@mui/material";
import { useSiteData } from "../hooks/useSiteData";
import Link from "next/link";

/**
 * Corporate Websites Component - المواقع الإلكترونية الشركاتي
 * 
 * Features:
 * - Displays corporate website services and portfolio
 * - Feature cards with icons and descriptions
 * - Portfolio showcase with technologies used
 * - Fully bilingual support (Arabic/English)
 * - Uses fake backend data system
 * 
 * @returns {JSX.Element} Corporate websites section component
 */
export default function CorporateWebsites() {
  const { corporateWebsites } = useSiteData(); // Get processed data from fake backend

  return (
    <Box component="section" sx={{ py: { xs: 8, sm: 10, md: 12 }, bgcolor: 'white' }}>
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
            {corporateWebsites.title}
          </Typography>
          <Typography 
            sx={{ 
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' }, 
              color: 'rgba(89, 69, 52, 0.7)', 
              maxWidth: '600px', 
              mx: 'auto', 
              lineHeight: 1.6,
              mb: 2
            }}
          >
            {corporateWebsites.subtitle}
          </Typography>
          <Typography 
            sx={{ 
              fontSize: { xs: '0.9rem', sm: '1rem' }, 
              color: 'rgba(89, 69, 52, 0.6)', 
              maxWidth: '800px', 
              mx: 'auto', 
              lineHeight: 1.7
            }}
          >
            {corporateWebsites.description}
          </Typography>
        </Box>

        {/* Features Grid */}
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
            gap: { xs: 3, sm: 4 },
            mb: { xs: 8, sm: 10, md: 12 }
          }}
        >
          {corporateWebsites.features.map((feature) => (
            <Card 
              key={feature.id}
              sx={{ 
                textAlign: 'center',
                p: { xs: 3, sm: 4 },
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Box sx={{ fontSize: '3rem', mb: 2 }}>
                {feature.icon}
              </Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600, 
                  color: '#594534', 
                  mb: 2,
                  fontSize: { xs: '1rem', sm: '1.125rem' }
                }}
              >
                {feature.title}
              </Typography>
              <Typography 
                sx={{ 
                  fontSize: '0.9rem', 
                  color: 'rgba(89, 69, 52, 0.7)', 
                  lineHeight: 1.6 
                }}
              >
                {feature.description}
              </Typography>
            </Card>
          ))}
        </Box>

        {/* Portfolio Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, sm: 8 } }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }, 
              fontWeight: 600, 
              color: '#594534', 
              mb: 4,
              fontFamily: 'var(--font-cairo)'
            }}
          >
            Portfolio Showcase
          </Typography>
        </Box>

        {/* Portfolio Grid */}
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: { xs: 4, sm: 6 }
          }}
        >
          {corporateWebsites.portfolioSites.map((site) => (
            <Card 
              key={site.id}
              sx={{ 
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 6px 25px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={site.image}
                alt={site.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600, 
                    color: '#594534', 
                    mb: 1 
                  }}
                >
                  {site.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'rgba(89, 69, 52, 0.6)', 
                    mb: 2 
                  }}
                >
                  {site.category}
                </Typography>
                
                {/* Technologies */}
                <Box sx={{ mb: 3 }}>
                  {site.technologies.map((tech) => (
                    <Chip 
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{ 
                        mr: 1, 
                        mb: 1, 
                        bgcolor: 'rgba(89, 69, 52, 0.1)',
                        color: '#594534',
                        fontSize: '0.75rem'
                      }}
                    />
                  ))}
                </Box>

                {/* Visit Button */}
                <Button
                  component={Link}
                  href={site.url}
                  target="_blank"
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: '#594534',
                    color: '#594534',
                    '&:hover': {
                      bgcolor: '#594534',
                      color: 'white'
                    }
                  }}
                >
                  Visit Website
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
