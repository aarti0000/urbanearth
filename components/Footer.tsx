
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#2f2a26] text-[#faf7f2]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">

        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl">
              HomeHaven
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#c8bfb7]">
              Thoughtfully selected pieces to make your space
              feel warm, beautiful, and truly yours.
            </p>

            {/* Newsletter */}
            <div className="mt-8">
              <h3 className="text-sm font-medium">
                Join our newsletter
              </h3>

              <p className="mt-2 text-xs text-[#a9a099]">
                Get updates about new arrivals and special offers.
              </p>

              <div className="mt-4 flex max-w-md">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="min-w-0 flex-1 border border-[#5a514b] bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#8f8780] focus:border-[#c8b29b]"
                />

                <button
                  type="button"
                  className="bg-[#faf7f2] px-5 text-sm font-medium text-[#2f2a26] transition hover:bg-[#c8b29b]"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Shop
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-[#c8bfb7]">
              <li>
                <Link href="/products" className="hover:text-white">
                  All Products
                </Link>
              </li>

              <li>
                <Link href="/products" className="hover:text-white">
                  New Arrivals
                </Link>
              </li>

              <li>
                <Link href="/products" className="hover:text-white">
                  Vases
                </Link>
              </li>

              <li>
                <Link href="/products" className="hover:text-white">
                  Lighting
                </Link>
              </li>

              <li>
                <Link href="/products" className="hover:text-white">
                  Wall Decor
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Customer Care
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-[#c8bfb7]">
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link href="/shipping" className="hover:text-white">
                  Shipping & Delivery
                </Link>
              </li>

              <li>
                <Link href="/returns" className="hover:text-white">
                  Returns & Exchanges
                </Link>
              </li>

              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              My Account
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-[#c8bfb7]">
              <li>
                <Link href="/profile" className="hover:text-white">
                  My Account
                </Link>
              </li>

              <li>
                <Link href="/login" className="hover:text-white">
                  Login
                </Link>
              </li>

              <li>
                <Link href="/register" className="hover:text-white">
                  Create Account
                </Link>
              </li>

             
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-[#4a423d]" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-6 text-xs text-[#a9a099] md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 HomeHaven. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <a href="/privacy" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="/terms" className="hover:text-white">
              Terms & Conditions
            </a>

            <a href="/shipping" className="hover:text-white">
              Shipping Policy
            </a>

            <a href="/returns" className="hover:text-white">
              Return Policy
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}