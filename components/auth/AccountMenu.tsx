"use client";

import Link from "next/link";
import { KeyRound, LayoutDashboard, LogOut, UserRound } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import styles from "./AccountMenu.module.css";

export default function AccountMenu({ onNavigate }: { onNavigate?: () => void }) {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); trigger.current?.focus(); }
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);

  const close = () => { setOpen(false); onNavigate?.(); };
  if (status !== "authenticated") {
    return <Link href="/login" onClick={onNavigate} className={styles.trigger} aria-label="Log in to your account"><UserRound size={22} strokeWidth={1.8} /></Link>;
  }

  const user = session.user;
  const name = user?.name?.trim() || user?.email || "Account";
  const words = name.split(/\s+/);
  const initials = (words.length > 1 ? words[0][0] + words[words.length - 1][0] : name.slice(0, 2)).toUpperCase();
  const links = [
    { href: "/orders", label: "Dashboard", Icon: LayoutDashboard },
    { href: "/profile", label: "Profile", Icon: UserRound },
    { href: "/forgotpassword", label: "Change password", Icon: KeyRound },
  ];

  return <div ref={root} className={styles.root} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
    <button ref={trigger} type="button" className={styles.trigger} aria-label={`Account menu for ${name}`} aria-expanded={open} aria-controls={panelId} onClick={() => { onNavigate?.(); setOpen(!open); }}>
      <span className={styles.avatar}>{initials}</span>
    </button>
    {open && <div id={panelId} className={styles.panel}>
      <div className={styles.identity}><p>{name}</p><span>{user?.email}</span></div>
      <nav aria-label="Account navigation" className={styles.links}>
        {links.map(({ href, label, Icon }) => <Link key={href} href={href} onClick={close}><Icon size={15} strokeWidth={1.7} aria-hidden="true" />{label}</Link>)}
      </nav>
      <button type="button" className={styles.signOut} onClick={() => { close(); void signOut({ callbackUrl: "/" }); }}><LogOut size={15} strokeWidth={1.7} aria-hidden="true" />Sign out</button>
    </div>}
  </div>;
}
