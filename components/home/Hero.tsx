import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Headphones, Leaf, ShieldCheck, Wrench } from "lucide-react";

const benefits = [
  { title: "Premium quality", description: "Long lasting & durable", icon: ShieldCheck },
  { title: "Expert installation", description: "Professional & reliable", icon: Wrench },
  { title: "Eco friendly", description: "Sustainable materials", icon: Leaf },
  { title: "Customer support", description: "We're here to help", icon: Headphones },
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-[660px] overflow-hidden bg-[#4b3a27] text-white sm:min-h-[720px] lg:min-h-[calc(100svh-118px)]">
      <Image src="/images/homehero.png" alt="Elegant room with premium polished wooden flooring" fill priority sizes="100vw" className="object-cover object-[56%_center] sm:object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,12,7,0.76)_0%,rgba(25,17,10,0.48)_31%,rgba(29,20,12,0.12)_62%,rgba(0,0,0,0.04)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(20,12,6,0.58)_0%,transparent_48%)]" />

      <div className="relative mx-auto flex min-h-[660px] max-w-[1440px] flex-col px-5 pb-7 pt-16 sm:min-h-[720px] sm:px-8 sm:pb-9 sm:pt-20 lg:min-h-[calc(100svh-118px)] lg:px-10 lg:pb-11 lg:pt-[14vh]">
        <div className="max-w-[620px]">
          <h1 className="max-w-[600px] text-[42px] font-bold uppercase leading-[1.04] tracking-[-0.035em] drop-shadow-sm sm:text-[54px] lg:text-[64px]">Luxury flooring<br />for modern living</h1>
          <p className="mt-5 max-w-[440px] text-[15px] leading-7 text-white/90 sm:text-[17px]">Premium quality flooring solutions that bring beauty, comfort and value to your space.</p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link href="/products" className="inline-flex min-h-12 items-center justify-center gap-8 rounded-[3px] border border-[#9e8b27] bg-[#4f542b]/90 px-7 text-xs font-bold uppercase tracking-wide transition hover:bg-[#656b35]">Shop now <ArrowRight size={17} strokeWidth={1.8} /></Link>
            <Link href="/products" className="inline-flex min-h-12 items-center justify-center rounded-[3px] border border-white/75 bg-black/10 px-7 text-xs font-bold uppercase tracking-wide backdrop-blur-[1px] transition hover:bg-white hover:text-[#33271b]">Explore collection</Link>
          </div>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-y-5 pt-12 sm:flex sm:flex-wrap sm:gap-y-6 lg:flex-nowrap">
          {benefits.map(({ title, description, icon: Icon }, index) => (
            <div key={title} className={`flex items-center gap-3 pr-4 sm:min-w-[230px] sm:flex-1 sm:px-5 lg:min-w-0 ${index === 0 ? "sm:pl-0" : "sm:border-l sm:border-white/45"} ${index % 2 === 1 ? "border-l border-white/45 pl-4" : ""}`}>
              <Icon aria-hidden="true" className="h-8 w-8 shrink-0 sm:h-10 sm:w-10" strokeWidth={1.35} />
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wide sm:text-xs">{title}</p>
                <p className="mt-0.5 text-[10px] text-white/80 sm:text-[11px]">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-11 right-10 hidden items-center gap-2 xl:flex" aria-hidden="true">
          <span className="h-[3px] w-9 rounded-full bg-white" />
          {[1, 2, 3].map((item) => <span key={item} className="h-[3px] w-9 rounded-full bg-white/40" />)}
        </div>
      </div>
    </section>
  );
}
