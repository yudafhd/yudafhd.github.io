"use client";

import ProfileHighlights from "./ProfileHighlights";

export default function Header() {
    return (
        <header className="mx-auto max-w-xl py-5 px-5 pb-0 md:pb-0 md:py-10 md:px-0">
            <ProfileHighlights />
        </header>
    );
}
