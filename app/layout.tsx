import "./globals.css"
import { Inter, Playfair_Display, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"
import type { Metadata } from "next"
import { Toaster } from "sonner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Creative Agency Portfolio - Premium Design & Development",
    template: "%s | Creative Agency Portfolio",
  },
  description: "Award-winning creative agency specializing in minimal design, brand identity, web development, and digital experiences. Transform your vision into stunning reality.",
  keywords: [
    "creative agency",
    "web design",
    "brand identity",
    "UI/UX design",
    "digital marketing",
    "web development",
    "minimal design",
    "portfolio",
    "creative studio",
    "design agency",
  ],
  authors: [{ name: "Creative Agency Portfolio" }],
  creator: "Creative Agency Portfolio",
  publisher: "Creative Agency Portfolio",
  metadataBase: new URL("https://creative-agency-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://creative-agency-portfolio.vercel.app",
    title: "Creative Agency Portfolio - Premium Design & Development",
    description: "Award-winning creative agency specializing in minimal design, brand identity, web development, and digital experiences.",
    siteName: "Creative Agency Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Creative Agency Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Agency Portfolio - Premium Design & Development",
    description: "Award-winning creative agency specializing in minimal design, brand identity, and digital experiences.",
    images: ["/og-image.png"],
    creator: "@creativeagency",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Creative Agency Portfolio",
  description: "Award-winning creative agency specializing in minimal design and digital experiences",
  url: "https://creative-agency-portfolio.vercel.app",
  logo: "https://creative-agency-portfolio.vercel.app/logo.png",
  sameAs: [
    "https://twitter.com/creativeagency",
    "https://www.linkedin.com/company/creativeagency",
    "https://www.instagram.com/creativeagency",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "hello@creativeagency.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
