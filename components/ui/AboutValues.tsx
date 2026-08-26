import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";

const benefits = [
  "Wide range of flooring options",
  "Premium carpets, rugs & mats",
  "Expert guidance & after-sales support",
  "Solutions for homes & commercial projects",
];

export default function AboutValues() {
  return (
    <section className="bg-[#f8f4ee] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-[1220px] items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div className="grid h-[560px] grid-cols-2 grid-rows-2 gap-1.5 overflow-hidden rounded-xl">
          <div className="relative overflow-hidden"><Image src="/images/about2.png" alt="Premium wood flooring in a living room" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" /></div>
          <div className="relative overflow-hidden"><Image src="/images/about3.png" alt="A selection of premium flooring finishes" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" /></div>
          <div className="relative overflow-hidden"><Image src="/images/about4.png" alt="Herringbone timber flooring detail" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" /></div>
          <div className="relative overflow-hidden"><Image src="/images/about5.png" alt="Warm dining room with natural flooring" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" /></div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.07em] text-[#ef5b12]">What we offer</p>
          <h2 className="mt-4 max-w-[520px] text-4xl font-semibold leading-[1.12] tracking-[-0.03em] text-[#171717]">Complete Flooring &amp;<br />Interior <span className="text-[#ef5b12]">Solutions</span></h2>
          <p className="mt-6 max-w-[540px] text-[15px] leading-7 text-[#555]">From elegant wooden floors to modern SPC, carpets, rugs, and more—we have everything you need to create spaces that are stylish, functional, and truly yours.</p>
          <ul className="mt-6 space-y-4">
            {benefits.map((benefit) => <li key={benefit} className="flex items-center gap-3 text-sm font-medium text-[#242424]"><CircleCheck size={20} className="shrink-0 fill-[#ef5b12] text-white" />{benefit}</li>)}
          </ul>
          <Link href="/products" className="mt-8 inline-flex min-h-12 items-center gap-5 rounded bg-[#07539a] px-6 text-xs font-semibold text-white shadow-sm transition hover:bg-[#063f82]">Explore Products <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
