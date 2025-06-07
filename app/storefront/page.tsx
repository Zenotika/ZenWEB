// Storefront homepage with hero section and dynamic Strapi content
// Next steps: Connect to Strapi API for banners and marketing content

import React from 'react';
import ProductGrid from '../../modules/commerce/products';

export default function StorefrontPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-indigo-100 to-white overflow-x-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-to-tr from-primary/20 via-indigo-200/20 to-white rounded-full blur-3xl opacity-80 animate-pulse" />
      </div>
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] w-full">
        <div className="backdrop-blur-2xl bg-white/60 border border-white/20 rounded-3xl shadow-2xl px-10 py-20 max-w-3xl mx-auto flex flex-col items-center">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-gray-900 mb-8 drop-shadow-xl leading-tight">
            Zenotika
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-10 font-light max-w-xl">
            Discover curated products, seamless checkout, and fast delivery.
          </p>
          {/* CTA Button */}
          <a href="#products" className="inline-block px-12 py-4 rounded-full bg-primary text-white font-bold text-2xl shadow-xl hover:bg-primary-dark transition-all duration-200">
            Shop Now
          </a>
        </div>
      </section>
      {/* Product Section */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 py-24" id="products">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 text-center tracking-tight drop-shadow">
          Our Products
        </h2>
        <ProductGrid />
      </section>
    </main>
  );
}

// Next: Implement Strapi API fetch and Framer Motion page transitions
