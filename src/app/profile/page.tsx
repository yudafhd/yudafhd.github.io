"use client";

import BottomNav from "@/components/play-store/BottomNav";
import Header from "@/components/play-store/Header";

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Ant Design", "Tailwind CSS", "Design systems", "Performance tuning"],
  },
  {
    title: "Backend & Data",
    items: ["Node.js", "Express", "PostgreSQL", "REST", "GraphQL", "Supabase", "Firebase"],
  },
  {
    title: "Cloud & Delivery",
    items: ["GCP", "Vercel", "Docker", "Git", "GitHub Actions"],
  },
  {
    title: "Quality & Collaboration",
    items: ["Code reviews", "Unit testing (Jest)", "UI/UX collaboration", "Clean code practices"],
  },
];

const industries = ["Healthcare", "Insurance", "E-commerce"];
const education = {
  school: "Politeknik Elektronika Negeri Surabaya (PENS)",
  degree: "Bachelor's degree, Information Technology",
  period: "May 2016 — Oct 2020",
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] pb-28 font-sans text-[#111827]">
      <Header />

      <main className="px-4">
        <section className="mx-auto w-full max-w-xl space-y-6 py-6">
          <article className="rounded-[28px] border border-[#e6ebf3] bg-white p-6 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.45)]">
            <header className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#007aff]">Profile</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#111827]">Yuda Fahrudin</h1>
                <p className="mt-1 text-sm text-[#6b7280]">Software Engineer — Jakarta, Indonesia</p>
              </div>
            </header>
            <p className="mt-4 text-sm leading-relaxed text-[#4b5563]">
              Software Engineer with strong experience across healthcare, insurance, and e-commerce. Specialized in
              building scalable frontends and full-stack features with React, Next.js, and Node.js; adept at design
              systems, performance optimization, and clean code practices. Comfortable collaborating cross-functionally,
              running code reviews, and delivering production-grade UI/UX.
            </p>
            <div className="mt-4 space-y-2 text-sm text-[#4b5563]">
              <p className="font-semibold text-[#111827]">Industry focus:</p>
              <div className="flex flex-wrap gap-2">
                {industries.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#dbe3f0] bg-[#f7fbff] px-3 py-1 text-xs font-semibold text-[#1f2937]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <article className="rounded-[28px] border border-[#e6ebf3] bg-white p-6 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.45)]">
            <header className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#007aff]">Skills</p>
              <h2 className="text-xl font-bold tracking-tight text-[#111827]">What I use</h2>
              <p className="mt-1 text-sm text-[#6b7280]">Tooling for building, shipping, and measuring web products.</p>
            </header>
            <div className="space-y-4">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-sm font-semibold text-[#111827]">{group.title}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#dbe3f0] bg-[#f7fbff] px-3 py-1 text-xs font-semibold text-[#1f2937]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[28px] border border-[#e6ebf3] bg-white p-6 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.45)]">
            <header className="mb-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#007aff]">Education</p>
              <h2 className="text-xl font-bold tracking-tight text-[#111827]">Background</h2>
            </header>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-[#111827]">{education.degree}</p>
                <p className="text-sm text-[#6b7280]">{education.school}</p>
              </div>
              <span className="text-xs font-semibold text-[#8e8e93]">{education.period}</span>
            </div>
          </article>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
