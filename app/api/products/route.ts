// API route for fetching products
// Next steps: Connect to Supabase or Strapi for real data
import { NextResponse } from 'next/server';

// Placeholder handler untuk produk
export async function GET() {
  // TODO: Ganti dengan fetch dari Supabase/Strapi
  return NextResponse.json([
    { id: 1, name: 'Product One', price: 199000, image: '/placeholder1.jpg', category: 'T-shirt' },
    { id: 2, name: 'Product Two', price: 299000, image: '/placeholder2.jpg', category: 'Hoodie' },
    { id: 3, name: 'Product Three', price: 399000, image: '/placeholder3.jpg', category: 'Shoes' },
    { id: 4, name: 'Product Four', price: 499000, image: '/placeholder4.jpg', category: 'Bag' },
  ]);
}
// Next: Implementasi fetch produk nyata dari Supabase/Strapi.
