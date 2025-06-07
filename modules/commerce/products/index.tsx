// Product grid mock with SWR hook
// Next steps: Connect to Supabase or Strapi for real products

'use client';
import useSWR from 'swr';

// Contoh fetcher produk nyata (ganti dengan fetch ke Supabase/Strapi jika sudah siap)
const fetcher = async () => {
  // TODO: Ganti dengan fetch('/api/products').then(res => res.json()) untuk produk nyata
  return [
    { id: 1, name: 'Product One', price: 199000, image: '/placeholder1.jpg', category: 'T-shirt' },
    { id: 2, name: 'Product Two', price: 299000, image: '/placeholder2.jpg', category: 'Hoodie' },
    { id: 3, name: 'Product Three', price: 399000, image: '/placeholder3.jpg', category: 'Shoes' },
    { id: 4, name: 'Product Four', price: 499000, image: '/placeholder4.jpg', category: 'Bag' },
  ];
};

export default function ProductGrid() {
  const { data: products, error } = useSWR('products', fetcher);

  if (error) return <div>Failed to load products.</div>;
  if (!products) return <div>Loading...</div>;

  // TODO: Tambahkan infinite scroll & filter facets di sini
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6" id="products">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow p-4 hover:scale-105 transition-transform cursor-pointer">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-2" />
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-primary font-bold">Rp {product.price.toLocaleString()}</p>
          <span className="text-xs text-gray-400">{product.category}</span>
          {/* TODO: Add to cart button, hover animation, dsb */}
        </div>
      ))}
    </div>
  );
}

// Next: Ganti fetcher dengan API nyata, tambahkan infinite scroll, filter, dan animasi hover/metaball.
