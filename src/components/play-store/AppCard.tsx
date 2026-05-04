"use client";

import Image from "next/image";

export type AppCardProps = {
    title: string;
    developer: string;
    description?: string;
    category?: string;
    rating?: number;
    image?: string;
    onClick?: () => void;
};

const StarIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
    >
        <path d="M12 2.75c.32 0 .62.18.76.48l2.31 4.69 5.18.75a.84.84 0 0 1 .46 1.43l-3.75 3.65.89 5.16a.82.82 0 0 1-1.19.86L12 17.99l-4.65 2.45a.82.82 0 0 1-1.19-.86l.89-5.16L3.3 10.1a.84.84 0 0 1 .46-1.43l5.18-.75 2.31-4.69c.14-.3.44-.48.76-.48Z" />
    </svg>
);

export default function AppCard({ title, developer, description, category, rating = 4.7, image, onClick }: AppCardProps) {
    return (
        <button
            onClick={onClick}
            className="flex w-full items-center gap-4 rounded-[28px] border border-[#e6ebf3] bg-white px-4 py-4 text-left shadow-[0_18px_40px_-30px_rgba(15,23,42,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-28px_rgba(15,23,42,0.35)]"
        >
            <div className="relative h-16 w-16 overflow-hidden rounded-[20px] bg-[#eef3fb] text-sm font-semibold text-[#007aff] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                {image ? (
                    <Image src={image} alt={title} fill sizes="64px" className="object-cover" />
                ) : (
                    <span className="flex h-full w-full items-center justify-center">{title.charAt(0)}</span>
                )}
            </div>
            <div className="min-w-0 flex-1">
                <p className="truncate text-base font-semibold tracking-tight text-[#111827]">{title}</p>
                <p className="truncate text-sm text-[#6b7280]">{developer}</p>
                <p className="mt-1 text-xs leading-5 text-[#9ca3af] line-clamp-2">{description || "Tailored suggestion"}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
                <span className="rounded-full bg-[#f2f4f8] px-4 py-1.5 text-xs font-bold tracking-wide text-[#007aff]">
                    GET
                </span>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-[#6b7280]">
                    <StarIcon className="h-3.5 w-3.5 text-[#ff9f0a]" />
                    {rating.toFixed(1)}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9ca3af]">
                    {category || "Utility"}
                </span>
            </div>
        </button>
    );
}
