"use client";

import ProfileHighlights from "./ProfileHighlights";
import Link from "next/link";

export default function Header() {
    return (
        <header className="mx-auto max-w-xl py-5 px-5 pb-0 md:pb-0 md:py-10 md:px-0 flex items-center justify-between">
            <ProfileHighlights />
            <Link href="/contact" className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 transition-colors">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-emerald-600"
                >
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                <span>Hire Me</span>
            </Link>
        </header>
    );
}
