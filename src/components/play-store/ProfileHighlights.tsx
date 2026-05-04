"use client";

import Image from "next/image";

export default function ProfileHighlights() {
    return (
        <div className="flex items-center gap-3">
            <Image
                src="/photo-profile.jpeg"
                alt="photo profile"
                width={56}
                height={56}
                className="rounded-[18px] ring-1 ring-[#dbe3f0] shadow-[0_12px_32px_-24px_rgba(15,23,42,0.7)]"
            />
            <div>
                <p className="text-base font-semibold tracking-tight text-[#111827]">Yuda Fahrudin</p>
                <p className="text-sm text-[#6b7280]">Software Engineer • Jakarta, ID</p>
            </div>
        </div>
    );
}
