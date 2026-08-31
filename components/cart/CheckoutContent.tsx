"use client";

import { useCart } from "@/components/cart/CartContext";
import Link from "next/link";
import Image from "next/image";
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

const BLUE = "#0054A6";
const ORANGE = "#FF6500";

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
      <main className="min-h-[70vh] bg-white px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF3EB]">
            <ShoppingBag
              size={30}
              strokeWidth={1.8}
              className="text-[#FF6500]"
            />
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-[#111827]">
            Your cart is empty
          </h1>

          <p className="mt-3 text-sm text-[#64748B]">
            Add some products before proceeding to checkout.
          </p>

          <Link
            href="/products"
            className="mt-7 inline-flex items-center justify-center rounded-md bg-[#FF6500] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#E85A00]"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-12">

        {/* PAGE HEADER */}
        <div className="mb-8">
          <Link
            href="/cart"
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-[#64748B] transition hover:text-[#0054A6]"
          >
            <ArrowLeft size={16} />
            Back to cart
          </Link>

          <h1 className="text-4xl font-bold tracking-tight text-[#111827]">
            Checkout
          </h1>

          <p className="mt-2 text-sm text-[#64748B]">
            Complete your delivery and payment information.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-8 lg:grid-cols-[1fr_400px]"
        >
          {/* ===================================== */}
          {/* LEFT SIDE */}
          {/* ===================================== */}

          <div className="space-y-6">

            {/* CONTACT INFORMATION */}
            <section className="border border-[#E5E7EB] bg-white p-6 shadow-sm md:p-8">
              <SectionHeader
                icon={<Package size={19} />}
                title="Contact Information"
                description="We'll use this to contact you about your order."
              />

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

            {/* DELIVERY ADDRESS */}
            <section className="border border-[#E5E7EB] bg-white p-6 shadow-sm md:p-8">
              <SectionHeader
                icon={<MapPin size={19} />}
                title="Delivery Address"
                description="Enter the address where your order should be delivered."
              />

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
                <label
                  htmlFor="notes"
                  className="mb-2 block text-sm font-semibold text-[#334155]"
                >
                  Order Notes
                </label>

                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  placeholder="Delivery instructions, landmarks, preferred time, etc."
                  className="w-full resize-none rounded-md border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition placeholder:text-[#94A3B8] focus:border-[#0054A6] focus:ring-1 focus:ring-[#0054A6]"
                />
              </div>
            </section>

            {/* PAYMENT */}
            <section className="border border-[#E5E7EB] bg-white p-6 shadow-sm md:p-8">
              <SectionHeader
                icon={<CreditCard size={19} />}
                title="Payment Method"
                description="Choose how you would like to pay."
              />

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

          {/* ===================================== */}
          {/* RIGHT SIDE */}
          {/* ===================================== */}

          <aside>
            <div className="sticky top-8 border border-[#E5E7EB] bg-white p-6 shadow-sm">

              {/* Summary heading */}
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#111827]">
                  Order Summary
                </h2>

                <span className="text-sm font-medium text-[#0054A6]">
                  {cart.length}{" "}
                  {cart.length === 1 ? "Item" : "Items"}
                </span>
              </div>

              {/* Products */}
              <div className="mt-6 max-h-[360px] space-y-5 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4"
                  >
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-[#F1F5F9]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />

                      <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#0054A6] px-1 text-[10px] font-semibold text-white">
                        {item.quantity}
                      </span>
                    </div>

                    <div className="flex flex-1 justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-[#111827]">
                          {item.name}
                        </p>

                        <p className="mt-1 text-xs text-[#64748B]">
                          Qty: {item.quantity}
                        </p>
                      </div>

                      <p className="whitespace-nowrap text-sm font-semibold text-[#111827]">
                        Rs.{" "}
                        {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="mt-6 space-y-3 border-t border-[#E5E7EB] pt-5">
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
                  <div className="flex items-center gap-2 text-xs font-medium text-green-600">
                    <Check size={14} />
                    Free delivery applied
                  </div>
                )}
              </div>

              {/* TOTAL */}
              <div className="mt-5 flex items-center justify-between border-t border-[#E5E7EB] pt-5">
                <span className="text-base font-semibold text-[#334155]">
                  Total
                </span>

                <span className="text-2xl font-bold text-[#0054A6]">
                  Rs. {total.toLocaleString()}
                </span>
              </div>

              {/* CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full rounded-md bg-[#FF6500] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#E85A00] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting
                  ? "Processing..."
                  : paymentMethod === "cod"
                  ? "Place Order"
                  : `Pay Rs. ${total.toLocaleString()}`}
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-[#94A3B8]">
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

/* ========================================= */
/* SECTION HEADER */
/* ========================================= */

function SectionHeader({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF6FF] text-[#0054A6]">
        {icon}
      </div>

      <div>
        <h2 className="text-xl font-bold text-[#111827]">
          {title}
        </h2>

        <p className="text-xs text-[#64748B]">
          {description}
        </p>
      </div>
    </div>
  );
}

/* ========================================= */
/* INPUT FIELD */
/* ========================================= */

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
        className="mb-2 block text-sm font-semibold text-[#334155]"
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
        className="w-full rounded-md border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition placeholder:text-[#94A3B8] focus:border-[#0054A6] focus:ring-1 focus:ring-[#0054A6]"
      />
    </div>
  );
}

/* ========================================= */
/* PAYMENT OPTION */
/* ========================================= */

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
      className={`flex w-full items-center gap-4 rounded-md border p-4 text-left transition ${
        selected
          ? "border-[#0054A6] bg-[#F4F9FF]"
          : "border-[#E5E7EB] bg-white hover:border-[#0054A6]"
      }`}
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
          selected
            ? "bg-[#0054A6] text-white"
            : "bg-[#EEF6FF] text-[#0054A6]"
        }`}
      >
        {icon}
      </div>

      <div className="flex-1">
        <p className="text-sm font-semibold text-[#111827]">
          {title}
        </p>

        <p className="mt-1 text-xs text-[#64748B]">
          {description}
        </p>
      </div>

      <div
        className={`flex h-5 w-5 items-center justify-center rounded-full border ${
          selected
            ? "border-[#0054A6] bg-[#0054A6]"
            : "border-[#CBD5E1]"
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

/* ========================================= */
/* SUMMARY ROW */
/* ========================================= */

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-[#64748B]">
        {label}
      </span>

      <span className="font-semibold text-[#111827]">
        {value}
      </span>
    </div>
  );
}