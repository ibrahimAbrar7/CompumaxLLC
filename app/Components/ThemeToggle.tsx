"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-40 right-10 p-2 bg-gray-200 dark:bg-gray-900 dark:border border border-gray-400 dark:border-gray-500 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none z-50"
    >
      {theme === "light" ? (
        <SunIcon className="w-6 h-6 text-yellow-500" />
      ) : (
        <MoonIcon className="w-6 h-6 text-[#73c0fc]" />
      )}
    </button>
  );
};

export default ThemeToggle;
