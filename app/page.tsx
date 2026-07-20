import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="mx-4 mt-4 rounded-3xl overflow-hidden bg-gradient-to-b from-[var(--color-hero-from)] to-[var(--color-hero-to)] px-6 py-10 text-center">
        <p className="text-6xl mb-2">🧸👶</p>
        <h1
          className="text-2xl font-extrabold text-[var(--color-primary-dark)] leading-tight"
          style={{ fontFamily: "var(--font-baloo)" }}
        >
          Nova Coleção
          <br />
          Primavera
        </h1>
        <p className="text-sm text-[var(--color-primary-dark)] mt-3 opacity-80">
          Roupinhas feitas com carinho para os pequenos mais estilosos.
        </p>
      </section>

      <section className="px-6 py-8 flex justify-center gap-8">
        {[
          { nome: "Kits", emoji: "🎁" },
          { nome: "Macacões", emoji: "👕" },
          { nome: "Acessórios", emoji: "🎀" },
        ].map((cat) => (
          <div key={cat.nome} className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[var(--color-card)] flex items-center justify-center text-2xl">
              {cat.emoji}
            </div>
            <span className="text-xs font-bold text-[var(--foreground)] uppercase tracking-wide">
              {cat.nome}
            </span>
          </div>
        ))}
      </section>

      <div className="flex justify-center py-2">
        <span className="text-3xl">🌸</span>
      </div>

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