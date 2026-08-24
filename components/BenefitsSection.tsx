import {
  Headphones,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

const benefits = [
  {
    title: "Free Delivery",
    description: "Across Nepal",
    icon: Truck,
  },
  {
    title: "Quality Guaranteed",
    description: "Premium Products",
    icon: ShieldCheck,
  },
  {
    title: "Professional Installation",
    description: "Expert Installation Services",
    icon: Wrench,
  },
  {
    title: "Customer Support",
    description: "We're Here to Help",
    icon: Headphones,
  },
];

export default function BenefitsSection() {
  return (
    <section className="border-y border-[#e8e8e8] bg-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className={`flex min-h-[125px] items-center gap-4 px-3 py-6 sm:px-6 lg:min-h-[135px] lg:px-8 ${
                  index % 2 !== 0
                    ? "border-l border-[#e8e8e8]"
                    : ""
                } ${
                  index >= 2
                    ? "border-t border-[#e8e8e8] lg:border-t-0"
                    : ""
                } ${
                  index > 0
                    ? "lg:border-l lg:border-[#e8e8e8]"
                    : ""
                }`}
              >
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fff5ef] text-[#ff6600] sm:h-14 sm:w-14">
                  <Icon
                    size={25}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[12px] font-bold uppercase leading-5 tracking-[0.04em] text-[#063f82] sm:text-sm">
                    {benefit.title}
                  </h3>

                  <p className="mt-1 text-[11px] leading-5 text-[#777] sm:text-xs">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}