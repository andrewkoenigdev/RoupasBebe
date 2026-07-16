import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const produtos = await prisma.produtos.findMany({
    orderBy: { criado_em: "desc" },
  });

  return NextResponse.json(produtos, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  const produto = await prisma.produtos.create({
    data: {
      nome: body.nome,
      descricao: body.descricao,
      categoria: body.categoria,
      tamanho: body.tamanho,
      cor: body.cor,
      preco: body.preco,
      imagem_url: body.imagem_url,
      ativo: true,
    },
  });

  return NextResponse.json(produto);
}