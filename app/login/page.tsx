"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { login as firebaseSignIn } from "@/app/services/api";
import { useAuth } from "@/app/stores/auth";

export default function LoginPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated, isLoading, router]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setPending(true);
    try {
      await firebaseSignIn(username, password);
      router.replace("/");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Ошибка входа");
    } finally {
      setPending(false);
    }
  }

  if (isLoading) return null;

  return (
    <div className="min-h-screen bg-[#0B1422] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <span className="text-[32px] font-extrabold italic tracking-tight select-none">
            <span className="text-[#F5A41F]">READY</span>
            <span className="text-[#1B54B4]"> PADEL</span>
          </span>
        </div>

        {/* Card */}
        <div className="bg-white/3 border border-white/10 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-7">
            <div className="w-10 h-10 bg-[#1B54B4]/20 rounded-xl flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5 text-[#1B54B4]" />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg leading-tight">
                Вход
              </h1>
              <p className="text-white/40 text-xs">Панель администратора</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-white/50 text-sm">Email</label>
              <input
                ref={inputRef}
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 h-11 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#1B54B4]/60 focus:bg-white/8 transition-colors"
                placeholder="admin@example.com"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-white/50 text-sm">Пароль</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 h-11 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#1B54B4]/60 focus:bg-white/8 transition-colors"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm bg-red-400/10 rounded-xl px-4 py-2.5">
                {error}
              </p>
            )}

            <Button
              type="submit"
              disabled={pending}
              className="w-full bg-[#1B54B4] hover:bg-[#1648a0] text-white font-semibold rounded-xl h-11 text-sm shadow-none transition-colors disabled:opacity-50 mt-2"
            >
              {pending ? "Вход..." : "Войти"}
            </Button>
          </form>
        </div>

        <p className="text-center text-white/20 text-xs mt-6">
          Shift + Alt + A — быстрый переход на эту страницу
        </p>
      </div>
    </div>
  );
}
