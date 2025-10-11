"use client"

import { motion } from "framer-motion"
import { Mail, Download, BadgeCheck } from "lucide-react"

const container = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.6, staggerChildren: 0.07 }
  }
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } }
}

export default function AboutSection() {
  return (
    <section className="relative min-w-screen min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-16 py-24 lg:py-0 bg-secondary/30">
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute -top-20 -left-28 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-foreground/10 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* LEFT: copy */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            I’m a front-end web developer focused on crafting clean, accessible, and high-performance interfaces.
            My goal is <span className="text-foreground font-semibold">error-free builds</span> and
            <span className="text-foreground font-semibold"> 100% client satisfaction</span>. I love turning real-world
            problems into intuitive, delightful experiences. I’ve completed numerous projects (with more in the works)
            and I always go the extra mile to make sure clients are genuinely happy with the final result.
          </p>

          {/* highlights */}
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-8 space-y-3"
          >
            {[
              "Pixel-perfect UI with robust semantics and a11y",
              "Smooth micro-interactions and performant animations",
              "Modern stacks: React, Next.js, Tailwind CSS, Framer Motion",
            ].map((t) => (
              <motion.li
                key={t}
                variants={item}
                className="flex items-start gap-3 text-sm md:text-base text-muted-foreground"
              >
                <BadgeCheck className="mt-0.5 h-5 w-5 text-primary" />
                <span>{t}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* skill chips */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {[
              "React",
              "Next.js",
             
              "Tailwind CSS",
              "Framer Motion",
              "Accessibility",
              "Performance",
              "GSAP",
              "Shopify",
              "MongoDB",,
              "Firebase",
              "Vercel"
            ].map((skill) => (
              <motion.span
                key={skill}
                variants={item}
                className="rounded-full border border-foreground/15 px-3 py-1 text-xs md:text-sm text-muted-foreground"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <motion.a
              href="mailto:waseque.ndc@gmail.com" 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-lg hover:bg-primary/90 transition"
            >
              <Mail className="h-5 w-5" />
              Contact Me
            </motion.a>

            <motion.a
              href="cv.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/60 backdrop-blur px-6 py-3 font-medium hover:border-foreground/40 transition"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT: card with image + stats */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative mx-auto w-full pl-10 max-w-md">
            <div className="relative rounded-3xl border border-foreground/10 bg-gradient-to-b from-background/70 to-background/50 backdrop-blur p-4 shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden  rounded-2xl">
                {/* Replace src with your photo */}
                <img
                  src="/okk.png"
                  alt="Portrait"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* floating stats */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                {[
                  { k: "Years", v: "1+" },
                  { k: "Projects", v: "50+" },
                  { k: "Clients", v: "15+" },
                ].map(({ k, v }) => (
                  <div
                    key={k}
                    className="rounded-xl border border-foreground/10 bg-background/60 px-3 py-3"
                  >
                    <div className="text-xl font-bold">{v}</div>
                    <div className="text-[11px] text-muted-foreground tracking-wide">{k}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* decorative ring */}
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-r from-primary/20 via-primary/0 to-primary/20 blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
