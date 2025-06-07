// Product grid mock with SWR hook
// Next steps: Connect to Supabase or Strapi for real products

'use client';
import useSWR from 'swr';

// Mock fetcher (replace with real API call)
const fetcher = async () => [
  { id: 1, name: 'Product One', price: 199000, image: '/placeholder1.jpg' },
  { id: 2, name: 'Product Two', price: 299000, image: '/placeholder2.jpg' },
];

export default function ProductGrid() {
  const { data: products, error } = useSWR('products', fetcher);

  if (error) return <div>Failed to load products.</div>;
  if (!products) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow p-4">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-2" />
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-primary font-bold">Rp {product.price.toLocaleString()}</p>
          {/* TODO: Add to cart button, hover animation, etc. */}
        </div>
      ))}
    </div>
  );
}

// Next: Replace mock with SWR fetch from Supabase/Strapi, add filters, and Framer Motion animations
