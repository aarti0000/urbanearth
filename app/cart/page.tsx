
"use client";

import Link from "next/link";
import { useCart } from "../components/CartContext";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <main className="min-h-screen bg-stone-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-10 text-center text-4xl font-serif text-stone-900">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <div className="rounded-2xl bg-white p-16 text-center">
            <div className="text-5xl">🛒</div>

            <h2 className="mt-5 text-2xl font-serif">
              Your cart is empty
            </h2>

            <Link
              href="/product"
              className="mt-6 inline-block rounded-full bg-stone-900 px-8 py-3 text-white"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-5">

            {cart.map((item) => (
              <div
                key={item.name}
                className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:items-center"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-32 w-32 rounded-xl object-cover"
                />

                <div className="flex-1">

                  <p className="text-xs uppercase tracking-widest text-stone-400">
                    {item.category}
                  </p>

                  <h2 className="mt-2 text-xl font-medium text-stone-900">
                    {item.name}
                  </h2>

                  <p className="mt-2 text-stone-600">
                    {item.price}
                  </p>

                  <div className="mt-5 flex items-center gap-4">

                    <button
                      onClick={() => decreaseQuantity(item.name)}
                      className="h-9 w-9 rounded-full border border-stone-300"
                    >
                      −
                    </button>

                    <span className="font-medium">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.name)}
                      className="h-9 w-9 rounded-full border border-stone-300"
                    >
                      +
                    </button>

                  </div>

                </div>

                <button
                  onClick={() => removeFromCart(item.name)}
                  className="text-sm text-red-500 hover:text-red-700"
                >
                  Remove
                </button>

              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}

