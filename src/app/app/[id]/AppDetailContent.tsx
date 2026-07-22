"use client";

import { useState } from "react";
import { Star, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

export default function AppDetailContent({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="ios-card p-5 sm:p-8 space-y-6">
      {/* Main App Hero Header */}
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="ios-app-icon relative h-20 w-20 sm:h-24 sm:w-24 flex-shrink-0 bg-[#f2f2f7]">
          {project.image && !imgError ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImgError(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-2xl sm:text-3xl font-extrabold text-[#007aff]">
              {project.title ? project.title.charAt(0) : "A"}
            </span>
          )}
        </div>

        <div className="min-w-0 flex-1 space-y-1">
          <h1 className="text-xl font-extrabold tracking-tight text-[#1c1c1e] sm:text-3xl">
            {project.title}
          </h1>
          <p className="text-xs sm:text-sm font-medium text-[#8e8e93] line-clamp-2">
            {project.subtitle}
          </p>
          <p className="text-[11px] sm:text-xs text-[#8e8e93]">Developer: Yuda Fahrudin</p>

          <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ios-active inline-flex items-center gap-1.5 rounded-full bg-[#007aff] px-5 sm:px-7 py-2 sm:py-2.5 text-xs font-extrabold tracking-wide text-white shadow-md transition-colors hover:bg-[#0062cc]"
              >
                <span>GET</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ios-active inline-flex items-center gap-1.5 rounded-full bg-[#f2f2f7] px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold text-[#007aff] transition-colors hover:bg-[#e5e5ea]"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* iOS App Store Metadata Stats Strip */}
      <div className="no-scrollbar flex items-center justify-between border-y border-[#e5e5ea]/80 py-3.5 sm:py-4 text-center overflow-x-auto">
        <div className="min-w-[70px] sm:min-w-[80px] flex-1 px-2 sm:px-3 border-r border-[#e5e5ea]/80">
          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#8e8e93]">
            {project.reviewsCount || "100+"} RATINGS
          </p>
          <p className="mt-0.5 sm:mt-1 flex items-center justify-center gap-1 text-base sm:text-lg font-extrabold text-[#1c1c1e]">
            {project.rating ? project.rating.toFixed(1) : "4.8"}{" "}
            <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-[#ff9500] text-[#ff9500]" />
          </p>
        </div>

        <div className="min-w-[70px] sm:min-w-[80px] flex-1 px-2 sm:px-3 border-r border-[#e5e5ea]/80">
          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#8e8e93]">
            AGE
          </p>
          <p className="mt-0.5 sm:mt-1 text-base sm:text-lg font-extrabold text-[#1c1c1e]">
            {project.ageRating || "4+"}
          </p>
        </div>

        <div className="min-w-[70px] sm:min-w-[80px] flex-1 px-2 sm:px-3 border-r border-[#e5e5ea]/80">
          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#8e8e93]">
            CATEGORY
          </p>
          <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-extrabold text-[#1c1c1e] truncate">
            {project.category || "Utility"}
          </p>
        </div>

        <div className="min-w-[70px] sm:min-w-[80px] flex-1 px-2 sm:px-3">
          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#8e8e93]">
            DEVELOPER
          </p>
          <p className="mt-0.5 sm:mt-1 text-xs font-bold text-[#1c1c1e] truncate">
            Yuda F.
          </p>
        </div>
      </div>

      {/* Screenshots Gallery Section */}
      {Array.isArray(project.screenshots) && project.screenshots.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-sm sm:text-base font-extrabold text-[#1c1c1e]">Preview</h2>
          <div className="no-scrollbar flex gap-3 sm:gap-4 overflow-x-auto pb-2">
            {project.screenshots.map((src, idx) => (
              <div
                key={idx}
                className="relative h-44 w-72 sm:h-56 sm:w-96 flex-shrink-0 overflow-hidden rounded-2xl bg-[#f2f2f7] ring-1 ring-[#e5e5ea]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Preview screenshot ${idx + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* What's New Version Release Section */}
      {project.version && (
        <div className="rounded-2xl bg-[#f2f2f7]/80 p-4 space-y-1.5 ring-1 ring-[#e5e5ea]/60">
          <div className="flex items-center justify-between text-xs text-[#8e8e93]">
            <span className="font-bold text-[#1c1c1e]">
              What&apos;s New in Version {project.version}
            </span>
            <span>{project.date}</span>
          </div>
          <p className="text-xs leading-relaxed text-[#48484a]">
            {project.whatsNew || "General improvements and bug fixes."}
          </p>
        </div>
      )}

      {/* Description Section */}
      <div className="space-y-2">
        <h2 className="text-sm sm:text-base font-extrabold text-[#1c1c1e]">Description</h2>
        <p className="text-xs sm:text-sm leading-relaxed text-[#3a3a3c]">
          {project.fullDescription || project.description}
        </p>
      </div>

      {/* Tech Stack Metadata Section */}
      {Array.isArray(project.technologies) && project.technologies.length > 0 && (
        <div className="space-y-2.5 pt-2">
          <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#8e8e93]">
            Information & Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-[#f2f2f7] px-3 sm:px-3.5 py-1 text-xs font-semibold text-[#007aff] ring-1 ring-[#e5e5ea]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
