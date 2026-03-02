"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitch() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }

    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);

    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative flex h-10 w-20 items-center rounded-full border border-white/10 bg-white/10 px-1 backdrop-blur-xl transition hover:bg-white/20"
    >
      {/* Slider */}
      <div
        className={`absolute left-1 h-8 w-8 rounded-full bg-white shadow-md transition-all duration-300 ${
          dark ? "translate-x-10" : ""
        }`}
      />

      {/* Icons */}
      <div className="relative z-10 flex w-full justify-between px-1">
        <Sun size={16} className={`${dark ? "text-white/40" : "text-yellow-400"}`} />
        <Moon size={16} className={`${dark ? "text-indigo-400" : "text-white/40"}`} />
      </div>
    </button>
  );
}