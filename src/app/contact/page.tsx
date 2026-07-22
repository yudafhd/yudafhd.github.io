"use client";

import Image from "next/image";
import { Mail, Send, MessageSquare } from "lucide-react";
import Header from "@/components/app-store/Header";
import BottomNav from "@/components/app-store/BottomNav";

const primaryEmail =
  "mailto:ahmadyudafahrudin@gmail.com?subject=Project%20Inquiry&body=Hi%20Yuda,%0A%0AHere%20is%20a%20brief%20about%20my%20project:%0A-%20Goal:%0A-%20Scope:%0A-%20Deadline:%0A-%20References:%0A%0AThanks!";

const outlineActions = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yudafahrudin", icon: LinkedinIcon },
  { label: "GitHub", href: "https://github.com/yudafhd", icon: GithubIcon },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f2f2f7] pb-28 font-sans text-[#1c1c1e]">
      <Header title="Support" subtitle="DEVELOPER CONTACT" />

      <main className="mx-auto max-w-2xl px-5 space-y-6">
        <section className="ios-card overflow-hidden p-6 sm:p-8 space-y-6 text-center sm:text-left">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div className="ios-app-icon relative h-24 w-24 flex-shrink-0 bg-white">
              <Image
                src="/photo-profile.jpeg"
                alt="Yuda Fahrudin"
                fill
                sizes="96px"
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-1">
              <span className="rounded-full bg-[#007aff]/10 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-[#007aff]">
                DEVELOPER SUPPORT
              </span>
              <h2 className="text-2xl font-extrabold tracking-tight text-[#1c1c1e]">
                Yuda Fahrudin
              </h2>
              <p className="text-xs font-semibold text-[#8e8e93]">
                Full Stack & Mobile Engineer • @yudafhd
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-[#3a3a3c]">
            Have an app idea, web project, or collaboration in mind? Feel free to reach out directly via email or social channels for quick project discussions.
          </p>

          <div className="border-t border-[#e5e5ea]/80 pt-6 space-y-3">
            <a
              href={primaryEmail}
              className="ios-active flex w-full items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 py-3 text-sm font-extrabold text-white shadow-md transition-colors hover:bg-[#0062cc]"
            >
              <Mail className="h-4 w-4" />
              Send Email Inquiry
            </a>

            <div className="grid grid-cols-2 gap-3">
              {outlineActions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="ios-active flex items-center justify-center gap-2 rounded-full bg-[#f2f2f7] px-4 py-2.5 text-xs font-bold text-[#1c1c1e] ring-1 ring-[#e5e5ea] transition-colors hover:bg-[#e5e5ea]"
                >
                  <action.icon className="h-4 w-4 text-[#007aff]" />
                  {action.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Message Form Card */}
        <section className="ios-card p-6 sm:p-8 space-y-5">
          <div className="flex items-center gap-2 border-b border-[#e5e5ea]/80 pb-3">
            <MessageSquare className="h-5 w-5 text-[#007aff]" />
            <div>
              <h3 className="text-lg font-extrabold tracking-tight text-[#1c1c1e]">
                Direct Message
              </h3>
              <p className="text-xs text-[#8e8e93]">
                Send a quick message directly to my inbox.
              </p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const msg = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
              window.location.href = `mailto:ahmadyudafahrudin@gmail.com?subject=Project%20Inquiry&body=${encodeURIComponent(msg)}`;
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#8e8e93] mb-1">
                Your Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Describe your project, timeline, or inquiry..."
                className="w-full rounded-2xl bg-[#f2f2f7] p-4 text-sm font-medium text-[#1c1c1e] outline-none ring-1 ring-[#e5e5ea] focus:ring-2 focus:ring-[#007aff]"
              />
            </div>

            <button
              type="submit"
              className="ios-active flex w-full items-center justify-center gap-2 rounded-full bg-[#007aff] px-6 py-3 text-sm font-extrabold text-white shadow-md transition-colors hover:bg-[#0062cc]"
            >
              <Send className="h-4 w-4" />
              <span>Send Message</span>
            </button>
          </form>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8" cy="8" r="1.6" />
      <path d="M6.6 18v-7H9v7" />
      <path d="M12 18v-4.5a2.5 2.5 0 0 1 5 0V18" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.6.5.1.6-.2.6-.5v-1.8c-2.8.7-3.3-1.4-3.3-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.7.1-.7.1-.7 1 .1 1.5 1.1 1.5 1.1.9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.2-4.6-5.1 0-1.2.4-2.1 1-2.8-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.8 1.1 1.6-.4 3.3-.4 4.9 0 1.9-1.4 2.8-1.1 2.8-1.1.5 1.4.2 2.4.1 2.7.7.7 1.1 1.6 1.1 2.8 0 4-2.4 4.9-4.7 5.2.4.3.7 1 .7 1.9v2.9c0 .3.2.6.7.5 4-1.3 6.9-5 6.9-9.6C22 6.6 17.5 2 12 2Z" />
    </svg>
  );
}
