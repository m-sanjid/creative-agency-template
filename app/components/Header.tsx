"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Work", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-3" : "bg-transparent py-6"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container-custom flex items-center justify-between" aria-label="Global">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img
              className="h-10 w-auto"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/creative-SW6QDQbcVuwPgb6a2CYtYmRbsJa4k1.png"
              alt="Creative Agency"
            />
            <div className="absolute inset-0 bg-sage-400/50 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
          </motion.div>
          <span className="text-xl font-bold text-gradient-primary hidden sm:block">Creative</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors relative group"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sage-500 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          {mounted && (
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full glass hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5 text-primary" />
              ) : (
                <MoonIcon className="h-5 w-5 text-primary" />
              )}
            </motion.button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full glass hover:bg-primary/10 transition-colors"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-foreground" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden glass mt-4 mx-4 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
