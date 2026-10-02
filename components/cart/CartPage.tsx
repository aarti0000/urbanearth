"use client";

import { useCart } from "@/components/cart/CartContext";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CircleHelp, Info, LockKeyhole, RotateCcw, ShieldCheck, ShoppingBag, Trash2, X } from "lucide-react";

export default function CartPage() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart, cartTotal } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const estimatedTax = Math.round(cart.reduce((total, item) => total + (item.taxIncluded ? 0 : item.price * item.quantity), 0) * 0.105);
  const orderTotal = cartTotal + estimatedTax;

  if (cart.length === 0) {
    return (
      <main className="min-h-[55vh] bg-[#f7f7f7] px-5 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f7f7f7] text-[#000000]"><ShoppingBag size={28} strokeWidth={1.7} /></span>
          <h1 className="mt-5 text-3xl font-bold text-[#000000]">Your Cart</h1>
          <p className="mt-3 text-[#000000]">Your cart is currently empty.</p>
          <Link href="/products" className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#000000] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#000000]"><ArrowLeft size={16} /> Continue Shopping</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#f7f7f7] px-4 py-7 text-[#000000] sm:px-6 lg:py-9">
      <div className="mx-auto max-w-[1320px]">
        <h1 className="text-[26px] font-bold tracking-tight sm:text-[30px]">Your Cart ({itemCount})</h1>
        <nav className="mt-1.5 flex items-center gap-3 text-sm" aria-label="Breadcrumb">
          <Link href="/" className="text-[#000000] hover:text-[#000000]">Home</Link><span className="text-[#a3a3a3]">›</span><span className="text-[#000000]">Cart</span>
        </nav>

        <div className="mt-5 grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_380px]">
          <section className="overflow-hidden rounded-lg border border-[#e5e5e5] bg-white" aria-label="Cart items">
            <div className="hidden grid-cols-[44px_2fr_1fr_1fr_1fr] items-center border-b border-[#e5e5e5] px-5 py-3 text-center text-[11px] font-semibold uppercase text-[#000000] md:grid">
              <span /><span className="text-left">Product</span><span>Price</span><span>Quantity</span><span>Total</span>
            </div>
            {cart.map((item) => (
              <article key={item.id} className="relative grid gap-4 border-b border-[#e5e5e5] p-4 last:border-b-0 md:grid-cols-[44px_2fr_1fr_1fr_1fr] md:items-center md:px-5 md:py-4">
                <button onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.name}`} className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center text-[#000000] transition hover:text-[#000000] md:static"><X size={20} strokeWidth={1.6} /></button>
                <div className="flex min-w-0 items-center gap-4 pr-9 md:pr-0">
                  <Image src={item.image} alt={item.name} width={108} height={80} className="h-20 w-[108px] shrink-0 rounded-md object-cover" />
                  <div className="min-w-0"><h2 className="truncate text-[15px] font-semibold">{item.name}</h2><p className="mt-1 text-xs text-[#000000]">{item.category}</p><p className="mt-1.5 text-xs font-medium text-[#000000]">In Stock</p></div>
                </div>
                <div className="flex items-center justify-between text-sm md:block md:text-center"><span className="text-xs font-semibold uppercase text-[#000000] md:hidden">Price</span><span>Rs. {item.price.toLocaleString()} / piece</span></div>
                <div className="flex items-center justify-between md:justify-center">
                  <span className="text-xs font-semibold uppercase text-[#000000] md:hidden">Quantity</span>
                  <div className="flex h-10 items-center rounded-md border border-[#e5e5e5] bg-white">
                    <button onClick={() => decreaseQuantity(item.id)} aria-label={`Decrease ${item.name} quantity`} className="h-full w-10 text-lg text-[#000000] hover:bg-[#f7f7f7]">−</button><span className="w-9 text-center text-sm font-medium">{item.quantity}</span><button onClick={() => increaseQuantity(item.id)} aria-label={`Increase ${item.name} quantity`} className="h-full w-10 text-lg text-[#000000] hover:bg-[#f7f7f7]">+</button>
                  </div>
                </div>
                <div className="flex items-center justify-between md:block md:text-center"><span className="text-xs font-semibold uppercase text-[#000000] md:hidden">Total</span><strong className="text-base">Rs. {(item.price * item.quantity).toLocaleString()}</strong></div>
              </article>
            ))}
            <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between md:px-6">
              <Link href="/products" className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-[#e5e5e5] px-5 text-xs font-semibold transition hover:border-[#000000] hover:text-[#000000]"><ArrowLeft size={15} /> Continue Shopping</Link>
              <button onClick={clearCart} className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-[#e5e5e5] px-5 text-xs font-semibold transition hover:border-neutral-400 hover:text-black"><Trash2 size={15} /> Clear Cart</button>
            </div>
          </section>

          <aside className="rounded-lg border border-[#e5e5e5] bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] sm:p-6">
            <h2 className="text-xl font-bold">Order Summary</h2>
            <div className="mt-5 space-y-4 text-sm">
              <div className="flex justify-between"><span>Subtotal ({itemCount} items)</span><span>Rs. {cartTotal.toLocaleString()}</span></div>
              <div className="flex justify-between"><span>Delivery</span><span className="text-right">Rs. 0 <small className="block font-semibold text-[#000000]">Free</small></span></div>
              <div className="flex justify-between"><span className="flex items-center gap-1.5">Estimated Tax <Info size={14} /></span><span>Rs. {estimatedTax.toLocaleString()}</span></div>
              <div className="border-t border-[#e5e5e5] pt-4"><div className="flex items-center justify-between"><span><strong className="text-xl">Total</strong><small className="block text-xs">(Incl. VAT)</small></span><strong className="text-2xl">Rs. {orderTotal.toLocaleString()}</strong></div></div>
            </div>
            <Link href="/checkout" className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#000000] text-sm font-semibold text-white transition hover:bg-[#000000]"><LockKeyhole size={16} fill="currentColor" /> Proceed to Checkout</Link>
            <div className="mt-5 space-y-4 border-t border-[#f7f7f7] pt-5">
              <div className="flex gap-3"><ShieldCheck className="mt-0.5 shrink-0" size={20} /><div><p className="text-sm font-medium">Secure Checkout</p><p className="mt-0.5 text-xs text-[#000000]">Your payment information is safe with us.</p></div></div>
              <div className="flex gap-3"><RotateCcw className="mt-0.5 shrink-0" size={20} /><div><p className="text-sm font-medium">Easy Returns</p><p className="mt-0.5 text-xs text-[#000000]">30-day hassle free return policy.</p></div></div>
              <div className="flex gap-3"><CircleHelp className="mt-0.5 shrink-0" size={20} /><div><p className="text-sm font-medium">Need Help?</p><p className="mt-0.5 text-xs text-[#000000]">Call us at +977 9800000000</p></div></div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
