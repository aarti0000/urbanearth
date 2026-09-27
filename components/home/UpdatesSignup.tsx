"use client";

import { ArrowRight } from "lucide-react";
import styles from "./HomeCollections.module.css";

export default function UpdatesSignup() {
  function requestUpdates(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get("email") || "").trim();
    const body = `Hello Urban Earth,\n\nPlease send me design ideas, new arrivals and special offers at ${email}.\n\nThank you.`;
    window.location.href = `mailto:hello@urbanearth.com.np?subject=${encodeURIComponent("Request for Urban Earth updates")}&body=${encodeURIComponent(body)}`;
  }
  return <form className={styles.signup} onSubmit={requestUpdates}>
    <div><label className="sr-only" htmlFor="updates-email">Your email address</label><input id="updates-email" name="email" type="email" autoComplete="email" placeholder="Enter your email address" required aria-describedby="updates-note" /><button type="submit">Request updates <ArrowRight size={16} aria-hidden="true" /></button></div>
    <p id="updates-note">Opens your email app to send a signup request.</p>
  </form>;
}
