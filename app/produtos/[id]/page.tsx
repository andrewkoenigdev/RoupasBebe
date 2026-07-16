import { prisma } from "../../lib/prisma";
import AddToCartButton from "../../components/AddToCartButton";

export default async function ProdutoDetalhe({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const produto = await prisma.produtos.findUnique({
    where: { id: Number(id) },
  });

  if (!produto) {
    return <div className="p-6">Produto não encontrado.</div>;
  }

  const imagemUrl = produto.imagem_url ?? "https://via.placeholder.com/400x300";

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-6">
        <img
          src={imagemUrl}
          alt={produto.nome}
          className="w-full h-72 object-cover rounded-lg bg-gray-100"
        />
        <h1 className="text-2xl font-semibold text-gray-900 mt-4">
          {produto.nome}
        </h1>
        <p className="text-gray-500 mt-1">Tamanho: {produto.tamanho}</p>
        <p className="text-gray-700 mt-3">{produto.descricao}</p>
        <p className="text-2xl font-bold text-gray-900 mt-4">
          R$ {Number(produto.preco).toFixed(2)}
        </p>
        <AddToCartButton
          id={produto.id}
          nome={produto.nome}
          preco={Number(produto.preco)}
          imagemUrl={imagemUrl}
          tamanho={produto.tamanho ?? ""}
        />
      </div>
    </div>
  );
}