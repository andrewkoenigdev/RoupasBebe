"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { totalItens } = useCart();

  return (
    <header className="bg-[var(--background)] sticky top-0 z-10 px-5 py-4 flex items-center justify-between border-b border-[#EADFD3]">
      <Link href="/" className="flex items-center gap-2">
        <span className="text-2xl">🐾</span>
        <span
          className="font-bold text-[var(--color-primary-dark)] leading-tight text-base"
          style={{ fontFamily: "var(--font-baloo)" }}
        >
          Meu Pequeno Amor
        </span>
      </Link>

      <nav className="flex items-center gap-5">
        <Link
          href="/"
          className="text-sm font-semibold text-[var(--foreground)] hover:text-[var(--color-primary)]"
        >
          Home
        </Link>
        <Link
          href="/produtos"
          className="text-sm font-semibold text-[var(--foreground)] hover:text-[var(--color-primary)]"
        >
          Produtos
        </Link>
        <Link href="/carrinho" className="relative">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-primary-dark)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {totalItens > 0 && (
            <span className="absolute -top-2 -right-2 bg-[var(--color-accent)] text-[var(--color-primary-dark)] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalItens}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}