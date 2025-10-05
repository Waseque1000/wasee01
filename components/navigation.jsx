"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [activeSection, setActiveSection] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const sections = ["Home", "About", "Projects", "Skills", "Contact"]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)

    const handleScroll = () => {
      if (isMobile) {
        const sectionElements = document.querySelectorAll("section")
        let currentSection = 0
        sectionElements.forEach((section, index) => {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = index
          }
        })
        setActiveSection(currentSection)
      } else {
        // Desktop horizontal scroll calculation
        const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight)
        const sectionIndex = Math.floor(scrollPercentage * sections.length)
        setActiveSection(Math.min(sectionIndex, sections.length - 1))
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkMobile)
    }
  }, [sections.length, isMobile])

  const scrollToSection = (index) => {
    if (isMobile) {
      const sectionElements = document.querySelectorAll("section")
      if (sectionElements[index]) {
        sectionElements[index].scrollIntoView({ behavior: "smooth" })
        setIsMobileMenuOpen(false)
      }
    } else {
      // Desktop horizontal scroll
      const scrollHeight = document.body.scrollHeight - window.innerHeight
      const targetScroll = (scrollHeight / sections.length) * index
      window.scrollTo({ top: targetScroll, behavior: "smooth" })
    }
  }

  return (
    <>
      <nav className="fixed top-10 left-1/2 -translate-x-1/2 z-50 bg-card/90 backdrop-blur-lg border border-border/50 rounded-full px-8 py-4 shadow-lg hidden lg:block">
        <ul className="flex items-center gap-10">
          {sections.map((section, index) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(index)}
                className={`text-sm font-medium transition-all relative ${
                  activeSection === index ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {section}
                {activeSection === index && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="fixed top-6 right-6 z-50 lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-card/90 backdrop-blur-lg border border-border/50 rounded-full p-4 shadow-lg"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/95 backdrop-blur-lg z-40 lg:hidden"
        >
          <ul className="flex flex-col items-center justify-center h-full gap-8">
            {sections.map((section, index) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(index)}
                  className={`text-3xl font-medium transition-all ${
                    activeSection === index ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  )
}
