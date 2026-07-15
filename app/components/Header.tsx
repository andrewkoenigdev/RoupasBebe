import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-semibold text-gray-900">
        🍼 Loja de Roupas de Bebê
      </Link>
      <nav className="flex gap-6">
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <Link href="/produtos" className="text-gray-600 hover:text-gray-900">
          Produtos
        </Link>
        <Link href="/carrinho" className="text-gray-600 hover:text-gray-900">
          Carrinho
        </Link>
      </nav>
    </header>
  );
}