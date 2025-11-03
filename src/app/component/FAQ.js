"use client";
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Collapse,
  TextField,
  InputAdornment,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { faqs } from "../data/content";
import { useLanguage } from "../hooks/useLanguage";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function FAQ() {
  const { language } = useLanguage();
  const faqSections = faqs[language]?.[0] || faqs.ar[0];

  const [currentSection, setCurrentSection] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState(language === "ar" ? "الكل" : "All");
  const [anchorEl, setAnchorEl] = useState(null); // 👈 لإدارة القائمة

  const isArabic = language === "ar";

  const categories = isArabic
    ? ["الكل", "التحليل والمراحل", "التصميم والتعديلات", "الأسعار والدفع", "الحجز والتواصل"]
    : ["All", "Analysis & Phases", "Design & Modifications", "Pricing & Payment", "Booking & Communication"];

  // ✅ جمع كل السكاشن
  const allFaqs = [...faqSections.sec1, ...faqSections.sec2, ...faqSections.sec3];

  const filteredFaqs = allFaqs.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "الكل" || filter === "All" || faq.category === filter;
    return matchesSearch && matchesFilter;
  });

  const sectionFaqs = Object.values(faqSections)[currentSection] || [];

  const displayedFaqs =
    searchTerm || (filter !== "الكل" && filter !== "All") ? filteredFaqs : sectionFaqs;

  const toggleFaq = (id) => setOpenFaq(openFaq === id ? null : id);

  // ✅ دوال القائمة المنسدلة
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleFilterSelect = (cat) => {
    setFilter(cat);
    handleMenuClose();
  };

  return (
    <Box
      component="section"
      sx={{
        width: "90%",
        marginX: "auto",
        bgcolor: "white",
        py: { xs: 6, sm: 8, md: 10 },
        color: "#594534",
        direction: isArabic ? "rtl" : "ltr",
      }}
    >
      <Box sx={{ maxWidth: "64rem", mx: "auto", px: { xs: 2, sm: 3 } }}>
        {/* 🔍 شريط البحث والفلترة */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            justifyContent: isArabic ? "flex-end" : "flex-start",
            gap: 1.5,
            mb: 5,
          }}
        >
          {/* 🧭 زر التصفية */}
          <Button
            variant="contained"
            onClick={handleMenuOpen}
            sx={{
              bgcolor: "#594534",
              color: "#fff",
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: 500,
              fontSize: "15px",
              px: 2.5,
              py: 1,
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": {
                bgcolor: "#4a3829",
              },
            }}
          >
            <ArrowDropDownIcon
              sx={{
                fontSize: 22,
                transition: "transform 0.2s",
                transform: Boolean(anchorEl) ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
            <Typography sx={{ fontSize: "15px", fontWeight: 500 }}>
              {isArabic ? "تصفية" : "Filter"}
            </Typography>
            <FilterAltOutlinedIcon sx={{ fontSize: 20 }} />
          </Button>

          {/* قائمة الفلاتر */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            {categories.map((cat) => (
              <MenuItem
                key={cat}
                onClick={() => handleFilterSelect(cat)}
                selected={filter === cat}
                sx={{
                  color: "#594534",
                  fontWeight: filter === cat ? "bold" : "normal",
                }}
              >
                {cat}
              </MenuItem>
            ))}
          </Menu>

          {/* 🔍 بحث */}
          <TextField
            variant="outlined"
            placeholder={isArabic ? "بحث" : "Search"}
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              bgcolor: "#fff",
              borderRadius: "30px",
              width: 250,
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                "& fieldset": { borderColor: "#d5c9be" },
                "&:hover fieldset": { borderColor: "#b89c84" },
                "&.Mui-focused fieldset": {
                  borderColor: "#b89c84",
                  borderWidth: "2px",
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search sx={{ color: "#594534" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* 💬 الأسئلة */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          {displayedFaqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <Box
                key={`${faq.id}-${faq.question}`}
                sx={{
                  borderBottom: "1px solid #e0d7ce",
                  pb: { xs: 1.5, sm: 2 },
                }}
              >
                <Button
                  onClick={() => toggleFaq(faq.id)}
                  sx={{
                    width: "100%",
                    textAlign: isArabic ? "right" : "left",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: "#594534",
                    textTransform: "none",
                    "&:hover": { color: "#8b735a" },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.125rem" },
                      fontWeight: 500,
                      lineHeight: 1.6,
                      flex: 1,
                      textAlign: isArabic ? "right" : "left",
                    }}
                  >
                    {faq.question}
                  </Typography>

                  <Box
                    component="svg"
                    sx={{
                      width: { xs: 20, sm: 24 },
                      height: { xs: 20, sm: 24 },
                      color: "#594534",
                      transition: "transform 0.3s",
                      transform: isOpen ? "rotate(180deg)" : "none",
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </Box>
                </Button>

                <Collapse in={isOpen} timeout={400}>
                  <Typography
                    sx={{
                      mt: 1.5,
                      color: "rgba(89, 69, 52, 0.7)",
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      lineHeight: 1.6,
                      textAlign: isArabic ? "right" : "left",
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </Collapse>
              </Box>
            );
          })}
        </Box>

        {/* ⚪ السلايدر */}
        {!searchTerm && (filter === "الكل" || filter === "All") && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 6,
              gap: 1.5,
            }}
          >
            {[0, 1, 2].map((index) => (
              <IconButton
                key={index}
                onClick={() => setCurrentSection(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  bgcolor: currentSection === index ? "#8b735a" : "#d5c9be",
                  transition: "all 0.3s",
                  "&:hover": {
                    bgcolor: "#b89c84",
                  },
                }}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
