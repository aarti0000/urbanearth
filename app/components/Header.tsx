"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className="w-full bg-[#faf7f2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-serif font-bold text-stone-900"
        >
          HomeHaven
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-10">

          <Link
            href="/"
            className="text-stone-700 hover:text-stone-900 hover:underline underline-offset-8 transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-stone-700 hover:text-stone-900 hover:underline underline-offset-8 transition"
          >
            About
          </Link>

          <Link
            href="/product"
            className="text-stone-700 hover:text-stone-900 hover:underline underline-offset-8 transition"
          >
            Products
          </Link>

          <Link
            href="/contact"
            className="text-stone-700 hover:text-stone-900 hover:underline underline-offset-8 transition"
          >
            Contact
          </Link>

        </nav>

        {/* Cart */}
        <Link
          href="/cart"
          className="relative text-xl hover:scale-110 transition"
          aria-label="Shopping cart"
        >
          🛒

          {cartCount > 0 && (
            <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-stone-900 text-[10px] text-white">
              {cartCount}
            </span>
          )}
        </Link>

      </div>
    </header>
  );
}