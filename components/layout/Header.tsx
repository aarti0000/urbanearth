"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  ChevronDown,
  Headphones,
  MapPin,
  Menu,
  Search,
  ShieldCheck,
  ShoppingCart,
  Truck,
  UserRound,
  Wrench,
  X,
} from "lucide-react";

import { useEffect, useState } from "react";

import AccountMenu from "@/components/auth/AccountMenu";
import { useCart } from "@/components/cart/CartContext";
import products from "@/data/products.json";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/products",
    dropdown: [
      { label: "All Products", href: "/products" },
      { label: "Carpets", href: "/products?category=Carpets" },
      {
        label: "Laminate Flooring",
        href: "/products?category=Laminate%20Flooring",
      },
      { label: "Parquet", href: "/products?category=Parquet" },
      { label: "SPC Flooring", href: "/products?category=SPC%20Flooring" },
      { label: "Rugs", href: "/products?category=Rugs" },
      { label: "Doormats", href: "/products?category=Doormats" },
      { label: "Mattresses", href: "/products?category=Mattresses" },
      {
        label: "Artificial Grass",
        href: "/products?category=Artificial%20Grass",
      },
    ],
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const pathname = usePathname();

  const { cart } = useCart();

  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const query = searchQuery.toLowerCase().trim();

  const filteredProducts = query
    ? products
        .filter(
          (product) =>
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        )
        .slice(0, 8)
    : [];

  const closePanels = () => {
    setSearchOpen(false);
    setMenuOpen(false);
    setShopOpen(false);
    setSearchQuery("");
  };

  const toggleSearch = () => {
    setSearchOpen((open) => !open);
    setMenuOpen(false);
    setShopOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
    setSearchOpen(false);
    setShopOpen(false);
  };

  /*
   * Prevent background scrolling while mobile menu is open.
   */
  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /*
   * Close open panels with Escape.
   */
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePanels();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const isNavigationActive = (
    href: string,
    hasDropdown = false
  ) => {
    if (href === "/") {
      return pathname === "/";
    }

    if (hasDropdown) {
      return (
        pathname.startsWith("/products") ||
        pathname.startsWith("/product/") ||
        pathname.startsWith("/category/")
      );
    }

    return pathname.startsWith(href);
  };

  return (
     <>
      {/* =====================================================
          TOP INFORMATION BAR
      ====================================================== */}

      <div className="bg-[#063f82] text-white">
        <div
          className="
            mx-auto
            flex
            min-h-9
            max-w-[1440px]
            items-center
            justify-between
            gap-2
            px-3
            py-1.5

            sm:min-h-10
            sm:gap-4
            sm:px-6
            sm:py-2

            lg:px-8
            xl:px-10
          "
        >
          {/* Left Side */}
          <div
            className="
              flex
              min-w-0
              items-center
              gap-3
              text-[10px]
              font-medium

              sm:text-[11px]
              md:gap-4
              md:text-[12px]
            "
          >
            {/* Delivery */}
            <div className="flex shrink-0 items-center gap-1.5">
              <Truck
                size={14}
                strokeWidth={1.8}
                className="shrink-0"
              />

              <span className="whitespace-nowrap">
                <strong className="hidden sm:inline">
                  FREE DELIVERY
                </strong>

                <strong className="sm:hidden">DELIVERY</strong>

                <span className="hidden sm:inline">
                  {" "}
                  Across Nepal
                </span>
              </span>
            </div>

            {/* Divider */}
            <span className="hidden h-4 w-px bg-white/35 md:block" />

            {/* Installation */}
            <div className="hidden items-center gap-1.5 md:flex">
              <Wrench size={14} strokeWidth={1.8} />

              <span>Expert Installation</span>
            </div>

            {/* Divider */}
            <span className="hidden h-4 w-px bg-white/35 xl:block" />

            {/* Quality */}
            <div className="hidden items-center gap-1.5 xl:flex">
              <ShieldCheck size={14} strokeWidth={1.8} />

              <span>Premium Quality Guaranteed</span>
            </div>
          </div>

          {/* Right Side */}
          <div
            className="
              flex
              shrink-0
              items-center
              gap-0.5
              text-[12px]

              sm:gap-1
              lg:gap-3
            "
          >
            <Link
              href="/contact"
              className="
                hidden
                transition-opacity
                hover:opacity-75
                lg:block
              "
            >
              Visit Our Showroom
            </Link>

            <span className="hidden h-4 w-px bg-white/35 lg:block" />

            <Link
              href="/track-order"
              className="
                hidden
                transition-opacity
                hover:opacity-75
                xl:block
              "
            >
              Track Order
            </Link>

            <span className="hidden h-4 w-px bg-white/35 xl:block" />

            <Link
              href="/contact"
              className="
                hidden
                items-center
                gap-1.5
                transition-opacity
                hover:opacity-75
                xl:flex
              "
            >
              <Headphones size={13} />

              Help &amp; Support
            </Link>

            <span className="hidden h-4 w-px bg-white/35 lg:block" />

            <span className="hidden text-white/80 sm:inline">
              Follow us
            </span>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Urban Earth on Facebook"
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                transition-colors
                hover:bg-white/15
              "
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-[14px] w-[14px] fill-current"
              >
                <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.7 1.8-1.7H17V2.5c-.8-.1-1.7-.2-2.5-.2-2.6 0-4.4 1.6-4.4 4.6v2.6H7V13h3.1v9h3.4Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Urban Earth on Instagram"
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                transition-colors
                hover:bg-white/15
              "
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="
                  h-[14px]
                  w-[14px]
                  fill-none
                  stroke-current
                "
                strokeWidth="2"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                />

                <circle cx="12" cy="12" r="4" />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  className="fill-current stroke-none"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVIGATION
      ====================================================== */}

      <header className="sticky top-0 z-50 border-b border-[#e8e8e8] bg-white">
        <div
          className="
            mx-auto
            flex
            h-[62px]
            max-w-[1440px]
            items-center
            justify-between
            gap-2
            px-3

            sm:h-[70px]
            sm:px-5

            md:h-[74px]
            md:px-6

            lg:h-[82px]
            lg:px-8

            xl:px-10
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            href="/"
            onClick={closePanels}
            className="relative flex min-w-0 shrink items-center"
            aria-label="Urban Earth home"
          >
            <div
              className="
                relative
                h-[34px]
                w-[110px]

                min-[360px]:w-[120px]

                sm:h-[42px]
                sm:w-[165px]

                md:h-[46px]
                md:w-[190px]

                lg:h-[56px]
                lg:w-[220px]

                xl:h-[58px]
                xl:w-[250px]
              "
            >
              <Image
                src="/images/logo.png"
                alt="Urban Earth"
                fill
                priority
                sizes="
                  (max-width: 359px) 110px,
                  (max-width: 639px) 165px,
                  (max-width: 767px) 190px,
                  (max-width: 1023px) 190px,
                  (max-width: 1279px) 220px,
                  250px
                "
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav
            aria-label="Primary navigation"
            className="
              hidden
              items-center
              gap-5

              lg:flex
              xl:gap-9
              2xl:gap-10
            "
          >
            {navigation.map((item) => {
              const isActive = isNavigationActive(
                item.href,
                Boolean(item.dropdown)
              );

              if (item.dropdown) {
                return (
                  <div
                    key={item.label}
                    className="group relative flex h-[82px] items-center"
                  >
                    <Link
                      href={item.href}
                      className={`
                        relative
                        flex
                        h-full
                        items-center
                        gap-1.5
                        whitespace-nowrap
                        text-[13px]
                        font-semibold
                        transition-colors

                        xl:text-sm

                        ${
                          isActive
                            ? "text-[#063f82]"
                            : "text-[#202020] hover:text-[#ff6600]"
                        }
                      `}
                    >
                      {item.label}

                      <ChevronDown
                        size={15}
                        strokeWidth={2}
                        className="
                          transition-transform
                          duration-200
                          group-hover:rotate-180
                        "
                      />

                      {isActive && (
                        <span
                          className="
                            absolute
                            bottom-[22px]
                            left-0
                            h-[2px]
                            w-full
                            bg-[#ff6600]
                          "
                        />
                      )}
                    </Link>

                    {/* Desktop Dropdown */}
                    <div
                      className="
                        invisible
                        absolute
                        left-1/2
                        top-[72px]
                        w-[250px]
                        -translate-x-1/2
                        translate-y-2
                        rounded-xl
                        border
                        border-[#e8e8e8]
                        bg-white
                        p-2
                        opacity-0
                        shadow-[0_18px_50px_rgba(0,0,0,0.12)]
                        transition-all
                        duration-200

                        group-hover:visible
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="
                            flex
                            items-center
                            justify-between
                            rounded-lg
                            px-4
                            py-3
                            text-sm
                            font-medium
                            text-[#333]
                            transition-colors

                            hover:bg-[#fff5ef]
                            hover:text-[#ff6600]
                          "
                        >
                          {dropdownItem.label}

                          <span className="text-[#ff6600]">
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                    relative
                    flex
                    h-[82px]
                    items-center
                    whitespace-nowrap
                    text-[13px]
                    font-semibold
                    transition-colors

                    xl:text-sm

                    ${
                      isActive
                        ? "text-[#063f82]"
                        : "text-[#202020] hover:text-[#ff6600]"
                    }
                  `}
                >
                  {item.label}

                  {isActive && (
                    <span
                      className="
                        absolute
                        bottom-[22px]
                        left-0
                        h-[2px]
                        w-full
                        bg-[#ff6600]
                      "
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* =================================================
              HEADER ACTIONS
          ================================================== */}

          <div
            className="
              flex
              shrink-0
              items-center
              gap-0

              min-[360px]:gap-0.5

              sm:gap-1
              md:gap-2
            "
          >
            {/* Search */}
            <button
              type="button"
              onClick={toggleSearch}
              aria-label={
                searchOpen ? "Close search" : "Search products"
              }
              aria-expanded={searchOpen}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                text-[#063f82]
                transition-colors

                hover:bg-[#f2f6fa]

                sm:h-10
                sm:w-10

                md:h-11
                md:w-11
              "
            >
              {searchOpen ? (
                <X
                  className="h-5 w-5 md:h-[22px] md:w-[22px]"
                  strokeWidth={1.8}
                />
              ) : (
                <Search
                  className="h-5 w-5 md:h-[22px] md:w-[22px]"
                  strokeWidth={1.8}
                />
              )}
            </button>

            {/* Desktop / Tablet Account */}
            <div className="hidden md:block">
  <AccountMenu />
</div>

            {/* Mobile Account */}
            <Link
              href="/login"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                text-[#063f82]
                transition-colors

                hover:bg-[#f2f6fa]

                sm:h-10
                sm:w-10

                md:hidden
              "
              aria-label="Account"
            >
              <UserRound
                className="h-5 w-5 sm:h-[22px] sm:w-[22px]"
                strokeWidth={1.8}
              />
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              aria-label={`Shopping cart with ${cartCount} items`}
              className="
                relative
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                text-[#063f82]
                transition-colors

                hover:bg-[#f2f6fa]

                sm:h-10
                sm:w-10

                md:h-11
                md:w-11
              "
            >
              <ShoppingCart
                className="
                  h-[21px]
                  w-[21px]

                  sm:h-[22px]
                  sm:w-[22px]

                  md:h-[23px]
                  md:w-[23px]
                "
                strokeWidth={1.8}
              />

              {cartCount > 0 && (
                <span
                  className="
                    absolute
                    right-0
                    top-0
                    flex
                    h-[16px]
                    min-w-[16px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#ff6600]
                    px-1
                    text-[9px]
                    font-bold
                    text-white

                    sm:h-[18px]
                    sm:min-w-[18px]
                    sm:text-[10px]
                  "
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={toggleMenu}
              aria-label={
                menuOpen ? "Close menu" : "Open menu"
              }
              aria-expanded={menuOpen}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                text-[#063f82]
                transition-colors

                hover:bg-[#f2f6fa]

                sm:h-10
                sm:w-10

                md:h-11
                md:w-11

                lg:hidden
              "
            >
              {menuOpen ? (
                <X
                  className="
                    h-[21px]
                    w-[21px]

                    sm:h-[23px]
                    sm:w-[23px]
                  "
                  strokeWidth={1.8}
                />
              ) : (
                <Menu
                  className="
                    h-[21px]
                    w-[21px]

                    sm:h-[23px]
                    sm:w-[23px]
                  "
                  strokeWidth={1.8}
                />
              )}
            </button>
          </div>
        </div>
      

      {/* =====================================================
          SEARCH PANEL
      ====================================================== */}

      {searchOpen && (
        <div
          className="
            absolute
            left-0
            top-full
            w-full
            border-b
            border-[#e8e8e8]
            bg-white
            shadow-[0_18px_40px_rgba(0,0,0,0.1)]
          "
        >
          <div
            className="
              mx-auto
              max-w-4xl
              px-3
              py-4

              sm:px-6
              sm:py-5

              md:px-8
              md:py-6
            "
          >
            {/* Search Input */}
            <div
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-[#d8d8d8]
                bg-[#fafafa]
                px-3
                transition

                focus-within:border-[#063f82]
                focus-within:bg-white

                sm:gap-3
                sm:px-4
              "
            >
              <Search
                size={20}
                strokeWidth={1.7}
                className="shrink-0 text-[#063f82]"
              />

              <label
                htmlFor="header-search"
                className="sr-only"
              >
                Search products
              </label>

              <input
                id="header-search"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search products..."
                autoFocus
                className="
                  h-12
                  min-w-0
                  flex-1
                  bg-transparent
                  text-sm
                  text-[#222]
                  outline-none
                  placeholder:text-[#888]

                  sm:h-14
                "
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="
                    shrink-0
                    text-[#888]
                    transition
                    hover:text-[#222]
                  "
                >
                  <X size={19} />
                </button>
              )}
            </div>

            {/* Search Results */}
            {query && (
              <div
                className="
                  mt-3
                  max-h-[60vh]
                  overflow-y-auto
                  overscroll-contain

                  sm:mt-4
                  sm:max-h-[420px]
                "
              >
                {filteredProducts.length ? (
                  <>
                    <div className="grid gap-1 sm:grid-cols-2 sm:gap-2">
                      {filteredProducts.map((product) => (
                        <Link
                          key={product.id}
                          href={`/product/${product.id}`}
                          onClick={closePanels}
                          className="
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            border
                            border-transparent
                            p-2
                            transition

                            hover:border-[#ececec]
                            hover:bg-[#fafafa]

                            sm:gap-4
                            sm:p-2.5
                          "
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={product.image}
                            alt={product.name}
                            className="
                              h-14
                              w-14
                              shrink-0
                              rounded-lg
                              object-cover

                              sm:h-16
                              sm:w-16
                            "
                          />

                          <div className="min-w-0 flex-1">
                            <p
                              className="
                                truncate
                                text-[13px]
                                font-semibold
                                text-[#222]

                                sm:text-sm
                              "
                            >
                              {product.name}
                            </p>

                            <p className="mt-1 text-xs capitalize text-[#777]">
                              {product.category}
                            </p>

                            <p
                              className="
                                mt-1
                                text-[13px]
                                font-bold
                                text-[#ff6600]

                                sm:text-sm
                              "
                            >
                              Rs.{" "}
                              {product.price.toLocaleString()}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <Link
                      href={`/products?search=${encodeURIComponent(
                        searchQuery
                      )}`}
                      onClick={closePanels}
                      className="
                        mt-4
                        flex
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-[#063f82]
                        px-4
                        py-2.5
                        text-[13px]
                        font-semibold
                        text-[#063f82]
                        transition

                        hover:bg-[#063f82]
                        hover:text-white

                        sm:px-5
                        sm:py-3
                        sm:text-sm
                      "
                    >
                      View all search results
                    </Link>
                  </>
                ) : (
                  <div className="py-6 text-center sm:py-8">
                    <p className="text-sm font-medium text-[#333]">
                      No products found for “{searchQuery}”
                    </p>

                    <p className="mt-1 text-xs text-[#777]">
                      Try carpets, rugs, laminate or SPC.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =====================================================
          MOBILE / TABLET NAVIGATION
      ====================================================== */}

      {menuOpen && (
        <div
          className="
            absolute
            left-0
            top-full
            h-[calc(100dvh-100%)]
            max-h-[calc(100dvh-96px)]
            w-full
            overflow-y-auto
            overscroll-contain
            border-b
            border-[#e8e8e8]
            bg-white
            shadow-xl

            lg:hidden
          "
        >
          <nav
            aria-label="Mobile navigation"
            className="
              mx-auto
              max-w-7xl
              px-4
              py-3

              sm:px-6
              sm:py-5

              md:px-8
            "
          >
            {navigation.map((item) => {
              const isActive = isNavigationActive(
                item.href,
                Boolean(item.dropdown)
              );

              /*
               * Mobile Shop menu
               */
              if (item.dropdown) {
                return (
                  <div
                    key={item.label}
                    className="border-b border-[#eeeeee]"
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        onClick={closePanels}
                        className={`
                          flex
                          min-w-0
                          flex-1
                          items-center
                          py-3.5
                          text-[15px]
                          font-semibold

                          sm:py-4
                          sm:text-base

                          ${
                            isActive
                              ? "text-[#063f82]"
                              : "text-[#222]"
                          }
                        `}
                      >
                        {item.label}
                      </Link>

                      <button
                        type="button"
                        onClick={() =>
                          setShopOpen((open) => !open)
                        }
                        aria-label={
                          shopOpen
                            ? "Close shop categories"
                            : "Open shop categories"
                        }
                        aria-expanded={shopOpen}
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          text-[#555]
                          transition-colors

                          hover:bg-[#f5f5f5]
                        "
                      >
                        <ChevronDown
                          size={18}
                          className={`
                            transition-transform
                            duration-200

                            ${
                              shopOpen
                                ? "rotate-180 text-[#ff6600]"
                                : ""
                            }
                          `}
                        />
                      </button>
                    </div>

                    {/* Mobile Shop Categories */}
                    <div
                      className={`
                        grid
                        overflow-hidden
                        transition-[grid-template-rows,opacity]
                        duration-300

                        ${
                          shopOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="min-h-0">
                        <div
                          className="
                            mb-3
                            rounded-xl
                            bg-[#f7f9fc]
                            p-2
                          "
                        >
                          {item.dropdown.map(
                            (dropdownItem) => {
                              const dropdownActive =
                                pathname ===
                                dropdownItem.href;

                              return (
                                <Link
                                  key={dropdownItem.label}
                                  href={dropdownItem.href}
                                  onClick={closePanels}
                                  className={`
                                    flex
                                    items-center
                                    justify-between
                                    rounded-lg
                                    px-3.5
                                    py-3
                                    text-[13px]
                                    font-medium
                                    transition-colors

                                    sm:text-sm

                                    ${
                                      dropdownActive
                                        ? "bg-white text-[#ff6600] shadow-sm"
                                        : "text-[#444] hover:bg-white hover:text-[#ff6600]"
                                    }
                                  `}
                                >
                                  {dropdownItem.label}

                                  <span
                                    className="
                                      text-[#ff6600]
                                      opacity-80
                                    "
                                  >
                                    →
                                  </span>
                                </Link>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={item.label}
                  className="border-b border-[#eeeeee]"
                >
                  <Link
                    href={item.href}
                    onClick={closePanels}
                    className={`
                      flex
                      items-center
                      justify-between
                      py-3.5
                      text-[15px]
                      font-semibold

                      sm:py-4
                      sm:text-base

                      ${
                        isActive
                          ? "text-[#063f82]"
                          : "text-[#222]"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}

            {/* Mobile Help Card */}
            <div
              className="
                mt-4
                rounded-xl
                bg-[#f5f8fc]
                p-4

                sm:mt-5
              "
            >
              <p
                className="
                  text-[13px]
                  font-bold
                  text-[#063f82]

                  sm:text-sm
                "
              >
                Need help choosing flooring?
              </p>

              <p
                className="
                  mt-1
                  max-w-md
                  text-xs
                  leading-5
                  text-[#666]
                "
              >
                Contact Urban Earth for product guidance and
                installation support.
              </p>

              <Link
                href="/contact"
                onClick={closePanels}
                className="
                  mt-3
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  bg-[#ff6600]
                  px-4
                  py-2.5
                  text-[13px]
                  font-bold
                  text-white
                  transition

                  hover:bg-[#e85d00]

                  sm:mt-4
                  sm:px-5
                  sm:py-3
                  sm:text-sm
                "
              >
                <MapPin size={16} />

                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
     </>
  );
}
