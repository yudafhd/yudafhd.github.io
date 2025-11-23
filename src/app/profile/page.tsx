"use client";

import BottomNav from "@/components/play-store/BottomNav";
import Header from "@/components/play-store/Header";

type Experience = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

const experiences: Experience[] = [
  {
    role: "Software Engineer (Fullstack)",
    company: "PT Pertamina Bina Medika",
    period: "Jan 2024 — Present",
    highlights: [
      "Develop EMR modules for SIMRS (Initial Inpatient Assessment, CPPT, etc.).",
      "Ship back-office features for Bali International Hospital and SatuSehat verification.",
      "Build design system with Ant Design; optimize performance with Next.js.",
      "Lead code reviews to keep code clean and UX consistent across squads.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "REY.id",
    period: "Dec 2022 — Nov 2023",
    highlights: [
      "Initialized the Business Dashboard and contributed to the design system.",
      "Optimized payment flows and main user page responsiveness (web + mobile).",
      "Owned reusable UI components and code reviews; added Jest unit tests.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "SIRCLO",
    period: "Jul 2021 — Dec 2022",
    highlights: [
      "Optimized shipping address flow and PrivyID logic for performance and clarity.",
      "Maintained reusable UI components; enforced clean code via reviews.",
      "Built API Gateway integrations with Apollo GraphQL; added Jest coverage.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "WAVE Consulting",
    period: "Jun 2019 — Jul 2021",
    highlights: [
      "Built accounting product in Angular 11 and shipped mobile features in React Native.",
      "Collaborated with product to align UX and delivery timelines.",
    ],
  },
  {
    role: "Full Stack / React Native Developer",
    company: "TWISCODE & HUBBLE.build",
    period: "Oct 2017 — Jun 2019",
    highlights: [
      "Delivered ReactJS + Node.js projects and maintained Rails APIs.",
      "Fixed and shipped React Native features for mobile clients.",
    ],
  },
];

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
    <div className="min-h-screen bg-[#f4f2ed] pb-24 font-sans text-gray-900">
      <Header />

      <main className="px-4">
        <section className="mx-auto w-full max-w-xl space-y-6 py-6">
          <article className="rounded-2xl border border-[#e5e2da] bg-white p-6 shadow-sm">
            <header className="flex items-start justify-between gap-3">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Yuda Fahrudin</h1>
                <p className="mt-1 text-sm text-gray-600">Software Engineer — Jakarta, Indonesia</p>
              </div>
            </header>
            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              Software Engineer with strong experience across healthcare, insurance, and e-commerce. Specialized in
              building scalable frontends and full-stack features with React, Next.js, and Node.js; adept at design
              systems, performance optimization, and clean code practices. Comfortable collaborating cross-functionally,
              running code reviews, and delivering production-grade UI/UX.
            </p>
            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <p className="font-semibold text-gray-900">Industry focus:</p>
              <div className="flex flex-wrap gap-2">
                {industries.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#e5e2da] bg-[#f9f7f1] px-3 py-1 text-xs font-semibold text-gray-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-[#e5e2da] bg-white p-6 shadow-sm">
            <header className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Experience</p>
                <h2 className="text-xl font-bold text-gray-900">Working history</h2>
              </div>
            </header>
            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={`${exp.company}-${exp.role}`} className="rounded-xl border border-[#eeeae0] bg-[#fdfcf9] p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{exp.role}</p>
                      <p className="text-sm text-gray-600">{exp.company}</p>
                    </div>
                    <span className="text-xs font-semibold text-gray-500">{exp.period}</span>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    {exp.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-[#e5e2da] bg-white p-6 shadow-sm">
            <header className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Skills</p>
              <h2 className="text-xl font-bold text-gray-900">What I use</h2>
              <p className="mt-1 text-sm text-gray-600">Tooling for building, shipping, and measuring web products.</p>
            </header>
            <div className="space-y-4">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-sm font-semibold text-gray-900">{group.title}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#e5e2da] bg-[#f9f7f1] px-3 py-1 text-xs font-semibold text-gray-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-[#e5e2da] bg-white p-6 shadow-sm">
            <header className="mb-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Education</p>
              <h2 className="text-xl font-bold text-gray-900">Background</h2>
            </header>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-gray-900">{education.degree}</p>
                <p className="text-sm text-gray-600">{education.school}</p>
              </div>
              <span className="text-xs font-semibold text-gray-500">{education.period}</span>
            </div>
          </article>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
