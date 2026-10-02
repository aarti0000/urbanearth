"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownUp, ChevronLeft, ChevronRight, ShoppingCart, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import products from "@/data/products.json";
import { useCart } from "@/components/cart/CartContext";
import ShopHero from "./ShopHero";
import MattressCollections, { mattressCollections } from "./MattressCollections";
import styles from "./Catalog.module.css";

const categories = Array.from(new Set([...products.map((product) => product.category), "Carpets & Rugs", "Furniture"]));
const priceCeiling = Math.ceil(Math.max(...products.map((product) => product.price)) / 1000) * 1000;
const money = (price: number) => `Rs. ${price.toLocaleString("en-IN")}`;

export default function ProductsSection() {
  const router = useRouter();
  const params = useSearchParams();
  const { addToCart } = useCart();
  const requested = params.get("category") || "All";
  const category = categories.includes(requested) ? requested : "All";
  const requestedCollection = params.get("collection") || "";
  const mattressCollection = category === "Mattresses" && mattressCollections.some((name) => name === requestedCollection) ? requestedCollection : "";
  const query = params.get("q")?.trim() || "";
  const requestedPrice = Number(params.get("maxPrice") ?? priceCeiling);
  const maxPrice = Number.isFinite(requestedPrice) ? Math.max(0, Math.min(priceCeiling, requestedPrice)) : priceCeiling;
  const sort = params.get("sort") || "featured";
  const update = (values: Record<string, string | null>) => {
    const next = new URLSearchParams(params.toString());
    if (!("page" in values)) next.delete("page");
    Object.entries(values).forEach(([key, value]) => value === null ? next.delete(key) : next.set(key, value));
    router.replace(`/products${next.size ? `?${next}` : ""}`, { scroll: false });
  };
  const collection = products.filter((product) =>
    (category === "All" || product.category === category || (category === "Carpets & Rugs" && ["Carpets", "Rugs"].includes(product.category))) &&
    (!mattressCollection || product.collection === mattressCollection) &&
    product.price <= maxPrice &&
    (!query || product.name.toLowerCase().includes(query.toLowerCase()))
  ).sort((a, b) => {
    if (sort === "rating") return b.rating - a.rating;
    if (sort === "name") return a.name.localeCompare(b.name);
    if (sort === "price-low" || sort === "price-high") {
      if (!a.price || !b.price) return Number(!a.price) - Number(!b.price);
      return sort === "price-low" ? a.price - b.price : b.price - a.price;
    }
    return a.id - b.id;
  });
  const totalPages = Math.max(1, Math.ceil(collection.length / 12));
  const requestedPage = Number(params.get("page") || 1);
  const page = Number.isFinite(requestedPage) ? Math.max(1, Math.min(totalPages, Math.floor(requestedPage))) : 1;
  const visible = collection.slice((page - 1) * 12, page * 12);
  const filtered = category !== "All" || maxPrice < priceCeiling || !!query;

  return <div className={styles.catalog}>
    <ShopHero category={category} />
    <div className={styles.body} id="product-collection">
      <section className={styles.filters} aria-label="Product filters">
        <div className={styles.filterHeading}><h2><span aria-hidden="true">—</span> Refine results</h2><span>{filtered ? "Filtered" : "All collections"}</span></div>
        <div className={styles.filterContent}>
          <div className={styles.priceFilter}>
            <div><label htmlFor="maximum-price">Price</label><output htmlFor="maximum-price">{money(0)} — {money(maxPrice)}</output></div>
            <input id="maximum-price" type="range" min={0} max={priceCeiling} step={100} value={maxPrice} onChange={(event) => update({ maxPrice: Number(event.target.value) === priceCeiling ? null : event.target.value })} />
            <small>Enquiry-only products included</small>
          </div>
          <div className={styles.collections}><h3>Collections</h3><div className={styles.chips}>
            {["All", ...categories].map((item) => <button type="button" key={item} aria-pressed={category === item} onClick={() => update({ category: item === "All" ? null : item, q: null, collection: null, maxPrice: null })}>{item}</button>)}
          </div></div>
          <button type="button" className={styles.clear} disabled={!filtered} onClick={() => update({ category: null, q: null, maxPrice: null, collection: null })}><X size={12} /> Clear</button>
        </div>
      </section>
      {category === "Mattresses" && <MattressCollections selected={mattressCollection} onSelect={(collection) => update({ collection: collection || null, q: null, maxPrice: null })} />}
      {query && <p className={styles.search}>Results for “{query}” <button onClick={() => update({ q: null })}>Clear search <X size={12} /></button></p>}
      <div className={styles.toolbar}>
        <p role="status" aria-live="polite"><b>{collection.length}</b> {mattressCollection ? `${mattressCollection} series` : category === "All" ? "All products" : category}</p>
        <div className={styles.sort}><ArrowDownUp size={14} aria-hidden="true" /><label className="sr-only" htmlFor="product-sort">Sort products</label><select id="product-sort" value={sort} onChange={(event) => update({ sort: event.target.value })}><option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="rating">Top rated</option><option value="name">Name: A to Z</option></select></div>
      </div>
      {visible.length ? <div className={styles.grid}>{visible.map((product) => <article key={product.id} className={styles.card}>
        <Link href={`/product/${product.id}`} className={styles.image}><Image src={product.image} alt={product.name} fill sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 260px" /></Link>
        <div className={styles.cardCopy}><p className={styles.category}>{product.collection ? `${product.collection} series` : product.category}</p><Link href={`/product/${product.id}`}><h2>{product.name}</h2></Link>{product.size && <p className={styles.size}>{product.size}</p>}<p className={styles.price}>{product.price > 0 ? money(product.price) : "Contact for price"}</p>
          {product.price > 0 ? <button className={styles.cart} onClick={() => addToCart(product)} aria-label={`Add ${product.name} to cart`}><ShoppingCart size={13} /> Add to cart</button> : <Link className={styles.cart} href={`/product/${product.id}`}>View details ?</Link>}
        </div>
      </article>)}</div> : <div className={styles.empty}><h2>{mattressCollection ? `${mattressCollection} collection` : "No products match your filters"}</h2><p>{mattressCollection ? "No mattresses are currently listed in this collection. Our team can help you explore the options." : "Try another collection or increase the price range."}</p><button onClick={() => update({ category: category === "Mattresses" ? "Mattresses" : null, q: null, maxPrice: null, collection: null })}>{category === "Mattresses" ? "View all mattresses" : "Clear filters"}</button>{(query || mattressCollection) && <Link href="/contact">Contact us for availability</Link>}</div>}
      {totalPages > 1 && <nav className={styles.pagination} aria-label="Product pagination"><button aria-label="Previous page" disabled={page === 1} onClick={() => update({ page: String(page - 1) })}><ChevronLeft size={16} /></button>{Array.from({ length: totalPages }, (_, index) => <button key={index} aria-current={page === index + 1 ? "page" : undefined} onClick={() => update({ page: String(index + 1) })}>{index + 1}</button>)}<button aria-label="Next page" disabled={page === totalPages} onClick={() => update({ page: String(page + 1) })}><ChevronRight size={16} /></button></nav>}
    </div>
  </div>;
}
