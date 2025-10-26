"use client";
import Image from "next/image";
import Link from "next/link";
import { Box } from "@mui/material";
import { projects } from "../data/projects";

export default function Gallery() {
  return (
    <Box component="section" sx={{ width: '100%', bgcolor: 'white', py: 8, overflow: 'hidden' }}>
      <Box sx={{ mx: 'auto', px: { xs: 2, md: 8 } }}>

        {/* 🔹 السكشن الأول */}
        <Box sx={{ display: 'grid', gap: 2, mb: 6 }}>
          {/* نسخة الشاشات الكبيرة */}
          <Box sx={{ display: { xs: 'none', lg: 'grid' }, gridTemplateColumns: '1fr 1.8fr 1fr', gap: 2, height: '80vh' }}>
            {/* العمود الأول */}
            <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 4 }}>
              <Link href={`/projects/${projects[1].id}`}>
                <Image
                  src={projects[1].mainImage}
                  alt={projects[1].name}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '16px', transition: 'transform 0.5s', cursor: 'pointer' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </Link>
            </Box>

            {/* العمود الأوسط الطويل */}
            <Box sx={{ position: 'relative', overflow: 'hidden', gridRow: 'span 2', borderRadius: 4 }}>
              <Link href={`/projects/${projects[5].id}`}>
                <Image
                  src={projects[5].mainImage}
                  alt={projects[5].name}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '16px', transition: 'transform 0.5s', cursor: 'pointer' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </Link>
            </Box>

            {/* العمود الثالث */}
            <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 4 }}>
              <Link href={`/projects/${projects[2].id}`}>
                <Image
                  src={projects[2].mainImage}
                  alt={projects[2].name}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '16px', transition: 'transform 0.5s', cursor: 'pointer' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </Link>
            </Box>

            {/* الصف الثاني */}
            <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 4 }}>
              <Link href={`/projects/${projects[3].id}`}>
                <Image
                  src={projects[3].mainImage}
                  alt={projects[3].name}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '16px', transition: 'transform 0.5s', cursor: 'pointer' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </Link>
            </Box>

            <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 4 }}>
              <Link href={`/projects/${projects[4].id}`}>
                <Image
                  src={projects[4].mainImage}
                  alt={projects[4].name}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '16px', transition: 'transform 0.5s', cursor: 'pointer' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </Link>
            </Box>
          </Box>

          {/* نسخة الشاشات المتوسطة وتحت */}
          <Box sx={{ display: { xs: 'grid', lg: 'none' }, gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            {/* الصف الأول */}
            <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 4, height: { xs: '35vh', sm: '40vh' } }}>
              <Link href={`/projects/${projects[1].id}`}>
                <Image
                  src={projects[1].mainImage}
                  alt={projects[1].name}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '16px' }}
                />
              </Link>
            </Box>
            <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 4, height: { xs: '35vh', sm: '40vh' } }}>
              <Link href={`/projects/${projects[2].id}`}>
                <Image
                  src={projects[2].mainImage}
                  alt={projects[2].name}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '16px' }}
                />
              </Link>
            </Box>

            {/* الصورة الكبيرة في النص */}
            <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 4, height: { xs: '50vh', sm: '78vh', lg: '90vh' }, gridColumn: 'span 2' }}>
              <Link href={`/projects/${projects[5].id}`}>
                <Image
                  src={projects[5].mainImage}
                  alt={projects[5].name}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '16px' }}
                />
              </Link>
            </Box>

            {/* الصف الأخير */}
            <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 4, height: { xs: '35vh', sm: '40vh' } }}>
              <Link href={`/projects/${projects[3].id}`}>
                <Image
                  src={projects[3].mainImage}
                  alt={projects[3].name}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '16px' }}
                />
              </Link>
            </Box>
            <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 4, height: { xs: '35vh', sm: '40vh' } }}>
              <Link href={`/projects/${projects[4].id}`}>
                <Image
                  src={projects[4].mainImage}
                  alt={projects[4].name}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '16px' }}
                />
              </Link>
            </Box>
          </Box>
        </Box>

        {/* 🔹 السكشن الثاني */}
        <Box sx={{ position: 'relative', overflow: 'hidden', width: '100%', mb: 6, borderRadius: 4, height: { xs: '29vh', sm: '35vh', md: '40vh', lg: '60vh' } }}>
          <Link href={`/projects/${projects[0].id}`}>
            <Image
              src={projects[0].mainImage}
              alt={projects[0].name}
              fill
              style={{ objectFit: 'cover', borderRadius: '16px', transition: 'transform 0.5s', cursor: 'pointer' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </Link>
        </Box>

        {/* 🔹 السكشن التالت — ثابت 3 أعمدة في كل المقاسات */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 2,
            mb: 6,
            height: 'auto',
          }}
        >
          {projects.slice(6, 9).map((project) => (
            <Box
              key={project.id}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 4,
                minHeight: { xs: '200px', sm: '250px', md: '450px', lg: '580px' },
              }}
            >
              <Link href={`/projects/${project.id}`}>
                <Image
                  src={project.mainImage}
                  alt={project.name}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '16px', transition: 'transform 0.5s', cursor: 'pointer' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </Link>
            </Box>
          ))}
        </Box>

      </Box>
    </Box>
  );
}
