"use client";

import { ComponentType, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type IconProps = { className?: string };
const HomeIcon = ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="m4 10.5 8-6 8 6V20a1 1 0 0 1-1 1h-4.5a.5.5 0 0 1-.5-.5v-4.5H10V20a.5.5 0 0 1-.5.5H5a1 1 0 0 1-1-1z" />
    </svg>
);

const HomeIconFilled = ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12.46 2.88a1 1 0 0 0-.92 0L3.7 7.43A1.5 1.5 0 0 0 3 8.74V20a1 1 0 0 0 1 1h5.6a.4.4 0 0 0 .4-.4v-4.2a1 1 0 0 1 1-1h1.99a1 1 0 0 1 1 1v4.2a.4.4 0 0 0 .4.4H20a1 1 0 0 0 1-1V8.74a1.5 1.5 0 0 0-.7-1.31z" />
    </svg>
);

const ContactIcon = ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M8 9h8M8 12h5M8 15h3" />
    </svg>
);

const ContactIconFilled = ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M6 4h12a2 2 0 0 1 2 2v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2Zm2 5.25c0 .41.34.75.75.75h6.5a.75.75 0 0 0 0-1.5h-6.5A.75.75 0 0 0 8 9.25Zm0 3c0 .41.34.75.75.75h4.5a.75.75 0 0 0 0-1.5h-4.5A.75.75 0 0 0 8 12.25Zm0 3c0 .41.34.75.75.75h3.5a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75Z" />
    </svg>
);

const ProfileIcon = ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="9" r="3.25" />
        <path d="M6.5 19c0-2.5 2.5-4 5.5-4s5.5 1.5 5.5 4" />
    </svg>
);

const ProfileIconFilled = ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM7.25 18c0-1.93 2.45-3 4.75-3s4.75 1.07 4.75 3v.75c0 .96-.79 1.75-1.75 1.75h-6c-.96 0-1.75-.79-1.75-1.75z" />
    </svg>
);

type NavItem = "Home" | "Contact" | "Profile";
type IconComponent = ComponentType<{ className?: string }>;

const navItems: { id: NavItem; label: string; icon: IconComponent; activeIcon: IconComponent; href?: string }[] = [
    { id: "Home", label: "Home", icon: HomeIcon, activeIcon: HomeIconFilled, href: "/" },
    { id: "Contact", label: "Contact", icon: ContactIcon, activeIcon: ContactIconFilled, href: "/contact" },
    { id: "Profile", label: "Profile", icon: ProfileIcon, activeIcon: ProfileIconFilled, href: "/profile" },
];

export default function BottomNav() {
    const pathname = usePathname();
    const router = useRouter();
    const [manualActive, setManualActive] = useState<NavItem | null>(null);

    const isActive = (itemId: NavItem, href?: string) => {
        if (href) return pathname === href;
        return manualActive === itemId;
    };

    const handleClick = (id: NavItem, href?: string) => {
        if (href) {
            router.push(href);
        } else {
            setManualActive(id);
        }
    };

    return (
        <nav className="fixed inset-x-0 bottom-0 z-40 py-2 pb-0">
            <div className="mx-auto flex max-w-xl border border-[#e5e2da] bg-[#fcfcfb] items-center justify-between p-2 px-10">
                {navItems.map((item) => {
                    const active = isActive(item.id, item.href);
                    const Icon = active ? item.activeIcon : item.icon;
                    return (
                        <button
                            key={item.id}
                            onClick={() => handleClick(item.id, item.href)}
                            className={`flex flex-col items-center gap-1 text-xs font-semibold ${active ? "text-emerald-600" : "text-gray-500"
                                }`}
                        >
                            <Icon className={`h-6 w-6 ${active ? "text-emerald-600" : "text-gray-500"}`} />
                            <span>{item.label}</span>
                        </button>
                    );
                })}
            </div>
            <div className="pb-safe" />
        </nav>
    );
}
