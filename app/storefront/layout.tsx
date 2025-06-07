// Root layout for Next.js App Router in /app/storefront
import { GlobalSWRProvider } from '../../modules/infrastructure/cache';
import React from 'react';
import StorefrontClientLayout from './StorefrontClientLayout';

// ThemeProvider stub (bisa diganti dengan provider nyata, misal: next-themes)
const ThemeProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

// Navbar & Footer minimal
function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-5xl flex items-center justify-between px-8 py-4 bg-white/60 backdrop-blur-xl rounded-full shadow-xl border border-white/30">
      <span className="font-extrabold text-2xl tracking-tight text-primary drop-shadow">Zenotika</span>
      <div className="flex gap-6 text-lg font-medium">
        <a href="/storefront" className="hover:text-primary transition-colors">Home</a>
        <a href="#products" className="hover:text-primary transition-colors">Products</a>
        <a href="#cart" className="hover:text-primary transition-colors">Cart</a>
        <a href="#profile" className="hover:text-primary transition-colors">Profile</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90vw] max-w-3xl text-center py-2 text-gray-400 text-xs bg-white/50 backdrop-blur rounded-full shadow border border-white/20">
      &copy; {new Date().getFullYear()} Zenotika. All rights reserved.
    </footer>
  );
}

export const metadata = {
  title: 'Zenotika Storefront',
  description: 'Modern e-commerce platform built with Next.js, Supabase, Strapi, and more.',
};

export default function StorefrontLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans bg-gradient-to-b from-white to-gray-100 min-h-screen">
        <ThemeProvider>
          <GlobalSWRProvider>
            <Navbar />
            <StorefrontClientLayout>
              <div className="relative z-10 min-h-[70vh] flex flex-col justify-center">
                {children}
              </div>
            </StorefrontClientLayout>
            <Footer />
          </GlobalSWRProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
// Next: Untuk micro-interaction, custom cursor, metaball hover, dsb, bisa dibuat komponen terpisah dan diimport di layout ini.
