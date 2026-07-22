"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderProps = {
  title?: string;
  subtitle?: string;
};

export default function Header({ title, subtitle }: HeaderProps) {
  const pathname = usePathname();
  
  // Format current date in iOS style e.g., "WEDNESDAY, 22 JULY"
  const dateObj = new Date();
  const formattedDate = dateObj
    .toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
    })
    .toUpperCase();

  const getPageTitle = () => {
    if (title) return title;
    if (pathname === "/") return "Today";
    if (pathname === "/profile") return "Account";
    if (pathname === "/contact") return "Support";
    return "App Store";
  };

  return (
    <header className="mx-auto max-w-4xl px-5 pt-8 pb-4">
      <div className="flex items-center justify-between border-b border-[#e5e5ea]/60 pb-5">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#8e8e93]">
            {subtitle || formattedDate}
          </p>
          <h1 className="mt-0.5 text-3xl font-extrabold tracking-tight text-[#1c1c1e] sm:text-4xl">
            {getPageTitle()}
          </h1>
        </div>

        <Link
          href="/profile"
          className="ios-active group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full ring-2 ring-white shadow-sm"
          title="Developer Profile"
        >
          <Image
            src="/photo-profile.jpeg"
            alt="Yuda Fahrudin"
            fill
            sizes="40px"
            className="object-cover transition-transform group-hover:scale-105"
          />
        </Link>
      </div>
    </header>
  );
}
