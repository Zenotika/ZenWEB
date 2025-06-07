// API route for fetching and managing orders
// Next steps: Connect to Supabase for order CRUD
import { NextResponse } from 'next/server';

export async function GET() {
  // TODO: Fetch orders from Supabase
  return NextResponse.json([
    { id: 1, status: 'pending', total: 199000 },
    { id: 2, status: 'shipped', total: 299000 },
  ]);
}

export async function POST(request: Request) {
  // TODO: Create new order in Supabase
  return NextResponse.json({ success: true, orderId: 123 });
}
