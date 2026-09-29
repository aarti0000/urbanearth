"use client";

import { Send } from "lucide-react";
import styles from "./Footer.module.css";

export default function FooterNewsletter() {
  function subscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get("email") || "").trim();
    const body = `Hello Urban Earth,\n\nPlease send me new collections and design updates at ${email}.\n\nThank you.`;
    window.location.href = `mailto:hello@urbanearth.com.np?subject=${encodeURIComponent("Newsletter signup request")}&body=${encodeURIComponent(body)}`;
  }
  return <form className={styles.form} onSubmit={subscribe}>
    <label className={styles.srOnly} htmlFor="footer-newsletter-email">Your email address</label>
    <input id="footer-newsletter-email" name="email" type="email" autoComplete="email" placeholder="Your email address" required aria-describedby="footer-newsletter-note" />
    <button type="submit">Subscribe <Send size={13} strokeWidth={1.5} aria-hidden="true" /></button>
    <small id="footer-newsletter-note">Opens your email app to request a subscription.</small>
  </form>;
}
