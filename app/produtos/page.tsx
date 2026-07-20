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
  ativo: boolean;
};

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("/api/produtos", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        setProdutos(data.filter((p: Produto) => p.ativo));
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return (
      <div className="p-6 text-center text-[var(--color-text-muted)]">
        Carregando produtos...
      </div>
    );
  }

  return (
    <div className="px-4 py-6">
      <h1
        className="text-xl font-extrabold text-[var(--color-primary-dark)] mb-6"
        style={{ fontFamily: "var(--font-baloo)" }}
      >
        Nossa Coleção
      </h1>

      {produtos.length === 0 ? (
        <p className="text-center text-[var(--color-text-muted)] mt-10">
          Nenhum produto cadastrado.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {produtos.map((produto) => (
            <ProductCard
              key={produto.id}
              product={{
                id: produto.id,
                nome: produto.nome,
                preco: Number(produto.preco),
                imagemUrl:
                  produto.imagem_url ??
                  "https://via.placeholder.com/400x533",
                tamanho: produto.tamanho ?? "",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}