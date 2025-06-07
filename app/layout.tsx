// Root layout for the entire Next.js App Router (required for /app/page.tsx)
import '../styles/globals.css';
import React from 'react';

export const metadata = {
  title: 'Zenotika',
  description: 'Modern e-commerce platform built with Next.js, Supabase, Strapi, and more.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-white to-gray-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
