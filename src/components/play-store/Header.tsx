"use client";

import ProfileHighlights from "./ProfileHighlights";
import Link from "next/link";

export default function Header() {
    return (
        <header className="mx-auto flex max-w-xl items-center justify-between px-5 py-5 pb-0 md:px-0 md:py-8 md:pb-0">
            <ProfileHighlights />
            <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#007aff] px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_40px_-24px_rgba(0,122,255,0.8)] transition hover:bg-[#0a84ff]"
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                >
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                <span>Hire Me</span>
            </Link>
        </header>
    );
}
