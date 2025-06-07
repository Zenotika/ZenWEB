// API route for fetching products
// Next steps: Connect to Supabase or Strapi for real data
import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

// Placeholder handler untuk produk
export async function GET(request: Request) {
  // Parse query params
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '12', 10);
  const category = searchParams.get('category') || '';
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase.from('products').select('*', { count: 'exact' }).range(from, to);
  if (category) {
    query = query.eq('category', category);
  }
  const { data, error, count } = await query;
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ products: data || [], total: count || 0 });
}
// Now this endpoint supports real Supabase data, pagination, and category filtering.
