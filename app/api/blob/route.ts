import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  // Загружаем файл в Vercel Blob
  const blob = await put(file.name, file, {
    access: "public",
  });

  // Возвращаем URL изображения
  return NextResponse.json({ url: blob.url });
}
