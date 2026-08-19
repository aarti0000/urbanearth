"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-white px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
            Get In Touch
          </p>

          <h2 className="mt-4 font-serif text-4xl text-stone-900 sm:text-5xl">
            Send us a message.
          </h2>

          <p className="mt-5 text-stone-600">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-6"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-stone-700"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="w-full rounded-xl border border-stone-200 bg-[#faf7f2] px-4 py-3 text-sm outline-none transition focus:border-stone-500 focus:ring-1 focus:ring-stone-300"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-stone-700"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-xl border border-stone-200 bg-[#faf7f2] px-4 py-3 text-sm outline-none transition focus:border-stone-500 focus:ring-1 focus:ring-stone-300"
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-stone-700"
            >
              Subject
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="How can we help?"
              required
              className="w-full rounded-xl border border-stone-200 bg-[#faf7f2] px-4 py-3 text-sm outline-none transition focus:border-stone-500 focus:ring-1 focus:ring-stone-300"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-stone-700"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell us how we can help..."
              required
              className="w-full resize-none rounded-xl border border-stone-200 bg-[#faf7f2] px-4 py-3 text-sm outline-none transition focus:border-stone-500 focus:ring-1 focus:ring-stone-300"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-full bg-stone-900 px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-stone-800 hover:shadow-lg"
          >
            Send Message
          </button>

          {/* Success Message */}
          {submitted && (
            <p className="text-center text-sm font-medium text-green-700">
              Thank you! Your message has been received.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}