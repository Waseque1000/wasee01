"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with seamless checkout and inventory management",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    image: "/modern-ecommerce-website.png",
    link:'https://assignment-009-cfd88.web.app/'
  },
  {
    title: "Design System",
    description: "Comprehensive component library with accessibility and customization",
    tags: ["React", "Storybook", "CSS", "Figma"],
    image: "/design-system-components.png",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization with interactive charts and insights",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    image: "/analytics-dashboard.png",
  },
]

export default function ProjectsSection() {
  return (
    <section className="min-w-screen min-h-screen flex items-center px-6 md:px-12 lg:px-16 py-24 lg:py-0">
      <div className="w-full max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 lg:mb-14 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5 lg:p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg lg:text-xl font-semibold">{project.title}</h3>
                  <ExternalLink  className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  
                </div>
                <p className="text-sm lg:text-base text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
