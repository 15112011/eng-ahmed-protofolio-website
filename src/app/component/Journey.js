"use client";
import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useLanguage } from "../hooks/useLanguage";
import ar from "../locales/ar.json";
import en from "../locales/en.json";
import { journeyStages } from "../data/content";

export default function Journey() {
  const { language } = useLanguage();
  const t = language === "ar" ? ar : en;
  const stages = journeyStages[language] || journeyStages.ar;
  const [expandedStages, setExpandedStages] = useState({});

  return (
    <Box component="section" sx={{ width: '95%', bgcolor: '#594534', py: { xs: 6, sm: 8, md: 10 } ,marginX:'auto'}}>
      <Box sx={{ maxWidth: '64rem', mx: 'auto', px: { xs: 2, sm: 3 } }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', color: 'white', mb: { xs: 5, sm: 6, md: 8 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }, fontWeight: 500, mb: { xs: 1.5, sm: 2 }, fontFamily: 'var(--font-cairo)' }}>
            {t.journey.title}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1.1rem' }, color: 'rgb(164, 151, 141)', px: 2 }}>
            {t.journey.subtitle}
          </Typography>
        </Box>

        {/* Stages List */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.4, sm: 1.5 },width:"80%",marginX:"auto" }}>
          {stages.map((stage, index) => {
            const isExpanded = expandedStages[stage.id];
            
            return (
              <Box
                key={index}
                sx={{
                  bgcolor: isExpanded ? '#E8DED3' : 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(4px)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s',
                }}
              >
                {/* Header - Always Visible */}
                <Box 
                  sx={{ 
                    display: 'flex', 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    p: { xs: 2, sm: 2.5 },
                    gap: 2,
                  }}
                >
                  {/* Toggle Button - Left Side */}
                  <Button
                    onClick={() => setExpandedStages(prev => ({
                      ...prev,
                      [stage.id]: !prev[stage.id]
                    }))}
                    sx={{
                      flexShrink: 0,
                      bgcolor: '#594534',
                      color: 'white',
                      px: { xs: 2.5, sm: 3.5 },
                      py: { xs: 1.25, sm: 1.5 },
                      borderRadius: '8px',
                      '&:hover': { bgcolor: '#6d5442' },
                      transition: 'all 0.3s',
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      textTransform: 'none',
                      fontWeight: 500,
                      minWidth: { xs: '100px', sm: '120px' },
                    }}
                  >
                    {t.journey.readMore}
                  </Button>

                  {/* Content - Right Side */}
                  <Box sx={{ flex: 1, textAlign: 'right' }}>
                    <Typography variant="h3" sx={{ fontSize: { xs: '1.125rem', sm: '1.375rem' }, fontWeight: 700, color: '#594534', mb: 0.5, fontFamily: 'var(--font-cairo)' }}>
                      {stage.title}
                    </Typography>
                    <Typography sx={{ color: 'rgba(89, 69, 52, 0.7)', fontSize: { xs: '0.8125rem', sm: '0.9375rem' }, lineHeight: 1.5 }}>
                      {stage.subtitle}
                    </Typography>
                  </Box>
                </Box>

                {/* Expanded Content */}
                <Box
                  sx={{
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease-in-out, opacity 0.4s ease-in-out',
                    maxHeight: isExpanded ? '1000px' : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                >
                  <Box sx={{ bgcolor: 'white', borderRadius: '12px', p: { xs: 3, sm: 4 }, m: { xs: 2, sm: 3 }, textAlign: 'right' }}>
                    <Typography sx={{ color: '#594534', fontSize: { xs: '0.875rem', sm: '1rem' }, lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                      {stage.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
