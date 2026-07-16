"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Carrinho() {
  const { items, removeItem } = useCart();

  const total = items.reduce((soma, item) => soma + item.preco * item.quantidade, 0);

  function finalizarPedido() {
    const linhas = items.map(
      (item) => `• ${item.nome} (Tam: ${item.tamanho}) x${item.quantidade} - R$ ${(item.preco * item.quantidade).toFixed(2)}`
    );
    const mensagem = `Olá! Gostaria de fazer o seguinte pedido:\n\n${linhas.join("\n")}\n\nTotal: R$ ${total.toFixed(2)}`;
    const url = `https://wa.me/554187012651?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  }

  if (items.length === 0) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Carrinho</h1>
        <p className="text-gray-500">Seu carrinho está vazio.</p>
        <Link href="/produtos" className="text-gray-900 underline mt-2 inline-block">
          Ver produtos
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Carrinho</h1>

      <div className="max-w-2xl mx-auto flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4"
          >
            <img
              src={item.imagemUrl}
              alt={item.nome}
              className="w-20 h-20 object-cover rounded-lg bg-gray-100"
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{item.nome}</h3>
              <p className="text-sm text-gray-500">Tamanho: {item.tamanho}</p>
              <p className="text-sm text-gray-500">Quantidade: {item.quantidade}</p>
              <p className="font-bold text-gray-900 mt-1">
                R$ {(item.preco * item.quantidade).toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 text-sm hover:underline"
            >
              Remover
            </button>
          </div>
        ))}

        <div className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between mt-2">
          <span className="text-lg font-semibold text-gray-900">Total</span>
          <span className="text-lg font-bold text-gray-900">R$ {total.toFixed(2)}</span>
        </div>

        <button
          onClick={finalizarPedido}
          className="bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700"
        >
          Finalizar Pedido via WhatsApp
        </button>
      </div>
    </div>
  );
}