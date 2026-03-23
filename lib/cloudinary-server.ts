import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export interface PhotoItem {
  name: string; // Cloudinary public_id
  url: string; // secure_url
}

export async function listPhotos(folder?: string): Promise<PhotoItem[]> {
  const result = await cloudinary.api.resources({
    type: "upload",
    prefix: folder ?? "",
    max_results: 500,
  });
  return (result.resources as { public_id: string; secure_url: string }[]).map(
    (r) => ({ name: r.public_id, url: r.secure_url }),
  );
}

export async function uploadPhoto(
  buffer: Buffer,
  contentType: string,
  folder?: string,
): Promise<PhotoItem> {
  const dataUri = `data:${contentType};base64,${buffer.toString("base64")}`;
  const result = await cloudinary.uploader.upload(dataUri, {
    resource_type: "image",
    folder: folder ?? undefined,
  });
  return { name: result.public_id, url: result.secure_url };
}

export async function deletePhoto(publicId: string): Promise<void> {
  await cloudinary.uploader.destroy(publicId);
}
