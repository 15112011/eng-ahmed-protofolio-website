"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Box, Typography } from "@mui/material"
import { useLanguage } from "../hooks/useLanguage"
import { useSiteData } from "../hooks/useSiteData"
import ar from "../locales/ar.json"
import en from "../locales/en.json"

/**
 * Hero Component - Interactive split-screen hero section
 * 
 * Features:
 * - Responsive design with different layouts for mobile/desktop
 * - Interactive image reveal effect on desktop (mouse tracking)
 * - Smooth animations on component mount
 * - Bilingual support (Arabic/English)
 * - Split personality display: Planner vs Architect
 * - Floating labels around the character image
 * 
 * @returns {JSX.Element} Hero section component
 */
export default function Hero() {
  // State management for interactive effects
  const [hoverState, setHoverState] = useState("default") // Tracks general hover state: "default", "right", "left"
  const [revealPercentage, setRevealPercentage] = useState(50) // Controls image split reveal (0-100%)
  const [isAnimating, setIsAnimating] = useState(true) // Controls initial slide-in animation
  const [sideHover, setSideHover] = useState("none") // Tracks which side is hovered: "none", "left", "right"
  
  // Refs and language setup
  const heroRef = useRef(null) // Reference to hero container for mouse tracking
  const { language } = useLanguage() // Current language context
  const t = language === "ar" ? ar : en // Translation object based on current language (fallback)
  const { hero } = useSiteData() // Get processed hero data from fake backend

  /**
   * Initial animation effect - triggers slide-in animations on component mount
   * Automatically disables animation state after 2 seconds to allow interactive effects
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false) // Enable interactive mouse tracking after initial animation
    }, 2000) // 1.5s animation + 0.5s buffer

    return () => clearTimeout(timer) // Cleanup timer on unmount
  }, [])

  /**
   * Handles mouse movement over the hero image for interactive reveal effect
   * Creates a dynamic split between color and cartoon versions of the image
   * 
   * @param {MouseEvent} e - Mouse event containing cursor position
   */
  const handleMouseMove = (e) => {
    if (!heroRef.current) return
    
    // Get mouse position relative to hero container
    const rect = heroRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    
    // Invert percentage for intuitive left-right reveal behavior
    // Left side shows more cartoon, right side shows more color
    let invertedPercentage = 100 - percentage
    
    // Create dead zone in center (45-55%) for stable middle position
    const deadZoneStart = 45
    const deadZoneEnd = 55
    const deadZoneCenter = 50
    
    if (invertedPercentage >= deadZoneStart && invertedPercentage <= deadZoneEnd) {
      invertedPercentage = deadZoneCenter // Snap to center in dead zone
    }
    
    // Ensure percentage stays within valid bounds (0-100%)
    const clampedPercentage = Math.max(0, Math.min(100, invertedPercentage))
    setRevealPercentage(clampedPercentage)
  }

  /**
   * Handles mouse leave event - maintains current reveal position
   * Intentionally does not reset to center for better UX
   */
  const handleMouseLeave = () => {
    // Preserve current reveal state when mouse leaves
    // This creates a more natural interaction pattern
  }

  return (
    // Main Hero Section Container - Full viewport height on desktop, auto on mobile
    <Box component="section" sx={{ position: 'relative', width: '100%', height: { xs: 'auto', md: '100vh' }, overflow: 'hidden', minHeight: { xs: 'auto', md: '100vh' } }}>
      
      {/* Background Layer - Scaled and overlaid background image */}
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/images/0a76d4007f8cc7694c998df6b10dfe65cd978952.jpg"
          alt="Background"
          fill
          style={{ objectFit: 'cover', transform: 'scale(2)' }} // Zoomed out effect
          priority
        />
        {/* Semi-transparent white overlay for better text readability */}
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(255, 255, 255, 0.7)' }} />
      </Box>

      <Box sx={{ position: 'relative', height: { xs: 'auto', md: '100%' }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'center' }}>
        {/* Mobile Layout - Enhanced with gradient background */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, position: 'relative', width: '100%', alignItems: 'flex-end', justifyContent: 'center', pb: 0, pt: { xs: 0, sm: 1 } }}>
          {/* Gradient Background Overlay */}
          <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.4), transparent)', zIndex: 0 }} />
          
          {/* Compact Image - Mobile */}
          <Box sx={{ position: 'relative', width: { xs: '225px', sm: '315px' }, height: { xs: '225px', sm: '315px' }, zIndex: 10, mb: 0 }}>
            <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
              {/* Base Image - Mobile - Slides in from left */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  clipPath: 'inset(0 50% 0 0)', // Always show left 50%
                  transform: isAnimating ? 'translateX(-100%)' : 'translateX(0)',
                  transition: isAnimating 
                    ? 'transform 1.5s cubic-bezier(0.65, 0, 0.35, 1)' 
                    : 'transform 0.3s ease-out',
                }}
              >
                <Image
                  src="/images/eng img no bg.png"
                  alt="المهندس أحمد المبيض"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'bottom', filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))' }}
                  priority
                />
              </Box>
              {/* Mobile - Cartoon overlay slides in from right */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  clipPath: 'inset(0 0 0 50%)', // Always show right 50%
                  transform: isAnimating ? 'translateX(100%)' : 'translateX(0)',
                  transition: isAnimating 
                    ? 'transform 1.5s cubic-bezier(0.65, 0, 0.35, 1)' 
                    : 'transform 0.3s ease-out',
                  pointerEvents: 'none',
                }}
              >
                <Image
                  src="/images/eng img catroonish.png"
                  alt="المهندس أحمد المبيض"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'bottom' }}
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
              left: { xs: 4, sm: 12 },
              top: 'auto',
              bottom: { xs: '42%', sm: '38%' },
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
                  transition: 'transform 0.3s',
                }}
              >
{hero.titles.planner || t.hero?.planner || "Planner"}
              </Typography>
            </Box>
          </Box>

          {/* Right Title - Architect - Enhanced with background */}
          <Box
            component={Link}
            href="/contact"
            sx={{
              position: 'absolute',
              right: { xs: 4, sm: 12 },
              top: 'auto',
              bottom: { xs: '42%', sm: '38%' },
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
                  hero.titles.architect || t.hero?.architect || "Architect"
                )}
              </Typography>
            </Box>
          </Box>

          {/* Mobile Floating Labels - Around shoulders */}
          <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'absolute', right: '8%', bottom: { xs: '35%', sm: '32%' }, zIndex: 15 }}>
            <Typography sx={{ fontSize: '0.65rem', color: 'rgba(89, 69, 52, 0.6)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
              {hero.floatingLabels?.[0] || t.hero?.label1 || "Label 1"}
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'absolute', right: '15%', bottom: { xs: '28%', sm: '26%' }, zIndex: 15 }}>
            <Typography sx={{ fontSize: '0.65rem', color: 'rgba(89, 69, 52, 0.6)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
              {hero.floatingLabels?.[1] || t.hero?.label2 || "Label 2"}
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'absolute', right: '5%', bottom: { xs: '22%', sm: '20%' }, zIndex: 15 }}>
            <Typography sx={{ fontSize: '0.65rem', color: 'rgba(89, 69, 52, 0.6)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
              {hero.floatingLabels?.[2] || t.hero?.label3 || "Label 3"}
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'absolute', left: '8%', bottom: { xs: '35%', sm: '32%' }, zIndex: 15 }}>
            <Typography sx={{ fontSize: '0.65rem', color: 'rgba(89, 69, 52, 0.6)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
              {hero.floatingLabels?.[3] || t.hero?.label4 || "Label 4"}
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'absolute', left: '12%', bottom: { xs: '28%', sm: '26%' }, zIndex: 15 }}>
            <Typography sx={{ fontSize: '0.65rem', color: 'rgba(89, 69, 52, 0.6)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
              {hero.floatingLabels?.[4] || t.hero?.label5 || "Label 5"}
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'absolute', left: '18%', bottom: { xs: '22%', sm: '20%' }, zIndex: 15 }}>
            <Typography sx={{ fontSize: '0.65rem', color: 'rgba(89, 69, 52, 0.6)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
              {hero.floatingLabels?.[5] || t.hero?.label6 || "Label 6"}
            </Typography>
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
            bottom: 0,
            transform: `translateX(calc(-50% + ${(50 - revealPercentage) * 0.2}px)) scale(0.6375)`,
            transformOrigin: 'bottom center',
            width: '90vw', 
            height: '95vh', 
            maxWidth: '1400px', 
            zIndex: 10,
            cursor: 'default',
            transition: 'transform 0.3s ease-out',
          }}
        >
          <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
            {/* Base Image - Color - Always fully visible after animation */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                clipPath: isAnimating ? 'inset(0 100% 0 0)' : 'inset(0 0 0 0)',
                transform: isAnimating ? 'translateX(-100%)' : 'translateX(0)',
                transition: isAnimating 
                  ? 'clip-path 1.5s cubic-bezier(0.65, 0, 0.35, 1), transform 1.5s cubic-bezier(0.65, 0, 0.35, 1)' 
                  : 'clip-path 0.3s ease-out, transform 0.3s ease-out',
              }}
            >
              <Image
                src="/images/eng img no bg.png"
                alt="المهندس أحمد المبيض"
                fill
                style={{ objectFit: 'contain', objectPosition: 'bottom' }}
                priority
              />
            </Box>

            {/* Cartoon Overlay - Right Half slides in from right */}
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                position: 'absolute',
                inset: 0,
                clipPath: isAnimating ? 'inset(0 0 0 100%)' : `inset(0 0 0 ${revealPercentage}%)`,
                transform: isAnimating ? 'translateX(100%)' : 'translateX(0)',
                transition: isAnimating 
                  ? 'clip-path 1.5s cubic-bezier(0.65, 0, 0.35, 1), transform 1.5s cubic-bezier(0.65, 0, 0.35, 1)' 
                  : 'clip-path 0.3s ease-out, transform 0.3s ease-out',
                pointerEvents: "none",
              }}
            >
              <Image
                src="/images/eng img catroonish.png"
                alt="المهندس أحمد المبيض"
                fill
                style={{ objectFit: 'contain', objectPosition: 'bottom' }}
                priority
              />
            </Box>

          </Box>
        </Box>

        {/* Right Side - مهندس معماري */}
        <Box
          component={Link}
          href="/contact"
          onMouseEnter={() => setSideHover("right")}
          onMouseLeave={() => setSideHover("none")}
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
            textDecoration: 'none',
          }}
        >
          <Box
            sx={{
              textAlign: 'right',
              display: 'flex',
              flexDirection: 'column',
              gap: { md: 1.5, lg: 2 },
              maxWidth: { md: '20rem', lg: '28rem' },
              opacity: sideHover === "left" ? 0.3 : 1,
              transition: 'opacity 0.4s ease-in-out',
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
                hero.titles.architect || t.hero?.architect || "Architect"
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
              {hero.descriptions.architect || t.hero?.architectDesc || "Architect description"}
            </Typography>

          </Box>
        </Box>

        {/* Left Side - مخطط */}
        <Box
          component={Link}
          href="/contact"
          onMouseEnter={() => setSideHover("left")}
          onMouseLeave={() => setSideHover("none")}
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
            zIndex: 20,
            textDecoration: 'none',
          }}
        >
          <Box
            sx={{
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: { md: 1.5, lg: 2 },
              maxWidth: { md: '20rem', lg: '28rem' },
              opacity: sideHover === "right" ? 0.3 : 1,
              transition: 'opacity 0.4s ease-in-out',
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
              {hero.titles.planner || t.hero?.planner || "Planner"}
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
              {hero.descriptions.planner || t.hero?.plannerDesc || "Planner description"}
            </Typography>

          </Box>
        </Box>

        {/* Scattered Floating Labels - Bottom section around shoulders with tilt */}
        
        {/* Label 1 - Right shoulder area */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', right: '28%', bottom: '35%', zIndex: 15, transform: 'rotate(-3deg)' }}>
          <Typography sx={{ fontSize: { md: '0.9rem', lg: '1.05rem' }, color: 'rgba(89, 69, 52, 0.75)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
            {hero.floatingLabels?.[0] || t.hero?.label1 || "Label 1"}
          </Typography>
        </Box>

        {/* Label 2 - Right mid area */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', right: '24%', bottom: '28%', zIndex: 15, transform: 'rotate(2deg)' }}>
          <Typography sx={{ fontSize: { md: '0.9rem', lg: '1.05rem' }, color: 'rgba(89, 69, 52, 0.75)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
            {hero.floatingLabels?.[1] || t.hero?.label2 || "Label 2"}
          </Typography>
        </Box>

        {/* Label 3 - Right lower area */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', right: '30%', bottom: '20%', zIndex: 15, transform: 'rotate(-5deg)' }}>
          <Typography sx={{ fontSize: { md: '0.9rem', lg: '1.05rem' }, color: 'rgba(89, 69, 52, 0.75)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
            {hero.floatingLabels?.[2] || t.hero?.label3 || "Label 3"}
          </Typography>
        </Box>

        {/* Label 4 - Left shoulder area */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', left: '28%', bottom: '36%', zIndex: 15, transform: 'rotate(4deg)' }}>
          <Typography sx={{ fontSize: { md: '0.9rem', lg: '1.05rem' }, color: 'rgba(89, 69, 52, 0.75)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
            {hero.floatingLabels?.[3] || t.hero?.label4 || "Label 4"}
          </Typography>
        </Box>

        {/* Label 5 - Left mid area */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', left: '24%', bottom: '27%', zIndex: 15, transform: 'rotate(-2deg)' }}>
          <Typography sx={{ fontSize: { md: '0.9rem', lg: '1.05rem' }, color: 'rgba(89, 69, 52, 0.75)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
            {hero.floatingLabels?.[4] || t.hero?.label5 || "Label 5"}
          </Typography>
        </Box>

        {/* Label 6 - Left lower area */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', left: '20%', bottom: '18%', zIndex: 15, transform: 'rotate(6deg)' }}>
          <Typography sx={{ fontSize: { md: '0.9rem', lg: '1.05rem' }, color: 'rgba(89, 69, 52, 0.75)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
            {hero.floatingLabels?.[5] || t.hero?.label6 || "Label 6"}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
