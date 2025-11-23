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
    <div className="min-h-screen bg-[#f4f2ed] pb-24 font-sans text-gray-900">
      <Header />

      <main className="space-y-6 pt-5">
        <section className="px-4">
          <div className="mx-auto max-w-xl space-y-3">
            <div className="space-y-2">
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
