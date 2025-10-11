"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import HeroSection from "./sections/hero-section"
import AboutSection from "./sections/about-section"
import ProjectsSection from "./sections/projects-section"
import SkillsSection from "./sections/skills-section"
import ContactSection from "./sections/contact-section"
import Navigation from "./navigation"

export default function HorizontalPortfolio() {
  const containerRef = useRef(null)
  const [totalWidth, setTotalWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()

    if (containerRef.current && !isMobile) {
      const width = containerRef.current.scrollWidth - window.innerWidth
      setTotalWidth(width)
    }

    const handleResize = () => {
      checkMobile()
      if (containerRef.current && !isMobile) {
        const width = containerRef.current.scrollWidth - window.innerWidth
        setTotalWidth(width)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMobile])

  const { scrollYProgress } = useScroll()

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const x = useTransform(smoothProgress, [0, 1], [0, -totalWidth])

  if (isMobile) {
    return (
      <>
        <Navigation />
        <div className="flex flex-col">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          {/* <SkillsSection /> */}
          <ContactSection />
        </div>
      </>
    )
  }

  return (
    <>
      <Navigation />
      <div className="h-[600vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div ref={containerRef} style={{ x }} className="flex h-screen">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
          </motion.div>
        </div>
      </div>
    </>
  )
}
