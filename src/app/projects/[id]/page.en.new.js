"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography, Breadcrumbs } from "@mui/material";
import { projects } from "@/app/data/projectsENG";

export default function ProjectDetailsEn() {
  const params = useParams();
  const project = projects.find((p) => p.id.toString() === params.id);

  if (!project) 
    return (
      <Typography sx={{ textAlign: 'center', mt: 8 }}>
        Project not found
      </Typography>
    );

  return (
    <Box sx={{ mx: 'auto', py: 8, px: { xs: 4, md: 8, '2xl': 20 } }} dir="ltr">
      {/* 🔹 Breadcrumb */}
      <Box sx={{ width: '100%', py: 2, borderRadius: 3, mb: 4, background: 'linear-gradient(to right, white, rgba(233, 223, 213, 0.07))' }}>
        <Breadcrumbs 
          separator={<Typography sx={{ color: 'grey.400' }}>/</Typography>}
          sx={{ fontSize: '0.875rem', textAlign: 'left' }}
        >
          <Link href="/" style={{ color: '#A4978D', textDecoration: 'none' }}>
            Home
          </Link>
          <Link href="/projects" style={{ color: '#A4978D', textDecoration: 'none' }}>
            Projects
          </Link>
          <Typography sx={{ fontWeight: 600, color: 'primary.main' }}>{project.category}</Typography>
        </Breadcrumbs>
      </Box>

      {/* 🔹 Title */}
      <Typography 
        variant="h1" 
        sx={{ 
          fontSize: '1.875rem', 
          fontWeight: 700, 
          mb: 4, 
          textAlign: 'left',
          color: 'primary.main'
        }}
      >
        {project.name}
      </Typography>

      {/* 🔹 Project details */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 4, width: { xs: '80vw', md: '150vw' } }}>
        <Box sx={{ order: { xs: 2, md: 1 }, gridColumn: { xs: 'span 1', md: 'span 1' } }}>
          <Box
            sx={{
              borderRadius: 3,
              boxShadow: 2,
              p: 3,
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              background: 'linear-gradient(to right, white, rgba(233, 223, 213, 0.07))'
            }}
          >
            <Typography sx={{ color: 'secondary.main' }}>
              <Box component="span" sx={{ fontWeight: 600, color: 'primary.main' }}>Name:</Box> {project.name}
            </Typography>
            <Typography sx={{ color: 'secondary.main' }}>
              <Box component="span" sx={{ fontWeight: 600, color: 'primary.main' }}>Description:</Box> {project.description}
            </Typography>
            <Typography sx={{ color: 'secondary.main' }}>
              <Box component="span" sx={{ fontWeight: 600, color: 'primary.main' }}>Location:</Box> {project.location}
            </Typography>
            <Typography sx={{ color: 'secondary.main' }}>
              <Box component="span" sx={{ fontWeight: 600, color: 'primary.main' }}>Date:</Box> {project.date}
            </Typography>
            <Typography sx={{ color: 'secondary.main' }}>
              <Box component="span" sx={{ fontWeight: 600, color: 'primary.main' }}>Status:</Box> {project.status}
            </Typography>
            <Typography sx={{ color: 'secondary.main' }}>
              <Box component="span" sx={{ fontWeight: 600, color: 'primary.main' }}>Category:</Box> {project.category}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* 🔹 Project Images - Desktop */}
      <Box sx={{ display: { xs: 'none', md: 'grid' }, gridTemplateColumns: '1fr 1fr 1fr', gap: 2, mt: 5, height: '900px' }}>
        <Box sx={{ position: 'relative', height: { md: '68%', xl: '79%' }, borderRadius: 4, overflow: 'hidden', boxShadow: 2 }}>
          <Image src={project.images[0]} alt="Image 1" fill style={{ objectFit: 'cover' }} />
        </Box>
        <Box sx={{ position: 'relative', height: { md: '110%', xl: '117%' }, borderRadius: 4, overflow: 'hidden', boxShadow: 2 }}>
          <Image src={project.images[1]} alt="Image 2" fill style={{ objectFit: 'cover' }} />
        </Box>
        <Box sx={{ position: 'relative', height: { md: '92%', '2xl': '96%' }, borderRadius: 4, overflow: 'hidden', boxShadow: 2 }}>
          <Image src={project.images[2]} alt="Image 3" fill style={{ objectFit: 'cover' }} />
        </Box>
        <Box sx={{ position: 'relative', height: { md: '111%', xl: '114%' }, borderRadius: 4, overflow: 'hidden', boxShadow: 2, bottom: { md: '8.5rem', xl: '5rem' } }}>
          <Image src={project.images[3]} alt="Image 4" fill style={{ objectFit: 'cover' }} />
        </Box>
        <Box sx={{ position: 'relative', height: { md: '68%', xl: '75%' }, borderRadius: 4, overflow: 'hidden', boxShadow: 2, top: { md: '3.5rem', xl: '5.7rem' } }}>
          <Image src={project.images[4]} alt="Image 5" fill style={{ objectFit: 'cover' }} />
        </Box>
        <Box sx={{ position: 'relative', height: { md: '90%', xl: '97%' }, borderRadius: 4, overflow: 'hidden', boxShadow: 2, bottom: { md: '2.5rem', xl: 0 } }}>
          <Image src={project.images[5]} alt="Image 6" fill style={{ objectFit: 'cover' }} />
        </Box>
      </Box>

      {/* 🔹 Project Images - Mobile */}
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
              alt={`Image ${index + 1}`} 
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
