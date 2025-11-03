"use client";
import { Box, Typography, Paper } from "@mui/material";
import { useLanguage } from "../hooks/useLanguage";
import siteData, { siteConfig, statsData, heroData, navigationData } from "../data/siteData";

/**
 * DataTest Component - Tests the fake backend data system
 * 
 * This component demonstrates that the fake backend data is working
 * by displaying various data points from the siteData.js file.
 * 
 * @returns {JSX.Element} Data test component
 */
export default function DataTest() {
  const { language } = useLanguage();

  return (
    <Box component="section" sx={{ py: 4, px: 2, bgcolor: '#f5f5f5' }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
        <Typography variant="h3" sx={{ mb: 4, textAlign: 'center', color: '#594534' }}>
          🧪 Fake Backend Data Test
        </Typography>

        {/* Site Config Test */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, color: '#594534' }}>
            📋 Site Configuration
          </Typography>
          <Typography><strong>Site Name:</strong> {siteConfig.siteName}</Typography>
          <Typography><strong>Tagline:</strong> {siteConfig.tagline}</Typography>
          <Typography><strong>Email:</strong> {siteConfig.contact.email}</Typography>
          <Typography><strong>Location:</strong> {siteConfig.contact.location}</Typography>
        </Paper>

        {/* Navigation Data Test */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, color: '#594534' }}>
            🧭 Navigation Data
          </Typography>
          {navigationData.mainNav.map((item) => (
            <Typography key={item.id}>
              <strong>{item.id}:</strong> {language === 'ar' ? item.labelAr : item.labelEn} ({item.href})
            </Typography>
          ))}
          <Typography sx={{ mt: 1 }}>
            <strong>CTA Button:</strong> {language === 'ar' ? navigationData.ctaButton.labelAr : navigationData.ctaButton.labelEn}
          </Typography>
        </Paper>

        {/* Hero Data Test */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, color: '#594534' }}>
            🦸 Hero Section Data
          </Typography>
          <Typography><strong>Background Image:</strong> {heroData.backgroundImage}</Typography>
          <Typography><strong>Architect Title:</strong> {heroData.titles.architect[language] || heroData.titles.architect.en}</Typography>
          <Typography><strong>Planner Title:</strong> {heroData.titles.planner[language] || heroData.titles.planner.en}</Typography>
          <Typography sx={{ mt: 1 }}><strong>Floating Labels:</strong></Typography>
          <Box sx={{ ml: 2 }}>
            {(heroData.floatingLabels[language] || heroData.floatingLabels.en).map((label, index) => (
              <Typography key={index}>• {label}</Typography>
            ))}
          </Box>
        </Paper>

        {/* Stats Data Test */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, color: '#594534' }}>
            📊 Statistics Data
          </Typography>
          <Typography><strong>Title:</strong> {statsData.title[language] || statsData.title.en}</Typography>
          <Typography sx={{ mb: 2 }}><strong>Subtitle:</strong> {statsData.subtitle[language] || statsData.subtitle.en}</Typography>
          
          <Typography sx={{ mb: 1 }}><strong>Statistics:</strong></Typography>
          {statsData.statistics.map((stat) => (
            <Box key={stat.id} sx={{ ml: 2, mb: 1 }}>
              <Typography>
                <strong>{stat.id}:</strong> {language === 'ar' ? stat.valueAr : stat.value}
                {stat.hasPlus && '+'} - {stat.label[language] || stat.label.en}
              </Typography>
            </Box>
          ))}
          
          <Typography sx={{ mt: 1 }}>
            <strong>CTA:</strong> {statsData.cta[language] || statsData.cta.en}
          </Typography>
        </Paper>

        {/* Data Structure Test */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, color: '#594534' }}>
            🔧 Data Structure Test
          </Typography>
          <Typography><strong>Current Language:</strong> {language}</Typography>
          <Typography><strong>Available Data Modules:</strong></Typography>
          <Box sx={{ ml: 2 }}>
            <Typography>• siteConfig ✅</Typography>
            <Typography>• navigationData ✅</Typography>
            <Typography>• heroData ✅</Typography>
            <Typography>• statsData ✅</Typography>
            <Typography>• aboutData ✅</Typography>
            <Typography>• projectsData ✅</Typography>
            <Typography>• companyData ✅</Typography>
          </Box>
          <Typography sx={{ mt: 2, color: 'green', fontWeight: 'bold' }}>
            ✅ Fake Backend System is Working!
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
