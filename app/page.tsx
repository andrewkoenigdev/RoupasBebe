import Link from "next/link";

const heroImageUrl = "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const categorias = [
  { nome: "Kits", imagemUrl: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { nome: "Macacões", imagemUrl: "https://plus.unsplash.com/premium_photo-1667480556784-a8f27e62104c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { nome: "Acessórios", imagemUrl: "https://images.unsplash.com/photo-1622290319146-7b63df48a635?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export default function Home() {
  return (
    <div>
      <section className="mx-4 mt-4 rounded-3xl overflow-hidden relative">
        <img
          src={heroImageUrl}
          alt="Nova coleção de roupas de bebê"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-end text-center px-6 pb-6">
          <h1
            className="text-2xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "var(--font-baloo)", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
          >
            Nova Coleção
            <br />
            Primavera
          </h1>
          <p
            className="text-sm text-white mt-2"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
          >
            Roupinhas feitas com carinho para os pequenos mais estilosos.
          </p>
        </div>
      </section>

      <section className="px-6 py-8 flex justify-center gap-8">
        {categorias.map((cat) => (
          <div key={cat.nome} className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-[var(--color-card)]">
              <img
                src={cat.imagemUrl}
                alt={cat.nome}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs font-bold text-[var(--foreground)] uppercase tracking-wide">
              {cat.nome}
            </span>
          </div>
        ))}
      </section>

      <section className="mx-4 my-6 bg-[var(--color-card)] rounded-3xl px-6 py-8">
  <div className="flex flex-col sm:flex-row items-center gap-6">
    <div className="flex flex-col items-center gap-3 flex-shrink-0">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
        <img
          src="/sobre/dona-loja.jpg"
          alt="[Nome]"
          className="w-full h-full object-cover"
        />
      </div>
      <span
        className="text-sm font-bold text-[var(--color-primary-dark)]"
        style={{ fontFamily: "var(--font-baloo)" }}
      >
        Prazer, sou a Cintia
      </span>
    </div>

    <div className="text-center sm:text-left">
      <h2
        className="text-lg font-bold text-[var(--color-primary-dark)] mb-2"
        style={{ fontFamily: "var(--font-baloo)" }}
      >
        Feito à mão, de mãe para mãe
      </h2>
      <p className="text-sm font-medium text-[var(--foreground)]">
        Olá! Me chamo Cintia e criei o Kandres Baby para transformar o
        carinho do trabalho artesanal em memória afetiva. Aqui, cada costura
        é feita sem pressa, cuidando de cada detalhe para que o seu bebê
        vista não só uma roupa, mas todo o amor e atenção que ele merece.
      </p>
    </div>
  </div>
</section>

      <section className="px-6 py-10 text-center">
        <h2
          className="text-lg font-bold text-[var(--color-primary-dark)] mb-3"
          style={{ fontFamily: "var(--font-baloo)" }}
        >
          Feito com amor, para quem você mais ama
        </h2>
        <p className="text-sm text-[var(--color-text-muted)] mb-6 max-w-xs mx-auto">
          Peças sob encomenda, com tecidos macios e estampas fofas para cada fase do seu bebê.
        </p>
        <Link
          href="/produtos"
          className="inline-block bg-[var(--color-primary)] text-white font-bold px-8 py-3 rounded-full text-sm"
        >
          Ver Coleção
        </Link>
      </section>
    </div>
  );
}