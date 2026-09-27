"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import styles from "@/components/products/ProductTheme.module.css";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Expand,
  Flame,
  Headphones,
  Leaf,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Truck,
  Wrench,
} from "lucide-react";
import { useCart } from "@/components/cart/CartContext";
import products from "@/data/products.json";

const benefits = [
  { icon: Droplets, text: "Water resistant" },
  { icon: Flame, text: "Fire resistant" },
  { icon: ShieldCheck, text: "Scratch resistant" },
  { icon: Leaf, text: "Eco friendly" },
  { icon: Wrench, text: "Easy installation" },
  { icon: Sparkles, text: "Made for everyday living" },
];

const serviceItems = [
  { icon: Truck, title: "FREE Delivery Across Nepal", detail: "Estimated delivery: 2 – 4 working days" },
  { icon: Wrench, title: "Expert Installation Available", detail: "Professional installation service" },
  { icon: RotateCcw, title: "10 Days Easy Return", detail: "Hassle-free return & refund" },
  { icon: LockKeyhole, title: "Secure Payment", detail: "100% secure and protected checkout" },
];

export default function ProductSlugPage() {
  const { addToCart } = useCart();
  const params = useParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);
  const product = products.find((item) => String(item.id) === String(params.slug));

  if (!product) {
    return (
      <main className="min-h-[55vh] bg-[#f7f7f7] px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-[#000000]">Product Not Found</h1>
        <Link href="/products" className="mt-6 inline-flex rounded-md bg-[#000000] px-6 py-3 text-sm font-semibold text-white">Back to Products</Link>
      </main>
    );
  }

  const gallery = [product.image, product.image, product.image, product.image];
  const urbanEarthProducts = products.filter((item) => item.id >= 21);
  const related = urbanEarthProducts
    .filter((item) => item.id !== product.id)
    .sort((a, b) => {
      const aMatchesCategory = a.category === product.category ? 1 : 0;
      const bMatchesCategory = b.category === product.category ? 1 : 0;
      return bMatchesCategory - aMatchesCategory;
    })
    .slice(0, 5);
  const addSelectedQuantity = () => {
    for (let index = 0; index < quantity; index += 1) addToCart(product);
    setAdded(true);
  };
  const buyNow = () => {
    addSelectedQuantity();
    router.push("/checkout");
  };

  return (
    <main className={styles.detail}>
      <div className="mx-auto max-w-[1400px]">
        <nav className="flex flex-wrap items-center gap-2.5 text-xs text-[#000000] sm:text-sm" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#000000]">Home</Link><span>›</span><Link href="/products" className="hover:text-[#000000]">Shop</Link><span>›</span><Link href={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-[#000000]">{product.category}</Link><span>›</span><span className="text-[#000000]">{product.name}</span>
        </nav>

        <div className={styles.detailLayout}>
          <section className="grid min-w-0 gap-3 sm:grid-cols-[92px_minmax(0,1fr)]" aria-label="Product gallery">
            <div className="order-2 flex gap-3 overflow-x-auto sm:order-1 sm:flex-col">
              {gallery.map((image, index) => (
                <button key={index} onClick={() => setSelectedImage(index)} aria-label={`View product image ${index + 1}`} className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-[#f7f7f7] sm:h-[82px] sm:w-[92px] ${selectedImage === index ? "ring-2 ring-[#000000] ring-offset-2" : "border border-[#e5e5e5]"}`}>
                  <Image src={image} alt="" fill sizes="92px" className={`object-cover ${index === 1 ? "scale-110" : index === 2 ? "scale-125" : index === 3 ? "scale-150" : ""}`} />
                </button>
              ))}
            </div>
            <div className="order-1 relative min-h-[420px] overflow-hidden rounded-lg bg-[#f7f7f7] sm:order-2 sm:min-h-[620px]">
              <Image src={gallery[selectedImage]} alt={product.name} fill priority sizes="(max-width: 640px) 100vw, 510px" className={`object-cover transition-transform duration-500 ${selectedImage === 1 ? "scale-110" : selectedImage === 2 ? "scale-125" : selectedImage === 3 ? "scale-150" : ""}`} />
              <button aria-label="Expand image" className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow"><Expand size={18} /></button>
              <button onClick={() => setSelectedImage((selectedImage + gallery.length - 1) % gallery.length)} aria-label="Previous image" className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow"><ChevronLeft size={22} /></button>
              <button onClick={() => setSelectedImage((selectedImage + 1) % gallery.length)} aria-label="Next image" className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow"><ChevronRight size={22} /></button>
            </div>
          </section>

          <section className={styles.detailCopy}>
            <span className="inline-flex rounded-full bg-[#f7f7f7] px-3 py-1 text-xs font-semibold text-[#000000]">Best Seller</span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight lg:text-[34px]">{product.name}</h1>
            <p className="mt-1.5 text-sm text-[#000000]">{product.category}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
              <span className="flex text-[#000000]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill={i < product.rating ? "currentColor" : "none"} />)}</span>
              <span>{product.rating}.0 (128 reviews)</span><span className="mx-1 h-5 w-px bg-[#e5e5e5]" /><span>Sold 450+</span>
            </div>
            <div className="mt-6"><strong className="text-3xl">Rs. {product.price.toLocaleString()}</strong><span className="ml-2 text-lg">/ piece</span></div>
            <p className="mt-1 text-sm text-[#000000]">Premium quality, carefully selected</p>
            <p className="mt-4 flex items-center gap-2 text-sm font-medium text-black"><span className="h-2.5 w-2.5 rounded-full bg-[#000000]" /> In Stock</p>
            <p className="mt-5 border-t border-[#e5e5e5] pt-5 text-sm leading-6 text-[#000000]">{product.name} brings warmth, character and timeless style to your space. Designed for everyday use with a durable finish and premium quality.</p>
            <div className="mt-5 grid grid-cols-1 gap-x-4 gap-y-4 border-y border-[#e5e5e5] py-5 sm:grid-cols-2">
              {benefits.map(({ icon: Icon, text }) => <div key={text} className="flex items-center gap-3 text-xs"><Icon size={17} strokeWidth={1.7} />{text}</div>)}
            </div>
            <dl className="mt-5 grid grid-cols-[105px_1fr] gap-y-2 text-xs sm:text-sm">
              <dt className="font-semibold">Material:</dt><dd>Premium grade</dd><dt className="font-semibold">Finish:</dt><dd>Durable protective finish</dd><dt className="font-semibold">Size:</dt><dd>Standard size</dd><dt className="font-semibold">Warranty:</dt><dd>Manufacturer warranty included</dd>
            </dl>
          </section>

          <aside className={styles.purchasePanel}>
            <div><strong className="text-3xl">Rs. {product.price.toLocaleString()}</strong><span className="ml-1">/ piece</span></div>
            <p className="mt-1 text-sm text-[#000000]">Taxes included</p>
            <p className="mt-6 text-sm font-semibold">Quantity</p>
            <div className="mt-3 flex items-center gap-4">
              <div className="flex h-11 items-center overflow-hidden rounded-md border border-[#e5e5e5]"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="h-full w-11 text-lg hover:bg-[#f7f7f7]">−</button><span className="flex h-full w-16 items-center justify-center border-x border-[#e5e5e5] font-semibold">{quantity}</span><button onClick={() => setQuantity(quantity + 1)} className="h-full w-11 text-lg hover:bg-[#f7f7f7]">+</button></div>
              <span className="text-sm">= {quantity} {quantity === 1 ? "item" : "items"}</span>
            </div>
            <button onClick={addSelectedQuantity} className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#000000] text-sm font-semibold text-white transition hover:bg-[#000000]"><ShoppingCart size={18} />{added ? "Added to Cart" : "Add to Cart"}</button>
            <button onClick={buyNow} className="mt-3 h-11 w-full rounded-md border border-[#a3a3a3] text-sm font-semibold transition hover:border-[#000000] hover:text-[#000000]">Buy Now</button>
            <div className="mt-6 space-y-5 border-t border-[#e5e5e5] pt-6">
              {serviceItems.map(({ icon: Icon, title, detail }) => <div key={title} className="flex gap-3"><Icon className="mt-0.5 shrink-0" size={20} strokeWidth={1.7} /><div><p className="text-xs font-semibold">{title}</p><p className="mt-1 text-xs text-[#000000]">{detail}</p></div></div>)}
            </div>
            <p className="mt-7 border-t border-[#e5e5e5] pt-5 text-xs"><strong>Need Help?</strong> Call us at +977 9800000000</p>
          </aside>
        </div>

        <section className="mt-10 grid gap-4 rounded-lg border border-[#f7f7f7] bg-[#f7f7f7] px-6 py-5 sm:grid-cols-2 lg:grid-cols-4">
          {[{ icon: Truck, title: "FREE DELIVERY", text: "Across Nepal" }, { icon: Wrench, title: "EXPERT INSTALLATION", text: "Professional & Reliable" }, { icon: ShieldCheck, title: "PREMIUM QUALITY", text: "Built to Last" }, { icon: Headphones, title: "CUSTOMER SATISFACTION", text: "Our Top Priority" }].map(({ icon: Icon, title, text }) => <div key={title} className="flex items-center gap-4 lg:border-r lg:border-[#e5e5e5] lg:last:border-0"><Icon size={30} strokeWidth={1.6} /><div><p className="text-xs font-bold">{title}</p><p className="mt-1 text-sm">{text}</p></div></div>)}
        </section>

        <section className="mt-8 pb-8">
          <h2 className="text-2xl font-bold">You May Also Like</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {related.map((item) => <Link key={item.id} href={`/product/${item.id}`} className="group flex min-w-0 items-center gap-3 rounded-lg border border-[#e5e5e5] bg-white p-3 transition hover:border-[#000000] hover:shadow-md"><Image src={item.image} alt={item.name} width={80} height={76} className="h-[76px] w-20 shrink-0 rounded-md object-cover" /><div className="min-w-0 flex-1"><h3 className="truncate text-xs font-semibold group-hover:text-[#000000]">{item.name}</h3><p className="mt-1 text-xs text-[#000000]">{item.category}</p><p className="mt-3 text-xs font-bold">Rs. {item.price.toLocaleString()}</p></div><ArrowRight size={15} className="shrink-0" /></Link>)}
          </div>
        </section>
      </div>
    </main>
  );
}
