"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Languages, ChevronDown } from "lucide-react";
import logo from "../../../public/images/logo (2).png"
import Image from "next/image";
import { 
  AppBar, 
  Toolbar, 
  Button, 
  IconButton, 
  Drawer, 
  Menu, 
  MenuItem, 
  Box,
  List,
  ListItem,
  ListItemButton,
  Divider
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useLanguage } from "../hooks/useLanguage";
import en from "../locales/en.json";
import ar from "../locales/ar.json";

/**
 * Navbar Component - Responsive navigation bar with language switching
 * 
 * Features:
 * - Responsive design (desktop menu + mobile drawer)
 * - Bilingual support with language switcher
 * - Active page highlighting
 * - MUI-based styling with custom theme colors
 * - Mobile-first drawer navigation
 * - Call-to-action button with custom styling
 * 
 * @returns {JSX.Element} Navigation bar component
 */
export default function Navbar() {
  // Language and translation setup
  const { language, changeLanguage } = useLanguage();
  const t = language === "ar" ? ar : en; // Translation object based on current language
  
  // Navigation state management
  const [anchorEl, setAnchorEl] = useState(null); // Language dropdown anchor element
  const [menuOpen, setMenuOpen] = useState(false); // Mobile drawer state
  const [langOpen, setLangOpen] = useState(false); // Mobile language menu state
  const pathname = usePathname(); // Current route for active state highlighting

  const langMenuOpen = Boolean(anchorEl); // Desktop language menu state

  /**
   * Opens the desktop language dropdown menu
   * @param {Event} event - Click event from language button
   */
  const handleLangClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * Closes the desktop language dropdown menu
   */
  const handleLangClose = () => {
    setAnchorEl(null);
  };

  /**
   * Changes the application language and closes the dropdown
   * @param {string} lang - Language code ('en' or 'ar')
   */
  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    handleLangClose();
  };

  return (
    <>
    <AppBar position="static" color="white" elevation={1} suppressHydrationWarning>
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 3, md: 8 }, py: 2 }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1 }}>
          <Image
            src={logo}
            alt="Company Logo"
            width={100}
            height={50}
            style={{ objectFit: 'contain' }}
          />
        </Box>

      {/* روابط سطح المكتب */}
      <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3, pr: 1 }} suppressHydrationWarning>
        <Button
          component={Link}
          href="/"
          sx={{
            color: 'primary.main',
            px: 2,
            py: 1,
            borderRadius: 1,
            bgcolor: pathname === "/" ? '#F3EEE9' : 'transparent',
            '&:hover': { bgcolor: '#F3EEE9' },
            textTransform: 'none',
          }}
          suppressHydrationWarning
        >
          {t.home}
        </Button>

        <Button
          component={Link}
          href="/projects"
          sx={{
            color: 'primary.main',
            px: 2,
            py: 1,
            borderRadius: 1,
            bgcolor: pathname.startsWith("/projects") ? '#F3EEE9' : 'transparent',
            '&:hover': { bgcolor: '#F3EEE9' },
            textTransform: 'none',
          }}
          suppressHydrationWarning
        >
          {t.projects}
        </Button>

        <Button
          component={Link}
          href="/contact"
          sx={{
            color: 'primary.main',
            px: 2,
            py: 1,
            borderRadius: 1,
            bgcolor: pathname === "/contact" ? '#F3EEE9' : 'transparent',
            '&:hover': { bgcolor: '#F3EEE9' },
            textTransform: 'none',
          }}
          suppressHydrationWarning
        >
          {t.contact}
        </Button>

        {/* Language Selector */}
        <Button
          onClick={handleLangClick}
          startIcon={<Languages size={20} />}
          endIcon={<KeyboardArrowDownIcon sx={{ transform: langMenuOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />}
          sx={{ color: 'primary.main', minWidth: 'auto', textTransform: 'none' }}
          suppressHydrationWarning
        >
          {language === "en" ? "EN" : "AR"}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={langMenuOpen}
          onClose={handleLangClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={() => handleLanguageChange("en")}>English</MenuItem>
          <MenuItem onClick={() => handleLanguageChange("ar")}>العربية</MenuItem>
        </Menu>

         
        <Button
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            bgcolor: 'primary.main',
            color: 'white',
            borderRadius: '9.84px',
            '&:hover': { opacity: 0.9, bgcolor: 'primary.main' },
            px: 2.25,
            py: 1.25,
            minWidth: { xs: '160px', md: '190px' },
            textTransform: 'none',
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '16px' }} />
          <Box component="span" sx={{ fontFamily: 'Rubik', fontSize: '15px', lineHeight: '18.9px', letterSpacing: '-0.49px' }}>
            {t.book}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ml: 1.5, position: 'relative' }}>
            <Box
              sx={{
                position: 'absolute',
                width: '13.78px',
                height: '13.78px',
                borderRadius: '50%',
                bgcolor: '#F5A606',
                opacity: 0.5,
              }}
            />
            <Box
              sx={{
                width: '9.84px',
                height: '9.84px',
                borderRadius: '50%',
                bgcolor: '#F5A606',
                position: 'relative',
              }}
            />
          </Box>
        </Button>
      </Box>

        {/* Mobile Menu Button */}
        <IconButton
          onClick={() => setMenuOpen(true)}
          sx={{ display: { xs: 'flex', md: 'none' }, color: 'primary.main' }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>

    {/* Mobile Drawer */}
    <Drawer
      anchor="right"
      open={menuOpen}
      onClose={() => setMenuOpen(false)}
      sx={{
        '& .MuiDrawer-paper': {
          width: 320,
          p: 3,
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        {/* Close Button */}
        <IconButton
          onClick={() => setMenuOpen(false)}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'grey.400',
            '&:hover': { color: 'grey.600' },
            zIndex: 10,
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Logo in Sidebar */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, mt: 2 }}>
          <Image
            src={logo}
            alt="Company Logo"
            width={120}
            height={36}
            style={{ objectFit: 'contain' }}
          />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, textAlign: 'right' }}>
          {/* الصفحة الرئيسية */}
          <Button
            component={Link}
            href="/"
            onClick={() => setMenuOpen(false)}
            sx={{
              px: 3,
              py: 1.75,
              borderRadius: 3,
              fontSize: '1.125rem',
              fontWeight: 500,
              bgcolor: pathname === "/" ? '#594534' : 'transparent',
              color: pathname === "/" ? 'white' : '#594534',
              boxShadow: pathname === "/" ? 3 : 0,
              '&:hover': {
                bgcolor: pathname === "/" ? '#594534' : '#F3EEE9',
                boxShadow: 2,
              },
              textTransform: 'none',
              justifyContent: 'flex-end',
            }}
          >
            {t.home}
          </Button>

          {/* المشاريع */}
          <Button
            component={Link}
            href="/projects"
            onClick={() => setMenuOpen(false)}
            sx={{
              px: 3,
              py: 1.75,
              borderRadius: 3,
              fontSize: '1.125rem',
              fontWeight: 500,
              bgcolor: pathname.startsWith("/projects") ? '#594534' : 'transparent',
              color: pathname.startsWith("/projects") ? 'white' : '#594534',
              boxShadow: pathname.startsWith("/projects") ? 3 : 0,
              '&:hover': {
                bgcolor: pathname.startsWith("/projects") ? '#594534' : '#F3EEE9',
                boxShadow: 2,
              },
              textTransform: 'none',
              justifyContent: 'flex-end',
            }}
          >
            {t.projects}
          </Button>

          {/* التسجيل */}
          <Button
            component={Link}
            href="/contact"
            onClick={() => setMenuOpen(false)}
            sx={{
              px: 3,
              py: 1.75,
              borderRadius: 3,
              fontSize: '1.125rem',
              fontWeight: 500,
              bgcolor: pathname === "/contact" ? '#594534' : 'transparent',
              color: pathname === "/contact" ? 'white' : '#594534',
              boxShadow: pathname === "/contact" ? 3 : 0,
              '&:hover': {
                bgcolor: pathname === "/contact" ? '#594534' : '#F3EEE9',
                boxShadow: 2,
              },
              textTransform: 'none',
              justifyContent: 'flex-end',
            }}
          >
            {t.contact}
          </Button>

          {/* اللغة في الموبايل */}
          <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid', borderColor: 'grey.200' }}>
            <Button
              onClick={() => setLangOpen(!langOpen)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: 1.5,
                color: '#594534',
                width: '100%',
                px: 3,
                py: 1.5,
                borderRadius: 3,
                '&:hover': { bgcolor: '#F3EEE9' },
                textTransform: 'none',
              }}
            >
              <Box component="span" sx={{ fontSize: '1rem', fontWeight: 500 }}>
                {language === "en" ? "English" : "العربية"}
              </Box>
              <Languages size={22} />
              <ChevronDown
                size={20}
                style={{
                  transform: langOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s',
                }}
              />
            </Button>

            {langOpen && (
              <Box sx={{ mt: 1, bgcolor: '#F3EEE9', borderRadius: 3, py: 1, px: 2 }}>
                <Button
                  onClick={() => {
                    changeLanguage("en");
                    setLangOpen(false);
                  }}
                  sx={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'right',
                    py: 1.5,
                    px: 2,
                    fontSize: '1rem',
                    borderRadius: 2,
                    bgcolor: language === "en" ? '#594534' : 'transparent',
                    color: language === "en" ? 'white' : '#594534',
                    '&:hover': {
                      bgcolor: language === "en" ? '#594534' : 'white',
                    },
                    textTransform: 'none',
                  }}
                >
                  English
                </Button>
                <Button
                  onClick={() => {
                    changeLanguage("ar");
                    setLangOpen(false);
                  }}
                  sx={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'right',
                    py: 1.5,
                    px: 2,
                    fontSize: '1rem',
                    borderRadius: 2,
                    bgcolor: language === "ar" ? '#594534' : 'transparent',
                    color: language === "ar" ? 'white' : '#594534',
                    '&:hover': {
                      bgcolor: language === "ar" ? '#594534' : 'white',
                    },
                    textTransform: 'none',
                  }}
                >
                  العربية
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Drawer>
    </>
  );
}
