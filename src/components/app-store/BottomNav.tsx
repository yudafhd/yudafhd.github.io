"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, User, LifeBuoy } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Today",
      href: "/",
      icon: Compass,
    },
    {
      label: "Account",
      href: "/profile",
      icon: User,
    },
    {
      label: "Support",
      href: "/contact",
      icon: LifeBuoy,
    },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 pt-1 pointer-events-none">
      <div className="ios-glass pointer-events-auto mx-auto flex max-w-md items-center justify-around rounded-full border border-[#e5e5ea]/80 px-6 py-2.5 shadow-lg shadow-black/5 backdrop-blur-xl">
        {navItems.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="ios-active flex flex-col items-center gap-0.5 px-3 py-1"
            >
              <Icon
                className={`h-5 w-5 transition-colors ${
                  active ? "text-[#007aff]" : "text-[#8e8e93]"
                }`}
                strokeWidth={active ? 2.5 : 1.8}
              />
              <span
                className={`text-[10px] font-bold tracking-tight transition-colors ${
                  active ? "text-[#007aff]" : "text-[#8e8e93]"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
