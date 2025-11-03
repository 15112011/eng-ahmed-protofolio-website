"use client";
import { Box, Typography, Paper, Divider } from "@mui/material";
import { useSiteData } from "../hooks/useSiteData";

/**
 * Test Changes Page - Shows current values from fake backend
 * 
 * This page displays the current values from the fake backend to verify
 * that changes made to siteData.js are being reflected in the components.
 */
export default function TestChangesPage() {
  const { siteConfig, hero, testimonials, ctaText } = useSiteData();

  return (
    <Box sx={{ py: 4, px: 2, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
        <Typography variant="h3" sx={{ mb: 4, textAlign: 'center', color: '#594534' }}>
          🔍 Current Fake Backend Values
        </Typography>
        <Typography sx={{ mb: 4, textAlign: 'center', color: 'rgba(89, 69, 52, 0.7)' }}>
          These values come directly from the fake backend. Changes to siteData.js should be reflected here.
        </Typography>

        {/* Social Media Links Test */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, color: '#594534' }}>
            📱 Social Media Links (You changed these)
          </Typography>
          <Typography><strong>YouTube:</strong> {siteConfig.socialMedia.youtube}</Typography>
          <Typography><strong>TikTok:</strong> {siteConfig.socialMedia.tiktok}</Typography>
        </Paper>

        {/* Hero Titles Test */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, color: '#594534' }}>
            🦸 Hero Titles (You changed these)
          </Typography>
          <Typography><strong>Architect (EN):</strong> {hero.titles.architect}</Typography>
          <Typography><strong>Planner (EN):</strong> {hero.titles.planner}</Typography>
        </Paper>

        {/* CTA Button Test */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, color: '#594534' }}>
            🔘 CTA Button Text
          </Typography>
          <Typography><strong>Button Text:</strong> {ctaText}</Typography>
        </Paper>

        {/* Testimonials Test */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, color: '#594534' }}>
            💬 Testimonials Data
          </Typography>
          <Typography><strong>Section Title:</strong> {testimonials.title}</Typography>
          <Typography><strong>First Client:</strong> {testimonials.testimonials?.[0]?.name}</Typography>
          <Typography><strong>First Review:</strong> {testimonials.testimonials?.[0]?.review?.substring(0, 100)}...</Typography>
        </Paper>

        {/* Floating Labels Test */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, color: '#594534' }}>
            🏷️ Hero Floating Labels
          </Typography>
          {hero.floatingLabels?.map((label, index) => (
            <Typography key={index}><strong>Label {index + 1}:</strong> {label}</Typography>
          ))}
        </Paper>

        <Box sx={{ mt: 4, p: 3, bgcolor: '#594534', color: 'white', borderRadius: 2, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            ✅ Test Instructions
          </Typography>
          <Typography>
            1. Make changes to /src/app/data/siteData.js<br/>
            2. Refresh this page<br/>
            3. Changes should be reflected immediately!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
