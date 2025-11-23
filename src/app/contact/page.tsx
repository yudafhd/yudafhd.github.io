"use client";

import Image from "next/image";
import BottomNav from "@/components/play-store/BottomNav";
const primaryEmail = "mailto:ahmadyudafahrudin@gmail.com?subject=Project%20Inquiry&body=Hi%20Yuda,%0A%0AHere%20is%20a%20brief%20about%20my%20project:%0A-%20Goal:%0A-%20Scope:%0A-%20Deadline:%0A-%20References:%0A%0AThanks!";

const outlineActions = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yudafahrudin", icon: LinkedinIcon },
  { label: "GitHub", href: "https://github.com/yudafhd", icon: GithubIcon },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f4f2ed] pb-24 font-sans text-gray-900">
      <main className="px-4">
        <section className="mx-auto w-full max-w-xl space-y-6 py-8">
          <header className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Get in touch</h1>
            <p className="mt-2 text-sm text-gray-600">
              Let&apos;s build something useful — fast, privacy-first, and delightful.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-5">
            <article className="rounded-2xl border border-[#e5e2da] bg-white p-6 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/photo-profile.jpeg"
                  alt="Yuda Fahrudin"
                  width={112}
                  height={112}
                  className="rounded-full border border-[#e5e2da] bg-[#f7f4eb] shadow-sm"
                  priority
                />
                <h2 className="mt-4 text-xl font-semibold text-gray-900">@yudafhd</h2>
                <p className="text-sm text-gray-500">Software Engineer</p>
                <p className="mt-4 text-sm text-gray-600">
                  Shipping web apps and visual tools. Focus on performance, UX, and edge-friendly processing.
                </p>

                <div className="mt-5 flex w-full flex-col gap-2">
                  <a
                    href={primaryEmail}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0b1b3b] px-7 py-3 text-base font-semibold text-white shadow-[0_18px_40px_-20px_rgba(11,27,59,0.55)] transition hover:bg-[#0d234e] active:translate-y-[1px]"
                  >
                    <MailIcon className="h-4 w-4" />
                    Email me
                  </a>
                  <div className="grid grid-cols-2 gap-2">
                    {outlineActions.map((action) => (
                      <a
                        key={action.label}
                        href={action.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d6d2c8] bg-white px-6 py-2.5 text-sm font-semibold text-gray-800 shadow-[0_18px_36px_-20px_rgba(14,27,46,0.25)] transition hover:bg-white/90 active:translate-y-[1px]"
                      >
                        <action.icon className="h-4 w-4" />
                        {action.label}
                      </a>
                    ))}
                  </div>
                  <p className="mt-1 text-center text-xs text-gray-500">Prefer DM? Ping me on Linkedin.</p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7.5 12 13l9-5.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8" cy="8" r="1.6" />
      <path d="M6.6 18v-7H9v7" />
      <path d="M12 18v-4.5a2.5 2.5 0 0 1 5 0V18" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.6.5.1.6-.2.6-.5v-1.8c-2.8.7-3.3-1.4-3.3-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.7.1-.7.1-.7 1 .1 1.5 1.1 1.5 1.1.9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.2-4.6-5.1 0-1.2.4-2.1 1-2.8-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.8 1.1 1.6-.4 3.3-.4 4.9 0 1.9-1.4 2.8-1.1 2.8-1.1.5 1.4.2 2.4.1 2.7.7.7 1.1 1.6 1.1 2.8 0 4-2.4 4.9-4.7 5.2.4.3.7 1 .7 1.9v2.9c0 .3.2.6.7.5 4-1.3 6.9-5 6.9-9.6C22 6.6 17.5 2 12 2Z" />
    </svg>
  );
}
