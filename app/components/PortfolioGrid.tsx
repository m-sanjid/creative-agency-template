"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Minimalist Brand Identity",
    description: "Clean and modern visual communication for a tech startup",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Branding",
  },
  {
    id: 2,
    title: "Sleek Web Experience",
    description: "Elegant online presence for a luxury fashion brand",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Web Design",
  },
  {
    id: 3,
    title: "Intuitive Mobile App",
    description: "User-friendly app design for a health and wellness company",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Mobile App",
  },
  {
    id: 4,
    title: "Elegant Digital Campaign",
    description: "Sophisticated marketing strategy for a luxury automotive brand",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Digital Marketing",
  },
  {
    id: 5,
    title: "Refined UI/UX Design",
    description: "Streamlined user interfaces for a financial services platform",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "UI/UX",
  },
  {
    id: 6,
    title: "Minimalist Product Design",
    description: "Sleek and functional design for a smart home device",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Product Design",
  },
]

const categories = ["All", ...new Set(projects.map((project) => project.category))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-muted/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-muted/30 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            <span className="text-gradient-primary">Our Work</span>
          </h2>
          <p className="section-subtitle">
            A showcase of our minimalist designs and creative solutions that drive results.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${filter === category
                  ? "bg-primary text-white shadow-glow"
                  : "glass hover:bg-primary/10 hover:text-primary"
                }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card hover-lift overflow-hidden h-full">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <p className="text-white text-sm">{project.description}</p>
                    </motion.div>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-3">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient-primary transition-all duration-300">
                      {project.title}
                    </h3>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-semibold"
                    >
                      View Project
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <a href="#contact" className="btn-primary">
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}
