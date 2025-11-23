"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const getInitialTheme = () => {
        if (typeof window === "undefined") return false;
        const stored = window.localStorage.getItem("theme-preference");
        if (stored) return stored === "dark";
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    };

    const [isDark, setIsDark] = useState<boolean>(getInitialTheme);

    useEffect(() => {
        if (typeof document === "undefined") return;
        document.documentElement.classList.toggle("dark", isDark);
        if (typeof window !== "undefined") {
            window.localStorage.setItem("theme-preference", isDark ? "dark" : "light");
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark((prev) => !prev);

    return (
        <button
            onClick={toggleTheme}
            className="rounded-full border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-600 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-gray-800 dark:text-gray-200"
            aria-label="Toggle theme"
        >
            {isDark ? "🌙" : "☀️"}
        </button>
    );
}
