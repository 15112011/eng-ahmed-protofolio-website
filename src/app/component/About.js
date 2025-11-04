"use client";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { useLanguage } from "../hooks/useLanguage";
import { processSiteData } from "../data/siteDataProcessor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
export default function About() {
  const { language } = useLanguage();
  const { about } = processSiteData(language);

  // Floating badges data
  
  return (
    <Box component="section" sx={{ width: '94%', py: { xs: 6, sm: 8, md: 12 }, position: 'relative', overflow: 'visible' }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: { xs: 4, sm: 5, lg: 8 }, alignItems: 'center' }}>
          {/* Left Side - Content */}
          <Box sx={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: { xs: 2, sm: 3 }, order: { xs: 2, lg: 1 }, zIndex: 30 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem' }, fontWeight: 700, color: '#594534', lineHeight: 1.2, fontFamily: 'var(--font-cairo)' }}>
              {about.title}
            </Typography>
            
            <Typography sx={{ fontSize: { xs: '0.8rem', sm: '1rem' }, color: 'rgba(89, 69, 52, 0.8)', lineHeight: 1.6 }}>
              {about.description}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: { xs: 1.5, sm: 2 }, justifyContent: 'flex-end', alignItems: 'center', pt: 2 }}>
              
                  <Button
                component={Link}
                href="/projects"
                sx={{
                  border: '2px solid #594534',
                  bgcolor: '#efefef',
                  color: '#594534',
                  px: { xs: 3, sm: 4 },
                  py: 1.5,
                  // borderRadius: '8px',
                  // '&:hover': { bgcolor: '#594534', color: 'white' },
                   border: '0.63px solid rgba(27, 23, 38, 0.12)',
                  borderRadius: '8px',
                    
                  transition: 'all 0.3s',
                  textAlign: 'center',
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  textTransform: 'none',
                  fontWeight: 500,
                }}
              >
                {about.viewWork}
              </Button>
              <Button
                component={Link}
                href="/contact"
                sx={{
                  bgcolor: '#594534',
                  color: 'white',
                  px: { xs: 3, sm: 4 },
                  py: 1.5,
                  borderRadius: '8px',
                  '&:hover': { bgcolor: '#6d5442' },
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  textTransform: 'none',
                  fontWeight: 500,
                }}
              >
                        <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '16px' }} />
                {/* <Box component="svg" sx={{ width: { xs: 16, sm: 20 }, height: { xs: 16, sm: 20 } }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </Box> */}
                <span>{about.cta}</span>
              </Button>
              
           
            </Box>

       
      <Box sx={{ pt: { xs: 2, sm: 3 }, textAlign: language === "ar" ? 'right' : 'left'   }}>
  {/* السطر اللي فيه تابعني + الأيقونات */}
  <Box 
    sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
      gap: { xs: 1, sm: 1.5 }
      ,display:"flex",flexDirection:language==="ar"?"row":"row-reverse",
       textAlign: language === "ar" ? 'right' : 'left' 
    }}
  >
   

    {/* الأيقونات */}
    {[
      <path key="1" d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />,
<path 
  key="5"
  d="M12.75 2C12.75 2.552 12.75 5.717 12.75 5.717C12.75 8.364 14.857 10.47 17.504 10.47C17.504 10.47 17.504 12.222 17.504 12.222C16.435 12.292 15.395 12.078 14.443 11.614V17.5C14.443 20.261 12.203 22.5 9.442 22.5C6.681 22.5 4.441 20.261 4.441 17.5C4.441 14.739 6.681 12.5 9.442 12.5C9.764 12.5 10.079 12.531 10.387 12.59V15.015C10.118 14.934 9.834 14.889 9.536 14.889C8.306 14.889 7.306 15.889 7.306 17.119C7.306 18.349 8.306 19.349 9.536 19.349C10.766 19.349 11.766 18.349 11.766 17.119V7.5H14.443V7.495C14.443 7.495 14.443 4.133 14.443 2H12.75Z"
/>,
      <path key="3" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>,
      <path key="4" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/> 
    ].map((pathContent, idx) => (
      <IconButton
        key={idx}
        href="#"
        component="a"
        sx={{
          width: { xs: 36, sm: 40 },
          height: { xs: 36, sm: 40 },
          bgcolor: '#efefef',
          color: '#594534',
          borderRadius: '8px',
          '&:hover': { bgcolor: '#6d5442', transform: 'translateY(-2px)',color:'#efefef' },
          transition: 'all 0.3s',
        }}
      >
        <Box component="svg" sx={{ width: { xs: 16, sm: 20 }, height: { xs: 16, sm: 20 } }} fill="currentColor" viewBox="0 0 24 24">
          {pathContent}
          {idx === 0 && <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />}
        </Box>
      </IconButton>
    ))}
      {/* النص */}
    <Typography 
      sx={{ 
        fontSize: { xs: '0.79rem', sm: '1rem' }, 
        color: '#594534', 
         
      }}
    >
      {about.followMe}
    </Typography>
  </Box>
