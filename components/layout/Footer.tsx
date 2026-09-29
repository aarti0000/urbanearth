import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import FooterNewsletter from "./FooterNewsletter";
import styles from "./Footer.module.css";

const groups = [
  { title: "Explore", links: [["Home", "/"], ["Shop all", "/products"], ["Mattresses", "/products?category=Mattresses"], ["Flooring", "/products?category=Laminate%20Flooring"]] },
  { title: "Customer care", links: [["My account", "/login"], ["Orders", "/orders"], ["Delivery & returns", "/contact"], ["Installation", "/contact"]] },
  { title: "Company", links: [["About us", "/about"], ["Our showroom", "/contact"], ["Contact", "/contact"]] },
];
const categories = ["Mattresses", "Laminate Flooring", "Parquet", "SPC Flooring", "Carpets", "Rugs", "Artificial Grass"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ribbon}>
        <span className={styles.ribbonLabel}>Thoughtfully selected</span>
        <div className={styles.ribbonItems}>
          <div className={styles.ribbonTrack}>
            {[0, 1].map((copy) => <div key={copy} className={styles.ribbonGroup} aria-hidden={copy === 1 ? true : undefined}>
              {categories.map((name) => <Link key={name} href={`/products?category=${encodeURIComponent(name)}`} tabIndex={copy === 1 ? -1 : undefined}>{name}<span aria-hidden="true">?</span></Link>)}
            </div>)}
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <span className={styles.watermark} aria-hidden="true">URBAN EARTH</span>
        <div className={styles.brand}>
          <Link href="/" aria-label="Urban Earth home" className={styles.logo}><Image src="/images/logo.png" alt="Urban Earth" fill sizes="145px" /></Link>
          <p className={styles.brandDescription}>Considered comfort. Timeless interiors.<br />Flooring, mattresses and everyday essentials for spaces that feel like home.</p>
          <h2 className={styles.sectionTitle}>Get in touch</h2>
          <address className={styles.contacts}>
            <Link href="/contact"><MapPin size={18} strokeWidth={1.3} aria-hidden="true" /><span><strong>Visit us</strong>Kupondole, Lalitpur, Nepal</span></Link>
            <a href="tel:+9779851234567"><Phone size={18} strokeWidth={1.3} aria-hidden="true" /><span><strong>Call us</strong>+977 985-1234567</span></a>
            <a href="mailto:hello@urbanearth.com.np"><Mail size={18} strokeWidth={1.3} aria-hidden="true" /><span><strong>Email us</strong>hello@urbanearth.com.np</span></a>
          </address>
          <h2 className={styles.sectionTitle}>Follow us</h2>
          <div className={styles.socials}>
            <a href="https://www.instagram.com/urban.earth.nepal/" target="_blank" rel="noopener noreferrer" aria-label="Urban Earth on Instagram (opens in new tab)"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg></a>
            <a href="https://www.facebook.com/urbanearthnepal/" target="_blank" rel="noopener noreferrer" aria-label="Urban Earth on Facebook (opens in new tab)"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.7 1.8-1.7H17V2.5c-.8-.1-1.7-.2-2.5-.2-2.6 0-4.4 1.6-4.4 4.6v2.6H7V13h3.1v9h3.4Z" /></svg></a>
          </div>
        </div>
        <div className={styles.middle}>
          <nav className={styles.navigation} aria-label="Footer navigation">
            {groups.map(({ title, links }) => <div key={title}><h2>{title}</h2><ul>{links.map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul></div>)}
          </nav>
          <div className={styles.map}>
            <iframe title="Kupondole, Lalitpur showroom area" src="https://www.google.com/maps?q=Kupondole%2C%20Lalitpur%2C%20Nepal&z=15&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            <a href="https://www.google.com/maps/search/?api=1&query=Kupondole%2C%20Lalitpur%2C%20Nepal" target="_blank" rel="noopener noreferrer"><MapPin size={12} aria-hidden="true" />Kupondole, Lalitpur<ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.newsletter}>
            <h2 className={styles.sectionTitle}>Newsletter</h2>
            <p>New collections, considered design and inspiration for your home.</p>
            <FooterNewsletter />
          </div>
          <div className={styles.hours}>
            <h2>Showroom hours<span>Visit us</span></h2>
            <p><span>Sunday – Friday</span><strong>10:00 AM – 6:00 PM</strong></p>
            <p><span>Saturday</span><strong>10:00 AM – 4:00 PM</strong></p>
            <small>Closed on public holidays</small>
          </div>
        </div>
      </div>
      <div className={styles.bottom}><div><p>© {new Date().getFullYear()} Urban Earth · All rights reserved</p><div><Link href="/contact">Customer support</Link><span aria-hidden="true">·</span><Link href="/about">About Urban Earth</Link></div><span>Made for living · Nepal</span></div></div>
    </footer>
  );
}