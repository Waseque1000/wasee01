"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section className="min-w-screen min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-16 py-24 lg:py-0 bg-secondary/30">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 lg:mb-10 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a passionate developer and designer who loves creating unique digital experiences. With a keen
              eye for detail and a love for clean code, I bring ideas to life through thoughtful design and robust
              engineering.
            </p>
            <p>
              My work focuses on the intersection of design and development, creating experiences that not only look
              great but are meticulously built for performance and usability.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new design trends, contributing to open source, or
              experimenting with the latest web technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
