"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { totalItens } = useCart();

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-semibold text-gray-900">
        🍼 Loja de Roupas de Bebê
      </Link>
      <nav className="flex gap-6 items-center">
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <Link href="/produtos" className="text-gray-600 hover:text-gray-900">
          Produtos
        </Link>
        <Link href="/carrinho" className="text-gray-600 hover:text-gray-900 relative">
          Carrinho
          {totalItens > 0 && (
            <span className="absolute -top-2 -right-4 bg-gray-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalItens}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}