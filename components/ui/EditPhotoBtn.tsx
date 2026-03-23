"use client";

import { useState } from "react";
import { Camera } from "lucide-react";
import { useAuth } from "@/app/stores/auth";
import { PhotoManagerModal } from "./PhotoManagerModal";

interface Props {
  section: string;
  className?: string;
}

export function EditPhotoBtn({ section, className = "" }: Props) {
  const { editMode } = useAuth();
  const [open, setOpen] = useState(false);

  if (!editMode) return null;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`absolute top-3 right-3 z-20 flex items-center gap-1.5 bg-black/60 hover:bg-black/80 text-white text-xs font-semibold rounded-lg px-3 py-1.5 backdrop-blur-sm transition-colors cursor-pointer ${className}`}
      >
        <Camera className="w-3.5 h-3.5" />
        Поменять фото
      </button>

      <PhotoManagerModal
        section={section}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
