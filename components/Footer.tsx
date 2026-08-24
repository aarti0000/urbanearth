import Image from "next/image";
import Link from "next/link";
import { Headphones, Mail, MapPin, Phone, ShieldCheck, Truck, Wrench } from "lucide-react";

const benefits = [
  { icon: Truck, title: "Delivery across Nepal", text: "Safe delivery to your doorstep" },
  { icon: Wrench, title: "Expert installation", text: "Fitted by experienced professionals" },
  { icon: ShieldCheck, title: "Quality guaranteed", text: "Carefully selected, durable products" },
  { icon: Headphones, title: "Personal support", text: "Helpful advice before and after purchase" },
];

const footerLinks = [
  { title: "Shop", links: [["All products", "/products"], ["Carpets", "/products?category=carpets"], ["Laminate flooring", "/products?category=laminate"], ["Parquet", "/products?category=parquet"], ["SPC flooring", "/products?category=spc"], ["Rugs & doormats", "/products?category=rugs"]] },
  { title: "Customer care", links: [["My account", "/login"], ["Shopping cart", "/cart"], ["Delivery information", "/contact"], ["Installation service", "/contact"], ["Returns & exchanges", "/contact"], ["Contact support", "/contact"]] },
  { title: "Urban Earth", links: [["About us", "/about"], ["Our products", "/products"], ["Visit our showroom", "/contact"], ["Contact us", "/contact"]] },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/", icon: <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.7 1.8-1.7H17V2.5c-.8-.1-1.7-.2-2.5-.2-2.6 0-4.4 1.6-4.4 4.6v2.6H7V13h3.1v9h3.4Z" /> },
  { label: "Instagram", href: "https://www.instagram.com/", icon: <path d="M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.85-7.8a1.07 1.07 0 1 1-2.14 0 1.07 1.07 0 0 1 2.14 0ZM21 8.27c-.05-1.3-.36-2.45-1.3-3.38S17.64 3.65 16.34 3.6c-1.36-.08-5.31-.08-6.67 0-1.3.05-2.45.36-3.38 1.3S5.05 6.96 5 8.26c-.08 1.36-.08 5.31 0 6.67.05 1.3.36 2.45 1.3 3.38s2.08 1.24 3.38 1.3c1.36.07 5.31.07 6.67 0 1.3-.06 2.45-.37 3.38-1.3s1.24-2.08 1.3-3.38c.07-1.36.07-5.31 0-6.67ZM19.17 16.4a3.03 3.03 0 0 1-1.72 1.72c-1.2.47-4.04.36-5.45.36s-4.26.1-5.45-.36a3.03 3.03 0 0 1-1.72-1.72c-.47-1.2-.36-4.04-.36-5.45s-.1-4.26.36-5.45a3.03 3.03 0 0 1 1.72-1.72c1.2-.47 4.04-.36 5.45-.36s4.26-.1 5.45.36a3.03 3.03 0 0 1 1.72 1.72c.47 1.2.36 4.04.36 5.45s.1 4.26-.36 5.45Z" /> },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#063f82] text-white">
      <section className="border-y border-[#dfe7ef] bg-[#f7f9fc] text-[#152238]" aria-label="Shopping benefits">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 divide-y divide-[#dfe7ef] px-5 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-6 lg:grid-cols-4 lg:px-10">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4 py-6 sm:px-5 lg:px-7 lg:py-7 first:pl-0 last:pr-0">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ff6600]/10 text-[#ff6600]"><Icon size={21} strokeWidth={1.8} aria-hidden="true" /></span>
              <div><p className="text-[13px] font-bold text-[#063f82]">{title}</p><p className="mt-1 text-xs leading-5 text-[#6b7280]">{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-5 pb-9 pt-12 sm:px-6 lg:px-10 lg:pb-10 lg:pt-16">
        <div className="grid gap-11 md:grid-cols-2 lg:grid-cols-[1.35fr_2fr] lg:gap-16">
          <div>
            <Link href="/" aria-label="Urban Earth home" className="inline-flex h-18.5 w-54.5 items-center rounded-xl bg-white px-3 py-2 shadow-sm transition hover:shadow-md sm:h-20.5 sm:w-61">
              <Image src="/images/logo.png" alt="Urban Earth" width={250} height={81} className="h-full w-full object-contain object-center" />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/70">Quality flooring, rugs and interior essentials selected to make every space feel more like home.</p>
            <div className="mt-6 space-y-3 text-[13px] text-white/75">
              <Link href="/contact" className="flex items-start gap-3 transition hover:text-white"><MapPin className="mt-0.5 shrink-0 text-[#ff7a21]" size={17} />Urban Earth showroom, Nepal</Link>
              <a href="tel:+9779800000000" className="flex items-center gap-3 transition hover:text-white"><Phone className="shrink-0 text-[#ff7a21]" size={17} />+977 9800000000</a>
              <a href="mailto:info@urbanearth.com" className="flex items-center gap-3 transition hover:text-white"><Mail className="shrink-0 text-[#ff7a21]" size={17} />info@urbanearth.com</a>
            </div>
            <div className="mt-6 flex gap-2.5">
              {socialLinks.map((item) => <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={`Urban Earth on ${item.label}`} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#ff6600] hover:bg-[#ff6600]"><svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">{item.icon}</svg></a>)}
            </div>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-7 gap-y-10 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white">{group.title}</h2><div className="mt-3 h-0.5 w-7 bg-[#ff6600]" />
                <ul className="mt-5 space-y-3">{group.links.map(([label, href]) => <li key={label}><Link href={href} className="text-[13px] text-white/65 transition hover:text-white">{label}</Link></li>)}</ul>
              </div>
            ))}
          </nav>
        </div>

      </div>

      <div className="border-t border-white/10 bg-[#04366f]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-5 text-xs text-white/55 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Urban Earth. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2"><span className="rounded border border-white/15 px-2 py-1 text-[10px] font-semibold tracking-wide text-white/70">SECURE CHECKOUT</span><Link href="/privacy-policy" className="transition hover:text-white">Privacy policy</Link><Link href="/terms" className="transition hover:text-white">Terms & conditions</Link></div>
        </div>
      </div>
    </footer>
  );
}
