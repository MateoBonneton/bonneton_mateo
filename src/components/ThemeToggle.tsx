"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    // Read current theme state from documentElement class
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // Dispatch a custom event to notify other components (if needed)
    window.dispatchEvent(new Event("theme-change"));
  };

  // Prevent hydration mismatch by returning a placeholder of the exact same size
  if (!mounted) {
    return <div className="h-9 w-9" aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-9 w-9 items-center justify-center border border-grid-line-strong transition-all duration-300 hover:border-accent hover:bg-accent-light focus:outline-none"
      title={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"}
      aria-label={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex items-center justify-center text-white"
        >
          {theme === "light" ? (
            <Moon size={15} strokeWidth={1.5} className="text-white" />
          ) : (
            <Sun size={15} strokeWidth={1.5} className="text-white" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
