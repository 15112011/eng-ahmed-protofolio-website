"use client";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";
import ar from "../locales/ar.json";
import en from "../locales/en.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../hooks/useLanguage";
import { processSiteData } from "../data/siteDataProcessor";
export default function Experience() {
  const { language } = useLanguage();
  const t = language === "ar" ? ar : en;
  const { experience } = processSiteData(language);

  const stats = experience.stats;

  const [titlePart, subPart] = experience.titleSub.split("||");

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        py: { xs: 5, sm: 7, md: 10 },
        px: { xs: 2, sm: 3, md: 5 },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
          gap: { xs: 3, sm: 4, lg: 6 },
          alignItems: "center",
          direction: language === "ar" ? "rtl" : "ltr",
          textAlign: language === "ar" ? "right" : "left",
        }}
      >
        {/* 🎥 الصورة / الفيديو */}
        <Box
          sx={{
            order: { xs: 1, lg: 2 }, // الفيديو يظهر أولًا في xsm
            position: "relative",
            width: "100%",
            height: { xs: 260, sm: 400, md: 500, lg: 550 },
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 6px 25px rgba(0,0,0,0.1)",
          }}
        >
          <Image
            src="/images/viewer img.png"
            alt="المهندس أحمد المبيض"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "55px", sm: "70px", md: "80px" },
              height: { xs: "55px", sm: "70px", md: "80px" },
              bgcolor: "rgba(255,255,255,0.95)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}
          >
            <Box
              component="svg"
              sx={{
                width: { xs: "20px", sm: "26px" },
                height: { xs: "20px", sm: "26px" },
                ml: "3px",
                color: "#594534",
              }}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </Box>
          </Box>
        </Box>

        {/* 🟤 النصوص */}
        <Box
          sx={{
            order: { xs: 2, lg: 1 },
            display: "flex",
            flexDirection: "column",
            gap: { xs: 1.8, sm: 2.5, md: 3 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
              fontWeight: 700,
              lineHeight: 1.4,
              fontFamily: "var(--font-cairo)",
            }}
          >
            <Box component="span" sx={{ color: "#594534" }}>
              {titlePart}
            </Box>{" "}
            <Box component="span" sx={{ color: "#A4978d" }}>
              {subPart}
            </Box>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1rem" },
              color: "rgba(89, 69, 52, 0.65)",
              lineHeight: 1.8,
            }}
          >
            {t.experience.description}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1rem" },
              color: "rgba(89, 69, 52, 0.65)",
              lineHeight: 1.8,
            }}
          >
            {t.experience.description2}
          </Typography>

          {/* 📊 الإحصائيات */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: 1, sm: 1.5 },
              pt: { xs: 1, sm: 2 },
              flexWrap: { xs: "wrap", sm: "nowrap" }, // تبقى في سطر واحد على الشاشات الأكبر
            }}
          >
            {stats.map((stat, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: "center",
                  bgcolor: "rgba(166, 143, 118, 0.16)",
                  borderRadius: "8px",
                  px: { xs: 1.2, sm: 2 },
                  py: { xs: 0.8, sm: 1.2 },
                  border: "1px solid rgba(168, 155, 143, 0.15)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  transition: "all 0.3s",
                  "&:hover": {
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                    transform: "translateY(-2px)",
                  },
                  flex: "1 1 auto",
                  minWidth: "60px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "0.7rem", sm: "0.85rem" },
                    color: "#594534",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* 🔘 الأزرار */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: language === "ar" ? "flex-end" : "flex-start",
              gap: { xs: 1.5, sm: 2 },
              pt: { xs: 1.5, sm: 2.5 },
            }}
          >
            <Button
              component={Link}
              href="/projects"
              sx={{
                bgcolor: "rgba(32, 27, 23, 0.15)",
                color: "#594534",
                px: { xs: 2.5, sm: 3 },
                py: { xs: 1, sm: 1.2 },
                borderRadius: "8px",
                border: "1px solid rgba(168, 155, 143, 0.2)",
                "&:hover": { bgcolor: "#F9F6F3", boxShadow: 2 },
                fontSize: { xs: "0.7rem", sm: "0.9rem" },
                fontWeight: 500,
                textTransform: "none",
              }}
            >
              {t.experience.watchVideo}
            </Button>

            <Button
              component={Link}
              href="/contact"
              sx={{
                bgcolor: "#594534",
                color: "white",
                px: { xs: 2.5, sm: 3 },
                py: { xs: 1, sm: 1.2 },
                borderRadius: "8px",
                "&:hover": { bgcolor: "#6d5442", boxShadow: 3 },
                fontSize: { xs: "0.7rem", sm: "0.9rem" },
                fontWeight: 500,
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: "14px" }} />
              <span>{t.experience.cta}</span>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
