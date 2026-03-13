import Link from "next/link";

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-8 md:px-16 lg:px-24 py-6 border-b"
      style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}
    >
      <Link href="/" className="font-display text-4xl" style={{ color: "var(--ink)" }}>
        Easy, Yum!
      </Link>
      <nav>
        <Link
          href="/about"
          className="text-sm tracking-widest uppercase transition-colors duration-150"
          style={{ color: "var(--ink-muted)" }}
        >
          About
        </Link>
      </nav>
    </header>
  );
}
