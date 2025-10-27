"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useRef } from "react"
import { Box, Typography } from "@mui/material"
import { useLanguage } from "../hooks/useLanguage"
import ar from "../locales/ar.json"
import en from "../locales/en.json"

export default function Hero() {
  const [hoverState, setHoverState] = useState("default") // "default", "right", "left"
  const [revealPercentage, setRevealPercentage] = useState(60) // Default 60% for grayscale split
  const heroRef = useRef(null)
  const { language } = useLanguage()
  const t = language === "ar" ? ar : en

  const handleMouseMove = (e) => {
    if (!heroRef.current) return
    
    const rect = heroRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    
    // Clamp between 0 and 100
    const clampedPercentage = Math.max(0, Math.min(100, percentage))
    setRevealPercentage(clampedPercentage)
  }

  const handleMouseLeave = () => {
    // Reset to default 60% when mouse leaves
    setRevealPercentage(60)
  }

  return (
    <Box component="section" sx={{ position: 'relative', width: '100%', height: { xs: 'auto', md: '100vh' }, overflow: 'hidden' }}>
      {/* Background Image - Zoomed Out */}
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/images/0a76d4007f8cc7694c998df6b10dfe65cd978952.jpg"
          alt="Background"
          fill
          style={{ objectFit: 'cover', transform: 'scale(2)' }}
          priority
        />
        {/* Overlay */}
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(255, 255, 255, 0.7)' }} />
      </Box>

      <Box sx={{ position: 'relative', height: { xs: 'auto', md: '100%' }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center' }}>
        {/* Mobile Layout - Enhanced with gradient background */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, position: 'relative', width: '100%', alignItems: 'center', justifyContent: 'center', py: { xs: 6, sm: 8 } }}>
          {/* Gradient Background Overlay */}
          <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.4), transparent)', zIndex: 0 }} />
          
          {/* Compact Image - Mobile */}
          <Box sx={{ position: 'relative', width: { xs: '280px', sm: '400px' }, height: { xs: '280px', sm: '400px' }, zIndex: 10 }}>
            <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src="/images/eng img no bg.png"
                alt="المهندس أحمد المبيض"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center', filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))' }}
                priority
              />
              {/* Mobile - Static 60/40 split with smooth transition */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  transition: 'all 0.5s',
                  clipPath: 'inset(0 40% 0 0)',
                  pointerEvents: 'none',
                }}
              >
                <Image
                  src="/images/eng img no bg.png"
                  alt="المهندس أحمد المبيض"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'center', filter: 'grayscale(100%)' }}
                  priority
                />
              </Box>
            </Box>
          </Box>

          {/* Left Title - Planner - Enhanced with background */}
          <Box
            component={Link}
            href="/contact"
            sx={{
              position: 'absolute',
              left: { xs: 8, sm: 24 },
              top: { xs: '35%', sm: '15%' },
              transform: { xs: 'translateY(-50%)', sm: 'none' },
              zIndex: 20,
              cursor: 'pointer',
              textDecoration: 'none',
              '&:hover .text-layer': { transform: 'scale(1.05)' },
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <Typography
                variant="h2"
                className="text-layer"
                sx={{
                  position: 'relative',
                  fontSize: { xs: '1.25rem', sm: '1.75rem' },
                  fontWeight: 700,
                  color: '#594534',
                  fontFamily: 'var(--font-cairo)',
                  mb: { xs: 0.5, sm: 1 },
                  transition: 'transform 0.3s',
                }}
              >
                {t.hero.planner}
              </Typography>
              <Typography
                sx={{
                  position: 'relative',
                  fontSize: { xs: '0.65rem', sm: '0.8rem' },
                  color: 'rgba(89, 69, 52, 0.65)',
                  fontFamily: 'var(--font-cairo)',
                  maxWidth: { xs: '110px', sm: '140px' },
                  lineHeight: 1.4,
                }}
              >
                {t.hero.plannerDesc}
              </Typography>
            </Box>
          </Box>

          {/* Right Title - Architect - Enhanced with background */}
          <Box
            component={Link}
            href="/contact"
            sx={{
              position: 'absolute',
              right: { xs: 8, sm: 24 },
              top: { xs: '35%', sm: '15%' },
              transform: { xs: 'translateY(-50%)', sm: 'none' },
              zIndex: 20,
              textAlign: 'right',
              cursor: 'pointer',
              textDecoration: 'none',
              '&:hover .text-layer': { transform: 'scale(1.05)' },
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <Typography
                variant="h1"
                className="text-layer"
                sx={{
                  position: 'relative',
                  fontSize: { xs: '1.25rem', sm: '1.75rem' },
                  fontWeight: 700,
                  color: '#594534',
                  fontFamily: 'var(--font-cairo)',
                  lineHeight: 1.2,
                  mb: { xs: 0.5, sm: 1 },
                  transition: 'transform 0.3s',
                  textAlign: 'right',
                }}
              >
                {language === "ar" ? (
                  <>
                    مهندس
                    <br />
                    معماري
                  </>
                ) : (
                  t.hero.architect
                )}
              </Typography>
              <Typography
                sx={{
                  position: 'relative',
                  fontSize: { xs: '0.65rem', sm: '0.8rem' },
                  color: 'rgba(89, 69, 52, 0.65)',
                  fontFamily: 'var(--font-cairo)',
                  maxWidth: { xs: '110px', sm: '140px' },
                  lineHeight: 1.4,
                  textAlign: 'right',
                }}
              >
                {t.hero.architectDesc}
              </Typography>
            </Box>
          </Box>

          {/* Mobile Floating Labels - Around shoulders */}
          <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'absolute', right: '8%', bottom: '38%', zIndex: 15 }}>
            <Typography sx={{ fontSize: '0.65rem', color: 'rgba(89, 69, 52, 0.6)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
              {t.hero.label1}
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'absolute', right: '15%', bottom: '30%', zIndex: 15 }}>
            <Typography sx={{ fontSize: '0.65rem', color: 'rgba(89, 69, 52, 0.6)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
              {t.hero.label2}
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'absolute', right: '5%', bottom: '24%', zIndex: 15 }}>
            <Typography sx={{ fontSize: '0.65rem', color: 'rgba(89, 69, 52, 0.6)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
              {t.hero.label3}
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'absolute', left: '8%', bottom: '38%', zIndex: 15 }}>
            <Typography sx={{ fontSize: '0.65rem', color: 'rgba(89, 69, 52, 0.6)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
              {t.hero.label4}
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'absolute', left: '12%', bottom: '30%', zIndex: 15 }}>
            <Typography sx={{ fontSize: '0.65rem', color: 'rgba(89, 69, 52, 0.6)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
              {t.hero.label5}
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'absolute', left: '18%', bottom: '23%', zIndex: 15 }}>
            <Typography sx={{ fontSize: '0.65rem', color: 'rgba(89, 69, 52, 0.6)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
              {t.hero.label6}
            </Typography>
          </Box>
        </Box>

        {/* Mobile Scroll Indicator */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, width: '100%', flexDirection: 'column', alignItems: 'center', py: 3, bgcolor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(4px)' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, animation: 'bounce 1s infinite' }}>
            {/* Mouse Icon */}
            <Box sx={{ width: 24, height: 40, border: '2px solid #594534', borderRadius: 25, p: 0.5, position: 'relative' }}>
              <Box sx={{ width: 4, height: 8, bgcolor: '#594534', borderRadius: 25, mx: 'auto', animation: 'scroll 1.5s ease-in-out infinite' }} />
            </Box>
            {/* Down Arrow */}
            <Box component="svg" sx={{ width: 20, height: 20, color: '#594534' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </Box>
          </Box>
        </Box>

        {/* Desktop Image - Full width with mouse tracking */}
        <Box 
          ref={heroRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          sx={{ 
            display: { xs: 'none', md: 'block' }, 
            position: 'absolute', 
            left: '50%', 
            top: '50%', 
            transform: `translate(calc(-50% + ${(revealPercentage - 50) * 0.2}px), -50%)`,
            width: '90vw', 
            height: '90vh', 
            maxWidth: '1400px', 
            zIndex: 10,
            cursor: 'default',
            transition: 'transform 0.3s ease-out',
          }}
        >
          <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
            {/* Base Image - Color */}
            <Image
              src="/images/eng img no bg.png"
              alt="المهندس أحمد المبيض"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />

            {/* Grayscale Overlay - Desktop only with mouse tracking - INVERTED */}
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                position: 'absolute',
                inset: 0,
                transition: 'clip-path 0.3s ease-out',
                clipPath: `inset(0 0 0 ${revealPercentage}%)`,
                pointerEvents: "none",
              }}
            >
              <Image
                src="/images/eng img no bg.png"
                alt="المهندس أحمد المبيض"
                fill
                style={{ objectFit: 'contain', filter: 'grayscale(100%)' }}
                priority
              />
            </Box>

          </Box>
        </Box>

        {/* Right Side - مهندس معماري */}
        <Box
          component={Link}
          href="/contact"
          sx={{
            display: { xs: 'none', md: 'flex' },
            position: 'absolute',
            right: 0,
            top: 0,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'flex-end',
            pr: { md: 8, lg: 12, xl: 16 },
            cursor: 'pointer',
            zIndex: 0,
            transition: 'all 0.5s ease-out',
            opacity: revealPercentage > 20 ? 1 : 0.2,
            width: revealPercentage > 60 ? "calc(45% + 150px)" : "calc(35% - 50px)",
            textDecoration: 'none',
            pointerEvents: revealPercentage > 20 ? 'auto' : 'none',
          }}
        >
          <Box
            sx={{
              textAlign: 'right',
              display: 'flex',
              flexDirection: 'column',
              gap: { md: 1.5, lg: 2 },
              maxWidth: { md: '20rem', lg: '28rem' },
              transition: 'all 0.5s ease-out',
              transform: revealPercentage > 60 ? 'translateX(0) scale(1)' : 'translateX(24px) scale(0.95)',
              opacity: revealPercentage > 40 ? 1 : 0.5,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { md: '2rem', lg: '3rem', xl: '3.75rem' },
                fontWeight: 700,
                color: '#594534',
                transition: 'all 0.7s',
                lineHeight: 1.2,
                fontFamily: 'var(--font-cairo)',
              }}
            >
              {language === "ar" ? (
                <>
                  مهندس
                  <br />
                  معماري
                </>
              ) : (
                t.hero.architect
              )}
            </Typography>
            <Typography
              sx={{
                fontSize: { md: '0.875rem', lg: '1.125rem', xl: '1.25rem' },
                color: 'rgba(89, 69, 52, 0.8)',
                lineHeight: 1.6,
                transition: 'all 0.7s',
                transitionDelay: '0.1s',
              }}
            >
              {t.hero.architectDesc}
            </Typography>

          </Box>
        </Box>

        {/* Left Side - مخطط */}
        <Box
          component={Link}
          href="/contact"
          sx={{
            display: { xs: 'none', md: 'flex' },
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'flex-start',
            pl: { md: 8, lg: 12, xl: 16 },
            cursor: 'pointer',
            zIndex: 0,
            transition: 'all 0.5s ease-out',
            opacity: revealPercentage < 80 ? 1 : 0.2,
            width: revealPercentage < 40 ? "calc(45% + 150px)" : "calc(35% - 50px)",
            textDecoration: 'none',
            pointerEvents: revealPercentage < 80 ? 'auto' : 'none',
          }}
        >
          <Box
            sx={{
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: { md: 1.5, lg: 2 },
              maxWidth: { md: '20rem', lg: '28rem' },
              transition: 'all 0.5s ease-out',
              transform: revealPercentage < 40 ? 'translateX(0) scale(1)' : 'translateX(-24px) scale(0.95)',
              opacity: revealPercentage < 60 ? 1 : 0.5,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { md: '2rem', lg: '3rem', xl: '3.75rem' },
                fontWeight: 700,
                color: '#594534',
                transition: 'all 0.7s',
                lineHeight: 1.2,
                fontFamily: 'var(--font-cairo)',
              }}
            >
              {t.hero.planner}
            </Typography>
            <Typography
              sx={{
                fontSize: { md: '0.875rem', lg: '1.125rem', xl: '1.25rem' },
                color: 'rgba(89, 69, 52, 0.8)',
                lineHeight: 1.6,
                transition: 'all 0.7s',
                transitionDelay: '0.1s',
              }}
            >
              {t.hero.plannerDesc}
            </Typography>

          </Box>
        </Box>

        {/* Scattered Floating Labels - Bottom section around shoulders with tilt */}
        
        {/* Label 1 - Right shoulder area */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', right: '28%', bottom: '35%', transition: 'all 0.5s', opacity: revealPercentage > 50 ? 1 : 0.3, zIndex: 15, transform: 'rotate(-3deg)' }}>
          <Typography sx={{ fontSize: { md: '0.9rem', lg: '1.05rem' }, color: 'rgba(89, 69, 52, 0.75)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
            {t.hero.label1}
          </Typography>
        </Box>

        {/* Label 2 - Right mid area */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', right: '24%', bottom: '28%', transition: 'all 0.5s', opacity: revealPercentage > 50 ? 1 : 0.3, zIndex: 15, transform: 'rotate(2deg)' }}>
          <Typography sx={{ fontSize: { md: '0.9rem', lg: '1.05rem' }, color: 'rgba(89, 69, 52, 0.75)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
            {t.hero.label2}
          </Typography>
        </Box>

        {/* Label 3 - Right lower area */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', right: '30%', bottom: '20%', transition: 'all 0.5s', opacity: revealPercentage > 50 ? 1 : 0.3, zIndex: 15, transform: 'rotate(-5deg)' }}>
          <Typography sx={{ fontSize: { md: '0.9rem', lg: '1.05rem' }, color: 'rgba(89, 69, 52, 0.75)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
            {t.hero.label3}
          </Typography>
        </Box>

        {/* Label 4 - Left shoulder area */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', left: '28%', bottom: '36%', transition: 'all 0.5s', opacity: revealPercentage < 50 ? 1 : 0.3, zIndex: 15, transform: 'rotate(4deg)' }}>
          <Typography sx={{ fontSize: { md: '0.9rem', lg: '1.05rem' }, color: 'rgba(89, 69, 52, 0.75)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
            {t.hero.label4}
          </Typography>
        </Box>

        {/* Label 5 - Left mid area */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', left: '24%', bottom: '27%', transition: 'all 0.5s', opacity: revealPercentage < 50 ? 1 : 0.3, zIndex: 15, transform: 'rotate(-2deg)' }}>
          <Typography sx={{ fontSize: { md: '0.9rem', lg: '1.05rem' }, color: 'rgba(89, 69, 52, 0.75)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
            {t.hero.label5}
          </Typography>
        </Box>

        {/* Label 6 - Left lower area */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', left: '20%', bottom: '18%', transition: 'all 0.5s', opacity: revealPercentage < 50 ? 1 : 0.3, zIndex: 15, transform: 'rotate(6deg)' }}>
          <Typography sx={{ fontSize: { md: '0.9rem', lg: '1.05rem' }, color: 'rgba(89, 69, 52, 0.75)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
            {t.hero.label6}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
