import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTheme from "@/components/layout/PageTheme";

import { CartProvider } from "@/components/cart/CartContext";
import AuthSessionProvider from "@/components/auth/SessionProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthSessionProvider>
          <CartProvider>
            <Header />

            <PageTheme>{children}</PageTheme>

            <Footer />
          </CartProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}