"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Product = {
  name: string;
  category: string;
  price: string;
  rating: string;
  image: string;
};

export type CartItem = Product & {
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productName: string) => void;
  increaseQuantity: (productName: string) => void;
  decreaseQuantity: (productName: string) => void;
  cartCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart when website starts
  useEffect(() => {
    const savedCart = localStorage.getItem("homehaven-cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("homehaven-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.name === product.name
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productName: string) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.name !== productName)
    );
  };

  const increaseQuantity = (productName: string) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.name === productName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productName: string) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}