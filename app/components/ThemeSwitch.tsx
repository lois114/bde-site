"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitch() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
  let saved: string | null = null;
  try { saved = localStorage.getItem("theme"); } catch {}

  const root = document.documentElement;
  const body = document.body;

  if (saved === "dark") {
    root.classList.add("dark");
    body.classList.add("dark");
    root.style.colorScheme = "dark";
    setDark(true);
  } else {
    root.classList.remove("dark");
    body.classList.remove("dark");
    root.style.colorScheme = "light";
    setDark(false);
  }

  setMounted(true);
}, []);

  const toggle = () => {
  const next = !dark;
  setDark(next);

  const root = document.documentElement;
  const body = document.body;

  if (next) {
    root.classList.add("dark");
    body.classList.add("dark"); // ✅ iOS help
    root.style.colorScheme = "dark"; // ✅ force repaint / form controls
    try { localStorage.setItem("theme", "dark"); } catch {}
  } else {
    root.classList.remove("dark");
    body.classList.remove("dark"); // ✅ iOS help
    root.style.colorScheme = "light";
    try { localStorage.setItem("theme", "light"); } catch {}
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