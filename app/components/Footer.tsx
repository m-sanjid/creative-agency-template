"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpIcon } from "@heroicons/react/24/outline"

export default function Footer() {
  const [email, setEmail] = useState("")

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  const footerLinks = {
    Company: [
      { name: "About", href: "#about" },
      { name: "Work", href: "#portfolio" },
      { name: "Services", href: "#services" },
      { name: "Contact", href: "#contact" },
    ],
    Resources: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Testimonials", href: "#" },
      { name: "FAQ", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  }

  const socialLinks = [
    { name: "Twitter", href: "#", icon: "𝕏" },
    { name: "LinkedIn", href: "#", icon: "in" },
    { name: "Instagram", href: "#", icon: "📷" },
    { name: "Dribbble", href: "#", icon: "🏀" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-background to-background/50 border-t border-border/50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-muted/20 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-muted/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Brand & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gradient-primary mb-4">Creative Agency</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming visions into stunning digital realities. Subscribe to our newsletter for the latest updates and insights.
            </p>

            {/* Newsletter */}
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full glass border-2 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
                required
              />
              <motion.button
                type="submit"
                className="px-6 py-3 rounded-full bg-primary text-white font-semibold hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>

          {/* Links Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-foreground mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Creative Agency Portfolio. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.name}
              >
                <span className="text-lg">{social.icon}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-white shadow-glow-lg flex items-center justify-center z-40"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUpIcon className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}
