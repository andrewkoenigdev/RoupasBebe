# 🍼 Kandres Baby

Loja virtual de roupas de bebê feitas sob encomenda, com catálogo dinâmico, carrinho de compras e finalização de pedido via WhatsApp. Projeto full-stack desenvolvido como portfólio, com painel administrativo completo para gestão de produtos.

🔗 **[Acesse o site](https://kandres-baby.vercel.app)**

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-7-2D3748?logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-336791?logo=postgresql)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwind-css)

---

## 📋 Sobre o Projeto

A **Kandres Baby** é uma loja de roupas de bebê sob encomenda. O projeto foi desenvolvido do zero — modelagem de banco de dados, back-end, front-end e deploy — como forma de aplicar na prática conceitos de desenvolvimento full-stack com um caso de uso real.

Por ser uma loja sob encomenda (sem controle de estoque tradicional), o fluxo de compra foi pensado para ser simples: o cliente monta o carrinho e finaliza o pedido diretamente via WhatsApp, sem necessidade de conta de usuário ou processamento de pagamento online.

## ✨ Funcionalidades

- **Catálogo de produtos** com filtro por categoria
- **Página de detalhe** de cada produto
- **Carrinho de compras** persistente durante a sessão
- **Checkout simplificado** — finalização de pedido via WhatsApp com mensagem pré-formatada
- **Painel administrativo** (rota não pública) com CRUD completo de produtos
- **Upload de imagens** direto para a nuvem (Cloudinary)
- **Design responsivo** com identidade visual própria

## 🛠️ Tecnologias

**Front-end**
- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)

**Back-end**
- Next.js API Routes
- [Prisma ORM 7](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/) (hospedado no [Neon](https://neon.com/))

**Infraestrutura**
- [Vercel](https://vercel.com/) — deploy e hospedagem
- [Cloudinary](https://cloudinary.com/) — armazenamento e otimização de imagens

## 🗂️ Estrutura do Projeto

app/
├── admin/ # Painel administrativo (CRUD de produtos)
├── api/ # Rotas de API (produtos, upload)
├── carrinho/ # Página do carrinho
├── components/ # Componentes reutilizáveis (Header, Footer, ProductCard...)
├── context/ # Context API (estado global do carrinho)
├── lib/ # Configuração do Prisma Client
├── produtos/ # Catálogo e detalhe de produto
└── page.tsx # Home
prisma/
└── schema.prisma # Modelagem do banco de dados


## 🚀 Rodando localmente

**Pré-requisitos:** Node.js 18+, PostgreSQL, conta no Cloudinary

```bash
# Clone o repositório
git clone https://github.com/andrewkoenigdev/RoupasBebe.git
cd RoupasBebe

# Instale as dependências
npm install
```

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
CLOUDINARY_CLOUD_NAME="seu_cloud_name"
CLOUDINARY_API_KEY="sua_api_key"
CLOUDINARY_API_SECRET="seu_api_secret"


```bash
# Gera o Prisma Client e sincroniza o schema
npx prisma generate
npx prisma db pull

# Roda o projeto
npm run dev
```

Acesse `http://localhost:3000`.

## 🔒 Painel Administrativo

O painel admin (`/admin`) não possui link público no site — é uma decisão de projeto para manter o escopo simples, sem sistema de autenticação completo. O acesso é feito diretamente pela URL, mantida privada.

## 📌 Decisões de Projeto

- **Sem sistema de login:** o site não requer conta de cliente. O foco está na navegação simples e conversão direta via WhatsApp.
- **Sem gateway de pagamento:** por ser uma loja sob encomenda, o fechamento do pedido acontece via conversa direta com a vendedora.
- **Sem controle de estoque tradicional:** os produtos são feitos por encomenda, então o campo relevante é a disponibilidade (ativo/inativo), não quantidade em estoque.

## 🗺️ Roadmap

- [ ] Filtro por tamanho no catálogo
- [ ] Testes de responsividade em mais dispositivos
- [ ] Analytics de visitantes

## 👤 Autor

Desenvolvido por **Andrew Koenig**

- GitHub: [@andrewkoenigdev](https://github.com/andrewkoenigdev)