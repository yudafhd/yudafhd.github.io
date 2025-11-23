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
            className="flex w-full items-center gap-3 border border-[#e5e2da] bg-[#fcfcfb] px-3 py-2 text-left shadow-sm transition hover:border-emerald-300"
        >
            <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-[#f0eee6] text-sm font-semibold text-emerald-600">
                {image ? (
                    <Image src={image} alt={title} fill sizes="48px" className="object-cover" />
                ) : (
                    <span className="flex h-full w-full items-center justify-center">{title.charAt(0)}</span>
                )}
            </div>
            <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-gray-900">{title}</p>
                <p className="truncate text-xs text-gray-500">{developer}</p>
                <p className="text-xs text-gray-400 line-clamp-2">{description || "Tailored suggestion"}</p>
            </div>
            <div className="flex flex-col items-end gap-1 text-[11px] font-semibold text-gray-500">
                <span className="flex items-center gap-1">
                    <StarIcon className="h-3.5 w-3.5 text-amber-400" />
                    {rating.toFixed(1)}
                </span>
                <span className="rounded-full bg-[#f1efe7] px-2 py-0.5 text-[10px] uppercase tracking-wide text-gray-500">
                    {category || "Utility"}
                </span>
            </div>
        </button>
    );
}
