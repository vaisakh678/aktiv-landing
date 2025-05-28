import { useEffect, useState } from "react";

export function useIsMediumScreen() {
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => setIsMd(e.matches);

    // Set initial value
    setIsMd(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isMd;
}
