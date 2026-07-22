"use client";

import { useState } from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { Project } from "@/data/projects";

type AppCardRowProps = {
  project: Project;
  rank?: number;
};

export default function AppCardRow({ project, rank }: AppCardRowProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      href={`/app/${project.id}`}
      className="ios-active flex cursor-pointer items-center justify-between gap-4 rounded-2xl bg-white p-3.5 shadow-sm ring-1 ring-[#e5e5ea]/80 transition-all hover:bg-[#fafafa] hover:shadow-md"
    >
      <div className="flex items-center gap-3.5 min-w-0">
        {rank !== undefined && (
          <span className="w-5 text-center text-sm font-extrabold text-[#1c1c1e]/70">
            {rank}
          </span>
        )}

        <div className="ios-app-icon relative h-14 w-14 flex-shrink-0 bg-[#f2f2f7]">
          {project.image && !imgError ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImgError(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-lg font-bold text-[#007aff]">
              {project.title ? project.title.charAt(0) : "A"}
            </span>
          )}
        </div>

        <div className="min-w-0 flex-1 space-y-0.5">
          <h3 className="truncate text-sm font-bold text-[#1c1c1e]">
            {project.title}
          </h3>
          <p className="truncate text-xs font-normal text-[#8e8e93]">
            {project.subtitle}
          </p>

          <div className="flex items-center gap-2 pt-0.5 text-[11px]">
            <span className="flex items-center gap-1 font-semibold text-[#8e8e93]">
              <Star className="h-3 w-3 fill-[#ff9500] text-[#ff9500]" />
              {project.rating?.toFixed(1) || "4.8"}
            </span>
            <span className="text-[#c7c7cc]">|</span>
            <span className="font-medium text-[#8e8e93]">
              {project.category}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1">
        <span className="ios-active rounded-full bg-[#f2f2f7] px-5 py-1.5 text-xs font-extrabold text-[#007aff] transition-colors group-hover:bg-[#007aff] group-hover:text-white">
          GET
        </span>
        <span className="text-[9px] font-semibold text-[#8e8e93]">In-App Links</span>
      </div>
    </Link>
  );
}
