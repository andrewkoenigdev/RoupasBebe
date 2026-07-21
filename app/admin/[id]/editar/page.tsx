"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditarProduto() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    categoria: "",
    tamanho: "",
    cor: "",
    preco: "",
    imagem_url: "",
    ativo: true,
  });
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [enviandoImagem, setEnviandoImagem] = useState(false);

  useEffect(() => {
    fetch("/api/produtos")
      .then((res) => res.json())
      .then((data) => {
        const produto = data.find((p: any) => p.id === Number(id));
        if (produto) {
          setForm({
            nome: produto.nome ?? "",
            descricao: produto.descricao ?? "",
            categoria: produto.categoria ?? "",
            tamanho: produto.tamanho ?? "",
            cor: produto.cor ?? "",
            preco: produto.preco ?? "",
            imagem_url: produto.imagem_url ?? "",
            ativo: produto.ativo ?? true,
          });
        }
        setCarregando(false);
      });
  }, [id]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setEnviandoImagem(true);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();

    setForm((prev) => ({ ...prev, imagem_url: data.url }));
    setEnviandoImagem(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSalvando(true);

    await fetch(`/api/produtos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        preco: Number(form.preco),
      }),
    });

    router.push("/admin");
  }

  if (carregando) {
    return <div className="p-4 sm:p-6">Carregando...</div>;
  }

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
        Editar Produto
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full sm:max-w-lg bg-white rounded-xl shadow-sm p-4 sm:p-6 flex flex-col gap-4"
      >
        <div>
          <label className="text-sm text-gray-600">Nome</label>
          <input
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 text-base"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Descrição</label>
          <textarea
            name="descricao"
            value={form.descricao}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 text-base"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Categoria</label>
            <input
              name="categoria"
              value={form.categoria}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 text-base"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Tamanho</label>
            <input
              name="tamanho"
              value={form.tamanho}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 text-base"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Cor</label>
            <input
              name="cor"
              value={form.cor}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 text-base"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Preço</label>
            <input
              name="preco"
              type="number"
              step="0.01"
              value={form.preco}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 text-base"
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-600">Imagem do Produto</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 text-sm"
          />
          {enviandoImagem && (
            <p className="text-sm text-gray-500 mt-1">Enviando imagem...</p>
          )}
          {form.imagem_url && (
            <img
              src={form.imagem_url}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-lg mt-2"
            />
          )}
        </div>

        <button
          type="submit"
          disabled={salvando}
          className="bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50"
        >
          {salvando ? "Salvando..." : "Salvar Alterações"}
        </button>
      </form>
    </div>
  );
}