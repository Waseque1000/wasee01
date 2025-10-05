"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Waseque1000" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/waseque-arafat-5b479a268/" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:itswaseeee@gmail.com" },
]

export default function ContactSection() {
  return (
    <section className="min-w-screen min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-16 py-24 lg:py-0">
      <div className="max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 bg-gradient-to-r pb-10 from-foreground to-foreground/70 bg-clip-text text-transparent">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 lg:mb-12 text-balance leading-relaxed">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something amazing together.
          </p>
          <motion.a
            href="mailto:itswaseeee@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary text-primary-foreground px-8 md:px-12 py-4 md:py-5 rounded-full font-medium text-base md:text-lg hover:bg-primary/90 transition-all shadow-lg mb-10 lg:mb-12"
          >
            Get In Touch
          </motion.a>
          <div className="flex items-center justify-center gap-4 md:gap-6 mt-10 lg:mt-12">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all shadow-md"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
