import Image from 'next/image';
import Link from 'next/link';
import { ProjectExplorer } from '@/components/project-explorer';
import { projects } from '@/data/projects';

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <header role="banner" className="bg-friend text-white shadow">
        <div className="w-full">
          <div className="mx-auto max-w-[980px] px-4">
            <div className="flex items-center justify-between py-2 sm:py-3">
              <Link href="/" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
                <Image
                  src="/favicon-32x32.png"
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 rounded-sm ring-2 ring-white/40"
                />
                <span className="text-sm uppercase tracking-wider font-semibold">Yuda Fahrudin</span>
              </Link>
              <nav aria-label="Primary">
                <ul className="flex items-center gap-3 md:gap-4 text-[12px] md:text-[13px] uppercase tracking-wider overflow-x-auto whitespace-nowrap no-scrollbar">
                  <li>
                    <Link
                      href="/resume"
                      className="border-b-2 border-transparent hover:border-white/80 px-1 py-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      Resume
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main id="main" role="main" className="mx-auto max-w-[980px] px-4 py-6">
        <div className="flex flex-col gap-4 lg:flex-row">
          <aside className="w-full lg:w-56 shrink-0 space-y-4">
            <section
              aria-label="Profile"
              className="bg-white border border-friend-border rounded shadow-bevel p-2 sm:p-3 space-y-2"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/photo-profile.jpeg"
                  alt="Profile photo of Yuda Fahrudin"
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full ring-2 ring-white shadow"
                  priority
                />
                <div className="min-w-0">
                  <h1 className="font-bold text-slate-800 leading-tight">Yuda Fahrudin</h1>
                  <p className="text-[13px] text-slate-600 leading-tight truncate">Software Engineer</p>
                </div>
              </div>
            </section>

            <section
              aria-label="About"
              className="about bg-white border border-friend-border rounded shadow-bevel p-2 sm:p-3 space-y-2"
            >
              <h2 className="text-sm font-semibold text-slate-700">About</h2>
              <div className="grid grid-cols-1 gap-y-1 text-[13px] text-slate-700">
                <div className="text-slate-600">Location : Jakarta, Indonesia</div>
                <div className="text-slate-600">Email : ahmadyudafahrudin@gmail.com</div>
              </div>
            </section>
          </aside>

          <div className="flex-1 space-y-4">
            <section className="space-y-4">
              <nav aria-label="Content" className="bg-white border border-friend-border rounded shadow-bevel">
                <ul className="flex items-center gap-4 px-3 py-2 text-[12px] md:text-[13px] uppercase tracking-wider overflow-x-auto whitespace-nowrap no-scrollbar">
                  <li>
                    <a
                      href="#projects"
                      className="border-b-2 border-friend-navy text-slate-800 font-semibold px-1 py-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-friend-teal"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <span className="border-b-2 border-transparent text-slate-500 px-1 py-0.5">Albums</span>
                  </li>
                  <li>
                    <span className="border-b-2 border-transparent text-slate-500 px-1 py-0.5">Testimonials</span>
                  </li>
                  <li>
                    <span className="border-b-2 border-transparent text-slate-500 px-1 py-0.5">More</span>
                  </li>
                </ul>
              </nav>

              <ProjectExplorer projects={projects} />
            </section>
          </div>
        </div>
      </main>

      <footer className="mx-auto max-w-[980px] px-4 py-10 text-center text-xs text-slate-500">
        © {currentYear} Yuda Fahrudin
      </footer>
    </>
  );
}
