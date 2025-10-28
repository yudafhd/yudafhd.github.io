import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const skills = [
  'React.js',
  'React Native',
  'Next.js',
  'Node.js',
  'Supabase',
  'JavaScript',
  'PHP (Filament)',
  'Git',
  'GitLab',
  'Jira',
  'Figma',
  'VS Code',
];

type Experience = {
  title: string;
  timeframe: string;
  bullets: string[];
};

const experiences: Experience[] = [
  {
    title: 'Software Engineer Fullstack — PT Pertamina Bina Medika',
    timeframe: 'Feb 2024 – Now',
    bullets: [
      'Developing an EMR for SIMRS (Initial Inpatient Assessment, CPPT, etc.)',
      'Developing a back-office for Bali International Hospital',
      'Developing a SatuSehat verification module',
      'Developing a Design System using Ant Design (ANTD)',
      'Optimizing performance and improving the system using Next.js',
      'Conducting code reviews, ensuring clean code and identifying code smells',
      'R&D and Collaboration to Achieve the Best UI/UX Design',
    ],
  },
  {
    title: 'Associate Software Engineer — REY.id',
    timeframe: 'Jan 2023 – Dec 2023',
    bullets: [
      'Initialized the Business Dashboard.',
      'Contributed to the design system and UI component development.',
      'Optimized the payment page for improved usability.',
      'Enhanced web and mobile responsiveness of the main user page.',
      'Responsible for frontend development using ReactJS.',
      'Built and maintained reusable UI components.',
      'Performed code reviews to ensure clean code and identify code smells.',
      'Implemented unit testing with JEST.',
    ],
  },
  {
    title: 'Associate Software Engineer — SIRCLO',
    timeframe: 'Aug 2021 – Jan 2023',
    bullets: [
      'Developed shipping address page logic and interface.',
      'Optimized shipping pages for better performance.',
      'Optimized the logic and flow for PrivyID.',
      'Built and maintained reusable UI components.',
      'Performed code reviews, ensuring clean code and addressing code smells.',
      'Implemented unit tests using JEST.',
      'Developed API Gateway using Apollo GraphQL.',
    ],
  },
  {
    title: 'Frontend Developer — WAVE Consulting',
    timeframe: 'Jul 2019 – Aug 2021',
    bullets: [
      'Created an accounting product using Angular 11.',
      'Developed mobile features using React Native.',
    ],
  },
  {
    title: 'Full Stack Developer — TWISCODE',
    timeframe: 'Nov 2018 – Jul 2019',
    bullets: ['Developed projects using ReactJS and Node.js.'],
  },
  {
    title: 'React Native Developer — HUBBLE.build',
    timeframe: 'Nov 2017 – Oct 2018',
    bullets: [
      'Fixed bugs in the React Native mobile app.',
      'Supported and maintained several APIs using Ruby on Rails (Rails).',
    ],
  },
];

type PersonalProject = {
  name: string;
  ctaLabel: string;
  href: string;
  description: string;
};

const personalProjects: PersonalProject[] = [
  {
    name: 'Volaroid.com — Next.js + AI',
    ctaLabel: 'Live',
    href: 'https://volaroid.com',
    description: 'Free photo filters online.',
  },
  {
    name: 'SIApps Mobile — React Native',
    ctaLabel: 'Play Store',
    href: 'https://play.google.com/com.si_tech.siapps',
    description: 'Community apps of Banser Jakarta, built using Express and React Native.',
  },
  {
    name: 'Bookmark Saga: Chrome Extension — JavaScript',
    ctaLabel: 'Chrome Web Store',
    href: 'https://chromewebstore.google.com/Bookmark-Saga',
    description: 'New Tab showcasing your latest browsing history.',
  },
];

export const metadata: Metadata = {
  title: 'Resume — Yuda Fahrudin',
  description: 'Resume of Yuda Fahrudin (@yudafhd).',
};

