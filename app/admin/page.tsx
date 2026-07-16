"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Produto = {
  id: number;
  nome: string;
  categoria: string | null;
  tamanho: string | null;
  preco: string;
  ativo: boolean | null;
};

export default function Admin() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);

  function carregarProdutos() {
    fetch("/api/produtos")
      .then((res) => res.json())
      .then((data) => {
        setProdutos(data);
        setCarregando(false);
      });
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function alternarAtivo(produto: Produto) {
    await fetch(`/api/produtos/${produto.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...produto, ativo: !produto.ativo }),
    });
    carregarProdutos();
  }

  if (carregando) {
    return <div className="p-6">Carregando...</div>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Painel Admin — Produtos
        </h1>
        <Link
          href="/admin/novo"
          className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800"
        >
          + Novo Produto
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-sm text-gray-600">
            <tr>
              <th className="p-3">Nome</th>
              <th className="p-3">Categoria</th>
              <th className="p-3">Tamanho</th>
              <th className="p-3">Preço</th>
              <th className="p-3">Status</th>
              <th className="p-3">Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id} className="border-t border-gray-100">
                <td className="p-3">{produto.nome}</td>
                <td className="p-3">{produto.categoria}</td>
                <td className="p-3">{produto.tamanho}</td>
                <td className="p-3">R$ {Number(produto.preco).toFixed(2)}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      produto.ativo
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {produto.ativo ? "Ativo" : "Inativo"}
                  </span>
                </td>
                <td className="p-3 flex gap-3">
                  <Link
                    href={`/admin/${produto.id}/editar`}
                    className="text-blue-600 text-sm hover:underline"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => alternarAtivo(produto)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    {produto.ativo ? "Desativar" : "Ativar"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}