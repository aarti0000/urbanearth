import { Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";

const details = [
  { icon: MapPin, title: "Visit our showroom", lines: ["Kupondole, Lalitpur", "Nepal"], action: "View on map", href: "#showroom-map" },
  { icon: Phone, title: "Call us", lines: ["+977 985-1234567", "Sun – Fri (10AM – 6PM)"], action: "Call now", href: "tel:+9779851234567" },
  { icon: Mail, title: "Email us", lines: ["hello@urbanearth.com.np", "We'll get back to you"], action: "Send email", href: "mailto:hello@urbanearth.com.np" },
  { icon: MessageCircleMore, title: "Live chat", lines: ["Chat with our team", "during business hours"], action: "Start chat", href: "mailto:hello@urbanearth.com.np?subject=Live%20chat%20request" },
];

export default function ContactInfo() {
  return (
    <section className="relative z-10 bg-white px-6 sm:px-10 lg:px-16">
      <div className="mx-auto -mt-10 grid max-w-[1320px] overflow-hidden rounded-xl border border-[#e5e5e5] bg-white shadow-[0_14px_40px_rgba(0,0,0,.1)] sm:grid-cols-2 lg:grid-cols-4">
        {details.map(({ icon: Icon, title, lines, action, href }, index) => (
          <article key={title} className={"flex gap-4 p-6 sm:p-7 " + (index ? "border-t border-[#e6e6e6] sm:border-l sm:border-t-0" : "")}>
            <Icon className="mt-0.5 h-8 w-8 shrink-0 text-[#000000]" strokeWidth={1.5} />
            <div><h2 className="text-sm font-semibold capitalize text-[#1d1d1d]">{title}</h2><div className="mt-2 text-xs leading-5 text-[#555]">{lines.map(line => <p key={line}>{line}</p>)}</div><a href={href} className="mt-3 inline-flex text-xs font-semibold text-[#000000] hover:underline">{action} →</a></div>
          </article>
        ))}
      </div>
    </section>
  );
}
