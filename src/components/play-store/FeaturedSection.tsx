"use client";

import Image from "next/image";
import { Project } from "@/data/projects";

type FeaturedSectionProps = {
    featuredApps: Project[];
    onAppClick: (app: Project) => void;
};

export default function FeaturedSection({ featuredApps, onAppClick }: FeaturedSectionProps) {
    if (!featuredApps.length) return null;

    return (
        <section className="px-4">
            <div className="mx-auto max-w-xl space-y-3">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-base font-semibold text-gray-900">Featured for you</p>
                        <p className="text-sm text-gray-500">Based on what you installed recently</p>
                    </div>
                    <button
                        type="button"
                        className="text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
                    >
                        Refresh
                    </button>
                </div>

                <div className="space-y-3">
                    {featuredApps.map((app) => (
                        <button
                            key={app.title}
                            onClick={() => onAppClick(app)}
                            className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3 text-left shadow-sm transition hover:border-emerald-300"
                        >
                            <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-gray-100">
                                {app.image ? (
                                    <Image src={app.image} alt={app.title} fill sizes="64px" className="object-cover" />
                                ) : (
                                    <span className="flex h-full w-full items-center justify-center text-lg font-semibold text-emerald-600">
                                        {app.title.charAt(0)}
                                    </span>
                                )}
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-gray-900">
                                    {app.title.replace(/\s*\([^)]*\)\s*/g, "")}
                                </p>
                                <p className="text-xs text-gray-500 line-clamp-2">{app.description}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
