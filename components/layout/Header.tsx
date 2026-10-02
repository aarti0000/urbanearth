"use client";

import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  ChevronDown,
  MapPin,
  Menu,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";

import { useEffect, useState } from "react";


import { useCart } from "@/components/cart/CartContext";
import AccountMenu from "@/components/auth/AccountMenu";
import products from "@/data/products.json";

const mattressCollections = [
  "Orthopaedic",
  "Luxury",
  "Organic",
  "Hospitality",
];
const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Shop", href: "/products" },
  { label: "Mattresses", href: "/products?category=Mattresses" },
  { label: "Flooring", href: "/products?category=Laminate%20Flooring" },
  { label: "Carpets & Rugs", href: "/products?category=Carpets%20%26%20Rugs" },
  { label: "Furniture", href: "/products?category=Furniture" },
];
function MattressCollections({ close }: { close: () => void }) {
  return <>
    <div className={styles.menuHeading}><span aria-hidden="true" /><h2>Mattresses</h2><p>Considered comfort for deeper rest.<br />Discover your perfect mattress.</p></div>
    <div className={styles.collectionGrid}>{mattressCollections.map((name) => <Link key={name} href={`/products?category=Mattresses&collection=${encodeURIComponent(name)}`} onClick={close}>{name}</Link>)}</div>
    <Link className={styles.menuFooter} href="/products?category=Mattresses" onClick={close}>Shop all mattresses <span aria-hidden="true">→</span></Link>
  </>;
}
function FlooringCollections({ close }: { close: () => void }) {
  const options = [
    { name: "Everclick Laminate", href: "/products?category=Laminate%20Flooring" },
    { name: "Urban AquaSafe", href: "/products?category=Laminate%20Flooring" },
    { name: "Urban SPC", href: "/products?category=SPC%20Flooring" },
  ];
  return <>
    <div className={styles.menuHeading}><span aria-hidden="true" /><h2>Flooring</h2><p>Beautiful foundations for everyday living.<br />Explore our flooring collections.</p></div>
    <div className={styles.collectionGrid}>{options.map(({ name, href }) => <Link key={name} href={href} onClick={close}>{name}</Link>)}</div>
    <Link className={styles.menuFooter} href="/products" onClick={close}>Shop all products <span aria-hidden="true">→</span></Link>
  </>;
}
export default function Header() {
  const pathname = usePathname();

  const { cart } = useCart();

  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
    setOpenDropdown(null);
    setSearchQuery("");
  };

  const toggleSearch = () => {
    setSearchOpen((open) => !open);
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
    setSearchOpen(false);
    setOpenDropdown(null);
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

  const isNavigationActive = (href: string) => href === "/" ? pathname === "/" : pathname === href;

  return (
     <>
      {/* =====================================================
          TOP INFORMATION BAR
      ====================================================== */}

      <div className={styles.announcement} aria-label="Urban Earth services">
        <div className={styles.announcementTrack}>
          {[0, 1].map((copy) => <div key={copy} className={styles.announcementGroup} aria-hidden={copy === 1 ? true : undefined}>
            {["Premium flooring & home essentials", "Expert installation", "Visit our showroom", "Delivery across Nepal"].map((text) => <span key={text}><i aria-hidden="true" />{text}</span>)}
          </div>)}
        </div>
      </div>
      <header className={styles.header}>
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

              xl:flex
              xl:gap-9
              2xl:gap-10
            "
          >
            {navigation.map((item) => (item.label === "Mattresses" || item.label === "Flooring") ? (
              <div key={item.label} className={styles.mattressMenu}
                onMouseEnter={() => setOpenDropdown(item.label)} onMouseLeave={() => setOpenDropdown(null)}
                onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpenDropdown(null); }}>
                <button type="button" className={styles.mattressTrigger} aria-expanded={openDropdown === item.label} aria-controls={`${item.label.toLowerCase()}-menu`} onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}>
                  {item.label} <ChevronDown size={12} aria-hidden="true" />
                </button>
                {openDropdown === item.label && <div id={`${item.label.toLowerCase()}-menu`} className={styles.megaMenu}>
                  {item.label === "Mattresses" ? <MattressCollections close={closePanels} /> : <FlooringCollections close={closePanels} />}
                </div>}
              </div>
            ) : <Link key={item.label} href={item.href} onClick={closePanels} className="relative flex items-center" aria-current={isNavigationActive(item.href) ? "page" : undefined}>{item.label}</Link>)}
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
                text-[#000000]
                transition-colors

                hover:bg-[#f7f7f7]

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

            <AccountMenu onNavigate={closePanels} />

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
                text-[#000000]
                transition-colors

                hover:bg-[#f7f7f7]

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
                    bg-[#000000]
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

            <Link href="/contact" className={styles.contactButton}>Contact us <span aria-hidden="true">→</span></Link>

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
                text-[#000000]
                transition-colors

                hover:bg-[#f7f7f7]

                sm:h-10
                sm:w-10

                md:h-11
                md:w-11

                xl:hidden
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

                focus-within:border-[#000000]
                focus-within:bg-white

                sm:gap-3
                sm:px-4
              "
            >
              <Search
                size={20}
                strokeWidth={1.7}
                className="shrink-0 text-[#000000]"
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
                                text-[#000000]

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
                        border-[#000000]
                        px-4
                        py-2.5
                        text-[13px]
                        font-semibold
                        text-[#000000]
                        transition

                        hover:bg-[#000000]
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

            xl:hidden
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
            {navigation.map((item) => <div key={item.label} className="border-b border-black/10">
              {(item.label === "Mattresses" || item.label === "Flooring") ? <>
                <button type="button" className={styles.mobileMattressTrigger} aria-expanded={openDropdown === item.label} aria-controls={`mobile-${item.label.toLowerCase()}-menu`} onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}>{item.label} <ChevronDown size={16} /></button>
                {openDropdown === item.label && <div id={`mobile-${item.label.toLowerCase()}-menu`} className={styles.mobileCollections}>{item.label === "Mattresses" ? <MattressCollections close={closePanels} /> : <FlooringCollections close={closePanels} />}</div>}
              </> : <Link href={item.href} onClick={closePanels} className="block py-4 text-sm font-semibold text-black">{item.label}</Link>}
            </div>)}
            {/* Mobile Help Card */}
            <div
              className="
                mt-4
                rounded-xl
                bg-[#f7f7f7]
                p-4

                sm:mt-5
              "
            >
              <p
                className="
                  text-[13px]
                  font-bold
                  text-[#000000]

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
                  bg-[#000000]
                  px-4
                  py-2.5
                  text-[13px]
                  font-bold
                  text-white
                  transition

                  hover:bg-[#000000]

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
