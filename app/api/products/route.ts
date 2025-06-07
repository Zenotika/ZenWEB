// API route for fetching products
// Next steps: Connect to Supabase or Strapi for real data
import { NextResponse } from 'next/server';

export async function GET() {
  // TODO: Fetch products from Supabase or Strapi
  return NextResponse.json([
    { id: 1, name: 'Product One', price: 199000 },
    { id: 2, name: 'Product Two', price: 299000 },
  ]);
}
