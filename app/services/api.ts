export interface Photo {
  name: string; // Cloudinary public_id
  url: string;
}

export async function fetchPhotos(section?: string): Promise<Photo[]> {
  const params = section ? `?section=${encodeURIComponent(section)}` : "";
  const res = await fetch(`/api/photos${params}`);
  if (!res.ok) throw new Error("Не удалось загрузить фото");
  return (await res.json()).photos;
}

export async function uploadPhoto(file: File, token: string, section?: string): Promise<Photo> {
  const formData = new FormData();
  formData.append("photo", file);
  if (section) formData.append("section", section);
  const res = await fetch("/api/photos", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || "Ошибка загрузки");
  }
  return res.json();
}

export async function deletePhoto(name: string, token: string): Promise<void> {
  const res = await fetch(`/api/photos?id=${encodeURIComponent(name)}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || "Ошибка удаления");
  }
}

export { signIn as login } from "@/lib/firebase-auth";