</Box>


          </Box>

          {/* Right Side - Image with Floating Badges */}
          <Box sx={{ position: 'relative', order: { xs: 1, lg: 2 }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ position: 'relative', width: '100%', maxWidth: '600px', height: { xs: '500px', sm: '600px' }, overflow: 'visible' }}>
              {/* Glow Effect Behind Everything */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '95%',
                  height: '95%',
                  background: 'radial-gradient(circle, rgba(255,165,0,0.8) 0%, rgba(255,200,100,0.65) 20%, rgba(255,180,80,0.5) 40%, rgba(255,150,50,0.3) 60%, transparent 75%)',
                  filter: 'blur(70px)',
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
              />
              
              {/* Main Image */}
              <Box sx={{ position: 'relative', width: '100%', height: '100%', zIndex: 10 }}>
                <Image
                  src="/images/eng img 3.png"
                  alt="المهندس أحمد المبيض"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  priority
                />
              </Box>
              
              {/* Floating Badge - Top Left (Three Dots) */}
              <Box 
                sx={{ 
                  position: 'absolute', 
                  top: '10%', 
                  left: '5%', 
                  bgcolor: 'white', 
                  px: 5.2, 
                  py: 1.5, 
                    borderTopLeftRadius: '25px',
    borderTopRightRadius: '25px',
    borderBottomRightRadius: '25px',
    borderBottomLeftRadius: '0px', // هنا منعنا التقوس
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)', 
                  zIndex: 20,
                  animation: 'float 3s ease-in-out infinite',
                  '@keyframes float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' }
                  }
                }}
              >
                <Typography sx={{ fontSize: '1.5rem', color: '#594534', letterSpacing: '4px' }}>•••</Typography>
              </Box>
              
              {/* Floating Badge - Top Right (Shield) */}
            <Box
  sx={{
    position: 'absolute',
    top: '15%',
    right: '8%',
    width: 95,     // حجم الدائرة الكبيرة
    height: 95,
    borderRadius: '50%',
    backgroundColor: 'rgba(0,0,0,0.17)', // دايرة خلفية شفافه
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20,
    animation: 'float 3.5s ease-in-out infinite',
  }}
>
  {/* الدائرة الصغيرة الأمامية */}
  <Box
    sx={{
      width: 70,      // أصغر
      height: 70,
      borderRadius: '50%',
      backgroundColor: 'white',  // دايرة صلبة
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Typography sx={{ fontSize: '1.5rem' }}>🛡️</Typography>
  </Box>
</Box>

              {/* Floating Badge - Middle Left (Sustainable Solutions) */}
              <Box 
                sx={{ 
                  position: 'absolute', 
                  top: '50%', 
                  left: '0%', 
                  bgcolor: 'white', 
                  px: 2.5, 
                  py: 1.5, 
                  borderTopLeftRadius: '25px',
    borderTopRightRadius: '25px',
    borderBottomRightRadius: '0px',
    borderBottomLeftRadius: '25px', // هنا منعنا التقوس
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)', 
                  zIndex: 20,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  animation: 'float 4s ease-in-out infinite',
                }}
              >
                <Typography sx={{ fontSize: '1rem', fontWeight: 500, color: '#594534' }}>{about.badges[0]}</Typography>
                              </Box>
              
              {/* Floating Badge - Bottom Right (Unlimited Innovation) */}
              <Box 
                sx={{ 
                  position: 'absolute', 
                  bottom: '20%', 
                  right: '5%', 
                  bgcolor: 'white', 
                  px: 2.5, 
                  py: 1.5, 
                    borderTopLeftRadius: '0px',
    borderTopRightRadius: '25px',
    borderBottomRightRadius: '25px',
    borderBottomLeftRadius: '25px', // هنا منعنا التقوس
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)', 
                  zIndex: 20,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  animation: 'float 3.2s ease-in-out infinite',
                }}
              >
                <Typography sx={{ fontSize: '1rem', fontWeight: 500, color: '#594534' }}>{about.badges[1]}</Typography>
                              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
