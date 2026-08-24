"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Headphones, ShieldCheck, ShoppingCart, Star, Truck, Wrench } from "lucide-react";
import { useRef } from "react";
import products from "@/data/products.json";
import { useCart } from "@/components/CartContext";

type Product = (typeof products)[number];

function ProductShelf({ title, items, featured = false }: { title: string; items: Product[]; featured?: boolean }) {
  const slider = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();
  const move = (direction: number) => slider.current?.scrollBy({ left: direction * slider.current.clientWidth * 0.78, behavior: "smooth" });

  return (
    <section className="py-7 sm:py-9">
      <div className="mb-5 flex items-end justify-between border-b border-[#e7ebef] pb-3">
        <h2 className="text-xl font-extrabold uppercase tracking-[-0.02em] text-[#062f64] sm:text-2xl">{title}<span className="mt-2 block h-0.5 w-12 bg-[#ff6600]" /></h2>
        <Link href="/products" className="hidden items-center gap-1 text-[11px] font-bold text-[#ff6600] sm:flex">View all products <ArrowRight size={14} /></Link>
      </div>
      <div className="relative">
        <button onClick={() => move(-1)} aria-label={`Previous ${title}`} className="absolute -left-3 top-[38%] z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-[#dfe5eb] bg-white text-[#063f82] shadow-md hover:text-[#ff6600]"><ChevronLeft size={18} /></button>
        <div ref={slider} className="flex snap-x gap-3 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-4">
          {items.map((product, index) => (
            <article key={product.id} className="group w-[72%] flex-none snap-start overflow-hidden rounded-md border border-[#e0e5ea] bg-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(6,63,130,.1)] min-[480px]:w-[47%] md:w-[31.5%] lg:w-[calc((100%-4rem)/5)]">
              <div className="relative aspect-[1.35] overflow-hidden bg-[#eef1f3]">
                <Link href={`/product/${product.id}`}><Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 72vw, (max-width: 1024px) 32vw, 19vw" className="object-cover transition duration-500 group-hover:scale-105" /></Link>
                {featured && index === 0 && <span className="absolute left-2 top-2 rounded-sm bg-[#ff6600] px-2 py-1 text-[8px] font-extrabold uppercase text-white">Best seller</span>}
                <button type="button" onClick={() => addToCart(product)} aria-label={`Add ${product.name} to cart`} title="Add to cart" className="absolute right-2 top-2 z-10 grid h-9 w-9 place-items-center rounded-full bg-white text-[#063f82] shadow-[0_4px_14px_rgba(0,0,0,.2)] transition hover:bg-[#ff6600] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6600]"><ShoppingCart size={17} /></button>
              </div>
              <div className="p-3">
                <Link href={`/product/${product.id}`}><h3 className="line-clamp-1 text-[13px] font-bold text-[#202733] hover:text-[#063f82]">{product.name}</h3></Link>
                <p className="mt-1 text-[10px] text-[#77818c]">{product.category}</p>
                <p className="mt-2 text-xs font-extrabold text-[#ff6600]">Rs. {product.price.toLocaleString()}</p>
                <div className="mt-1 flex items-center gap-0.5 text-[#ff6600]" aria-label={`${product.rating} out of 5 stars`}>{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={10} fill={i < product.rating ? "currentColor" : "none"} />)}</div>
              </div>
            </article>
          ))}
        </div>
        <button onClick={() => move(1)} aria-label={`Next ${title}`} className="absolute -right-3 top-[38%] z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-[#dfe5eb] bg-white text-[#063f82] shadow-md hover:text-[#ff6600]"><ChevronRight size={18} /></button>
      </div>
    </section>
  );
}

const benefits = [[Truck, "Free delivery", "Across Nepal"], [ShieldCheck, "Quality guaranteed", "100% premium products"], [Wrench, "Professional installation", "Expert installation services"], [Headphones, "Customer support", "Helpful, personal advice"]] as const;

export default function FeaturedProducts() {
  const collection = products.filter((p) => p.id >= 21);
  return (
    <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
      <ProductShelf title="Featured products" items={collection.slice(0, 8)} featured />
      <div className="grid grid-cols-2 rounded-lg bg-[#f5f7f9] lg:grid-cols-4">
        {benefits.map(([Icon, title, text], i) => <div key={title} className={`flex items-center gap-3 px-3 py-4 sm:px-5 ${i % 2 ? "border-l border-[#dfe4e9]" : ""} ${i > 1 ? "border-t border-[#dfe4e9] lg:border-t-0" : ""} ${i > 0 ? "lg:border-l" : ""}`}><Icon size={25} className="shrink-0 text-[#063f82]" strokeWidth={1.6} /><div><p className="text-[10px] font-extrabold uppercase text-[#063f82]">{title}</p><p className="mt-0.5 text-[9px] text-[#697582]">{text}</p></div></div>)}
      </div>
      <ProductShelf title="Best selling products" items={collection.slice(7, 15)} />
    </div>
  );
}
