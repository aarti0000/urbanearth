import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#17140f] text-white">
      <Image src="/images/Screenshot 2026-08-24 110128.png" alt="Modern bedroom with premium wood flooring" fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/5" />
      <div className="relative mx-auto flex min-h-[390px] max-w-[1440px] items-center px-5 py-12 sm:min-h-[440px] sm:px-8 lg:min-h-[470px] lg:px-10">
        <div className="max-w-[620px]">
          <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#ff6600] sm:text-xs">Best flooring in Nepal</p>
          <h1 className="max-w-[580px] text-[42px] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-[58px]">Transform Your Space with <span className="text-[#ff6600]">Beautiful Flooring</span></h1>
          <p className="mt-5 max-w-[530px] text-sm leading-6 text-white/82 sm:text-[15px]">Premium carpets, laminate, parquet, SPC flooring, rugs and more. Quality you can trust, beauty that lasts.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/products" className="inline-flex min-h-12 items-center gap-2 rounded bg-[#ff6600] px-6 text-xs font-bold uppercase text-white transition hover:bg-[#e65c00]">Shop now <ArrowRight size={16} /></Link>
            <Link href="#categories" className="inline-flex min-h-12 items-center rounded border border-white/60 px-6 text-xs font-bold uppercase text-white transition hover:bg-white hover:text-[#062f64]">Explore categories</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
