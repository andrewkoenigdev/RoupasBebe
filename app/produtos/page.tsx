"use client";

import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

type Produto = {
  id: number;
  nome: string;
  preco: string;
  imagem_url: string | null;
  tamanho: string | null;
  categoria: string | null;
};

const categorias = ["todas", "Recém-Nascido", "P", "M", "G"];

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todas");

  useEffect(() => {
    fetch("/api/produtos")
      .then((res) => res.json())
      .then((data) => {
        setProdutos(data);
        setCarregando(false);
      });
  }, []);

  const produtosFiltrados =
    categoriaSelecionada === "todas"
      ? produtos
      : produtos.filter((p) => p.categoria === categoriaSelecionada);

  if (carregando) {
    return <div className="p-6">Carregando produtos...</div>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">
        Catálogo de Produtos
      </h1>

      <div className="flex gap-2 mb-6">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSelecionada(cat)}
            className={`px-4 py-2 rounded-full text-sm ${
              categoriaSelecionada === cat
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-600 border border-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {produtosFiltrados.map((produto) => (
          <ProductCard
            key={produto.id}
            product={{
              id: produto.id,
              nome: produto.nome,
              preco: Number(produto.preco),
              imagemUrl: produto.imagem_url ?? "https://via.placeholder.com/220x160",
              tamanho: produto.tamanho ?? "",
            }}
          />
        ))}
      </div>
    </div>
  );
}