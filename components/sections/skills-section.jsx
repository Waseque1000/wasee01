"use client"

import { motion } from "framer-motion"

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "GraphQL", "REST APIs"] },
  { category: "Design", items: ["Figma", "Framer", "UI/UX", "Animation"] },
  { category: "Tools", items: ["Git", "Docker", "Vercel", "VS Code"] },
]

export default function SkillsSection() {
  return (
    <section className="min-w-screen min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-16 py-24 lg:py-0 bg-secondary/30">
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 lg:mb-14 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/50 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 text-primary">{skill.category}</h3>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li key={item} className="text-base lg:text-lg text-muted-foreground flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
