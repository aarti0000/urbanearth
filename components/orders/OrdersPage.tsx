"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PackageOpen } from "lucide-react";
import orders from "@/data/orders.json";

const filters = [
  "All Orders",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
];

export default function OrdersPage() {
  const [activeFilter, setActiveFilter] = useState("All Orders");

  const filteredOrders =
    activeFilter === "All Orders"
      ? orders
      : orders.filter((order) => order.status === activeFilter);

  return (
    <main className="bg-white">

      {/* Page Intro */}
      <section className="px-6 pb-10 pt-14 sm:px-10 lg:px-16 lg:pb-12 lg:pt-20">
        <div className="mx-auto max-w-[1180px] text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#000000]">
            Your account
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#171717] sm:text-5xl">
            My Orders
          </h1>

          <span className="mx-auto mt-5 block h-[2px] w-16 bg-[#000000]" />

          <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-7 text-[#575757]">
            View your recent purchases, track your orders, and manage your
            Urban Earth shopping experience.
          </p>

        </div>
      </section>

      {/* Orders */}
      <section className="bg-[#f7f7f7] px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-[1180px]">

          {/* Filters */}
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap border px-5 py-2.5 text-xs font-semibold transition ${
                  activeFilter === filter
                    ? "border-[#000000] bg-[#000000] text-white"
                    : "border-[#d8d8d8] bg-white text-[#444] hover:border-[#000000] hover:text-[#000000]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Order List */}
          {filteredOrders.length > 0 ? (
            <div className="space-y-6">
              {filteredOrders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          ) : (
            <EmptyOrders />
          )}

        </div>
      </section>
    </main>
  );
}


/* Order Card */

function OrderCard({ order }: { order: (typeof orders)[number] }) {
  return (
    <article className="border border-[#e5e5e5] bg-white">

      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-[#e5e5e5] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#777]">
            Order #{order.id}
          </p>

          <p className="mt-1 text-[13px] text-[#666]">
            Placed on {order.date}
          </p>
        </div>

        <StatusBadge status={order.status} />

      </div>


      {/* Products */}
      <div className="px-5 sm:px-7">

        {order.items.map((item) => (
          <div
            key={item.name}
            className="flex gap-4 border-b border-[#eeeeee] py-5 last:border-b-0"
          >

            {/* Product Image */}
            <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-[#f7f7f7] sm:h-24 sm:w-24">

              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="96px"
                className="object-cover"
              />

            </div>


            {/* Product Info */}
            <div className="min-w-0 flex-1">

              <h3 className="text-sm font-semibold text-[#171717] sm:text-[15px]">
                {item.name}
              </h3>

              <p className="mt-1 text-[13px] text-[#666]">
                {item.size}
              </p>

              <p className="mt-1 text-[13px] text-[#666]">
                Quantity: {item.quantity}
              </p>

            </div>


            {/* Price */}
            <div className="shrink-0 text-right">
              <p className="text-sm font-semibold text-[#171717]">
                Rs. {item.price.toLocaleString()}
              </p>
            </div>

          </div>
        ))}

      </div>


      {/* Footer */}
      <div className="flex flex-col gap-5 border-t border-[#dedede] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#777]">
            Order Total
          </p>

          <p className="mt-1 text-lg font-semibold text-[#171717]">
            Rs. {order.total.toLocaleString()}
          </p>
        </div>


        <Link
          href={`/orders/${order.id}`}
          className="inline-flex min-h-11 items-center justify-center gap-4 bg-[#000000] px-6 text-xs font-semibold text-white transition hover:bg-[#000000]"
        >
          View Order
          <ArrowRight size={15} />
        </Link>

      </div>

    </article>
  );
}


/* Status */

function StatusBadge({ status }: { status: string }) {
  const styles = {
    Delivered: "bg-[#f7f7f7] text-[#000000]",
    Shipped: "bg-[#f7f7f7] text-[#000000]",
    Processing: "bg-[#f7f7f7] text-[#000000]",
    Cancelled: "bg-[#f7f7f7] text-[#000000]",
  };

  const style =
    styles[status as keyof typeof styles] ||
    "bg-[#f1f1f1] text-[#555]";

  return (
    <span
      className={`w-fit px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.06em] ${style}`}
    >
      {status}
    </span>
  );
}


/* Empty State */

function EmptyOrders() {
  return (
    <div className="border border-[#e5e5e5] bg-white px-6 py-20 text-center">

      <PackageOpen
        className="mx-auto h-11 w-11 text-[#000000]"
        strokeWidth={1.4}
      />

      <h2 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-[#171717]">
        No orders yet
      </h2>

      <p className="mx-auto mt-3 max-w-[430px] text-sm leading-6 text-[#666]">
        You haven&apos;t placed an order yet. Explore our collection and find
        something perfect for your space.
      </p>

      <Link
        href="/products"
        className="mt-7 inline-flex min-h-12 items-center gap-4 bg-[#000000] px-6 text-xs font-semibold text-white transition hover:bg-[#000000]"
      >
        Explore Products
        <ArrowRight size={16} />
      </Link>

    </div>
  );
}