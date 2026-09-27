"use client";

import { useEffect, useRef, type ReactNode } from "react";
import home from "@/app/home.module.css";
import sections from "./HomeCollections.module.css";

/** Progressive enhancement: content stays readable without JavaScript or motion. */
export default function HomeMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element || !("IntersectionObserver" in window) || !("animate" in Element.prototype)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;
    const seen = new WeakSet<Element>();

    const stop = () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    const start = () => {
      stop();
      if (preference.matches) return;
      const targets = element.querySelectorAll<HTMLElement>([
        `.${sections.intro} > div`, `.${sections.intro} > p`,
        `.${sections.card}`, `.${sections.featureCopy}`, `.${sections.featureImage}`,
        `.${sections.benefitsIntro}`, `.${sections.benefitGrid} > div`,
        `.${sections.updates} > div > div`, `.${sections.signup}`,
      ].join(","));
      observer = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting || seen.has(target)) return;
          seen.add(target);
          observer?.unobserve(target);
          const item = target as HTMLElement;
          const isImage = item.classList.contains(sections.featureImage);
          const isCard = item.classList.contains(sections.card);
          const isBenefit = item.parentElement?.classList.contains(sections.benefitGrid);
          const index = isCard || isBenefit ? Array.from(item.parentElement!.children).indexOf(item) : 0;
          const animation = item.animate(
            isImage
              ? [{ opacity: 0, transform: "scale(1.035)" }, { opacity: 1, transform: "scale(1)" }]
              : [{ opacity: 0, transform: "translateY(24px)" }, { opacity: 1, transform: "translateY(0)" }],
            { duration: isImage ? 1100 : 800, delay: Math.min(index * 85, 255), easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });
      targets.forEach((target) => { if (!seen.has(target)) observer?.observe(target); });
    };
    // Keyboard users never have to wait for a reveal to interact with a link.
    const onFocus = () => { animations.forEach((animation) => animation.finish()); };
    start();
    preference.addEventListener("change", start);
    element.addEventListener("focusin", onFocus);
    return () => {
      stop();
      preference.removeEventListener("change", start);
      element.removeEventListener("focusin", onFocus);
    };
  }, []);

  return <main ref={root} className={home.home}>{children}</main>;
}
