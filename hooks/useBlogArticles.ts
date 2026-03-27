"use client";

import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/app/stores/auth";

export interface BlogArticle {
  id: string;
  title: string;
  imageUrl: string;
  createdAt: string;
}

export function useBlogArticles() {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const { getToken } = useAuth();

  const fetchArticles = useCallback(async () => {
    try {
      const res = await fetch("/api/blog");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setArticles(data.articles ?? []);
    } catch (err) {
      console.error("Fetch articles error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const createArticle = useCallback(
    async (title: string, imageUrl: string) => {
      const token = await getToken();
      if (!token) return;
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, imageUrl }),
      });
      if (!res.ok) throw new Error("Failed to create");
      const data = await res.json();
      setArticles((prev) => [data.article, ...prev]);
    },
    [getToken],
  );

  const deleteArticle = useCallback(
    async (id: string) => {
      const token = await getToken();
      if (!token) return;
      const res = await fetch("/api/blog", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error("Failed to delete");
      setArticles((prev) => prev.filter((a) => a.id !== id));
    },
    [getToken],
  );

  return {
    articles,
    loading,
    createArticle,
    deleteArticle,
    refetch: fetchArticles,
  };
}
