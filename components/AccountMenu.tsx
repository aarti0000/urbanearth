"use client";

import Link from "next/link";
import { ChevronDown, UserRound } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function AccountMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  /*
    Temporary authentication state.

    Later we will replace this with your actual
    session/authentication logic.
  */
  const isLoggedIn = false;

  const user = {
    name: "User",
    email: "user@example.com",
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div
      ref={menuRef}
      className="relative"
    >
      {/* Account Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Account menu"
        aria-expanded={open}
        className="flex items-center gap-2 text-base font-medium text-stone-900 transition-colors hover:text-stone-500"
      >
        <UserRound
          size={20}
          strokeWidth={1.8}
        />

        <span>
          {isLoggedIn ? "Account" : "Account"}
        </span>

        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-full z-[100] mt-5 w-[290px] overflow-hidden rounded-2xl border border-stone-200 bg-[#faf7f2] shadow-xl">

          {!isLoggedIn ? (
            /* ==========================
               NOT LOGGED IN
            ========================== */
            <div className="p-6">

              <div className="mb-5">
                <p className="font-serif text-xl font-semibold text-stone-900">
                  Welcome to HomeHaven
                </p>

                <p className="mt-2 text-sm leading-5 text-stone-500">
                  Sign in to manage your profile, orders and account.
                </p>
              </div>

              {/* Login */}
              <Link
                href="/login"
                onClick={closeMenu}
                className="block w-full rounded-full bg-stone-900 px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-stone-800"
              >
                Sign In
              </Link>

              {/* Divider */}
              <div className="my-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-stone-200" />

                <span className="text-xs text-stone-400">
                  New here?
                </span>

                <div className="h-px flex-1 bg-stone-200" />
              </div>

              {/* Register */}
              <Link
                href="/register"
                onClick={closeMenu}
                className="block w-full rounded-full border border-stone-300 bg-white px-5 py-3 text-center text-sm font-medium text-stone-800 transition-colors hover:border-stone-900"
              >
                Create Account
              </Link>
            </div>
          ) : (
            /* ==========================
               LOGGED IN
            ========================== */
            <div>

              {/* User Information */}
              <div className="border-b border-stone-200 p-6">
                <p className="text-xs uppercase tracking-wider text-stone-400">
                  Signed in as
                </p>

                <p className="mt-2 font-serif text-lg font-semibold text-stone-900">
                  {user.name}
                </p>

                <p className="mt-1 truncate text-xs text-stone-500">
                  {user.email}
                </p>
              </div>

              {/* Account Links */}
              <nav className="flex flex-col py-2">

                <MenuLink
                  href="/profile"
                  closeMenu={closeMenu}
                >
                  My Profile
                </MenuLink>

                <MenuLink
                  href="/orders"
                  closeMenu={closeMenu}
                >
                  My Orders
                </MenuLink>

              </nav>

              {/* Logout */}
              <div className="border-t border-stone-200 p-3">
                <Link
                  href="/logout"
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-red-600 transition-colors hover:bg-white"
                >
                  Sign Out
                </Link>
              </div>

            </div>
          )}

        </div>
      )}
    </div>
  );
}

function MenuLink({
  href,
  children,
  closeMenu,
}: {
  href: string;
  children: React.ReactNode;
  closeMenu: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={closeMenu}
      className="px-6 py-3 text-sm text-stone-700 transition-colors hover:bg-white hover:text-stone-900"
    >
      {children}
    </Link>
  );
}