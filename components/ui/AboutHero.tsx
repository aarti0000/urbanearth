import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative isolate min-h-[570px] overflow-hidden bg-[#f7f3ed]">
      <Image src="/images/about2.png" alt="Warm modern living room with natural wooden flooring" fill priority sizes="100vw" className="object-cover object-[62%_center]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#f8f4ee_0%,rgba(248,244,238,.97)_25%,rgba(248,244,238,.78)_39%,rgba(248,244,238,.12)_58%,transparent_100%)]" />
      <div className="relative mx-auto flex min-h-[570px] max-w-[1440px] items-center px-6 py-16 sm:px-10 lg:px-16">
        <div className="max-w-[540px]">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#ef5b12]">About us</p>
          <h1 className="mt-5 text-[43px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#171717] sm:text-[54px]">Rooted in Quality.<br />Built for <span className="text-[#ef5b12]">Better Living.</span></h1>
          <p className="mt-6 max-w-[480px] text-[15px] leading-7 text-[#454545]">At Urban Earth, we believe your space should reflect who you are and how you live. That&apos;s why we bring you premium flooring and interiors that combine beauty, durability, and sustainability.</p>
          <span className="mt-7 block h-[2px] w-20 bg-[#ef5b12]" />
        </div>
      </div>
    </section>
  );
}
