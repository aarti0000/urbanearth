
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-stone-50 px-6 py-16">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-semibold text-stone-900">
            How can we help?
          </h1>

          <p className="mt-4 text-stone-600">
            We're here to help with anything you need.
          </p>
        </div>

        {/* Help Categories */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-medium text-stone-900">
              🛍️ Order Help
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Need help with your order?
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-medium text-stone-900">
              📦 Delivery
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Questions about your delivery?
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-medium text-stone-900">
              ↩️ Returns & Refunds
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Need help returning an item?
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-medium text-stone-900">
              🏺 Product Questions
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Want to know more about a product?
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-medium text-stone-900">
              💳 Payment
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Having trouble with payment?
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-medium text-stone-900">
              💬 Other Questions
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Need help with something else?
            </p>
          </div>

        </div>

        {/* Contact Form */}
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl bg-white p-8 shadow-sm">

          <h2 className="text-2xl font-semibold text-stone-900">
            Send us a message
          </h2>

          <p className="mt-2 text-sm text-stone-600">
            Tell us what you need help with and we'll get back to you.
          </p>

          <form className="mt-8 space-y-5">

            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-stone-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-stone-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700">
                What can we help you with?
              </label>

              <select className="w-full rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-stone-500">
                <option>Order Help</option>
                <option>Delivery</option>
                <option>Returns & Refunds</option>
                <option>Product Questions</option>
                <option>Payment</option>
                <option>Other Questions</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Tell us how we can help..."
                className="w-full rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-stone-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-stone-900 px-6 py-3 font-medium text-white transition hover:bg-stone-700"
            >
              Send Message
            </button>

          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-stone-900">
            Still need help?
          </h2>

          <p className="mt-3 text-stone-600">
            You can also reach us directly.
          </p>

          <div className="mt-6 space-y-2 text-stone-700">
            <p>📧 homehaven@gmail.com</p>
            <p>📞 +977-9845782904</p>
            <p>📍 Pokhara, Nepal</p>
          </div>
        </div>

      </div>
    </main>
  );
}

