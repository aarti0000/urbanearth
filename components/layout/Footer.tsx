import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";


const footerLinks = [
  { title: "Shop", links: [["All products", "/products"], ["Carpets", "/products?category=Carpets"], ["Laminate flooring", "/products?category=Laminate%20Flooring"], ["Parquet", "/products?category=Parquet"], ["SPC flooring", "/products?category=SPC%20Flooring"], ["Rugs & doormats", "/products?category=Rugs"]] },
  { title: "Customer care", links: [["My account", "/login"], ["Shopping cart", "/cart"], ["Delivery information", "/contact"], ["Installation service", "/contact"], ["Returns & exchanges", "/contact"], ["Contact support", "/contact"]] },
  { title: "Urban Earth", links: [["About us", "/about"], ["Our products", "/products"], ["Visit our showroom", "/contact"], ["Contact us", "/contact"]] },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/urbanearthnepal/", background: "#1877F2" },
  { label: "Instagram", href: "https://www.instagram.com/urban.earth.nepal/", background: "radial-gradient(circle at 30% 110%, #FEDA75 0%, #FA7E1E 25%, #D62976 52%, #962FBF 75%, #4F5BD5 100%)" },
];
export default function Footer() {
  return (
    <footer className="mt-auto bg-[#000000] text-white">


      <div className="mx-auto max-w-[1440px] px-5 py-7 sm:px-6 lg:px-10 lg:py-8">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-[1.1fr_2fr] lg:gap-12">
          <div>
            <Link href="/" aria-label="Urban Earth home" className="relative block h-[36px] w-[120px] sm:h-[44px] sm:w-[150px] min-[1101px]:w-[165px]">
              <Image src="/images/logo.png" alt="Urban Earth" fill sizes="(max-width: 639px) 120px, (max-width: 1100px) 150px, 165px" className="object-contain object-left" />
            </Link>
            <p className="mt-3 max-w-sm text-xs leading-5 text-white">Quality flooring, rugs and interior essentials selected to make every space feel more like home.</p>
            <div className="mt-4 space-y-2 text-xs text-white">
              <Link href="/contact" className="flex items-start gap-3 transition hover:text-white"><MapPin className="mt-0.5 shrink-0 text-white" size={17} />Urban Earth showroom, Nepal</Link>
              <a href="tel:+9779800000000" className="flex items-center gap-3 transition hover:text-white"><Phone className="shrink-0 text-white" size={17} />+977 9800000000</a>
              <a href="mailto:info@urbanearth.com" className="flex items-center gap-3 transition hover:text-white"><Mail className="shrink-0 text-white" size={17} />info@urbanearth.com</a>
            </div>
            <div className="mt-4 flex gap-2">
              {socialLinks.map((item) => <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`Urban Earth on ${item.label} (opens in a new tab)`} style={{ background: item.background }} className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                {item.label === "Facebook" ? <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M13.5 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.7 1.8-1.7H17V2.5c-.8-.1-1.7-.2-2.5-.2-2.6 0-4.4 1.6-4.4 4.6v2.6H7V13h3.1v9h3.4Z" /></svg> : <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>}
              </a>)}
            </div>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white">{group.title}</h2><div className="mt-2 h-px w-7 bg-[#ffffff]" />
                <ul className="mt-3 space-y-1.5">{group.links.map(([label, href]) => <li key={label}><Link href={href} className="text-xs leading-5 text-white transition hover:text-white">{label}</Link></li>)}</ul>
              </div>
            ))}
          </nav>
        </div>

      </div>

      <div className="border-t border-white/10 bg-[#000000]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-3 text-[11px] text-white sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>Â© {new Date().getFullYear()} Urban Earth. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2"><span className="rounded border border-white/15 px-2 py-1 text-[10px] font-semibold tracking-wide text-white">SECURE CHECKOUT</span><Link href="/privacy-policy" className="transition hover:text-white">Privacy policy</Link><Link href="/terms" className="transition hover:text-white">Terms & conditions</Link></div>
        </div>
      </div>
    </footer>
  );
}
