"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDownIcon } from "@heroicons/react/24/outline"

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <div className="relative isolate overflow-hidden bg-background min-h-screen flex items-center">
      {/* Subtle Background Orbs - Neutral with hint of sage */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20" />

        {/* Floating Orbs - More subtle */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-custom py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ opacity }}
          >
            <motion.div variants={itemVariants} className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary backdrop-blur-sm">
                ✨ Award-Winning Creative Agency
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              <span className="text-gradient-primary">Transform</span>
              <br />
              Your Vision Into
              <br />
              <span className="text-gradient-secondary">Stunning Reality</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
            >
              We craft elegant digital experiences that inspire, engage, and elevate your brand to new heights.
              Minimal design meets maximum impact.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#portfolio"
                className="btn-primary text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View Our Work
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Get Started
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border/50"
            >
              <motion.div variants={itemVariants}>
                <div className="text-3xl font-bold text-gradient-primary">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects Completed</div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="text-3xl font-bold text-gradient-secondary">98%</div>
                <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="text-3xl font-bold text-gradient-accent">15+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{ y }}
          >
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative glass-card p-8 hover-glow">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/creative-SW6QDQbcVuwPgb6a2CYtYmRbsJa4k1.png"
                  alt="Creative Agency Portfolio"
                  className="w-full rounded-xl shadow-2xl"
                />

                {/* Decorative Elements - Subtle sage green accents */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl opacity-50 animate-pulse-glow" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl opacity-50 animate-pulse-glow" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDownIcon className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </div>
  )
}
