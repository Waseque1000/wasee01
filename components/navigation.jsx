// "use client"

// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import { Menu, X } from "lucide-react"

// export default function Navigation() {
//   const [activeSection, setActiveSection] = useState(0)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [isMobile, setIsMobile] = useState(false)

//   const sections = ["Home", "About", "Projects", "Skills", "Contact"]

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 1024)
//     }
//     checkMobile()
//     window.addEventListener("resize", checkMobile)

//     const handleScroll = () => {
//       if (isMobile) {
//         const sectionElements = document.querySelectorAll("section")
//         let currentSection = 0
//         sectionElements.forEach((section, index) => {
//           const rect = section.getBoundingClientRect()
//           if (rect.top <= 150 && rect.bottom >= 150) {
//             currentSection = index
//           }
//         })
//         setActiveSection(currentSection)
//       } else {
//         // Desktop horizontal scroll calculation
//         const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight)
//         const sectionIndex = Math.floor(scrollPercentage * sections.length)
//         setActiveSection(Math.min(sectionIndex, sections.length - 1))
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//       window.removeEventListener("resize", checkMobile)
//     }
//   }, [sections.length, isMobile])

//   const scrollToSection = (index) => {
//     if (isMobile) {
//       const sectionElements = document.querySelectorAll("section")
//       if (sectionElements[index]) {
//         sectionElements[index].scrollIntoView({ behavior: "smooth" })
//         setIsMobileMenuOpen(false)
//       }
//     } else {
//       // Desktop horizontal scroll
//       const scrollHeight = document.body.scrollHeight - window.innerHeight
//       const targetScroll = (scrollHeight / sections.length) * index
//       window.scrollTo({ top: targetScroll, behavior: "smooth" })
//     }
//   }

//   return (
//     <>
//       <nav className="fixed top-10 left-1/2 -translate-x-1/2 z-50 bg-card/90 backdrop-blur-lg border border-border/50 rounded-full px-8 py-4 shadow-lg hidden lg:block">
//         <ul className="flex items-center gap-10">
//           {sections.map((section, index) => (
//             <li key={section}>
//               <button
//                 onClick={() => scrollToSection(index)}
//                 className={`text-sm font-medium transition-all relative ${
//                   activeSection === index ? "text-foreground" : "text-muted-foreground hover:text-foreground"
//                 }`}
//               >
//                 {section}
//                 {activeSection === index && (
//                   <motion.div
//                     layoutId="activeSection"
//                     className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary rounded-full"
//                     transition={{ type: "spring", stiffness: 380, damping: 30 }}
//                   />
//                 )}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       <nav className="fixed top-6 right-6 z-50 lg:hidden">
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="bg-card/90 backdrop-blur-lg border border-border/50 rounded-full p-4 shadow-lg"
//         >
//           {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </nav>

//       {isMobileMenuOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-background/95 backdrop-blur-lg z-40 lg:hidden"
//         >
//           <ul className="flex flex-col items-center justify-center h-full gap-8">
//             {sections.map((section, index) => (
//               <li key={section}>
//                 <button
//                   onClick={() => scrollToSection(index)}
//                   className={`text-3xl font-medium transition-all ${
//                     activeSection === index ? "text-foreground" : "text-muted-foreground"
//                   }`}
//                 >
//                   {section}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </motion.div>
//       )}
//     </>
//   )
// }

"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const sections = ["Home", "About", "Projects", "Skills", "Contact"]
  const [activeId, setActiveId] = useState(slugify(sections[0]))
  const [open, setOpen] = useState(false)
  const menuBtnRef = useRef(null)
  const firstLinkRef = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const targets = sections
      .map((s) => document.getElementById(slugify(s)))
      .filter(Boolean)

    if (!targets.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))
        if (vis[0]?.target?.id) setActiveId(vis[0].target.id)
      },
      { root: null, threshold: [0.25, 0.5, 0.75], rootMargin: "-20% 0px -50% 0px" }
    )

    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [sections])

  useEffect(() => {
    if (typeof document === "undefined") return
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    if (open) firstLinkRef.current?.focus()
    else menuBtnRef.current?.focus()
  }, [open])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: "smooth", block: "start" })
    setOpen(false)
  }

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-card/90 backdrop-blur-lg border border-border/50 rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 shadow-lg hidden lg:block">
        <ul className="flex items-center gap-5 md:gap-8">
          {sections.map((label) => {
            const id = slugify(label)
            const active = activeId === id
            return (
              <li key={id} className="relative">
                <button
                  onClick={() => scrollTo(id)}
                  className={`text-sm md:text-[0.95rem] font-medium transition-colors relative ${
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {label}
                  {active && (
                    <motion.div
                      layoutId="active-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      <nav className="fixed top-4 right-4 z-50 lg:hidden">
        <button
          ref={menuBtnRef}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="bg-card/90 backdrop-blur-lg border border-border/50 rounded-full p-3 shadow-lg"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="overlay"
            className="fixed inset-0 bg-background/95 backdrop-blur-lg z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <ul
              className="flex flex-col items-center justify-center h-full gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              {sections.map((label, i) => {
                const id = slugify(label)
                const active = activeId === id
                return (
                  <li key={id}>
                    <button
                      ref={i === 0 ? firstLinkRef : undefined}
                      onClick={() => scrollTo(id)}
                      className={`text-2xl sm:text-3xl font-semibold transition-colors ${
                        active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {label}
                    </button>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function slugify(label) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}
