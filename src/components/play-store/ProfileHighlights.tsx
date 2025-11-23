"use client";

import Image from "next/image";


export default function ProfileHighlights() {
    return (
        <div className="flex items-center gap-3">
            <Image src="/photo-profile.jpeg" alt="photo profile" width={56} height={56} className="ring-1 ring-[#e5e2da]" />
            <div>
                <p className="text-base font-semibold text-gray-900">Yuda Fahrudin</p>
                <p className="text-sm text-gray-500">Frontend Engineer • Jakarta, ID</p>
            </div>
        </div>
    );
}
