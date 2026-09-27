"use client";

import Image from "next/image";
import styles from "./ProductTheme.module.css";
import Link from "next/link";
import { ChevronDown, ChevronLeft, ChevronRight, Grid2X2, Heart, List, ShoppingCart, SlidersHorizontal, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import products from "@/data/products.json";
import { useCart } from "@/components/cart/CartContext";

const categories = ["All", "Carpets", "Laminate Flooring", "Parquet", "SPC Flooring", "Rugs", "Doormats", "Mattresses", "Artificial Grass"];
const descriptions: Record<string, string> = {
  All: "Explore premium flooring, rugs and interior surfaces selected for beautiful everyday spaces.",
  Carpets: "Soft, comfortable carpets designed to bring warmth and quiet luxury into your rooms.",
  "Laminate Flooring": "Discover durable, beautiful laminate flooring with the authentic character of natural wood.",
  Parquet: "Timeless wood patterns and refined finishes crafted to elevate distinctive interiors.",
  "SPC Flooring": "Water-resistant, durable flooring built for busy homes and commercial spaces.",
  Rugs: "Beautiful rugs that add texture, comfort and personality to every room.",
  Doormats: "Practical, welcoming designs made to protect your floors from the first step.",
  Mattresses: "Supportive, comfortable mattresses selected to help you rest and recharge every night.",
  "Artificial Grass": "Fresh-looking, low-maintenance surfaces for balconies, gardens and outdoor spaces.",
};

export default function ProductsSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { addToCart } = useCart();
  const modelQuery = searchParams.get("q")?.trim() || "";
  const requestedCategory = searchParams.get("category") || "All";
  const category = categories.includes(requestedCategory) ? requestedCategory : "All";
  const [sort, setSort] = useState("featured");
  const [maxPrice, setMaxPrice] = useState(15000);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const collection = useMemo(() => {
    const flooring = products.filter((product) => product.id >= 21 && product.price <= maxPrice);
    const filtered = category === "All" ? flooring : flooring.filter((product) => product.category === category);
    return filtered.filter((product) => !modelQuery || product.name.toLowerCase().includes(modelQuery.toLowerCase())).sort((a, b) => sort === "price-low" ? a.price - b.price : sort === "price-high" ? b.price - a.price : sort === "rating" ? b.rating - a.rating : a.id - b.id);
  }, [category, maxPrice, sort, modelQuery]);

  const perPage = 8;
  const totalPages = Math.max(1, Math.ceil(collection.length / perPage));
  const visibleProducts = collection.slice((page - 1) * perPage, page * perPage);

  const chooseCategory = (nextCategory: string) => {
    setPage(1); setFiltersOpen(false);
    router.replace(nextCategory === "All" ? "/products" : `/products?category=${encodeURIComponent(nextCategory)}`, { scroll: false });
  };

  const toggleFavorite = (id: number) => setFavorites((current) => {
    const next = new Set(current);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    return next;
  });

  return (
    <div className={styles.catalog} id="product-collection">
      <section className={styles.collectionIntro}>
        <div className="mx-auto max-w-[1440px] px-5 py-9 sm:px-8 sm:py-11 lg:px-10">
          <nav className="flex items-center gap-2 text-[10px] text-[#000000]" aria-label="Breadcrumb"><Link href="/">Home</Link><span>›</span><Link href="/products">Shop</Link>{category !== "All" && <><span>›</span><span className="text-[#000000]">{category}</span></>}</nav>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-.035em] text-[#000000] sm:text-4xl">{category === "All" ? "All Products" : category}</h2>
          <p className="mt-2 max-w-xl text-xs leading-5 text-[#000000] sm:text-sm">{descriptions[category]}</p>
          {modelQuery && <p className="mt-3 text-sm text-black">Results for <strong>{modelQuery}</strong> <Link href="/products?category=Mattresses" className="ml-3 underline">View all mattresses</Link></p>}
        </div>
      </section>

      <div className={styles.catalogBody}>
        <button type="button" onClick={() => setFiltersOpen(!filtersOpen)} className="mb-4 flex w-full items-center justify-center gap-2 rounded border border-[#e5e5e5] py-3 text-xs font-bold text-[#000000] lg:hidden"><SlidersHorizontal size={16} /> Filters</button>
        <div className={styles.catalogLayout}>
          <aside className={`${filtersOpen ? "block" : "hidden"} ${styles.filters} lg:block`}>
            <h2 className="border-b border-[#e5e5e5] pb-3 text-xs font-extrabold uppercase text-[#000000]">Filter by</h2>
            <div className="py-4"><h3 className="mb-3 flex items-center justify-between text-[10px] font-extrabold uppercase text-[#000000]">Category <ChevronDown size={13} /></h3><div className="space-y-2.5">{categories.map((item) => <label key={item} className="flex cursor-pointer items-center justify-between gap-2 text-[11px] text-[#000000]"><span className="flex items-center gap-2"><input type="radio" name="category" checked={category === item} onChange={() => chooseCategory(item)} className="accent-[#000000]" />{item}</span><span className="text-[9px] text-[#000000]">({item === "All" ? products.filter((p) => p.id >= 21).length : products.filter((p) => p.category === item).length})</span></label>)}</div></div>
            <div className="border-t border-[#e5e5e5] py-4"><h3 className="mb-3 text-[10px] font-extrabold uppercase text-[#000000]">Price range</h3><input type="range" min="2000" max="15000" step="500" aria-label="Maximum price" value={maxPrice} onChange={(event) => { setMaxPrice(Number(event.target.value)); setPage(1); }} className="w-full accent-[#000000]" /><div className="mt-2 flex justify-between text-[9px] text-[#000000]"><span>Rs. 2,000</span><span>Rs. {maxPrice.toLocaleString()}</span></div></div>
            <button type="button" onClick={() => { chooseCategory("All"); setMaxPrice(15000); }} className="w-full rounded border border-[#000000] py-2.5 text-[10px] font-bold uppercase text-[#000000] transition hover:bg-[#000000] hover:text-white">Clear all</button>
          </aside>

          <div>
            <div className={styles.toolbar}>
              <p className="text-xs text-[#000000]"><b className="text-[#000000]">{collection.length}</b> products found</p>
              <div className="flex items-center gap-2"><label className="text-[10px] text-[#000000]" htmlFor="product-sort">Sort by:</label><select id="product-sort" value={sort} onChange={(event) => { setSort(event.target.value); setPage(1); }} className="h-9 rounded border border-[#e5e5e5] bg-white px-3 text-[10px] text-[#000000] outline-none focus:border-[#000000]"><option value="featured">Featured</option><option value="rating">Top rated</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select><button onClick={() => setView("grid")} aria-label="Grid view" aria-pressed={view === "grid"} className={`grid h-9 w-9 place-items-center rounded border ${view === "grid" ? "border-[#000000] text-[#000000]" : "border-[#e5e5e5] text-[#000000]"}`}><Grid2X2 size={15} /></button><button onClick={() => setView("list")} aria-label="List view" aria-pressed={view === "list"} className={`grid h-9 w-9 place-items-center rounded border ${view === "list" ? "border-[#000000] text-[#000000]" : "border-[#e5e5e5] text-[#000000]"}`}><List size={16} /></button></div>
            </div>

            {visibleProducts.length ? <div className={view === "grid" ? "grid grid-cols-2 gap-x-5 gap-y-10 xl:grid-cols-3" : "grid gap-4"}>{visibleProducts.map((product, index) => <article key={product.id} className={`${styles.card} group ${view === "list" ? "grid grid-cols-[140px_1fr] sm:grid-cols-[220px_1fr]" : ""}`}><div className={`relative overflow-hidden bg-[#f7f7f7] ${view === "grid" ? "aspect-[1.25]" : "min-h-[170px]"}`}><Link href={`/product/${product.id}`}><Image src={product.image} alt={product.name} fill sizes={view === "grid" ? "(max-width: 768px) 50vw, 25vw" : "220px"} className="object-cover transition duration-500 group-hover:scale-105" /></Link>{index === 0 && <span className="absolute left-2 top-2 rounded-sm bg-[#000000] px-2 py-1 text-[8px] font-bold uppercase text-white">Best seller</span>}</div><div className="flex flex-col p-3 sm:p-4"><p className="text-[9px] font-bold uppercase tracking-[.08em] text-[#000000]">{product.category}</p><Link href={`/product/${product.id}`}><h2 className="mt-1 line-clamp-2 text-base font-medium text-[#000000] sm:text-sm">{product.name}</h2></Link>{view === "list" && <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#000000]">Premium quality flooring selected for durability, comfort and timeless style in everyday spaces.</p>}<p className={styles.price}>Rs. {product.price.toLocaleString()}</p><div className="mt-auto flex items-center justify-between pt-3"><div className="flex text-[#000000]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={10} fill={i < product.rating ? "currentColor" : "none"} />)}</div><div className="flex gap-1.5"><button onClick={() => toggleFavorite(product.id)} aria-label={favorites.has(product.id) ? "Remove from wishlist" : "Add to wishlist"} aria-pressed={favorites.has(product.id)} className={`grid h-8 w-8 place-items-center rounded border border-[#e5e5e5] ${favorites.has(product.id) ? "text-[#000000]" : "text-[#000000]"}`}><Heart size={14} fill={favorites.has(product.id) ? "currentColor" : "none"} /></button><button onClick={() => addToCart(product)} aria-label={`Add ${product.name} to cart`} className="grid h-8 w-8 place-items-center rounded bg-[#000000] text-white transition hover:bg-[#000000]"><ShoppingCart size={14} /></button></div></div></div></article>)}</div> : <div className="rounded-lg border border-dashed border-[#e5e5e5] py-16 text-center text-sm text-[#000000]">{modelQuery ? "This mattress is not listed online yet. Contact us for availability." : "No products match these filters."}{modelQuery && <Link href="/contact" className="mt-4 block font-semibold text-black underline">Enquire about this mattress</Link>}</div>}

            {totalPages > 1 && <nav className="mt-8 flex justify-center gap-2" aria-label="Product pagination"><button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1} className="grid h-9 w-9 place-items-center rounded border border-[#e5e5e5] text-[#000000] disabled:opacity-35"><ChevronLeft size={15} /></button>{Array.from({ length: totalPages }).map((_, index) => <button key={index} onClick={() => setPage(index + 1)} className={`h-9 min-w-9 rounded border px-2 text-xs font-bold ${page === index + 1 ? "border-[#000000] bg-[#000000] text-white" : "border-[#e5e5e5] text-[#000000]"}`}>{index + 1}</button>)}<button onClick={() => setPage(Math.min(totalPages, page + 1))} disabled={page === totalPages} className="grid h-9 w-9 place-items-center rounded border border-[#e5e5e5] text-[#000000] disabled:opacity-35"><ChevronRight size={15} /></button></nav>}
          </div>
        </div>
      </div>
    </div>
  );
}
