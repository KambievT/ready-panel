"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, Trash2, Upload, Loader2, ImageOff } from "lucide-react";
import { useAuth } from "@/app/stores/auth";
import {
  fetchPhotos,
  uploadPhoto,
  deletePhoto,
  type Photo,
} from "@/app/services/api";
import Image from "next/image";

interface Props {
  section: string;
  open: boolean;
  onClose: () => void;
}

const ALLOWED = ["image/jpeg", "image/png", "image/webp", "image/avif"];

export function PhotoManagerModal({ section, open, onClose }: Props) {
  const { getToken } = useAuth();
  const inputRef = useRef<HTMLInputElement>(null);

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState("");

  // Load photos when modal opens
  useEffect(() => {
    if (!open) return;
    setError("");
    setLoading(true);
    fetchPhotos(section)
      .then(setPhotos)
      .catch(() => setError("Не удалось загрузить фото"))
      .finally(() => setLoading(false));
  }, [open, section]);

  // Close on Escape + lock scroll
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [open, onClose]);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (!ALLOWED.includes(file.type)) {
      setError("Допустимы только jpeg, png, webp, avif");
      return;
    }
    const token = await getToken();
    if (!token) return;
    setError("");
    setUploading(true);
    try {
      const photo = await uploadPhoto(file, token, section);
      setPhotos((prev) => [...prev, photo]);
    } catch {
      setError("Ошибка загрузки");
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(photo: Photo) {
    const token = await getToken();
    if (!token) return;
    setDeletingId(photo.name);
    try {
      await deletePhoto(photo.name, token);
      setPhotos((prev) => prev.filter((p) => p.name !== photo.name));
    } catch {
      setError("Ошибка удаления");
    } finally {
      setDeletingId(null);
    }
  }

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-200 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#0B1422] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
          <div>
            <h2 className="text-white font-bold text-base leading-tight">
              Фото секции
            </h2>
            <p className="text-white/40 text-xs mt-0.5">{section}</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleUpload}
            />
            <button
              onClick={() => inputRef.current?.click()}
              disabled={uploading}
              className="flex items-center gap-1.5 bg-[#1B54B4] hover:bg-[#1648a0] disabled:opacity-50 text-white text-xs font-semibold rounded-lg px-3 py-2 transition-colors"
            >
              {uploading ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Upload className="w-3.5 h-3.5" />
              )}
              {uploading ? "Загрузка..." : "Добавить фото"}
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <p className="mx-6 mt-4 text-red-400 text-sm bg-red-400/10 rounded-xl px-4 py-2.5 shrink-0">
            {error}
          </p>
        )}

        {/* Content */}
        <div className="overflow-y-auto flex-1 p-6">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 text-white/30 animate-spin" />
            </div>
          ) : photos.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3 text-white/30">
              <ImageOff className="w-10 h-10" />
              <p className="text-sm">Нет фото в этой секции</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {photos.map((photo) => (
                <div
                  key={photo.name}
                  className="group relative aspect-video rounded-xl overflow-hidden bg-white/5"
                >
                  <Image
                    src={photo.url}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                  {/* Delete overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <button
                      onClick={() => handleDelete(photo)}
                      disabled={deletingId === photo.name}
                      className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white text-xs font-semibold rounded-lg px-3 py-1.5"
                    >
                      {deletingId === photo.name ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <Trash2 className="w-3.5 h-3.5" />
                      )}
                      {deletingId === photo.name ? "Удаление..." : "Удалить"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
