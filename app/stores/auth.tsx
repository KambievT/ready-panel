"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { type User } from "firebase/auth";
import {
  getAuthForToken,
  onAuthChange,
  signOutAdmin,
} from "@/lib/firebase-auth";

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  editMode: boolean;
  logout: () => Promise<void>;
  toggleEditMode: () => void;
  getToken: () => Promise<string | null>;
}

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    return onAuthChange((u) => {
      setUser(u);
      setIsLoading(false);
    });
  }, []);

  const logout = useCallback(async () => {
    setEditMode(false);
    await signOutAdmin();
  }, []);

  const toggleEditMode = useCallback(() => setEditMode((v) => !v), []);

  const getToken = useCallback(
    () => getAuthForToken().currentUser?.getIdToken() ?? Promise.resolve(null),
    [],
  );

  return (
    <AuthContext
      value={{
        isAuthenticated: !!user,
        isLoading,
        editMode,
        logout,
        toggleEditMode,
        getToken,
      }}
    >
      {children}
    </AuthContext>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
