"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="nav-link flex items-center justify-center w-10 h-10 transition-all duration-300"
    >
      {theme === "dark" ? (
        <FiSun className="w-5 h-5" style={{ color: "var(--accent)" }} />
      ) : (
        <FiMoon className="w-5 h-5 text-secondary" />
      )}
    </button>
  );
}
