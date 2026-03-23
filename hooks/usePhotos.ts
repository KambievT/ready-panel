import { useEffect, useState } from "react";
import { fetchPhotos, type Photo } from "@/app/services/api";

export function usePhotos(section: string) {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetchPhotos(section)
      .then(setPhotos)
      .catch(() => {});
  }, [section]);

  return photos;
}
