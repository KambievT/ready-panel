import { NextRequest, NextResponse } from "next/server";
import { verifyFirebaseToken } from "@/lib/verify-firebase-token";
import { listPhotos, uploadPhoto, deletePhoto } from "@/lib/cloudinary-server";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/avif"];
const MAX_SIZE = 10 * 1024 * 1024; // 10 MB

async function requireAuth(req: NextRequest): Promise<boolean> {
  const token = req.headers.get("authorization")?.slice(7);
  if (!token) return false;
  return verifyFirebaseToken(token);
}

// GET /api/photos?section=hero  — public, list photos
export async function GET(req: NextRequest) {
  try {
    const section = req.nextUrl.searchParams.get("section") ?? undefined;
    const photos = await listPhotos(section);
    return NextResponse.json({ photos });
  } catch (err) {
    console.error("List photos error:", err);
    return NextResponse.json(
      { error: "Не удалось получить фото" },
      { status: 500 },
    );
  }
}

// POST /api/photos  — admin only, upload photo
export async function POST(req: NextRequest) {
  if (!(await requireAuth(req))) {
    return NextResponse.json({ error: "Не авторизован" }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("photo") as File | null;
  const section = (formData.get("section") as string | null) ?? undefined;

  if (!file) {
    return NextResponse.json(
      { error: "Файл не предоставлен" },
      { status: 400 },
    );
  }
  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json(
      { error: "Только изображения (jpeg, png, webp, avif)" },
      { status: 400 },
    );
  }
  if (file.size > MAX_SIZE) {
    return NextResponse.json(
      { error: "Файл превышает 10 МБ" },
      { status: 400 },
    );
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const photo = await uploadPhoto(buffer, file.type, section);
    return NextResponse.json(photo, { status: 201 });
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json({ error: "Ошибка загрузки" }, { status: 500 });
  }
}

// DELETE /api/photos?id={publicId}  — admin only, delete photo
export async function DELETE(req: NextRequest) {
  if (!(await requireAuth(req))) {
    return NextResponse.json({ error: "Не авторизован" }, { status: 401 });
  }

  const id = req.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "ID не указан" }, { status: 400 });
  }

  try {
    await deletePhoto(id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Delete error:", err);
    return NextResponse.json({ error: "Ошибка удаления" }, { status: 500 });
  }
}
