"use client";
import { useState } from "react";
import Image from "next/image";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import { useLanguage } from "../hooks/useLanguage";
import ar from "../locales/ar.json";
import en from "../locales/en.json";

export default function ContactPage() {
  const { language } = useLanguage();
  const t = language === "ar" ? ar : en;
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Box component="main" sx={{ minHeight: '100vh', bgcolor: 'white' }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 3, py: 10 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 6, alignItems: 'center', maxWidth: '80rem', mx: 'auto' }}>
          {/* Left Side - Video/Image */}
          <Box sx={{ position: 'relative', height: { xs: '500px', lg: '600px' }, order: { xs: 2, lg: 1 } }}>
            <Box sx={{ position: 'relative', width: '100%', height: '100%', borderRadius: 4, overflow: 'hidden', bgcolor: 'black' }}>
              <Image
                src="/images/viewer img.png"
                alt="المهندس أحمد المبيض"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              {/* Play Button Overlay */}
              <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconButton
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: 'orange',
                    '&:hover': { bgcolor: '#f97316' },
                    transition: 'all 0.3s',
                  }}
                >
                  <Box component="svg" sx={{ width: 40, height: 40, color: 'white', ml: 0.5 }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </Box>
                </IconButton>
              </Box>
            </Box>
          </Box>

          {/* Right Side - Contact Form */}
          <Box sx={{ order: { xs: 1, lg: 2 } }}>
            <Box sx={{ bgcolor: 'white', borderRadius: 4, p: { xs: 4, lg: 6 }, boxShadow: 6, border: '1px solid', borderColor: 'grey.100' }}>
              <Typography variant="h1" sx={{ fontSize: { xs: '2.25rem', md: '3rem' }, fontWeight: 700, color: '#594534', mb: 2, textAlign: 'right', fontFamily: 'var(--font-cairo)' }}>
                {t.contactPage.title}
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, color: '#594534', mb: 3, textAlign: 'right', fontFamily: 'var(--font-cairo)' }}>
                {t.contactPage.subtitle}
              </Typography>
              
              <Typography sx={{ fontSize: '0.875rem', color: 'rgba(89, 69, 52, 0.6)', mb: 4, textAlign: 'right' }}>
                {t.contactPage.services}
              </Typography>

              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {/* Name Field */}
                <Box>
                  <Typography sx={{ display: 'block', textAlign: 'right', fontSize: '0.875rem', color: 'rgba(89, 69, 52, 0.7)', mb: 1 }}>
                    {t.contactPage.name}
                  </Typography>
                  <TextField
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={language === "ar" ? "يوسف المحمدي" : "John Doe"}
                    fullWidth
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: 'grey.50',
                        borderRadius: 2,
                        '& input': {
                          textAlign: 'right',
                          py: 1.5,
                        },
                        '& fieldset': {
                          borderColor: 'grey.200',
                        },
                        '&:hover fieldset': {
                          borderColor: '#594534',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#594534',
                          borderWidth: 2,
                        },
                      },
                    }}
                  />
                </Box>

                {/* Phone Field */}
                <Box>
                  <Typography sx={{ display: 'block', textAlign: 'right', fontSize: '0.875rem', color: 'rgba(89, 69, 52, 0.7)', mb: 1 }}>
                    {t.contactPage.phone}
                  </Typography>
                  <TextField
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+9661"
                    fullWidth
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: 'grey.50',
                        borderRadius: 2,
                        '& input': {
                          textAlign: 'right',
                          py: 1.5,
                        },
                        '& fieldset': {
                          borderColor: 'grey.200',
                        },
                        '&:hover fieldset': {
                          borderColor: '#594534',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#594534',
                          borderWidth: 2,
                        },
                      },
                    }}
                  />
                </Box>

                {/* Email Field */}
                <Box>
                  <Typography sx={{ display: 'block', textAlign: 'right', fontSize: '0.875rem', color: 'rgba(89, 69, 52, 0.7)', mb: 1 }}>
                    {t.contactPage.email}
                  </Typography>
                  <TextField
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="AH4205@gmail.com"
                    fullWidth
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: 'grey.50',
                        borderRadius: 2,
                        '& input': {
                          textAlign: 'right',
                          py: 1.5,
                        },
                        '& fieldset': {
                          borderColor: 'grey.200',
                        },
                        '&:hover fieldset': {
                          borderColor: '#594534',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#594534',
                          borderWidth: 2,
                        },
                      },
                    }}
                  />
                </Box>

                {/* Submit Button */}
                <Button
                  type="submit"
                  sx={{
                    width: '100%',
                    bgcolor: '#594534',
                    color: 'white',
                    py: 2,
                    borderRadius: 2,
                    '&:hover': { bgcolor: '#6d5442' },
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    fontWeight: 500,
                    textTransform: 'none',
                  }}
                >
                  <Box component="svg" sx={{ width: 20, height: 20 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </Box>
                  <span>{t.contactPage.submit}</span>
                </Button>

                {/* Privacy Notice */}
                <Typography sx={{ fontSize: '0.75rem', color: 'rgba(89, 69, 52, 0.5)', textAlign: 'center', lineHeight: 1.6 }}>
                  {t.contactPage.privacy}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
