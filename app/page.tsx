import ProductCard from "./components/ProductCard";

const produtosMock = [
  {
    id: 1,
    nome: "Body Manga Longa Ursinho",
    preco: 49.9,
    imagemUrl: "https://via.placeholder.com/220x160",
    tamanho: "P",
  },
  {
    id: 2,
    nome: "Macacão Plush Nuvem",
    preco: 79.9,
    imagemUrl: "https://via.placeholder.com/220x160",
    tamanho: "RN",
  },
];

export default function Home() {
  return (
    <div style={{ padding: "24px" }}>
      <h1>Loja de Roupas de Bebê</h1>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "16px" }}>
        {produtosMock.map((produto) => (
          <ProductCard key={produto.id} product={produto} />
        ))}
      </div>
    </div>
  );
}