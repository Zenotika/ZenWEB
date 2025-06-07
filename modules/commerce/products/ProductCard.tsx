// ProductCard.tsx
// Modular product card with Framer Motion and hover effect
import { motion } from 'framer-motion';
import React from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

export default function ProductCard({ product, onAddToCart }: { product: Product; onAddToCart?: (product: Product) => void }) {
  return (
    <div className="group relative bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 flex flex-col items-center transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 hover:scale-105 min-h-[340px]">
      {/* Metaball/canvas hover effect placeholder */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        {/* TODO: metaball/canvas hover effect */}
      </div>
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-2xl mb-6 shadow-lg bg-gray-100" />
      <h3 className="font-extrabold text-xl text-gray-900 mb-2 text-center truncate w-full drop-shadow">{product.name}</h3>
      <p className="text-primary font-bold text-2xl mb-2">Rp {product.price.toLocaleString()}</p>
      <span className="text-xs text-gray-400 mb-6">{product.category}</span>
      {/* Add to Cart Button */}
      <button
        className="mt-auto w-full py-3 rounded-full bg-primary text-white font-bold shadow-lg hover:bg-primary-dark transition-colors text-lg"
        onClick={() => onAddToCart && onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
