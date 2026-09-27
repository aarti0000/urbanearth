"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LogIn,
  LogOut,
  Package,
  UserPlus,
  UserRound,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { signOut, useSession } from "next-auth/react";

export default function AccountMenu() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { data: session, status } = useSession();

  const isLoggedIn = status === "authenticated";
  const user = session?.user;

  /* =========================================
     CLOSE WHEN CLICKING OUTSIDE
  ========================================== */

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  /* =========================================
     CLOSE WITH ESCAPE
  ========================================== */

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  const isActive = (href: string) => {
    return pathname.startsWith(href);
  };

  /* =========================================
     LOGOUT
  ========================================== */

  const handleLogout = async () => {
    closeMenu();

    await signOut({
      callbackUrl: "/",
    });
  };

  return (
    <div
      ref={menuRef}
      className="relative"
    >
      {/* =====================================
          ACCOUNT BUTTON
      ====================================== */}

      <button
        type="button"
        onClick={() =>
          setOpen((previous) => !previous)
        }
        aria-label="Account menu"
        aria-expanded={open}
        className={`
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          transition-all
          duration-200
          ${
            open
              ? "bg-[#f7f7f7] text-[#000000] ring-1 ring-[#000000]"
              : "text-[#000000] hover:bg-[#f7f7f7]"
          }
        `}
      >
        <UserRound
          className="h-[22px] w-[22px]"
          strokeWidth={1.8}
        />
      </button>

      {/* =====================================
          DROPDOWN
      ====================================== */}

      <div
        className={`
          absolute
          right-0
          top-[calc(100%+14px)]
          z-[100]
          w-[285px]
          origin-top-right
          overflow-hidden
          rounded-2xl
          border
          border-[#e8e8e8]
          bg-white
          shadow-[0_18px_50px_rgba(0,0,0,0.14)]
          transition-all
          duration-200
          ${
            open
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible -translate-y-2 scale-[0.97] opacity-0"
          }
        `}
      >
        {/* =====================================
            ACCOUNT HEADER
        ====================================== */}

        <div
          className="
            flex
            items-center
            gap-3
            border-b
            border-[#eeeeee]
            px-5
            py-4
          "
        >
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#f7f7f7]
              text-[#000000]
            "
          >
            <UserRound
              size={26}
              strokeWidth={1.8}
            />
          </div>

          <div className="min-w-0">
            <p
              className="
                text-sm
                font-bold
                text-[#171717]
              "
            >
              {isLoggedIn
                ? user?.name || "User"
                : "My Account"}
            </p>

            <p
              className="
                mt-0.5
                truncate
                text-xs
                text-[#777]
              "
            >
              {isLoggedIn
                ? user?.email || ""
                : "Manage your Urban Earth account"}
            </p>
          </div>
        </div>

        {/* =====================================
            NOT LOGGED IN
        ====================================== */}

        {!isLoggedIn && (
          <>
            <div className="p-2">
              <AccountLink
                href="/register"
                label="Register"
                active={isActive("/register")}
                closeMenu={closeMenu}
                icon={
                  <UserPlus
                    size={20}
                    strokeWidth={1.7}
                  />
                }
              />

              <AccountLink
                href="/login"
                label="Login"
                active={isActive("/login")}
                closeMenu={closeMenu}
                icon={
                  <LogIn
                    size={20}
                    strokeWidth={1.7}
                  />
                }
              />
            </div>

            <div className="h-px bg-[#eeeeee]" />
          </>
        )}

        {/* =====================================
            LOGGED IN MENU
        ====================================== */}

        {isLoggedIn && (
          <>
            <div className="p-2">
              <AccountLink
                href="/profile"
                label="My Profile"
                active={isActive("/profile")}
                closeMenu={closeMenu}
                icon={
                  <UserRound
                    size={20}
                    strokeWidth={1.7}
                  />
                }
              />

              <AccountLink
                href="/orders"
                label="My Orders"
                active={isActive("/orders")}
                closeMenu={closeMenu}
                icon={
                  <Package
                    size={20}
                    strokeWidth={1.7}
                  />
                }
              />
            </div>

            {/* Logout */}

            <div className="h-px bg-[#eeeeee]" />

            <div className="p-2">
              <button
                type="button"
                onClick={handleLogout}
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-xl
                  px-3
                  py-3
                  text-left
                  text-sm
                  font-medium
                  text-[#333]
                  transition-colors
                  hover:bg-[#f7f7f7]
                  hover:text-[#000000]
                "
              >
                <LogOut
                  size={20}
                  strokeWidth={1.7}
                />

                Sign Out
              </button>
            </div>
          </>
        )}

        {/* =====================================
            LOADING
        ====================================== */}

        {status === "loading" && (
          <div className="px-5 py-4 text-xs text-[#777]">
            Loading account...
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================
   ACCOUNT LINK
========================================= */

function AccountLink({
  href,
  label,
  active,
  closeMenu,
  icon,
}: {
  href: string;
  label: string;
  active: boolean;
  closeMenu: () => void;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={closeMenu}
      className={`
        flex
        items-center
        gap-3
        rounded-xl
        px-3
        py-3
        text-sm
        font-medium
        transition-colors
        duration-200
        ${
          active
            ? "bg-[#f7f7f7] text-[#000000]"
            : "text-[#333] hover:bg-[#f7f7f7] hover:text-[#000000]"
        }
      `}
    >
      <span className="shrink-0">
        {icon}
      </span>

      <span>{label}</span>
    </Link>
  );
}