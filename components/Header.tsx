"use client";
import AccountMenu from "./AccountMenu";
import { useCart } from "@/components/CartContext";
import Link from "next/link";
import {
  Search,
  ShoppingBag,
  ArrowRight,
  X,
} from "lucide-react";
import { useState } from "react";
import products from "@/data/products.json";

export default function Header() {
  const { cart } = useCart();

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const filteredProducts = products.filter((product) => {
    const query = searchQuery.toLowerCase().trim();

    return (
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  });

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <header className="relative w-full border-b border-stone-200 bg-[#faf7f2]">
      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-3xl font-bold text-stone-900"
        >
          HomeHaven
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">

          <Link
            href="/"
            className="text-base font-medium text-stone-900 transition-colors hover:text-stone-500"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-base font-medium text-stone-900 transition-colors hover:text-stone-500"
          >
            Shop
          </Link>

          <Link
            href="/about"
            className="text-base font-medium text-stone-900 transition-colors hover:text-stone-500"
          >
            About Us
          </Link>

          {/* Search Button */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
           className="flex items-center gap-2 text-base font-medium text-stone-900 transition-colors hover:text-stone-500"
          >
            {searchOpen ? <X size={18} /> : <Search size={18} />}

            {searchOpen ? "Close" : "Search"}
          </button>
          {/* Account */}
          <AccountMenu />

          {/* Shopping Bag */}
         <Link
  href="/cart"
  aria-label="Shopping bag"
  className="relative transition-transform duration-200 hover:scale-105"
>
  <ShoppingBag size={21} strokeWidth={2} />

  {cartCount > 0 && (
    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-stone-900 text-xs font-medium text-white">
      {cartCount}
    </span>
  )}
</Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm text-white transition-transform hover:scale-105"
          >
            Contact
            <ArrowRight size={16} />
          </Link>
        </nav>
      </div>

      {/* Search Section */}
      {searchOpen && (
        <div className="border-t border-stone-200 bg-[#faf7f2] px-8 py-5">

          <div className="mx-auto max-w-7xl">

            {/* Search Input */}
            <div className="flex items-center gap-3 rounded-full border border-stone-300 bg-white px-5 py-3">
              <Search
                size={19}
                className="shrink-0 text-stone-500"
              />

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                autoFocus
                className="w-full bg-transparent text-sm text-stone-900 outline-none placeholder:text-stone-400"
              />

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-stone-400 transition-colors hover:text-stone-700"
                  aria-label="Clear search"
                >
                  <X size={17} />
                </button>
              )}
            </div>

            {/* Search Results */}
            {searchQuery.trim() !== "" && (
              <div className="mt-3 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg">

                {filteredProducts.length > 0 ? (
                  <div className="max-h-96 overflow-y-auto">

                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        onClick={closeSearch}
                        className="flex items-center gap-4 border-b border-stone-100 p-4 transition-colors last:border-b-0 hover:bg-stone-50"
                      >

                        {/* Product Image */}
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-16 w-16 rounded-lg object-cover"
                        />

                        {/* Product Information */}
                        <div className="flex-1">
                          <h3 className="text-sm font-medium text-stone-900">
                            {product.name}
                          </h3>

                          <p className="mt-1 text-xs text-stone-500">
                            {product.category}
                          </p>
                        </div>

                        {/* Price */}
                        <p className="text-sm font-medium text-stone-900">
                          Rs. {product.price.toLocaleString()}
                        </p>

                      </Link>
                    ))}

                  </div>
                ) : (
                  /* No Results */
                  <div className="px-6 py-10 text-center">
                    <Search
                      size={28}
                      className="mx-auto mb-3 text-stone-300"
                    />

                    <p className="text-sm font-medium text-stone-700">
                      No products found
                    </p>

                    <p className="mt-1 text-xs text-stone-400">
                      Try searching for a different product or category.
                    </p>
                  </div>
                )}

              </div>
            )}

          </div>
        </div>
      )}
    </header>
  );
}