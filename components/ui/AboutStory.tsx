import { HandHeart, House, Leaf, ShieldCheck } from "lucide-react";

const values = [
  { icon: Leaf, title: "Sustainable", text: "Eco-friendly choices for a greener tomorrow." },
  { icon: ShieldCheck, title: "Premium quality", text: "Carefully selected products you can trust." },
  { icon: House, title: "Perfect for every space", text: "From cozy homes to commercial spaces." },
  { icon: HandHeart, title: "Customer first", text: "We're here to support you at every step." },
];

export default function AboutStory() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-[1180px] text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.07em] text-[#000000]">Our story</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-[#171717] sm:text-4xl">Inspired by <span className="text-[#000000]">Nature.</span> Designed for You.</h2>
        <p className="mx-auto mt-5 max-w-[780px] text-[15px] leading-7 text-[#575757]">Urban Earth was founded with a simple vision—to make world-class flooring and interior solutions accessible to every home and business in Nepal. With a passion for quality and a commitment to our customers, we source trusted products that stand the test of time.</p>
        <div className="mt-12 grid gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className={"px-7 " + (index ? "lg:border-l lg:border-[#d9d9d9]" : "")}>
              <Icon className="mx-auto h-11 w-11 text-[#000000]" strokeWidth={1.45} />
              <h3 className="mt-5 text-[12px] font-semibold uppercase text-[#171717]">{title}</h3>
              <p className="mx-auto mt-3 max-w-[190px] text-[13px] leading-6 text-[#555]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
