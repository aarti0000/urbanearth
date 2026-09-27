import { Award, Boxes, MapPin, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "1000+", label: "Happy Customers" },
  { icon: Boxes, value: "500+", label: "Products" },
  { icon: Award, value: "5+", label: "Years of Trust" },
  { icon: MapPin, value: "Nationwide", label: "Delivery" },
];

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(120deg,#000000,#000000)] px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-20">
      <div className="absolute inset-0 opacity-[.07] [background-image:radial-gradient(circle_at_center,transparent_0,transparent_45%,white_46%,transparent_47%)] [background-size:260px_260px]" />
      <div className="relative mx-auto max-w-[1180px] text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white">Our promise</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">Better Floors. Better Spaces. Better Life.</h2>
        <span className="mx-auto mt-5 block h-[2px] w-16 bg-white" />
        <p className="mx-auto mt-5 max-w-[680px] text-[15px] leading-7 text-white/85">We don&apos;t just sell products—we help you build spaces that inspire.<br className="hidden sm:block" /> With Urban Earth, you get quality, style, and lasting value.</p>
        <div className="mt-11 grid gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }, index) => (
            <div key={label} className={"flex items-center justify-center gap-4 px-6 text-left " + (index ? "lg:border-l lg:border-white/35" : "")}>
              <Icon className="h-10 w-10 shrink-0 text-white" strokeWidth={1.5} />
              <div><p className="text-3xl font-medium">{value}</p><p className="mt-1 text-xs text-white/80">{label}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
