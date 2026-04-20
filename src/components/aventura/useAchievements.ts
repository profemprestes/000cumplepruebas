import { useCallback, useState } from "react";
import type { Achievement } from "./AchievementToast";

export function useAchievements() {
  const [current, setCurrent] = useState<Achievement | null>(null);

  const unlock = useCallback((title: string, description?: string) => {
    const id = Date.now();
    setCurrent({ id, title, description });
    window.setTimeout(() => {
      setCurrent((c) => (c && c.id === id ? null : c));
    }, 3200);
  }, []);

  return { current, unlock };
}
