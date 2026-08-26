"use client";

import { useState } from "react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

 const messages = [
  "Free shipping on orders over Rs. 5,000",
  "New arrivals are here",
  "Easy returns within 30 days",
  "Secure checkout",
  "Shop our latest collection",
];

  return (
    <div className="relative overflow-hidden bg-[#2f2a25] text-[#faf7f2]">
      
      {/* Scrolling content */}
      <div className="flex min-h-10 items-center overflow-hidden pr-10">
        <div className="announcement-scroll flex shrink-0 items-center whitespace-nowrap">
          
          {/* First set */}
          {messages.map((message, index) => (
            <div key={`first-${index}`} className="flex items-center">
              <span className="mx-5 text-[11px] font-medium uppercase tracking-[0.18em] sm:text-xs">
                {message}
              </span>

              <span className="text-[#faf7f2]/40">✦</span>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {messages.map((message, index) => (
            <div key={`second-${index}`} className="flex items-center">
              <span className="mx-5 text-[11px] font-medium uppercase tracking-[0.18em] sm:text-xs">
                {message}
              </span>

              <span className="text-[#faf7f2]/40">✦</span>
            </div>
          ))}

        </div>
      </div>

      {/* Close button */}
      <button
        onClick={() => setVisible(false)}
        aria-label="Close announcement"
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 bg-[#2f2a25] pl-3 text-lg leading-none opacity-70 transition-opacity hover:opacity-100"
      >
        ×
      </button>

      {/* Animation */}
      <style jsx>{`
        .announcement-scroll {
          animation: announcement 28s linear infinite;
        }

        .announcement-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes announcement {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}