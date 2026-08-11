
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-8">
      <div>
        <h2 className="text-xl font-bold mb-2">
          HomeHaven
        </h2>

        <p className="text-gray-400 text-sm mb-4">
          Your home, your style.
        </p>

        <div className="flex justify-center gap-6 text-sm">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>

          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>

          <Link href="/product" className="hover:text-gray-300">
            Products
          </Link>

          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>

        <p className="text-gray-500 text-xs mt-5">
          © 2026 HomeHaven. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

