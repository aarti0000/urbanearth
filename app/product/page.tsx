"use client";
import { useCart } from "../components/CartContext";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
const products = [
  {
    name: "Ceramic Nordic Vase",
    category: "Vases",
    price: "Rs. 5,550",
    rating: "★★★★★",
    image:
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Minimal Table Lamp",
    category: "Lighting",
    price: "Rs. 7,820",
    rating: "★★★★★",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Abstract Wall Art",
    category: "Wall Decor",
    price: "Rs. 5,000",
    rating: "★★★★☆",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Stoneware Vase",
    category: "Vases",
    price: "Rs. 4,800",
    rating: "★★★★★",
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Warm Glow Lamp",
    category: "Lighting",
    price: "Rs. 7,500",
    rating: "★★★★★",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Modern Canvas Art",
    category: "Wall Decor",
    price: "Rs. 6,200",
    rating: "★★★★☆",
    image:
      "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Matte Beige Vase",
    category: "Vases",
    price: "Rs. 4,250",
    rating: "★★★★★",
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Nordic Floor Lamp",
    category: "Lighting",
    price: "Rs. 9,500",
    rating: "★★★★★",
    image:
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Minimalist Wall Print",
    category: "Wall Decor",
    price: "Rs. 3,800",
    rating: "★★★★★",
    image:
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Modern Clay Vase",
    category: "Vases",
    price: "Rs. 3,950",
    rating: "★★★★☆",
    image:
      "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Elegant Pendant Light",
    category: "Lighting",
    price: "Rs. 8,900",
    rating: "★★★★☆",
    image:
      "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Neutral Botanical Art",
    category: "Wall Decor",
    price: "Rs. 4,500",
    rating: "★★★★★",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sculptural White Vase",
    category: "Vases",
    price: "Rs. 6,200",
    rating: "★★★★★",
    image:
      "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?auto=format&fit=crop&w=800&q=80",
  },
  {
  name: "Modern Bedside Lamp",
  category: "Lighting",
  price: "Rs. 6,750",
  rating: "★★★★★",
  image:
    "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
},
  {
    name: "Abstract Beige Canvas",
    category: "Wall Decor",
    price: "Rs. 5,750",
    rating: "★★★★☆",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Decorative Ceramic Bowl",
    category: "Decor",
    price: "Rs. 3,200",
    rating: "★★★★★",
    image:
      "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Wooden Decorative Tray",
    category: "Decor",
    price: "Rs. 3,600",
    rating: "★★★★★",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Minimal Candle Holder",
    category: "Decor",
    price: "Rs. 2,750",
    rating: "★★★★☆",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
  },
    {
    name: "Marble Accent Lamp",
    category: "Lighting",
    price: "Rs. 7,200",
    rating: "★★★★★",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ceramic Decorative Planter",
    category: "Decor",
    price: "Rs. 4,350",
    rating: "★★★★★",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
  },
];


export default function ProductPage() {
  const { addToCart } = useCart();
  const categories = ["All", "Vases", "Lighting", "Wall Decor", "Decor"];

  const [selectedCategory, setSelectedCategory] = useState("All");
const productGridRef = useRef<HTMLDivElement>(null);
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );
useEffect(() => {
  gsap.fromTo(
    ".product-card",
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: "power2.out",
    }
  );
}, [selectedCategory]);
  return (
    <main className="min-h-screen bg-stone-50">

      {/* Hero */}
      <section className="px-6 pb-14 pt-20 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
          HomeHaven Collection
        </p>

        <h1 className="mt-4 text-4xl font-serif text-stone-900 sm:text-5xl">
          Curated Pieces for Beautiful Spaces
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
          Discover timeless décor designed to bring warmth, character and
          effortless beauty into your home.
        </p>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6">

        <div className="mb-10 flex flex-wrap justify-center gap-3">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-3 text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-stone-900 text-white shadow-md"
                  : "border border-stone-300 bg-white text-stone-700 hover:bg-stone-100"
              }`}
            >
              {category === "All" ? "All Products" : category}
            </button>
          ))}

        </div>

        {/* Product Count */}
        <div className="mb-6 text-sm text-stone-500">
          Showing {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "product" : "products"}
        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-7 pb-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.map((product) => (
              <div
  key={product.name}
  className="product-card group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
>

                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">

                 <img
  src={product.image}
  alt={product.name}
  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
/>
<div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />
                  {/* Category */}
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-stone-700 shadow-sm backdrop-blur">
                    {product.category}
                  </span>

                  {/* Wishlist */}
                  <button
                    aria-label={`Add ${product.name} to wishlist`}
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg text-stone-600 shadow-sm backdrop-blur transition hover:bg-white hover:text-red-500"
                  >
                    ♡
                  </button>

                </div>

                {/* Product Details */}
                <div className="p-5">

                  <div className="flex items-start justify-between gap-3">

                    <div>
                      <h2 className="text-base font-medium text-stone-900">
                        {product.name}
                      </h2>

                      <p className="mt-2 text-sm tracking-widest text-amber-600">
                        {product.rating}
                      </p>
                    </div>

                    <p className="whitespace-nowrap text-base font-semibold text-stone-900">
                      {product.price}
                    </p>

                  </div>

                  {/* Add to Cart */}
                  <button
  onClick={() => addToCart(product)}
  className="mt-5 w-full rounded-full bg-stone-900 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-stone-700 hover:shadow-lg active:scale-[0.98]"
>
  Add to Cart
</button>

                </div>

              </div>
            ))}

          </div>
        ) : (

          /* Empty State */
          <div className="flex min-h-[300px] flex-col items-center justify-center pb-20 text-center">

            <div className="mb-4 text-5xl">
              🏺
            </div>

            <h2 className="text-2xl font-serif text-stone-900">
              No products found
            </h2>

            <p className="mt-2 text-sm text-stone-500">
              We couldn't find anything in this category.
            </p>

            <button
              onClick={() => setSelectedCategory("All")}
              className="mt-6 rounded-full bg-stone-900 px-6 py-3 text-sm text-white transition hover:bg-stone-700"
            >
              View All Products
            </button>

          </div>

        )}

      </section>
    </main>
  );
}