export default function ResumePage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <header role="banner" className="bg-friend text-white shadow print:hidden">
        <div className="w-full">
          <div className="mx-auto max-w-[980px] px-4">
            <div className="flex items-center justify-between py-2 sm:py-3">
              <Link href="/" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
                <span className="sr-only">Back to home</span>
                <span aria-hidden className="flex items-center gap-3">
                  <Image
                    src="/favicon-32x32.png"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-sm ring-2 ring-white/40"
                  />
                  <span className="text-sm uppercase tracking-wider font-semibold text-white">Yuda Fahrudin</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main role="main" className="mx-auto max-w-[980px] px-4 py-6 print:px-0 print:py-0">
        <section className="bg-white border border-friend-border rounded shadow-bevel p-3">
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div className="min-w-0">
              <h1 className="text-lg font-semibold text-slate-800 leading-tight">Yuda Fahrudin</h1>
              <p className="text-sm text-slate-700 leading-tight">Software Engineer</p>
            </div>
            <div className="no-print flex items-center gap-2">
              <a
                href="/Yuda_Resume_Oktober_2025.pdf"
                download
                className="text-[13px] px-2 py-1 rounded-full border border-slate-300 bg-white hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-friend-teal"
              >
                Download PDF
              </a>
            </div>
          </div>
          <div className="mt-2 text-sm text-slate-700 space-y-1">
            <p>
              Gandaria Utara, Kec. Kby. Baru, Kota Jakarta Selatan, DKI Jakarta 12140 ·{' '}
              <a className="no-underline text-friend-navy" href="tel:+6285708880099">
                +62 857-0888-0099
              </a>{' '}
              ·{' '}
              <a className="no-underline text-friend-navy" href="mailto:ahmadyudafahrudin@gmail.com">
                ahmadyudafahrudin@gmail.com
              </a>{' '}
              ·{' '}
              <a className="no-underline text-friend-navy" target="_blank" rel="noopener noreferrer" href="https://github.com/yudafhd">
                github.com/yudafhd
              </a>{' '}
              ·{' '}
              <a className="no-underline text-friend-navy" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/yudafahrudin">
                linkedin.com/in/yudafahrudin
              </a>
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          <aside className="space-y-4">
            <div className="bg-white border border-friend-border rounded shadow-bevel p-3 space-y-2">
              <h2 className="text-sm font-semibold text-slate-700">Skills &amp; Tools</h2>
              <ul className="flex flex-wrap gap-2 text-xs">
                {skills.map((skill) => (
                  <li key={skill} className="px-3 py-1 rounded-full border border-friend-border bg-slate-50 shadow-bevel">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-friend-border rounded shadow-bevel p-3 space-y-2">
              <h2 className="text-sm font-semibold text-slate-700">Education</h2>
              <p className="text-sm text-slate-800 font-semibold">Politeknik Elektronika Negeri Surabaya</p>
              <p className="text-xs text-slate-700">Bachelor&apos;s degree, Information Technology (2016 – 2020)</p>
            </div>
          </aside>

          <section className="lg:col-span-2 space-y-4">
            <div className="bg-white border border-friend-border rounded shadow-bevel p-3">
              <h2 className="text-sm font-semibold text-slate-700">Professional Summary</h2>
              <p className="mt-2 text-sm text-slate-700">
                Software Engineer with strong experience across healthcare, insurance, and e-commerce. Specialized in building scalable frontends and
                full-stack features with React, Next.js, and Node.js; adept at design systems, performance optimization, and clean code practices.
                Experienced collaborating cross-functionally, conducting code reviews, and delivering production-grade UI/UX.
              </p>
            </div>

            <div className="bg-white border border-friend-border rounded shadow-bevel p-3">
              <h2 className="text-sm font-semibold text-slate-700">Work Experience</h2>
              {experiences.map((experience) => (
                <article key={experience.title} className="mt-2">
                  <header className="flex items-baseline justify-between gap-3 flex-wrap">
                    <h3 className="font-semibold text-friend-navy">{experience.title}</h3>
                    <span className="text-xs text-slate-600">{experience.timeframe}</span>
                  </header>
                  <ul className="list-disc pl-5 mt-1 text-sm text-slate-700 space-y-1">
                    {experience.bullets.map((bullet, index) => (
                      <li key={`${experience.title}-${index}`}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="bg-white border border-friend-border rounded shadow-bevel p-3">
              <h2 className="text-sm font-semibold text-slate-700">Projects</h2>
              <div className="mt-2 space-y-3 text-sm text-slate-700">
                {personalProjects.map((project) => (
                  <div key={project.name}>
                    <div className="flex items-baseline justify-between gap-3 flex-wrap">
                      <h3 className="font-semibold text-friend-navy">{project.name}</h3>
                      <a
                        className="text-[13px] no-underline px-2 py-1 rounded-full border border-slate-300 bg-white hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-friend-teal"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.href}
                      >
                        {project.ctaLabel}
                      </a>
                    </div>
                    <p className="mt-1">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
      </main>

      <footer className="mx-auto max-w-[980px] px-4 py-10 text-center text-xs text-slate-500">
        © {currentYear} Yuda Fahrudin
      </footer>
    </>
  );
}
