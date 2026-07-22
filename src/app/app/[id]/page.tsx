import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import BottomNav from "@/components/app-store/BottomNav";
import AppCardRow from "@/components/app-store/AppCardRow";
import ShareButton from "@/components/app-store/ShareButton";
import { projects } from "@/data/projects";
import AppDetailContent from "./AppDetailContent";

export function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id,
  }));
}

export default async function AppDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const otherProjects = projects.filter((p) => p.id !== project.id);

  return (
    <div className="min-h-screen bg-[#f2f2f7] pb-28 font-sans text-[#1c1c1e]">
      {/* Top iOS Sticky Bar */}
      <header className="sticky top-0 z-30 border-b border-[#e5e5ea]/80 bg-white/80 px-5 py-3.5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <Link
            href="/"
            className="ios-active flex items-center gap-1 text-sm font-bold text-[#007aff]"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Today</span>
          </Link>
          <span className="text-xs font-bold uppercase tracking-wider text-[#8e8e93]">
            {project.category}
          </span>
          <ShareButton title={project.title} text={project.subtitle} />
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-5 space-y-8 pt-6">
        <AppDetailContent project={project} />

        {/* Other Recommended Apps */}
        {otherProjects.length > 0 && (
          <section className="space-y-4 pt-4 border-t border-[#e5e5ea]/80">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-extrabold tracking-tight text-[#1c1c1e]">
                More Apps by Yuda
              </h2>
              <Link href="/" className="text-xs font-semibold text-[#007aff]">
                See All
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {otherProjects.slice(0, 4).map((other) => (
                <AppCardRow key={other.id} project={other} />
              ))}
            </div>
          </section>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
