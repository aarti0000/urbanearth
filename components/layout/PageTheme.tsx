"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function PageTheme({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return <div className={pathname === "/" ? undefined : "interior-theme"}>{children}</div>;
}
