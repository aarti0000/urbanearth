import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const reviews = [
  ["Excellent quality flooring and professional installation. Highly recommended!", "Sabin K."],
  ["Wide variety of products. Found the perfect carpet for our living room.", "Anusha M."],
  ["Very good customer service and on-time delivery across Nepal.", "Rajan P."],
  ["Urban Earth made our office look brand new. Amazing experience!", "Bishal T."],
];

export default function HomeStorySections() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-5 pb-9 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-lg bg-[#f2f3f5] lg:grid-cols-[.78fr_1.22fr]">
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <p className="text-[10px] font-extrabold uppercase tracking-[.08em] text-[#ff6600]">About Urban Earth</p>
            <h2 className="mt-2 text-3xl font-extrabold leading-[1.05] tracking-[-.035em] text-[#063f82] sm:text-4xl">Transforming Spaces Across Nepal</h2>
            <p className="mt-4 text-sm leading-6 text-[#4f5965]">Urban Earth brings premium flooring and interior surface solutions to homes, offices, and commercial spaces across Nepal. From carpets and laminate flooring to SPC, parquet, rugs and more, we combine quality products with expert installation.</p>
            <Link href="/about" className="mt-6 inline-flex w-fit items-center gap-2 rounded bg-[#063f82] px-5 py-3 text-[10px] font-bold uppercase text-white transition hover:bg-[#ff6600]">Learn more about us <ArrowRight size={14} /></Link>
          </div>
          <div className="relative min-h-[300px] sm:min-h-[380px]"><Image src="/images/about-us.jpg" alt="Urban Earth premium interior showroom" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" /></div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-7 sm:px-8 lg:px-10">
        <div className="mb-4 flex items-center justify-between"><h2 className="text-lg font-extrabold uppercase text-[#063f82] sm:text-xl">What our customers say</h2><Link href="/contact" className="hidden text-[10px] font-bold text-[#ff6600] sm:block">View all reviews →</Link></div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map(([quote, author]) => <figure key={author} className="rounded-md border border-[#e0e5ea] p-4 shadow-[0_4px_12px_rgba(6,63,130,.035)]"><div className="flex text-[#ff6600]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={11} fill="currentColor" />)}</div><blockquote className="mt-2.5 text-[11px] leading-[18px] text-[#424b55]">“{quote}”</blockquote><figcaption className="mt-3 text-[11px] font-bold text-[#1f2b37]">— {author}</figcaption></figure>)}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-10 sm:px-8 lg:px-10">
        <div className="relative isolate overflow-hidden rounded-xl bg-[#052c5f] px-7 py-9 text-white sm:px-10">
          <Image src="/images/banner21.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-30" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#052c5f] via-[#052c5f]/90 to-[#052c5f]/35" />
          <h2 className="text-2xl font-extrabold tracking-[-.03em] sm:text-3xl">Ready to Transform Your Space?</h2>
          <p className="mt-1 text-sm text-white/80">Explore our premium collection or visit our showroom.</p>
          <div className="mt-5 flex flex-wrap gap-3"><Link href="/products" className="inline-flex items-center gap-2 rounded bg-[#ff6600] px-5 py-3 text-[10px] font-bold uppercase hover:bg-[#e65c00]">Shop now <ArrowRight size={14} /></Link><Link href="/contact" className="rounded border border-white/70 px-5 py-3 text-[10px] font-bold uppercase hover:bg-white hover:text-[#063f82]">Visit showroom</Link></div>
        </div>
      </section>
    </>
  );
}
