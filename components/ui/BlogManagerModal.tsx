"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, Trash2, Plus, Loader2, FileText, ImageIcon } from "lucide-react";
import Image from "next/image";
import { useBlogArticles, type BlogArticle } from "@/hooks/useBlogArticles";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function BlogManagerModal({ open, onClose }: Props) {
  const { articles, loading, createArticle, deleteArticle } = useBlogArticles();

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [creating, setCreating] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState("");

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

  async function handleCreate() {
    if (!title.trim()) {
      setError("Введите заголовок статьи");
      return;
    }
    setError("");
    setCreating(true);
    try {
      await createArticle(title.trim(), imageUrl.trim());
      setTitle("");
      setImageUrl("");
    } catch {
      setError("Ошибка создания статьи");
    } finally {
      setCreating(false);
    }
  }

  async function handleDelete(article: BlogArticle) {
    setDeletingId(article.id);
    try {
      await deleteArticle(article.id);
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
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-[#0B1422] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
          <div>
            <h2 className="text-white font-bold text-base leading-tight">
              Управление статьями
            </h2>
            <p className="text-white/40 text-xs mt-0.5">
              Создание и удаление статей блога
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Create form */}
        <div className="px-6 py-4 border-b border-white/10 shrink-0">
          <div className="flex flex-col gap-3">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Заголовок статьи"
              className="w-full h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#1B54B4] transition-colors"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleCreate();
              }}
            />
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="URL изображения (необязательно)"
                  className="w-full h-11 rounded-xl border border-white/10 bg-white/5 pl-9 pr-4 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#1B54B4] transition-colors"
                />
              </div>
              <button
                onClick={handleCreate}
                disabled={creating || !title.trim()}
                className="flex items-center gap-1.5 bg-[#1B54B4] hover:bg-[#1648a0] disabled:opacity-50 text-white text-sm font-semibold rounded-xl px-5 h-11 transition-colors shrink-0 cursor-pointer"
              >
                {creating ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
                {creating ? "Создание..." : "Добавить"}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <p className="mt-3 text-red-400 text-sm bg-red-400/10 rounded-xl px-4 py-2.5">
              {error}
            </p>
          )}
        </div>

        {/* Articles list */}
        <div className="overflow-y-auto flex-1 p-6">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 text-white/30 animate-spin" />
            </div>
          ) : articles.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3 text-white/30">
              <FileText className="w-10 h-10" />
              <p className="text-sm">Статей пока нет</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="group flex items-center gap-4 bg-white/5 border border-white/5 rounded-xl p-3 hover:bg-white/8 transition-colors"
                >
                  {/* Thumbnail */}
                  <div className="w-16 h-12 rounded-lg overflow-hidden bg-white/5 shrink-0 relative">
                    {article.imageUrl ? (
                      <Image
                        src={article.imageUrl}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FileText className="w-5 h-5 text-white/15" />
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium leading-snug truncate">
                      {article.title}
                    </p>
                    <p className="text-white/30 text-xs mt-0.5">
                      {new Date(article.createdAt).toLocaleDateString("ru-RU")}
                    </p>
                  </div>

                  {/* Delete */}
                  <button
                    onClick={() => handleDelete(article)}
                    disabled={deletingId === article.id}
                    className="flex items-center gap-1.5 text-white/30 hover:text-red-400 hover:bg-red-400/10 disabled:opacity-50 text-xs font-semibold rounded-lg px-3 py-2 transition-colors shrink-0 cursor-pointer"
                  >
                    {deletingId === article.id ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Trash2 className="w-3.5 h-3.5" />
                    )}
                    Удалить
                  </button>
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
