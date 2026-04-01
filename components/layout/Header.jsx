"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header
      className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-8 md:px-16 lg:px-24 py-6 border-b"
      style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}
    >
      <Link href="/" className="font-display text-4xl" style={{ color: "var(--ink)" }}>
        Easy, Yum!
      </Link>
      <nav className="flex items-center gap-8">
        {pathname === "/about" && (
          <Link
            href="/"
            className="text-sm tracking-widest uppercase transition-opacity duration-150 hover:opacity-50"
            style={{ color: "var(--ink-muted)" }}
          >
            ← Recipes
          </Link>
        )}
        <Link
          href="/about"
          className="text-sm tracking-widest uppercase transition-opacity duration-150 hover:opacity-50"
          style={{ color: pathname === "/about" ? "#5b8a7a" : "var(--ink-muted)" }}
        >
          About
        </Link>
      </nav>
    </header>
  );
}
