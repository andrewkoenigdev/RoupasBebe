import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "Nenhum arquivo enviado" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const nomeArquivo = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
  const caminhoCompleto = path.join(process.cwd(), "public", "produtos", nomeArquivo);

  await writeFile(caminhoCompleto, buffer);

  return NextResponse.json({ url: `/produtos/${nomeArquivo}` });
}