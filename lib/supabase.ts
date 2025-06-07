// Supabase client setup for Next.js (SSR/CSR safe)
// Next steps: Fill in your SUPABASE_URL and SUPABASE_ANON_KEY in .env.local
// and extend typed helpers for auth, products, orders, etc.

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Example: Typed helper for fetching products
export async function fetchProducts() {
  const { data, error } = await supabase.from('products').select('*');
  if (error) throw error;
  return data;
}

// Next: Add typed helpers for auth, orders, cart, etc.
