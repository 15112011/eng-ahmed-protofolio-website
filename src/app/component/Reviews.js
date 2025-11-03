"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";
import { useLanguage } from "../hooks/useLanguage";
import ar from "../locales/ar.json";
import en from "../locales/en.json";
import { reviews as reviewsData } from "../data/content";

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const { language } = useLanguage();
  const t = language === "ar" ? ar : en;
  const reviews = reviewsData[language] || reviewsData.ar;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleReviews = isMobile ? 1 : 3;
  const maxSlide = reviews.length - visibleReviews;

  const handlePrev = () => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : maxSlide));
  const handleNext = () => setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : 0));

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const glowGradients = [
    "linear-gradient(135deg, #44FF9A 0%, #44B0FF 23%, #8B44FF 49%, #FF6644 74%, #EBFF70 100%)",
    "linear-gradient(225deg, #44FF9A 0%, #44B0FF 23%, #8B44FF 49%, #FF6644 74%, #EBFF70 100%)",
    "linear-gradient(315deg, #44FF9A 0%, #44B0FF 23%, #8B44FF 49%, #FF6644 74%, #EBFF70 100%)",
    "linear-gradient(45deg, #44FF9A 0%, #44B0FF 23%, #8B44FF 49%, #FF6644 74%, #EBFF70 100%)",
  ];

  return (
    <Box component="section" sx={{ width: "100%", py: { xs: 6, sm: 8, md: 10 }, position: "relative", overflow: "hidden" ,background:"#FAFAFA"}}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 2, sm: 3 } }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" }, color: "rgba(89, 69, 52, 0.7)", mb: 1 }}>
            {t.reviews.subtitle}
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.875rem", sm: "2.25rem", md: "2.5rem" }, fontWeight: 700, color: "#594534", mb: { xs: 3, sm: 4 }, fontFamily: "var(--font-cairo)" }}>
            {t.reviews.title}
          </Typography>
          {/* CTA Button */}
          <Button
            component={Link}
            href="/contact"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              bgcolor: "#594534",
              color: "white",
              px: { xs: 3.5, sm: 4.5 },
              py: { xs: 1.25, sm: 1.5 },
              borderRadius: "8px",
              "&:hover": { bgcolor: "#6d5442", boxShadow: 3 },
              transition: "all 0.3s",
              mb: { xs: 4, sm: 5, md: 6 },
              fontSize: { xs: "0.875rem", sm: "1rem" },
              textTransform: "none",
              fontWeight: 500,
            }}
          >
            <Box component="svg" sx={{ width: { xs: 16, sm: 20 }, height: { xs: 16, sm: 20 } }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </Box>
            <span>{t.reviews.cta}</span>
          </Button>
        </Box>

        {/* Reviews Carousel */}
        <Box sx={{ position: "relative", py: 4 }}>
          {/* Gradient Background Behind Cards */}
          <Box sx={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: { xs: "120%", md: "110%" }, height: { xs: "120%", md: "110%" }, borderRadius: "20px", zIndex: 0, pointerEvents: "none" }} />

          {/* Arrows for large screens */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
              display: { xs: "none", md: "flex" },
              gap: 1.5,
              zIndex: 10,
            }}
          >
            {/* Previous */}
            <Box
              component="button"
              onClick={handlePrev}
              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                bgcolor: "#e9e8e7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                border: "none",
                "&:hover": { transform: "scale(1.1)", boxShadow: "0 4px 12px rgba(255, 215, 0, 0.4)" },
              }}
            >
              <Box component="svg" sx={{ width: 24, height: 24, color: "#dfa40b" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </Box>
            </Box>

            {/* Next */}
            <Box
              component="button"
              onClick={handleNext}
              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                bgcolor: "#403730",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                border: "none",
                "&:hover": { transform: "scale(1.1)", boxShadow: "0 4px 12px rgba(255, 215, 0, 0.4)" },
              }}
            >
              <Box component="svg" sx={{ width: 24, height: 24, color: "#dfa40b" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </Box>
            </Box>
          </Box>

          <Box 
            sx={{ overflow: "visible", }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <Box sx={{ display: "flex", transition: "transform 0.5s ease-in-out", gap: { xs: 2, md: 3 }, transform: isMobile ? `translateX(calc(${currentSlide * -100}% - ${currentSlide * 16}px))` : `translateX(${currentSlide * -33.33}%)` }}>
              {reviews.map((review, index) => (
                <Box key={review.id} sx={{ flexShrink: 0, width: { xs: "100%", md: "calc(33.333% - 16px)" }, position: "relative", zIndex: 1 }}>
                  {/* Gradient Glow */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: "-20px",
                      width: "calc(100% + 40px)",
                      height: "calc(100% + 40px)",
                      borderRadius: "16px",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.06)",
                      background: glowGradients[index % glowGradients.length],
                      filter: "blur(40px)",
                      opacity: 0.2,
                      zIndex: -1,
                      pointerEvents: "none",
                    }}
                  />

                  {/* White Card Content */}
                  <Box
                    sx={{
                      position: "relative",
                      bgcolor: "white",
                      borderRadius: 0,
                      p: { xs: 3, sm: 3.5, md: 4 },
            
                      transition: "box-shadow 0.3s",
                      minHeight: { xs: "280px", sm: "320px", md: "340px" },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      zIndex: 1,
                    }}
                  >
                    {/* Stars */}
                    <Box sx={{ display: "flex", gap: 0.5, mb: { xs: 2.5, sm: 3 }, justifyContent: language === "ar" ? "flex-end" : "flex-start" }}>
                      {[...Array(review.rating)].map((_, i) => (
                        <Box key={i} component="svg" sx={{ width: { xs: 18, sm: 20 }, height: { xs: 18, sm: 20 }, color: "#FFB800" }} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </Box>
                      ))}
                    </Box>

                    {/* Review Text */}
                    <Typography sx={{ color: "#594534", fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" }, lineHeight: 1.7, mb: { xs: 3, sm: 4 }, textAlign: language === "ar" ? "right" : "left", flex: 1, display: "flex", alignItems: "center" }}>
                      &ldquo;{review.text}&rdquo;
                    </Typography>

                    {/* Author Info */}
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: language === "ar" ? "flex-end" : "flex-start", pt: { xs: 2, sm: 2.5 }, gap: 2 }}>
                      <Box sx={{ textAlign: language === "ar" ? "right" : "left" }}>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: "#594534", fontSize: { xs: "0.95rem", sm: "1rem" }, fontFamily: "var(--font-cairo)" }}>
                          {review.name}
                        </Typography>
                        <Typography sx={{ fontSize: { xs: "0.75rem", sm: "0.8rem" }, color: "rgba(89, 69, 52, 0.65)" }}>{review.location}</Typography>
                      </Box>
                      <Box sx={{ width: { xs: 44, sm: 48 }, height: { xs: 44, sm: 48 }, borderRadius: "50%", bgcolor: "#D32F2F", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", flexShrink: 0 }}>
                        <Box component="svg" sx={{ width: { xs: 22, sm: 24 }, height: { xs: 22, sm: 24 }, color: "white" }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Dots Indicator */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5, mt: { xs: 7, sm: 8 } }}>
          {[...Array(maxSlide + 1)].map((_, index) => (
            <Box
              key={index}
              component="button"
              onClick={() => setCurrentSlide(index)}
              sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: currentSlide === index ? "#594534" : "rgba(89, 69, 52, 0.25)", border: "none", cursor: "pointer", transition: "all 0.3s", "&:hover": { bgcolor: "#594534" }, p: 0 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
