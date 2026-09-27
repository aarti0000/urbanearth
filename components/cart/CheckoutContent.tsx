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
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f7f7f7]">
            <ShoppingBag
              size={30}
              strokeWidth={1.8}
              className="text-[#000000]"
            />
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-[#000000]">
            Your cart is empty
          </h1>

          <p className="mt-3 text-sm text-[#000000]">
            Add some products before proceeding to checkout.
          </p>

          <Link
            href="/products"
            className="mt-7 inline-flex items-center justify-center rounded-md bg-[#000000] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#000000]"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f7f7]">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-12">

        {/* PAGE HEADER */}
        <div className="mb-8">
          <Link
            href="/cart"
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-[#000000] transition hover:text-[#000000]"
          >
            <ArrowLeft size={16} />
            Back to cart
          </Link>

          <h1 className="text-4xl font-bold tracking-tight text-[#000000]">
            Checkout
          </h1>

          <p className="mt-2 text-sm text-[#000000]">
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
            <section className="border border-[#e5e5e5] bg-white p-6 shadow-sm md:p-8">
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
            <section className="border border-[#e5e5e5] bg-white p-6 shadow-sm md:p-8">
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
                  className="mb-2 block text-sm font-semibold text-[#000000]"
                >
                  Order Notes
                </label>

                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  placeholder="Delivery instructions, landmarks, preferred time, etc."
                  className="w-full resize-none rounded-md border border-[#e5e5e5] bg-white px-4 py-3 text-sm text-[#000000] outline-none transition placeholder:text-[#a3a3a3] focus:border-[#000000] focus:ring-1 focus:ring-[#000000]"
                />
              </div>
            </section>

            {/* PAYMENT */}
            <section className="border border-[#e5e5e5] bg-white p-6 shadow-sm md:p-8">
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
            <div className="sticky top-8 border border-[#e5e5e5] bg-white p-6 shadow-sm">

              {/* Summary heading */}
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#000000]">
                  Order Summary
                </h2>

                <span className="text-sm font-medium text-[#000000]">
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
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-[#f7f7f7]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />

                      <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#000000] px-1 text-[10px] font-semibold text-white">
                        {item.quantity}
                      </span>
                    </div>

                    <div className="flex flex-1 justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-[#000000]">
                          {item.name}
                        </p>

                        <p className="mt-1 text-xs text-[#000000]">
                          Qty: {item.quantity}
                        </p>
                      </div>

                      <p className="whitespace-nowrap text-sm font-semibold text-[#000000]">
                        Rs.{" "}
                        {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="mt-6 space-y-3 border-t border-[#e5e5e5] pt-5">
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
                  <div className="flex items-center gap-2 text-xs font-medium text-black">
                    <Check size={14} />
                    Free delivery applied
                  </div>
                )}
              </div>

              {/* TOTAL */}
              <div className="mt-5 flex items-center justify-between border-t border-[#e5e5e5] pt-5">
                <span className="text-base font-semibold text-[#000000]">
                  Total
                </span>

                <span className="text-2xl font-bold text-[#000000]">
                  Rs. {total.toLocaleString()}
                </span>
              </div>

              {/* CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full rounded-md bg-[#000000] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#000000] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting
                  ? "Processing..."
                  : paymentMethod === "cod"
                  ? "Place Order"
                  : `Pay Rs. ${total.toLocaleString()}`}
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-[#a3a3a3]">
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
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f7f7f7] text-[#000000]">
        {icon}
      </div>

      <div>
        <h2 className="text-xl font-bold text-[#000000]">
          {title}
        </h2>

        <p className="text-xs text-[#000000]">
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
        className="mb-2 block text-sm font-semibold text-[#000000]"
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
        className="w-full rounded-md border border-[#e5e5e5] bg-white px-4 py-3 text-sm text-[#000000] outline-none transition placeholder:text-[#a3a3a3] focus:border-[#000000] focus:ring-1 focus:ring-[#000000]"
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
          ? "border-[#000000] bg-[#f7f7f7]"
          : "border-[#e5e5e5] bg-white hover:border-[#000000]"
      }`}
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
          selected
            ? "bg-[#000000] text-white"
            : "bg-[#f7f7f7] text-[#000000]"
        }`}
      >
        {icon}
      </div>

      <div className="flex-1">
        <p className="text-sm font-semibold text-[#000000]">
          {title}
        </p>

        <p className="mt-1 text-xs text-[#000000]">
          {description}
        </p>
      </div>

      <div
        className={`flex h-5 w-5 items-center justify-center rounded-full border ${
          selected
            ? "border-[#000000] bg-[#000000]"
            : "border-[#e5e5e5]"
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
      <span className="text-[#000000]">
        {label}
      </span>

      <span className="font-semibold text-[#000000]">
        {value}
      </span>
    </div>
  );
}