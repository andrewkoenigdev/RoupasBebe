type Product = {
  id: number;
  nome: string;
  preco: number;
  imagemUrl: string;
  tamanho: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 w-56 shadow-sm hover:shadow-md transition-shadow bg-white">
      <img
        src={product.imagemUrl}
        alt={product.nome}
        className="w-full h-40 object-cover rounded-lg bg-gray-100"
      />
      <h3 className="text-base font-medium mt-3 text-gray-900">{product.nome}</h3>
      <p className="text-sm text-gray-500">Tamanho: {product.tamanho}</p>
      <p className="text-base font-bold text-gray-900 mt-1">
        R$ {product.preco.toFixed(2)}
      </p>
    </div>
  );
}