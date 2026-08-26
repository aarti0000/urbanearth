"use client";

import Image from "next/image";
import { useState } from "react";
import { Send } from "lucide-react";

const fieldClass = "h-12 w-full rounded-md border border-[#dedede] bg-white px-4 text-sm text-[#222] outline-none transition placeholder:text-[#8a8a8a] focus:border-[#ef5b12] focus:ring-2 focus:ring-[#ef5b12]/10";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section className="bg-white px-6 pb-20 pt-20 sm:px-10 lg:px-16 lg:pb-24">
      <div className="mx-auto grid max-w-[1320px] gap-12 md:grid-cols-[minmax(0,.9fr)_minmax(380px,1.1fr)] md:gap-8 lg:gap-14">
        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.025em] text-[#1d1d1d]">Send Us a Message</h2>
          <p className="mt-3 text-sm text-[#555]">Fill out the form and our team will get back to you shortly.</p>
          <form onSubmit={handleSubmit} className="mt-7 grid gap-4 sm:grid-cols-2">
            <label className="sr-only" htmlFor="contact-name">Your name</label><input className={fieldClass} id="contact-name" name="name" placeholder="Your Name" required />
            <label className="sr-only" htmlFor="contact-email">Your email</label><input className={fieldClass} id="contact-email" name="email" type="email" placeholder="Your Email" required />
            <label className="sr-only" htmlFor="contact-phone">Phone number</label><input className={fieldClass + " sm:col-span-2"} id="contact-phone" name="phone" type="tel" placeholder="Phone Number" />
            <label className="sr-only" htmlFor="contact-subject">Subject</label><input className={fieldClass + " sm:col-span-2"} id="contact-subject" name="subject" placeholder="Subject" required />
            <label className="sr-only" htmlFor="contact-message">Your message</label><textarea className={fieldClass + " min-h-[150px] resize-y py-4 sm:col-span-2"} id="contact-message" name="message" placeholder="Your Message" required />
            <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#ef5b12] px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[#d94f0c]">Send Message <Send size={16} /></button>
            {submitted && <p role="status" className="self-center text-sm font-medium text-green-700 sm:pl-2">Thank you—your message has been received.</p>}
          </form>
        </div>

        <div id="showroom-map" className="min-w-0 overflow-hidden rounded-xl border border-[#dfdfdf] bg-white shadow-sm">
          <iframe title="Urban Earth showroom in Kupondole, Lalitpur" src="https://www.google.com/maps?q=Kupondole%2C%20Lalitpur%2C%20Nepal&z=15&output=embed" className="h-[300px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          <div className="grid gap-5 p-5 sm:grid-cols-[220px_1fr] sm:p-6">
            <div className="relative min-h-[180px] overflow-hidden rounded-lg"><Image src="/images/about5.png" alt="Urban Earth flooring showroom inspiration" fill sizes="220px" className="object-cover" /></div>
            <div className="py-1"><h3 className="text-xl font-semibold text-[#222]">Visit Our Showroom</h3><p className="mt-3 text-sm leading-6 text-[#555]">Explore our wide range of flooring and interior solutions in person.</p><div className="mt-4 text-sm leading-6 text-[#333]"><p>Sun – Fri: 10:00 AM – 6:00 PM</p><p>Saturday: 10:00 AM – 4:00 PM</p><p className="text-[#777]">(Closed on Public Holidays)</p></div><a href="https://www.google.com/maps/search/?api=1&query=Kupondole%2C%20Lalitpur%2C%20Nepal" target="_blank" rel="noreferrer" className="mt-4 inline-flex text-xs font-semibold text-[#ef5b12] hover:underline">Get directions →</a></div>
          </div>
        </div>
      </div>
    </section>
  );
}
