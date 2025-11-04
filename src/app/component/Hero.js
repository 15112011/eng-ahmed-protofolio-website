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
  const [showText, setShowText] = useState(false) // Controls text visibility after animation
  const [showFloatingLabels, setShowFloatingLabels] = useState(false) // Controls floating labels visibility
  const [isInView, setIsInView] = useState(false) // Tracks if Hero section is in viewport
  
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
    const animationTimer = setTimeout(() => {
      setIsAnimating(false) // Enable interactive mouse tracking after collision animation
    }, 4200) // 4s animation + 0.2s buffer

    const textTimer = setTimeout(() => {
      setShowText(true) // Show text after animation completes
    }, 4400) // Show text 200ms after collision animation ends

    const labelsTimer = setTimeout(() => {
      setShowFloatingLabels(true) // Show floating labels 2s after animation ends
    }, 6400) // Show labels 2s after collision animation ends (4.2s + 2s)

    return () => {
      clearTimeout(animationTimer)
      clearTimeout(textTimer)
      clearTimeout(labelsTimer)
    } // Cleanup timers on unmount
  }, [])

  /**
   * Intersection Observer to detect when Hero section is in viewport
   * Only allows animations and interactions when section is visible
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
        // When coming into view, show full image immediately
        if (entry.isIntersecting) {
          setRevealPercentage(50) // Show balanced state immediately
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of hero is visible
        rootMargin: '0px'
      }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  /**
   * Handles mouse movement over the hero section
   * Controls the reveal percentage and text visibility based on mouse position
   * Images stay stable at 50% until they touch, then slow animation when close to colliding
   * 
   * @param {MouseEvent} e - Mouse event object
   */
  const handleMouseMove = (e) => {
    if (!heroRef.current) return
    
    // Only allow interactions when Hero section is in viewport
    if (!isInView) {
      return
    }
    
    // Don't update during collision animation to prevent percentage changes
    if (isAnimating) {
      return
    }
    
    // Get mouse position relative to hero container
    const rect = heroRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    
    // Invert percentage for intuitive left-right reveal behavior
    let invertedPercentage = 100 - percentage
    
    // Define zones for different behaviors
    const stableZoneStart = 25
    const stableZoneEnd = 75
    const slowZoneStart = 15  // Start slowing down here
    const slowZoneEnd = 85    // Start slowing down here
    
    // If in stable zone (25-75%), keep at 50%
    if (invertedPercentage >= stableZoneStart && invertedPercentage <= stableZoneEnd) {
      invertedPercentage = 50 // Keep perfectly stable at 50%
    }
    // If in slow zones (15-25% or 75-85%), apply dramatic slowdown
    else if ((invertedPercentage >= slowZoneStart && invertedPercentage < stableZoneStart) || 
             (invertedPercentage > stableZoneEnd && invertedPercentage <= slowZoneEnd)) {
      
      // Use requestAnimationFrame for smooth slow animation
      const targetPercentage = invertedPercentage
      const currentPercentage = revealPercentage
      
      // Extremely slow interpolation (99% slower)
      const slowFactor = 0.01 // 1% of normal speed
      const difference = targetPercentage - currentPercentage
      invertedPercentage = currentPercentage + (difference * slowFactor)
    }
    
    // Ensure percentage stays within valid bounds (0-100%)
    const clampedPercentage = Math.max(0, Math.min(100, invertedPercentage))
    
    setRevealPercentage(clampedPercentage)
    
    // Update side hover state based on position for text visibility
    // Text vanishes when reaching 80-85% to one side
    if (percentage < 15) {
      setSideHover("left")
    } else if (percentage > 85) {
      setSideHover("right")
    } else {
      setSideHover("none")
    }
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
    <Box component="section" sx={{ position: 'relative', width: '100%', height: { xs: 'auto', md: '70vh' }, overflow: 'hidden', minHeight: { xs: '400px', md: '70vh' }, mt: { xs: '80px', md: '90px' } }}>
      
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

      <Box 
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        sx={{ position: 'relative', height: { xs: 'auto', md: '100%' }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'center' }}>
        {/* Mobile Layout - Enhanced with gradient background */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, position: 'relative', width: '100%', alignItems: 'flex-end', justifyContent: 'center', pb: 0, pt: 0 }}>
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
                  opacity: isAnimating ? 0 : 1,
                  transition: isAnimating 
                    ? 'transform 4s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 1s ease-in' 
                    : 'transform 0.3s ease-out, opacity 0.3s ease-out',
                  animationDelay: isAnimating ? '0s' : '0s',
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
                  opacity: isAnimating ? 0 : 1,
                  transition: isAnimating 
                    ? 'transform 4s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 1s ease-in' 
                    : 'transform 0.3s ease-out, opacity 0.3s ease-out',
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
            transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            pointerEvents: 'none',
          }}
        >
          <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
            {/* Base Image - Color - Slides in from completely off-screen left */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                clipPath: isAnimating ? 'inset(0 100% 0 0)' : 'inset(0 0 0 0)',
                transform: isAnimating ? 'translateX(-100%)' : 'translateX(0)',
                opacity: isAnimating ? 0 : 1,
                transition: isAnimating 
                  ? 'clip-path 4s cubic-bezier(0.25, 0.1, 0.25, 1), transform 4s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 1s ease-in' 
                  : 'clip-path 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease-out',
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

            {/* Cartoon Overlay - Slides in from completely off-screen right */}
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                position: 'absolute',
                inset: 0,
                clipPath: isAnimating ? 'inset(0 0 0 100%)' : `inset(0 0 0 ${revealPercentage}%)`,
                transform: isAnimating ? 'translateX(100%)' : 'translateX(0)',
                opacity: isAnimating ? 0 : 1,
                transition: isAnimating 
                  ? 'clip-path 4s cubic-bezier(0.25, 0.1, 0.25, 1), transform 4s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 1s ease-in' 
                  : 'clip-path 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease-out',
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
          sx={{
            display: { xs: 'none', md: 'flex' },
            position: 'absolute',
            right: 0,
            top: 0,
            height: '100%',
            width: '40%',
            alignItems: 'center',
            justifyContent: 'flex-end',
            pr: { md: 8, lg: 12, xl: 16 },
            cursor: 'pointer',
            zIndex: 20,
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
              opacity: !showText ? 0 : (sideHover === "left" ? 0 : 1),
              transform: !showText ? 'translateY(20px)' : 'translateY(0)',
              transition: showText 
                ? 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                : 'opacity 0.3s ease-out, transform 0.3s ease-out',
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
          sx={{
            display: { xs: 'none', md: 'flex' },
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '40%',
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
              opacity: !showText ? 0 : (sideHover === "right" ? 0 : 1),
              transform: !showText ? 'translateY(20px)' : 'translateY(0)',
              transition: showText 
                ? 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                : 'opacity 0.3s ease-out, transform 0.3s ease-out',
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
        <Box sx={{ 
          display: { xs: 'none', md: 'block' }, 
          position: 'absolute', 
          right: '28%', 
          bottom: '35%', 
          zIndex: 15, 
          transform: showFloatingLabels ? `rotate(-3deg) translateY(0) translateX(${sideHover === 'right' ? '8px' : '0'})` : 'rotate(-3deg) translateY(15px)',
          opacity: !showFloatingLabels ? 0 : (sideHover === "left" ? 0 : 1),
          transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transitionDelay: '0.1s'
        }}>
          <Typography sx={{ fontSize: { md: '0.9rem', lg: '1.05rem' }, color: 'rgba(89, 69, 52, 0.75)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
            {hero.floatingLabels?.[0] || t.hero?.label1 || "Label 1"}
          </Typography>
        </Box>

        {/* Label 2 - Right mid area */}
        <Box sx={{ 
          display: { xs: 'none', md: 'block' }, 
          position: 'absolute', 
          right: '24%', 
          bottom: '28%', 
          zIndex: 15, 
          transform: showFloatingLabels ? `rotate(2deg) translateY(0) translateX(${sideHover === 'right' ? '12px' : '0'})` : 'rotate(2deg) translateY(15px)',
          opacity: !showFloatingLabels ? 0 : (sideHover === "left" ? 0 : 1),
          transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transitionDelay: '0.3s'
        }}>
          <Typography sx={{ fontSize: { md: '0.9rem', lg: '1.05rem' }, color: 'rgba(89, 69, 52, 0.75)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
            {hero.floatingLabels?.[1] || t.hero?.label2 || "Label 2"}
          </Typography>
        </Box>

        {/* Label 3 - Right lower area */}
        <Box sx={{ 
          display: { xs: 'none', md: 'block' }, 
          position: 'absolute', 
          right: '30%', 
          bottom: '20%', 
          zIndex: 15, 
          transform: showFloatingLabels ? `rotate(-5deg) translateY(0) translateX(${sideHover === 'right' ? '6px' : '0'})` : 'rotate(-5deg) translateY(15px)',
          opacity: !showFloatingLabels ? 0 : (sideHover === "left" ? 0 : 1),
          transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transitionDelay: '0.5s'
        }}>
          <Typography sx={{ fontSize: { md: '0.9rem', lg: '1.05rem' }, color: 'rgba(89, 69, 52, 0.75)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
            {hero.floatingLabels?.[2] || t.hero?.label3 || "Label 3"}
          </Typography>
        </Box>

        {/* Label 4 - Left shoulder area */}
        <Box sx={{ 
          display: { xs: 'none', md: 'block' }, 
          position: 'absolute', 
          left: '28%', 
          bottom: '36%', 
          zIndex: 15, 
          transform: showFloatingLabels ? `rotate(4deg) translateY(0) translateX(${sideHover === 'left' ? '-8px' : '0'})` : 'rotate(4deg) translateY(15px)',
          opacity: !showFloatingLabels ? 0 : (sideHover === "right" ? 0 : 1),
          transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transitionDelay: '0.2s'
        }}>
          <Typography sx={{ fontSize: { md: '0.9rem', lg: '1.05rem' }, color: 'rgba(89, 69, 52, 0.75)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
            {hero.floatingLabels?.[3] || t.hero?.label4 || "Label 4"}
          </Typography>
        </Box>

        {/* Label 5 - Left mid area */}
        <Box sx={{ 
          display: { xs: 'none', md: 'block' }, 
          position: 'absolute', 
          left: '24%', 
          bottom: '27%', 
          zIndex: 15, 
          transform: showFloatingLabels ? `rotate(-2deg) translateY(0) translateX(${sideHover === 'left' ? '-12px' : '0'})` : 'rotate(-2deg) translateY(15px)',
          opacity: !showFloatingLabels ? 0 : (sideHover === "right" ? 0 : 1),
          transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transitionDelay: '0.4s'
        }}>
          <Typography sx={{ fontSize: { md: '0.9rem', lg: '1.05rem' }, color: 'rgba(89, 69, 52, 0.75)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
            {hero.floatingLabels?.[4] || t.hero?.label5 || "Label 5"}
          </Typography>
        </Box>

        {/* Label 6 - Left lower area */}
        <Box sx={{ 
          display: { xs: 'none', md: 'block' }, 
          position: 'absolute', 
          left: '20%', 
          bottom: '18%', 
          zIndex: 15, 
          transform: showFloatingLabels ? `rotate(6deg) translateY(0) translateX(${sideHover === 'left' ? '-6px' : '0'})` : 'rotate(6deg) translateY(15px)',
          opacity: !showFloatingLabels ? 0 : (sideHover === "right" ? 0 : 1),
          transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transitionDelay: '0.6s'
        }}>
          <Typography sx={{ fontSize: { md: '0.9rem', lg: '1.05rem' }, color: 'rgba(89, 69, 52, 0.75)', fontWeight: 400, fontFamily: 'var(--font-cairo)' }}>
            {hero.floatingLabels?.[5] || t.hero?.label6 || "Label 6"}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
