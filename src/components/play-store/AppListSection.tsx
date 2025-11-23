"use client";

import AppCard from "./AppCard";
import { Project } from "@/data/projects";

type AppListSectionProps = {
    title: string;
    description?: string;
    apps: Project[];
    onAppClick: (app: Project) => void;
};

const prettifyTag = (tag?: string) =>
    tag ? tag.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) : "Utility";

export default function AppListSection({ title, description, apps, onAppClick }: AppListSectionProps) {
    if (!apps.length) return null;

    return (
        <section className="px-4">
            <div className="mx-auto max-w-xl space-y-3">
                <div>
                    <p className="text-base font-semibold text-gray-900">{title}</p>
                    {description && <p className="text-sm text-gray-500">{description}</p>}
                </div>
                <div className="space-y-2">
                    {apps.map((app) => (
                        <AppCard
                            key={app.title}
                            title={app.title.replace(/\s*\([^)]*\)\s*/g, "")}
                            developer={app.technologies[0] || "Yuda Fahrudin"}
                            description={app.description}
                            category={prettifyTag(app.tags?.[0])}
                            image={app.image}
                            onClick={() => onAppClick(app)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
