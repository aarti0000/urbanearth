import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@homehaven.com",
      description: "Send us an email anytime.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+977 9800000000",
      description: "Mon–Fri, 9am–5pm",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pokhara, Nepal",
      description: "Our home base.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section className="bg-[#faf7f2] px-6 pb-24 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">

        {contactDetails.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group relative h-[360px] overflow-hidden rounded-2xl"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/50" />

              {/* Content */}
              <div className="relative flex h-full flex-col items-center justify-center p-8 text-center text-white">

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md">
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h2 className="mt-6 font-serif text-3xl">
                  {item.title}
                </h2>

                {/* Value */}
                <p className="mt-3 text-sm font-medium">
                  {item.value}
                </p>

                {/* Description */}
                <p className="mt-2 text-sm text-white/80">
                  {item.description}
                </p>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}