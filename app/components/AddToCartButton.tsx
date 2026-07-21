"use client";

import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

type Props = {
  id: number;
  nome: string;
  preco: number;
  imagemUrl: string;
  tamanho: string;
};

export default function AddToCartButton({
  id,
  nome,
  preco,
  imagemUrl,
  tamanho,
}: Props) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id,
      nome,
      preco,
      imagemUrl,
      tamanho,
    });

    toast.success(`🛒 ${nome} foi adicionado ao carrinho!`, {
      duration: 2500,
      position: "top-right",
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="mt-6 w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
    >
      Adicionar ao Carrinho
    </button>
  );
}