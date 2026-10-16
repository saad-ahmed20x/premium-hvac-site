import { useEffect } from "react";
import { useLocation } from "wouter";

export function getNavigationTarget(location: string) {
  const [pathname, hash = ""] = location.split("#", 2);
  return { pathname, hash };
}

export function ScrollRestoration() {
  const [location] = useLocation();

  useEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    const { hash } = getNavigationTarget(location);

    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash));
        if (target) {
          target.scrollIntoView({ block: "start", behavior: "auto" });
          return;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      window.history.scrollRestoration = previousRestoration;
    };
  }, [location]);

  return null;
}
