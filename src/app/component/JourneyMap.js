import { Box, Typography, Card, CardContent, Button, Stepper, Step, StepLabel, StepContent } from "@mui/material";
import { useSiteData } from "../hooks/useSiteData";
import Link from "next/link";

/**
 * Journey Map Component - خارطة رحلتك مع أحمد المبيض
 * 
 * Features:
 * - Step-by-step process visualization
 * - Timeline with icons and descriptions
 * - Deliverables for each step
 * - Duration information
 * - Fully bilingual support (Arabic/English)
 * - Uses fake backend data system
 * 
 * @returns {JSX.Element} Journey map section component
 */
export default function JourneyMap() {
  const { journeyMap } = useSiteData(); // Get processed data from fake backend

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
            {journeyMap.title}
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
            {journeyMap.subtitle}
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
            {journeyMap.description}
          </Typography>
        </Box>

        {/* Journey Steps - Desktop Timeline */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, mb: { xs: 6, sm: 8 } }}>
          <Box sx={{ position: 'relative' }}>
            {/* Timeline Line */}
            <Box 
              sx={{ 
                position: 'absolute',
                top: '50px',
                left: '50px',
                right: '50px',
                height: '2px',
                bgcolor: 'rgba(89, 69, 52, 0.2)',
                zIndex: 0
              }}
            />
            
            {/* Steps Grid */}
            <Box 
              sx={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: 2,
                position: 'relative',
                zIndex: 1
              }}
            >
              {journeyMap.steps.map((step, index) => (
                <Card 
                  key={step.id}
                  sx={{ 
                    textAlign: 'center',
                    p: 3,
                    borderRadius: 3,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  {/* Step Icon */}
                  <Box 
                    sx={{ 
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: '#594534',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      fontSize: '1.5rem'
                    }}
                  >
                    {step.icon}
                  </Box>
                  
                  {/* Step Number */}
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 700, 
                      color: '#594534', 
                      mb: 1,
                      fontSize: '0.9rem'
                    }}
                  >
                    {step.number}. {step.title}
                  </Typography>
                  
                  {/* Duration */}
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'rgba(89, 69, 52, 0.6)', 
                      fontSize: '0.75rem',
                      fontWeight: 500
                    }}
                  >
                    ⏱️ {step.duration}
                  </Typography>
                </Card>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Journey Steps - Mobile Accordion */}
        <Box sx={{ display: { xs: 'block', md: 'none' }, mb: { xs: 6, sm: 8 } }}>
          {journeyMap.steps.map((step, index) => (
            <Card 
              key={step.id}
              sx={{ 
                mb: 3,
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
              }}
            >
              <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                {/* Step Header */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box 
                    sx={{ 
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      bgcolor: '#594534',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 3,
                      fontSize: '1.25rem'
                    }}
                  >
                    {step.icon}
                  </Box>
                  <Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600, 
                        color: '#594534', 
                        mb: 0.5 
                      }}
                    >
                      {step.number}. {step.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'rgba(89, 69, 52, 0.6)' 
                      }}
                    >
                      ⏱️ {step.duration}
                    </Typography>
                  </Box>
                </Box>

                {/* Step Description */}
                <Typography 
                  sx={{ 
                    fontSize: '0.95rem', 
                    lineHeight: 1.6, 
                    color: '#333', 
                    mb: 3 
                  }}
                >
                  {step.description}
                </Typography>

                {/* Deliverables */}
                <Box>
                  <Typography 
                    variant="subtitle2" 
                    sx={{ 
                      fontWeight: 600, 
                      color: '#594534', 
                      mb: 1 
                    }}
                  >
                    Deliverables:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    {step.deliverables.map((deliverable, idx) => (
                      <Typography 
                        key={idx}
                        component="li" 
                        sx={{ 
                          fontSize: '0.9rem', 
                          color: 'rgba(89, 69, 52, 0.8)', 
                          mb: 0.5 
                        }}
                      >
                        {deliverable}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center' }}>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            size="large"
            sx={{
              bgcolor: '#594534',
              color: 'white',
              px: { xs: 4, sm: 6 },
              py: { xs: 1.5, sm: 2 },
              borderRadius: '12px',
              fontSize: { xs: '1rem', sm: '1.125rem' },
              fontWeight: 600,
              textTransform: 'none',
              boxShadow: '0 8px 25px rgba(89, 69, 52, 0.3)',
              '&:hover': {
                bgcolor: '#6d5442',
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 35px rgba(89, 69, 52, 0.4)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            {journeyMap.cta}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
