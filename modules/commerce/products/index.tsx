// Product grid mock with SWR hook
// Next steps: Connect to Supabase or Strapi for real products

'use client';
import { useState, useRef, useCallback, useEffect } from 'react';
import ProductCard from './ProductCard';

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
    <div className="w-full">
      {/* Filter Facets */}
      <div className="mb-8 flex flex-wrap gap-3 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-5 py-2 rounded-full border font-semibold shadow-sm backdrop-blur-md transition-all duration-150 ${category === cat || (cat === 'All' && !category) ? 'bg-primary text-white shadow-lg' : 'bg-white/70 text-gray-700 hover:bg-primary/10'}`}
            onClick={() => setCategory(cat === 'All' ? '' : cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div className="relative">
            <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-br from-primary/10 to-white blur-xl opacity-60 scale-95 group-hover:scale-100 transition-transform" />
            <ProductCard key={product.id} product={product} onAddToCart={() => {/* TODO: Integrate cart logic */}} />
          </div>
        ))}
      </div>
      {/* Infinite Scroll Loader */}
      <div ref={loader} className="h-16 flex items-center justify-center mt-8">
        {loading && <span className="text-primary font-semibold animate-pulse">Loading...</span>}
        {!hasMore && !loading && <span className="text-gray-400 text-sm">No more products</span>}
      </div>
    </div>
  );
}

// Next: Ganti fetcher dengan API nyata, tambahkan infinite scroll, filter, dan animasi hover/metaball.
