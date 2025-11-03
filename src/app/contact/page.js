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
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box component="main" sx={{ minHeight: "100vh", bgcolor: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "center",
          maxWidth: { xs: "100%", lg: "1100px" },
          width: "100%",
          mx: "auto",
          py: { xs: 6, lg: 12 },
          px: { xs: 2, md: 4 },
        }}
      >
        {/* 🎥 الفيديو */}
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", lg: "750px" },
            height: { xs: 420, lg: 690 },
            borderRadius: 3,
            overflow: "hidden",
            bgcolor: "black",
            zIndex: 1,
            marginBottom: { xs: 5, lg: 0 },
            marginLeft: { lg: "-220px" },
          }}
        >
          <Image
            src="/images/viewer img.png"
            alt="المهندس أحمد المبيض"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          {/* ▶️ زر التشغيل */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              sx={{
                width: 80,
                height: 80,
                bgcolor: "orange",
                "&:hover": { bgcolor: "#f97316" },
                transition: "all 0.3s",
              }}
            >
              <Box
                component="svg"
                sx={{ width: 40, height: 40, color: "white", ml: 0.5 }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </Box>
            </IconButton>
          </Box>
        </Box>

        {/* 📝 الفورم */}
        <Box
          sx={{
            position: { xs: "relative", lg: "absolute" },
            right: { lg: "1%" },
            top: { lg: "50%" },
            transform: { lg: "translateY(-50%)" },
            width: { xs: "100%", lg: 440 },
            bgcolor: "white",
            borderRadius: 4,
            p: { xs: 4, md: 5 },
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
            border: "1px solid #eee",
            zIndex: 2,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              fontWeight: 700,
              color: "#594534",
              mb: 1.5,
              textAlign: "right",
              fontFamily: "var(--font-cairo)",
            }}
          >
            {t.contactPage.title}
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              color: "#594534",
              mb: 2,
              textAlign: "right",
              fontFamily: "var(--font-cairo)",
            }}
          >
            {t.contactPage.subtitle}
          </Typography>

          <Typography
            sx={{
              fontSize: "0.9rem",
              color: "rgba(89, 69, 52, 0.6)",
              mb: 3,
              textAlign: "right",
            }}
          >
            {t.contactPage.services}
          </Typography>

          {/* 🧾 الفورم الداخلي */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            {/* الاسم */}
            <Box>
              <Typography
                sx={{
                  textAlign: "right",
                  fontSize: "0.875rem",
                  color: "rgba(89, 69, 52, 0.7)",
                  mb: 1,
                }}
              >
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
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "grey.50",
                    borderRadius: 2,
                    "& input": { textAlign: "right", py: 1.5 },
                    "& fieldset": { borderColor: "grey.200" },
                    "&:hover fieldset": { borderColor: "#594534" },
                    "&.Mui-focused fieldset": {
                      borderColor: "#594534",
                      borderWidth: 2,
                    },
                  },
                }}
              />
            </Box>

            {/* الهاتف */}
            <Box>
              <Typography
                sx={{
                  textAlign: "right",
                  fontSize: "0.875rem",
                  color: "rgba(89, 69, 52, 0.7)",
                  mb: 1,
                }}
              >
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
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "grey.50",
                    borderRadius: 2,
                    "& input": { textAlign: "right", py: 1.5 },
                    "& fieldset": { borderColor: "grey.200" },
                    "&:hover fieldset": { borderColor: "#594534" },
                    "&.Mui-focused fieldset": {
                      borderColor: "#594534",
                      borderWidth: 2,
                    },
                  },
                }}
              />
            </Box>

            {/* البريد */}
            <Box>
              <Typography
                sx={{
                  textAlign: "right",
                  fontSize: "0.875rem",
                  color: "rgba(89, 69, 52, 0.7)",
                  mb: 1,
                }}
              >
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
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "grey.50",
                    borderRadius: 2,
                    "& input": { textAlign: "right", py: 1.5 },
                    "& fieldset": { borderColor: "grey.200" },
                    "&:hover fieldset": { borderColor: "#594534" },
                    "&.Mui-focused fieldset": {
                      borderColor: "#594534",
                      borderWidth: 2,
                    },
                  },
                }}
              />
            </Box>

            {/* زر الحجز */}
            <Button
              type="submit"
              sx={{
                bgcolor: "#594534",
                color: "white",
                py: 1.8,
                borderRadius: 2,
                "&:hover": { bgcolor: "#6d5442" },
                transition: "all 0.3s",
                fontWeight: 500,
                textTransform: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1.2,
                fontSize: "1rem",
              }}
            >
              <span>{t.contactPage.submit}</span>
            </Button>

            {/* الملاحظة */}
            <Typography
              sx={{
                fontSize: "0.75rem",
                color: "rgba(89, 69, 52, 0.6)",
                textAlign: "center",
                lineHeight: 1.6,
              }}
            >
              {t.contactPage.privacy}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
