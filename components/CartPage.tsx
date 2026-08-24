"use client";

import { useCart } from "@/components/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartTotal,
  } = useCart();

  // Empty cart
  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#faf7f2] px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">

          <h1 className="text-4xl font-serif text-stone-900">
            Your Cart
          </h1>

          <p className="mt-4 text-stone-600">
            Your cart is currently empty.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-block rounded-full bg-stone-900 px-8 py-3 text-white"
          >
            Continue Shopping
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf7f2] px-6 py-16">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}

        <h1 className="text-4xl font-serif text-stone-900">
          Shopping Cart
        </h1>

        <p className="mt-2 text-stone-600">
          {cart.reduce((total, item) => total + item.quantity, 0)} items in your cart
        </p>


        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_350px]">

          {/* CART ITEMS */}

          <div className="space-y-5">

            {cart.map((item) => (

              <div
                key={item.id}
                className="flex gap-5 rounded-2xl bg-white p-5 shadow-sm"
              >

                {/* Image */}

                <Image
                  src={item.image}
                  alt={item.name}
                  width={128}
                  height={128}
                  className="h-32 w-32 rounded-xl object-cover"
                />


                {/* Product information */}

                <div className="flex flex-1 flex-col">

                  <h2 className="text-xl font-semibold text-stone-900">
                    {item.name}
                  </h2>

                  <p className="mt-1 text-sm text-stone-500">
                    {item.category}
                  </p>

                  <p className="mt-3 font-semibold text-stone-900">
                    Rs. {item.price.toLocaleString()}
                  </p>


                  {/* Quantity */}

                  <div className="mt-4 flex items-center gap-3">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 text-lg hover:bg-stone-100"
                    >
                      −
                    </button>

                    <span className="w-6 text-center font-medium">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 text-lg hover:bg-stone-100"
                    >
                      +
                    </button>

                  </div>


                  {/* Remove */}

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-3 w-fit text-sm text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>

                </div>


                {/* Item subtotal */}

                <div className="text-right">

                  <p className="font-semibold text-stone-900">
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </p>

                </div>

              </div>

            ))}

          </div>


          {/* ORDER SUMMARY */}

          <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">

            <h2 className="text-2xl font-serif text-stone-900">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between text-stone-600">
                <span>Subtotal</span>

                <span>
                  Rs. {cartTotal.toLocaleString()}
                </span>
              </div>


              <div className="flex justify-between text-stone-600">
                <span>Shipping</span>

                <span>
                  Free
                </span>
              </div>


              <div className="border-t border-stone-200 pt-4">

                <div className="flex justify-between text-lg font-semibold text-stone-900">

                  <span>Total</span>

                  <span>
                    Rs. {cartTotal.toLocaleString()}
                  </span>

                </div>

              </div>

            </div>


            {/* Checkout */}

           <Link
    href="/checkout"
    className="mt-6 block w-full rounded-full bg-stone-900 px-6 py-4 text-center text-sm font-medium text-white transition-colors hover:bg-stone-800"
  >
    Proceed to Checkout
  </Link>


            <Link
              href="/products"
              className="mt-4 block text-center text-sm text-stone-500 hover:text-stone-900"
            >
              Continue Shopping
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}
