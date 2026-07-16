"use client";

import { useCart } from "../context/CartContext";

type Props = {
  id: number;
  nome: string;
  preco: number;
  imagemUrl: string;
  tamanho: string;
};

export default function AddToCartButton({ id, nome, preco, imagemUrl, tamanho }: Props) {
  const { addItem } = useCart();

  return (
    <button
      onClick={() => addItem({ id, nome, preco, imagemUrl, tamanho })}
      className="mt-6 w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800"
    >
      Adicionar ao Carrinho
    </button>
  );
}