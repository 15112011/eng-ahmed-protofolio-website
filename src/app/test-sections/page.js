"use client";
import Testimonials from "../component/Testimonials";
import CorporateWebsites from "../component/CorporateWebsites";
import JourneyMap from "../component/JourneyMap";
import Stats from "../component/Stats";
import { Box, Typography, Divider } from "@mui/material";

/**
 * Test Sections Page - Displays all sections using fake backend data
 * 
 * This page demonstrates that all sections are working with the
 * fake backend system and can be accessed at /test-sections
 */
export default function TestSectionsPage() {
  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ py: 4, bgcolor: '#594534', color: 'white', textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          🧪 All Sections Test Page
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9 }}>
          Testing all sections with fake backend data
        </Typography>
      </Box>

      {/* Stats Section (Updated) */}
      <Stats />
      <Divider sx={{ my: 0 }} />

      {/* Testimonials Section - عملاؤنا السعداء يشاركون تجربتهم معنا */}
      <Testimonials />
      <Divider sx={{ my: 0 }} />

      {/* Corporate Websites Section - المواقع الإلكترونية الشركاتي */}
      <CorporateWebsites />
      <Divider sx={{ my: 0 }} />

      {/* Journey Map Section - خارطة رحلتك مع أحمد المبيض */}
      <JourneyMap />

      {/* Footer */}
      <Box sx={{ py: 4, bgcolor: '#f8f9fa', textAlign: 'center' }}>
        <Typography variant="h5" sx={{ color: '#594534', fontWeight: 600, mb: 2 }}>
          ✅ All Sections Working with Fake Backend!
        </Typography>
        <Typography sx={{ color: 'rgba(89, 69, 52, 0.7)' }}>
          All data is coming from the centralized fake backend system
        </Typography>
      </Box>
    </Box>
  );
}
