export type Project = {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  date?: string;
  tags?: string[];
};

export const projects: Project[] = [
    {
    title: "Resume Drive (CV Maker)",
    description:
      "A web app for creating, saving, and printing JSON-based resumes. Integrated with Google Drive and Picker API for seamless data sync.",
    technologies: [
      "Next.js",
      "React",
      "Google Drive API",
      "Tailwind CSS",
    ],
    liveUrl: "https://resumedrive.yudafhd.com",
    repoUrl: "https://github.com/yudafhd/resume-drive",
    image:
      "https://resumedrive.vercel.app/favicon.ico?favicon.9727083f.ico",
    date: "2025-10-25",
    tags: ["resume-builder", "productivity"],
  },
  {
    title: "Volaroid (Filter & Template Instagram)",
    description:
      "A web-based photo editor featuring Polaroid-style frames, filters, and templates. Designed with a cosmic and pastel iOS-like aesthetic.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    liveUrl: "https://volaroid.com",
    repoUrl: "https://github.com/yudafhd/volaroid",
    image:
      "https://www.volaroid.com/_next/image?url=%2Fassets%2Flogo-ig.jpg&w=256&q=75",
    date: "2024-08-01",
    tags: ["photo-editor"],
  },
   {
    title: "SIApps Mobile (Community App)",
    description:
      "SiApps GP Ansor is a digital application system developed to support administration, organizational management, and public services of Gerakan Pemuda Ansor. It was created to modernize the organization’s system and improve efficiency, transparency, and accessibility in managing member data, activities, as well as social and religious services across Indonesia.",
    technologies: ["Android", "Mobile App"],
    image:
      "https://play-lh.googleusercontent.com/ToU_CUvU7qmQC1RS25Ym7HnuFAwOGOkdjwnGY7x2OBqqraAlBsX-zpOuPatT0uxkcu8=w480-h960-rw",
    date: "2024-05-01",
    tags: ["react-native", "android"],
  },
  {
    title: "Bookmark Saga (Chrome Extension Bookmark) ",
    description:
      "A Chrome extension that organizes your browsing history and bookmarks directly from the New Tab page. Includes multiple visual themes like macOS and Linux.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Chrome Storage API",
    ],
    liveUrl:
      "https://chromewebstore.google.com/detail/bookmark-saga/pbanibhcpbmjfnhabfimkgbhcbcenlln",
    repoUrl: "https://github.com/yudafhd/bookmark-saga",
    image:
      "https://lh3.googleusercontent.com/lfaBhTmBd8TqK532osSWd_k2ik_zHvZQB6KgHsGA2kSVbl5N638wLbdb1Gqrgih-OZ0FR8ZyKJFdIbDeydex1Xmdwg=s120",
    date: "2024-10-01",
    tags: ["extension", "productivity"],
  },
  {
    title: "Katahari (Chrome Extension Quotes) ",
    description:
      "A minimalist Chrome extension that displays daily inspirational quotes. Built with a soft sky-themed interface and backed by a curated JSON quote collection.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Chrome Extension API",
    ],
    liveUrl: "https://chromewebstore.google.com/detail/katahari-quotes/gokhaldpmdmhahnljcjaoakkibhhkjmg",
    repoUrl: "https://github.com/yudafhd/katahari",
    image:
      "https://lh3.googleusercontent.com/M3MrEKTBJvh3j7ozYIn4XSyxt3SBISctMdAYh45WI4TDU03aRZlO_xpT7hHda70MTVCAJJoKRwHhmxLLKYQEiy8agnI=s120",
    date: "2024-05-06",
    tags: ["extension", "quotes"],
  },
 
  {
    title: "Gears Cloud (Online Tools)",
    description:
      "An all-in-one online toolkit offering converters, formatters, and calculators. Modular and system-driven UI built for accessibility and speed.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://gearscloud.com",
    repoUrl: "https://github.com/yudafhd/gears-cloud",
    image:
      "https://www.gearscloud.com/favicon.ico?favicon.bfa6e438.ico",
    date: "2024-03-15",
    tags: ["productivity"],
  },
];
