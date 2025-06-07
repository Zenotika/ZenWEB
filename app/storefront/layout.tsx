// Root layout for Next.js App Router in /app/storefront
import '../styles/globals.css';
import { GlobalSWRProvider } from '../../modules/infrastructure/cache';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { usePathname } from 'next/navigation';

// ThemeProvider stub (bisa diganti dengan provider nyata, misal: next-themes)
const ThemeProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

// Navbar & Footer minimal
function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur sticky top-0 z-50 shadow-sm">
      <span className="font-bold text-xl tracking-tight">Zenotika</span>
      <div className="flex gap-4">
        <a href="/storefront" className="hover:underline">Home</a>
        <a href="#products" className="hover:underline">Products</a>
        <a href="#cart" className="hover:underline">Cart</a>
        <a href="#profile" className="hover:underline">Profile</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="w-full text-center py-6 text-gray-500 text-sm border-t mt-12 bg-white/80 backdrop-blur">
      &copy; {new Date().getFullYear()} Zenotika. All rights reserved.
    </footer>
  );
}

export const metadata = {
  title: 'Zenotika Storefront',
  description: 'Modern e-commerce platform built with Next.js, Supabase, Strapi, and more.',
};

export default function StorefrontLayout({ children }: { children: React.ReactNode }) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gradient-to-b from-white to-gray-100 min-h-screen">
        <ThemeProvider>
          <GlobalSWRProvider>
            <Navbar />
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
            <Footer />
          </GlobalSWRProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
// Next: Untuk micro-interaction, custom cursor, metaball hover, dsb, bisa dibuat komponen terpisah dan diimport di layout ini.
