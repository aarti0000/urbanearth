import Image from "next/image";
import { Clock3, HandHeart, Headphones } from "lucide-react";

const promises = [
  { icon: Headphones, title: "Expert support", text: "Get advice from our flooring experts" },
  { icon: Clock3, title: "Quick response", text: "We reply as soon as possible" },
  { icon: HandHeart, title: "Customer first", text: "Your satisfaction is our priority" },
];

export default function ContactHero() {
  return (
    <section className="relative isolate min-h-[620px] overflow-hidden bg-black text-white">
      <Image src="/images/about2.png" alt="Warm premium interior with wooden flooring" fill priority sizes="100vw" className="object-cover object-[68%_center]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.58)_0%,rgba(0,0,0,.42)_45%,rgba(0,0,0,.12)_100%)]" />
      <div className="relative mx-auto flex min-h-[620px] max-w-[1440px] items-center px-6 py-16 sm:px-10 lg:px-16">
        <div className="w-full max-w-[620px]">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white">Contact us</p>
          <h1 className="mt-5 text-[42px] font-semibold leading-[1.12] tracking-[-0.035em] text-white sm:text-[54px]">We&apos;re Here to Help<br />You Build <span className="text-white">Better Spaces</span></h1>
          <p className="mt-6 max-w-[520px] text-[15px] leading-7 text-white">Have a question, need expert advice, or want a quote for your project? Our team is ready to assist you.</p>
          <div className="mt-9 grid max-w-[570px] grid-cols-3 gap-3">
            {promises.map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center sm:text-left">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white sm:mx-0"><Icon size={23} strokeWidth={1.5} /></span>
                <p className="mt-3 text-xs font-semibold text-white">{title}</p>
                <p className="mt-1 hidden max-w-[130px] text-[11px] leading-5 text-white sm:block">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
