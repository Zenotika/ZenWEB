// Product grid mock with SWR hook
// Next steps: Connect to Supabase or Strapi for real products

'use client';
import { useState, useRef, useCallback, useEffect } from 'react';

// Helper to fetch products with pagination and filters
const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
};

const PAGE_SIZE = 12;

export default function ProductGrid() {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loader = useRef<HTMLDivElement | null>(null);

  // Build API URL with query params
  const apiUrl = `/api/products?page=${page}&limit=${PAGE_SIZE}${category ? `&category=${category}` : ''}`;

  // Fetch products on page/category change
  useEffect(() => {
    let ignore = false;
    setLoading(true);
    fetcher(apiUrl).then((data) => {
      if (ignore) return;
      if (page === 1) {
        setProducts(data.products);
      } else {
        setProducts((prev) => [...prev, ...data.products]);
      }
      setHasMore(data.products.length === PAGE_SIZE);
      setLoading(false);
    }).catch(() => setLoading(false));
    return () => { ignore = true; };
  }, [apiUrl, page]);

  // Reset to first page on filter change
  useEffect(() => {
    setPage(1);
  }, [category]);

  // Infinite scroll observer
  useEffect(() => {
    if (!hasMore || loading) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    }, { threshold: 1 });
    if (loader.current) observer.observe(loader.current);
    return () => { if (loader.current) observer.unobserve(loader.current); };
  }, [hasMore, loading]);

  // Example categories (replace with real data)
  const categories = ['All', 'Electronics', 'Fashion', 'Books', 'Home'];

  // TODO: Replace with real error handling
  // TODO: Replace with real filter facets from API

  return (
    <div>
      {/* Filter Facets */}
      <div className="mb-4 flex gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-3 py-1 rounded-full border ${category === cat || (cat === 'All' && !category) ? 'bg-primary text-white' : 'bg-white text-gray-700'}`}
            onClick={() => setCategory(cat === 'All' ? '' : cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6" id="products">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow p-4 group relative overflow-hidden hover:scale-105 transition-transform cursor-pointer"
          >
            {/* Metaball/canvas hover effect placeholder */}
            <div className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              {/* TODO: metaball/canvas hover effect */}
            </div>
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-2" />
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-primary font-bold">Rp {product.price.toLocaleString()}</p>
            <span className="text-xs text-gray-400">{product.category}</span>
            {/* Add to Cart Button */}
            <button className="mt-2 w-full py-1 rounded bg-primary text-white hover:bg-primary/90 transition-colors">Add to Cart</button>
          </div>
        ))}
      </div>
      {/* Infinite Scroll Loader */}
      <div ref={loader} className="h-12 flex items-center justify-center">
        {loading && <span>Loading...</span>}
        {!hasMore && !loading && <span className="text-gray-400 text-sm">No more products</span>}
      </div>
    </div>
  );
}

// Next: Ganti fetcher dengan API nyata, tambahkan infinite scroll, filter, dan animasi hover/metaball.
