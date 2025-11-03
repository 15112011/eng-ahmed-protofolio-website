"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography, Breadcrumbs } from "@mui/material";
import { useLanguage } from "@/app/hooks/useLanguage";
import { projects as projectsAr } from "../../data/projects";
import { projects as projectsEn } from "../../data/projectsENG";

export default function ProjectDetails() {
  const { language } = useLanguage();
  const projects = language === "ar" ? projectsAr : projectsEn;
  const params = useParams();
  const project = projects.find((p) => p.id.toString() === params.id);

  if (!project)
    return (
      <Typography sx={{ textAlign: 'center', mt: 8 }}>
        {language === "ar" ? "المشروع غير موجود" : "Project not found"}
      </Typography>
    );

  return (
    <Box sx={{ mx: 'auto', py: 8, px: { xs: 4, md: 8, '2xl': 20 } }} dir={language === "ar" ? "rtl" : "ltr"}>
      {/* 🔹 Breadcrumb */}
      <Box sx={{ width: '100%', py: 2, borderRadius: 3, mb: 4, background: 'linear-gradient(to right, white, rgba(233, 223, 213, 0.07))' }}>
        <Breadcrumbs 
          separator={<Typography sx={{ color: 'grey.400' }}>/</Typography>}
          sx={{ 
            fontSize: '0.875rem',
            textAlign: language === "ar" ? "right" : "left",
            direction: language === "ar" ? "rtl" : "ltr"
          }}
        >
          <Link href="/" style={{ color: '#A4978D', textDecoration: 'none' }}>
            {language === "ar" ? "الرئيسية" : "Home"}
          </Link>
          <Link href="/projects" style={{ color: '#A4978D', textDecoration: 'none' }}>
            {language === "ar" ? "المشاريع" : "Projects"}
          </Link>
          <Typography sx={{ fontWeight: 600, color: 'primary.main' }}>{project.category}</Typography>
        </Breadcrumbs>
      </Box>

      {/* 🔹 العنوان */}
      <Typography 
        variant="h1" 
        sx={{ 
          fontSize: '1.875rem', 
          fontWeight: 700, 
          mb: 4, 
          color: 'primary.main',
          textAlign: language === "ar" ? "right" : "left"
        }}
      >
        {project.name}
      </Typography>

      {/* 🔹 تفاصيل المشروع */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 4, width: { xs: '80vw', md: '150vw' } }}>
        <Box sx={{ order: { xs: 2, md: 1 }, gridColumn: { xs: 'span 1', md: 'span 1' } }}>
          <Box
            sx={{
              borderRadius: 3,
              boxShadow: 2,
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              textAlign: language === "ar" ? "right" : "left",
              background: "linear-gradient(133.84deg, #FFFFFF 6.49%, rgba(233, 223, 213, 0.12) 97.11%)"
            }}
          >
            <Typography sx={{ color: 'secondary.main' }}>
              <Box component="span" sx={{ fontWeight: 600, color: 'primary.main' }}>
                {language === "ar" ? "الاسم:" : "Name:"}
              </Box> {project.name}
            </Typography>
            <Typography sx={{ color: 'secondary.main' }}>
              <Box component="span" sx={{ fontWeight: 600, color: 'primary.main' }}>
                {language === "ar" ? "وصف المشروع:" : "Description:"}
              </Box> {project.description}
            </Typography>
            <Typography sx={{ color: 'secondary.main' }}>
              <Box component="span" sx={{ fontWeight: 600, color: 'primary.main' }}>
                {language === "ar" ? "الموقع:" : "Location:"}
              </Box> {project.location}
            </Typography>
            <Typography sx={{ color: 'secondary.main' }}>
              <Box component="span" sx={{ fontWeight: 600, color: 'primary.main' }}>
                {language === "ar" ? "تاريخ التنفيذ:" : "Date:"}
              </Box> {project.date}
            </Typography>
            <Typography sx={{ color: 'secondary.main' }}>
              <Box component="span" sx={{ fontWeight: 600, color: 'primary.main' }}>
                {language === "ar" ? "حالة المشروع:" : "Status:"}
              </Box> {project.status}
            </Typography>
            <Typography sx={{ color: 'secondary.main' }}>
              <Box component="span" sx={{ fontWeight: 600, color: 'primary.main' }}>
                {language === "ar" ? "فئة المشروع:" : "Category:"}
              </Box> {project.category}
            </Typography>
          </Box>
        </Box>
      </Box>


      {/* 🔹 صور المشروع - Desktop */}
      <Box sx={{ display: { xs: 'none', md: 'grid' }, gridTemplateColumns: '1fr 1fr 1fr', gap: 2, mt: 5, height: '900px' }}>
        <Box sx={{ position: 'relative', height: { md: '68%', xl: '79%' }, borderRadius: 4, overflow: 'hidden', boxShadow: 2 }}>
          <Image src={project.images[0]} alt="صورة 1" fill style={{ objectFit: 'cover' }} />
        </Box>
        <Box sx={{ position: 'relative', height: { md: '110%', xl: '117%' }, borderRadius: 4, overflow: 'hidden', boxShadow: 2 }}>
          <Image src={project.images[1]} alt="صورة 2" fill style={{ objectFit: 'cover' }} />
        </Box>
        <Box sx={{ position: 'relative', height: { md: '92%', '2xl': '96%' }, borderRadius: 4, overflow: 'hidden', boxShadow: 2 }}>
          <Image src={project.images[2]} alt="صورة 3" fill style={{ objectFit: 'cover' }} />
        </Box>
        <Box sx={{ position: 'relative', height: { md: '111%', xl: '114%' }, borderRadius: 4, overflow: 'hidden', boxShadow: 2, bottom: { md: '8.5rem', xl: '5rem' } }}>
          <Image src={project.images[3]} alt="صورة 4" fill style={{ objectFit: 'cover' }} />
        </Box>
        <Box sx={{ position: 'relative', height: { md: '68%', xl: '75%' }, borderRadius: 4, overflow: 'hidden', boxShadow: 2, top: { md: '3.5rem', xl: '5.7rem' } }}>
          <Image src={project.images[4]} alt="صورة 5" fill style={{ objectFit: 'cover' }} />
        </Box>
        <Box sx={{ position: 'relative', height: { md: '90%', xl: '97%' }, borderRadius: 4, overflow: 'hidden', boxShadow: 2, bottom: { md: '2.5rem', xl: 0 } }}>
          <Image src={project.images[5]} alt="صورة 6" fill style={{ objectFit: 'cover' }} />
        </Box>
      </Box>

      {/* 🔹 صور المشروع - Mobile */}
      <Box sx={{ display: { xs: 'grid', md: 'none' }, gridTemplateColumns: '1fr', gap: 2, mt: 5 }}>
        {project.images.map((img, index) => (
          <Box 
            key={index} 
            sx={{ 
              position: 'relative', 
              height: '80vw', 
              borderRadius: 4, 
              overflow: 'hidden', 
              boxShadow: 2,
              '&:hover img': {
                transform: 'scale(1.05)',
              }
            }}
          >
            <Image 
              src={img} 
              alt={`صورة ${index + 1}`} 
              fill 
              style={{ 
                objectFit: 'cover', 
                transition: 'transform 0.5s'
              }} 
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
