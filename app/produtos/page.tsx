"use client";

import { useState } from "react";
import ProductCard from "../components/ProductCard";

const produtosMock = [
  { id: 1, nome: "Body Manga Longa Ursinho", preco: 49.9, imagemUrl: "https://via.placeholder.com/220x160", tamanho: "P", categoria: "body" },
  { id: 2, nome: "Macacão Plush Nuvem", preco: 79.9, imagemUrl: "https://via.placeholder.com/220x160", tamanho: "RN", categoria: "macacao" },
  { id: 3, nome: "Conjunto Listrado Verão", preco: 59.9, imagemUrl: "https://via.placeholder.com/220x160", tamanho: "M", categoria: "conjunto" },
  { id: 4, nome: "Body Estampa Dino", preco: 44.9, imagemUrl: "https://via.placeholder.com/220x160", tamanho: "P", categoria: "body" },
  { id: 5, nome: "Macacão Plush Estrela", preco: 84.9, imagemUrl: "https://via.placeholder.com/220x160", tamanho: "RN", categoria: "macacao" },
];

const categorias = ["todas", "body", "macacao", "conjunto"];

export default function Produtos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todas");

  const produtosFiltrados =
    categoriaSelecionada === "todas"
      ? produtosMock
      : produtosMock.filter((p) => p.categoria === categoriaSelecionada);

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
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {produtosFiltrados.map((produto) => (
          <ProductCard key={produto.id} product={produto} />
        ))}
      </div>
    </div>
  );
}