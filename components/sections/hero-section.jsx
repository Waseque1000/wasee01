"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="min-w-screen h-screen flex items-center justify-center px-6 md:px-12 lg:px-16 pt-1">
      <div className="max-w-7xl w-full mt-40 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm md:text-base mb-4 tracking-wide"
          >
            Hello, I&apos;m
          </motion.p>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 text-balance leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Waseque Arafat
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl text-pretty leading-relaxed mx-auto lg:mx-0">
            I'm a Frontend Developer craft beautiful digital experiences with a focus on design, animation, and user interaction.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 md:px-10 py-4 md:py-5 rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg"
          >
        
            View My Work
          
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px]">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl"
            />
            <Image
              src="/okk.png"
              alt="Profile"
              width={500}
              height={500}
              className="relative rounded-full object-cover border-4 border-primary/20 shadow-2xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
