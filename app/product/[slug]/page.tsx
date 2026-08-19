"use client";
import { useState } from "react";
import { useCart } from "@/components/CartContext";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import products from "@/data/products.json";

export default function ProductSlugPage() {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const params = useParams();

  const slug = params.slug as string;

  const product = products.find(
    (item) => String(item.id) === slug
  );

  if (!product) {
    return (
      <main className="min-h-screen bg-stone-50 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">

          <h1 className="text-3xl font-serif text-stone-900">
            Product Not Found
          </h1>

          <Link
            href="/products"
            className="mt-6 inline-block rounded-full bg-stone-900 px-6 py-3 text-sm text-white"
          >
            Back to Products
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 px-6 py-16">

      <div className="mx-auto max-w-6xl">

        {/* Back */}

        <Link
          href="/products"
          className="text-sm text-stone-500 hover:text-stone-900"
        >
          ← Back to Products
        </Link>

        {/* Product */}

        <div className="mt-10 grid gap-12 md:grid-cols-2">

          {/* IMAGE */}

          <div className="relative aspect-square overflow-hidden rounded-3xl bg-stone-100">

            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

          </div>

          {/* DETAILS */}

          <div className="flex flex-col justify-center">

            {/* Category */}

            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
              {product.category}
            </p>

            {/* Name */}

            <h1 className="mt-4 text-4xl font-serif text-stone-900 md:text-5xl">
              {product.name}
            </h1>

            {/* Rating */}

            <div className="mt-5 text-amber-600">
              {"★".repeat(product.rating)}
              {"☆".repeat(5 - product.rating)}
            </div>

            {/* Price */}

            <p className="mt-6 text-2xl font-semibold text-stone-900">
              Rs. {product.price.toLocaleString()}
            </p>

            {/* Description */}

            <p className="mt-6 leading-7 text-stone-600">
              A beautifully designed piece that brings warmth,
              character and timeless style to your home.
            </p>

            {/* Add to Cart */}

           <button
  onClick={() => {
    addToCart(product);
    setAdded(true);
  }}
  className="mt-8 w-full rounded-full bg-stone-900 py-4 text-white transition md:w-64"
>
  {added ? "✓ Added to Cart" : "Add to Cart"}
</button>

          </div>

        </div>

      </div>

    </main>
  );
}