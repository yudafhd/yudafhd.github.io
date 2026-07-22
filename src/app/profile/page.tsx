"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, CheckCircle2, ShieldCheck, Award } from "lucide-react";
import Header from "@/components/app-store/Header";
import BottomNav from "@/components/app-store/BottomNav";

const skillGroups = [
  {
    title: "Frontend Engineering",
    items: ["React", "Next.js", "TypeScript", "Ant Design", "Tailwind CSS", "Design Systems", "Performance Tuning"],
  },
  {
    title: "Backend & Data Infrastructure",
    items: ["Node.js", "Express", "PostgreSQL", "REST", "GraphQL", "Supabase", "Firebase"],
  },
  {
    title: "Cloud & DevOps Delivery",
    items: ["GCP", "Vercel", "Docker", "Git", "GitHub Actions"],
  },
  {
    title: "Quality & System Design",
    items: ["Code Reviews", "Unit Testing (Jest)", "UI/UX Collaboration", "Clean Code Architecture"],
  },
];

const industries = ["Healthcare", "Insurance", "E-commerce", "SaaS"];

const education = {
  school: "Politeknik Elektronika Negeri Surabaya (PENS)",
  degree: "Bachelor's degree, Information Technology",
  period: "May 2016 — Oct 2020",
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#f2f2f7] pb-28 font-sans text-[#1c1c1e]">
      <Header title="Account" subtitle="DEVELOPER PROFILE" />

      <main className="mx-auto max-w-4xl px-5 space-y-6">
        {/* Developer Bio Card */}
        <section className="ios-card overflow-hidden p-6 sm:p-8 space-y-6">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="ios-app-icon relative h-20 w-20 flex-shrink-0 bg-white">
                <Image
                  src="/photo-profile.jpeg"
                  alt="Yuda Fahrudin"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div className="space-y-0.5">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#007aff]/10 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-[#007aff]">
                  <ShieldCheck className="h-3 w-3" />
                  VERIFIED DEVELOPER
                </span>
                <h2 className="text-2xl font-extrabold tracking-tight text-[#1c1c1e]">
                  Yuda Fahrudin
                </h2>
                <p className="text-xs font-semibold text-[#8e8e93]">
                  Software Engineer • Jakarta, Indonesia
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="ios-active w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 py-2.5 text-xs font-extrabold text-white shadow-md transition-colors hover:bg-[#0062cc]"
            >
              <Mail className="h-4 w-4" />
              Contact Developer
            </Link>
          </div>

          <div className="border-t border-[#e5e5ea]/80 pt-5 space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#8e8e93]">
              ABOUT THE DEVELOPER
            </h3>
            <p className="text-sm leading-relaxed text-[#3a3a3c]">
              Software Engineer with extensive experience across healthcare, insurance, and e-commerce domains.
              Specialized in building scalable frontends, high-performance web extensions, and full-stack cloud features.
              Passionate about design systems, UI/UX aesthetics, and delivering production-grade user experiences.
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#8e8e93]">
              INDUSTRY EXPERIENCE
            </p>
            <div className="flex flex-wrap gap-2">
              {industries.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#f2f2f7] px-3.5 py-1 text-xs font-semibold text-[#1c1c1e] ring-1 ring-[#e5e5ea]"
                >
                  <CheckCircle2 className="h-3 w-3 text-[#007aff]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Capabilities / Skills Section */}
        <section className="ios-card p-6 sm:p-8 space-y-6">
          <div className="border-b border-[#e5e5ea]/80 pb-3">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#8e8e93]">
              TECHNICAL STACK & CAPABILITIES
            </p>
            <h2 className="text-xl font-extrabold tracking-tight text-[#1c1c1e]">
              Supported Frameworks & Tooling
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="space-y-2.5">
                <h3 className="text-xs font-extrabold text-[#1c1c1e]">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-[#f2f2f7] px-3 py-1 text-xs font-semibold text-[#007aff] ring-1 ring-[#e5e5ea]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Qualifications Section */}
        <section className="ios-card p-6 sm:p-8 space-y-4">
          <div className="border-b border-[#e5e5ea]/80 pb-3">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#8e8e93]">
              QUALIFICATIONS & DEGREES
            </p>
            <h2 className="text-xl font-extrabold tracking-tight text-[#1c1c1e]">
              Education
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-1">
            <div className="flex items-start gap-3">
              <Award className="h-5 w-5 text-[#007aff] mt-0.5 flex-shrink-0" />
              <div className="space-y-0.5">
                <h3 className="text-sm font-extrabold text-[#1c1c1e]">
                  {education.degree}
                </h3>
                <p className="text-xs font-medium text-[#8e8e93]">
                  {education.school}
                </p>
              </div>
            </div>
            <span className="rounded-full bg-[#f2f2f7] px-3 py-1 text-xs font-semibold text-[#8e8e93] self-start sm:self-center">
              {education.period}
            </span>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
