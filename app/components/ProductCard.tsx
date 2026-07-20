import Link from "next/link";

type Product = {
  id: number;
  nome: string;
  preco: number;
  imagemUrl: string;
  tamanho: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/produtos/${product.id}`}>
      <div className="bg-[var(--color-card)] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
        {/* Foto */}
        <div className="aspect-[3/4] w-full overflow-hidden bg-white">
          <img
            src={product.imagemUrl}
            alt={product.nome}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Informações */}
        <div className="p-3">
          <h3
            className="text-base font-bold text-[var(--color-primary-dark)]"
            style={{ fontFamily: "var(--font-baloo)" }}
          >
            {product.nome}
          </h3>

          <p className="text-sm text-[var(--color-text-muted)]">
            Tamanho: {product.tamanho}
          </p>

          <p className="text-lg font-extrabold mt-2">
            R$ {product.preco.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
}