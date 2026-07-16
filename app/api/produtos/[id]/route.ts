import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  const produto = await prisma.produtos.update({
    where: { id: Number(id) },
    data: {
      nome: body.nome,
      descricao: body.descricao,
      categoria: body.categoria,
      tamanho: body.tamanho,
      cor: body.cor,
      preco: body.preco,
      imagem_url: body.imagem_url,
      ativo: body.ativo,
    },
  });

  return NextResponse.json(produto);
}