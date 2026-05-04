"use client";

import Header from "@/components/play-store/Header";
import BottomNav from "@/components/play-store/BottomNav";
import AppCard from "@/components/play-store/AppCard";
import { projects, Project } from "@/data/projects";

export default function Page() {
  const handleAppClick = (app: Project) => {
    if (app.liveUrl) {
      window.open(app.liveUrl, "_blank");
    } else if (app.repoUrl) {
      window.open(app.repoUrl, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f6fa] pb-28 font-sans text-[#111827]">
      <Header />

      <main className="space-y-8 pt-3">
        <section className="px-4">
          <div className="mx-auto max-w-xl space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#007aff]">
                Featured Projects
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-[#111827]">
                Built like polished apps.
              </h1>
              <p className="mt-2 max-w-lg text-sm leading-6 text-[#6b7280]">
                A curated list of products, experiments, and tools presented with an App Store-inspired layout.
              </p>
            </div>

            <div className="space-y-3">
              {projects.map((app) => (
                <AppCard
                  key={app.title}
                  title={app.title.replace(/\s*\([^)]*\)\s*/g, "")}
                  developer={app.technologies[0] || "Yuda Fahrudin"}
                  description={app.description}
                  category={app.tags?.[0]?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                  image={app.image}
                  onClick={() => handleAppClick(app)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
