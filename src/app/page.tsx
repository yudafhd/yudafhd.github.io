"use client";

import { useState, useMemo } from "react";
import Header from "@/components/app-store/Header";
import BottomNav from "@/components/app-store/BottomNav";
import AppCardRow from "@/components/app-store/AppCardRow";
import CategoryFilter from "@/components/app-store/CategoryFilter";
import AppDetailModal from "@/components/app-store/AppDetailModal";
import { projects, Project } from "@/data/projects";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(projects.map((p) => p.category)));
    return ["All", ...cats];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#f2f2f7] pb-28 font-sans text-[#1c1c1e]">
      <Header />

      <main className="mx-auto max-w-4xl px-5 space-y-6">

        {/* Section 2: Category Filter Pills */}
        <section className="space-y-4 pt-2">

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {/* List of Applications */}
          <div className="space-y-3 pt-2">
            {filteredProjects.map((proj, idx) => (
              <AppCardRow
                key={proj.id}
                project={proj}
                rank={idx + 1}
                onSelect={(p) => setActiveProjectModal(p)}
              />
            ))}
          </div>
        </section>
      </main>

      <BottomNav />

      {/* iOS App Details Sheet Modal */}
      <AppDetailModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </div>
  );
}
