"use client";

import { useCart } from "@/components/CartContext";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  CreditCard,
  Landmark,
  MapPin,
  Package,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { FormEvent, useState } from "react";

export default function CheckoutContent() {
  const { cart } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal >= 5000 ? 0 : 250;

  const total = subtotal + shipping;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      /*
        Payment/order logic will go here.

        For example:
        - create order in database
        - initiate eSewa/Khalti/card payment
        - or confirm COD order
      */

      console.log("Selected payment:", paymentMethod);
      console.log("Order total:", total);
      console.log("Cart:", cart);
    } catch (error) {
      console.error("Checkout failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cart.length === 0) {
    return (
      <main className="min-h-[70vh] bg-[#faf7f2] px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <ShoppingBag
            size={44}
            strokeWidth={1.4}
            className="mx-auto text-stone-400"
          />

          <h1 className="mt-6 font-serif text-3xl font-semibold text-stone-900">
            Your cart is empty
          </h1>

          <p className="mt-3 text-sm text-stone-500">
            Add some products before proceeding to checkout.
          </p>

          <Link
            href="/products"
            className="mt-7 inline-flex rounded-full bg-stone-900 px-7 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf7f2]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Heading */}
        <div className="mb-10">
          <Link
            href="/cart"
            className="mb-5 inline-flex items-center gap-2 text-sm text-stone-500 transition hover:text-stone-900"
          >
            <ArrowLeft size={16} />
            Back to cart
          </Link>

          <h1 className="font-serif text-4xl font-semibold text-stone-900">
            Checkout
          </h1>

          <p className="mt-2 text-sm text-stone-500">
            Complete your delivery and payment information.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-10 lg:grid-cols-[1fr_420px]"
        >
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* Contact Information */}
            <section className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100">
                  <Package size={18} />
                </div>

                <div>
                  <h2 className="font-serif text-xl font-semibold text-stone-900">
                    Contact Information
                  </h2>

                  <p className="text-xs text-stone-500">
                    We'll use this to contact you about your order.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <Field
                  label="First Name"
                  name="firstName"
                  placeholder="First name"
                />

                <Field
                  label="Last Name"
                  name="lastName"
                  placeholder="Last name"
                />

                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />

                <Field
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="98XXXXXXXX"
                />
              </div>
            </section>

            {/* Shipping */}
            <section className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100">
                  <MapPin size={18} />
                </div>

                <div>
                  <h2 className="font-serif text-xl font-semibold text-stone-900">
                    Delivery Address
                  </h2>

                  <p className="text-xs text-stone-500">
                    Enter the address where your order should be delivered.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <Field
                    label="Address"
                    name="address"
                    placeholder="Street, area or landmark"
                  />
                </div>

                <Field
                  label="City"
                  name="city"
                  placeholder="Kathmandu"
                />

                <Field
                  label="Province"
                  name="province"
                  placeholder="Bagmati"
                />

                <Field
                  label="Postal Code"
                  name="postalCode"
                  placeholder="44600"
                  required={false}
                />

                <Field
                  label="Country"
                  name="country"
                  value="Nepal"
                  readOnly
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-stone-700">
                  Order Notes
                </label>

                <textarea
                  name="notes"
                  rows={4}
                  placeholder="Delivery instructions, landmarks, preferred time, etc."
                  className="w-full resize-none rounded-2xl border border-stone-200 bg-[#faf7f2] px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-stone-500"
                />
              </div>
            </section>

            {/* Payment */}
            <section className="rounded-3xl border border-stone-200 bg-white p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100">
                  <CreditCard size={18} />
                </div>

                <div>
                  <h2 className="font-serif text-xl font-semibold text-stone-900">
                    Payment Method
                  </h2>

                  <p className="text-xs text-stone-500">
                    Choose how you would like to pay.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <PaymentOption
                  selected={paymentMethod === "cod"}
                  onClick={() => setPaymentMethod("cod")}
                  title="Cash on Delivery"
                  description="Pay when your order arrives."
                  icon={<Truck size={20} />}
                />

                <PaymentOption
                  selected={paymentMethod === "esewa"}
                  onClick={() => setPaymentMethod("esewa")}
                  title="eSewa"
                  description="Pay securely using your eSewa account."
                  icon={<Landmark size={20} />}
                />

                <PaymentOption
                  selected={paymentMethod === "khalti"}
                  onClick={() => setPaymentMethod("khalti")}
                  title="Khalti"
                  description="Pay securely through Khalti."
                  icon={<Landmark size={20} />}
                />

                <PaymentOption
                  selected={paymentMethod === "card"}
                  onClick={() => setPaymentMethod("card")}
                  title="Debit / Credit Card"
                  description="Pay using your Visa or Mastercard."
                  icon={<CreditCard size={20} />}
                />
              </div>
            </section>
          </div>

          {/* RIGHT SIDE */}
          <aside>
            <div className="sticky top-8 rounded-3xl border border-stone-200 bg-white p-6">
              <h2 className="font-serif text-2xl font-semibold text-stone-900">
                Order Summary
              </h2>

              {/* Products */}
              <div className="mt-6 max-h-[360px] space-y-5 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4"
                  >
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-stone-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />

                      <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-stone-900 px-1 text-[10px] text-white">
                        {item.quantity}
                      </span>
                    </div>

                    <div className="flex flex-1 justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-stone-900">
                          {item.name}
                        </p>

                        <p className="mt-1 text-xs text-stone-500">
                          Qty: {item.quantity}
                        </p>
                      </div>

                      <p className="whitespace-nowrap text-sm font-medium text-stone-900">
                        Rs.{" "}
                        {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="mt-6 space-y-3 border-t border-stone-200 pt-5">
                <SummaryRow
                  label="Subtotal"
                  value={`Rs. ${subtotal.toLocaleString()}`}
                />

                <SummaryRow
                  label="Shipping"
                  value={
                    shipping === 0
                      ? "Free"
                      : `Rs. ${shipping.toLocaleString()}`
                  }
                />

                {shipping === 0 && (
                  <div className="flex items-center gap-2 text-xs text-green-700">
                    <Check size={14} />
                    Free delivery applied
                  </div>
                )}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-stone-200 pt-5">
                <span className="font-medium text-stone-700">
                  Total
                </span>

                <span className="font-serif text-2xl font-semibold text-stone-900">
                  Rs. {total.toLocaleString()}
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full rounded-full bg-stone-900 px-6 py-4 text-sm font-medium text-white transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting
                  ? "Processing..."
                  : paymentMethod === "cod"
                  ? "Place Order"
                  : `Pay Rs. ${total.toLocaleString()}`}
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-stone-400">
                By placing your order, you agree to our terms and privacy
                policy.
              </p>
            </div>
          </aside>
        </form>
      </div>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
  value,
  readOnly = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  readOnly?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-stone-700"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={value}
        readOnly={readOnly}
        className="w-full rounded-full border border-stone-200 bg-[#faf7f2] px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-stone-500"
      />
    </div>
  );
}

function PaymentOption({
  selected,
  onClick,
  title,
  description,
  icon,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
        selected
          ? "border-stone-900 bg-[#faf7f2]"
          : "border-stone-200 hover:border-stone-400"
      }`}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-700">
        {icon}
      </div>

      <div className="flex-1">
        <p className="text-sm font-medium text-stone-900">
          {title}
        </p>

        <p className="mt-1 text-xs text-stone-500">
          {description}
        </p>
      </div>

      <div
        className={`flex h-5 w-5 items-center justify-center rounded-full border ${
          selected
            ? "border-stone-900 bg-stone-900"
            : "border-stone-300"
        }`}
      >
        {selected && (
          <Check
            size={12}
            strokeWidth={3}
            className="text-white"
          />
        )}
      </div>
    </button>
  );
}

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-stone-500">
        {label}
      </span>

      <span className="font-medium text-stone-900">
        {value}
      </span>
    </div>
  );
}