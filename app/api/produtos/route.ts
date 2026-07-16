import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

export async function GET() {
  const produtos = await prisma.produtos.findMany({
    where: { ativo: true },
    orderBy: { criado_em: "desc" },
  });

  return NextResponse.json(produtos);
}