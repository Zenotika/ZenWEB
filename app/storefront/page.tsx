// Storefront homepage with hero section and dynamic Strapi content
// Next steps: Connect to Strapi API for banners and marketing content

import React from 'react';
import ProductGrid from '../../modules/commerce/products';

export default async function StorefrontPage() {
  // TODO: Fetch dynamic banners from Strapi CMS
  // Example: const banners = await fetchStrapiBanners();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <section className="py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Zenotika Store</h1>
        <p className="text-lg md:text-2xl text-gray-600 mb-8">Discover curated products, seamless checkout, and fast delivery.</p>
        {/* TODO: Render Strapi-driven banners here */}
        <div className="mt-8">
          {/* Placeholder for dynamic banners */}
          <div className="w-full h-40 bg-gray-200 rounded-lg animate-pulse" />
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <ProductGrid />
      </section>
    </main>
  );
}

// Next: Implement Strapi API fetch and Framer Motion page transitions
