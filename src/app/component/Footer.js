"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Box, Typography, TextField, IconButton, InputAdornment } from "@mui/material";
import { useLanguage } from "../hooks/useLanguage";
import en from "../locales/en.json";
import ar from "../locales/ar.json";
import logo from "../../../public/images/logo (2).png";
import Image from "next/image";

export default function Footer() {
  const { language } = useLanguage();
  const t = language === "ar" ? ar : en;
  const pathname = usePathname();

  return (
    <Box component="footer" sx={{ bgcolor: 'white', py: { xs: 4, sm: 5 }, borderTop: '1px solid', borderColor: 'grey.200' }}>
      {/* Top Section */}
      <Box sx={{ width: '90%', mx: 'auto', px: 2, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'center', md: 'flex-start' }, justifyContent: 'space-between', gap: { xs: 3, sm: 4, md: 5 }, borderBottom: '1px solid', borderColor: 'grey.200', pb: { xs: 4, sm: 5 } }}>
        {/* Logo */}
        <Box sx={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
          <Box sx={{ fontSize: '1.875rem', fontWeight: 700, color: 'primary.main', letterSpacing: 'wider', pl: 1, display: 'flex', alignItems: 'center' }}>
            <Image
              src={logo}
              alt="Company Logo"
              width={70}
              height={18}
              style={{ objectFit: 'contain', width: '70px', height: '18px' }}
            />
          </Box>
        </Box>

        {/* Navigation Links + Email */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: { xs: '100%', md: '33.333%' } }}>
          {/* Navigation Links */}
          <Box sx={{ display: 'flex', gap: { xs: 2, sm: 3 }, color: 'primary.main', mb: { xs: 2, sm: 2.5 }, fontWeight: 500, fontSize: { xs: '0.875rem', sm: '1rem' } }}>
            <Link href="/" style={{ padding: '4px 8px', borderRadius: '6px', textDecoration: 'none', color: 'inherit' }}>
              {t.home}
            </Link>
            <Link href="/projects" style={{ padding: '4px 8px', borderRadius: '6px', textDecoration: 'none', color: 'inherit' }}>
              {t.projects}
            </Link>
            <Link href="/contact" style={{ padding: '4px 8px', borderRadius: '6px', textDecoration: 'none', color: 'inherit' }}>
              {t.contact}
            </Link>
          </Box>

          {/* Email Input */}
          <TextField
            type="email"
            placeholder="Ahmed@gmail.com"
            size="small"
            sx={{
              width: '100%',
              maxWidth: { xs: '280px', md: 'none' },
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                '& fieldset': {
                  borderColor: 'secondary.main',
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon icon={faEnvelope} style={{ width: '16px', height: '16px', color: '#A4978D' }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Social Media - Desktop */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', alignItems: 'center', mt: 1.5 }}>
          <Typography sx={{ color: 'primary.main', mb: 1.5, fontWeight: 500, fontSize: '0.875rem' }}>
            {t.followMe}
          </Typography>
          <Box sx={{ display: 'flex', gap: { xs: 1, sm: 1.5 }, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            {[faEnvelope, faFacebookF, faInstagram, faYoutube].map((icon, idx) => (
              <IconButton
                key={idx}
                href="#"
                component="a"
                sx={{
                  width: { xs: 36, sm: 40 },
                  height: { xs: 36, sm: 40 },
                  bgcolor: '#EBE7DF',
                  color: 'black',
                  borderRadius: 1,
                  '&:hover': { opacity: 0.8 },
                  transition: 'opacity 0.3s',
                }}
              >
                <FontAwesomeIcon icon={icon} size="lg" />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Copyright */}
      <Box sx={{ mt: { xs: 2, sm: 3 }, textAlign: 'center', color: 'grey.400', fontSize: { xs: '0.75rem', sm: '0.875rem' }, lineHeight: 1.6 }}>
        <Typography variant="body2">{t.rights}</Typography>
        <Typography variant="body2">{t.madeWithLove}</Typography>

        {/* Divider */}
        <Box sx={{ borderTop: '1px solid', borderColor: 'grey.200', mt: { xs: 2, sm: 3 }, pt: { xs: 2, sm: 3 }, width: '80%', mx: 'auto' }} />

        {/* Social Media - Mobile */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', alignItems: 'center', mt: 1.5 }}>
          <Typography sx={{ color: 'primary.main', mb: 1.5, fontWeight: 500, fontSize: '0.875rem' }}>
            {t.followMe}
          </Typography>
          <Box sx={{ display: 'flex', gap: { xs: 1, sm: 1.5 }, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            {[faEnvelope, faFacebookF, faInstagram, faYoutube].map((icon, idx) => (
              <IconButton
                key={idx}
                href="#"
                component="a"
                sx={{
                  width: { xs: 36, sm: 40 },
                  height: { xs: 36, sm: 40 },
                  bgcolor: '#EBE7DF',
                  color: 'black',
                  borderRadius: 1,
                  '&:hover': { opacity: 0.8 },
                  transition: 'opacity 0.3s',
                }}
              >
                <FontAwesomeIcon icon={icon} size="lg" />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
