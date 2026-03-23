import { NextRequest, NextResponse } from "next/server";
import { extractToken, verifyToken } from "@/lib/auth";
import { deleteFile } from "@/lib/minio";

// DELETE /api/photos/[name] — delete photo (admin only)
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ name: string }> },
) {
  const token = extractToken(req.headers.get("authorization"));
  if (!token || !verifyToken(token)) {
    return NextResponse.json(
      { error: "Токен не предоставлен" },
      { status: 401 },
    );
  }

  const { name } = await params;

  if (!name || name.includes("..") || name.includes("/")) {
    return NextResponse.json(
      { error: "Некорректное имя файла" },
      { status: 400 },
    );
  }

  try {
    await deleteFile(name);
    return NextResponse.json({ message: "Фото удалено" });
  } catch (err) {
    console.error("Delete error:", err);
    return NextResponse.json(
      { error: "Ошибка удаления файла" },
      { status: 500 },
    );
  }
}
