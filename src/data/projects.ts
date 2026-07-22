export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription?: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  screenshots?: string[];
  date?: string;
  version?: string;
  whatsNew?: string;
  rating?: number;
  reviewsCount?: string;
  ageRating?: string;
  category: "Productivity" | "AI & Content" | "Extensions" | "Mobile Apps" | "Developer Tools";
  tags?: string[];
  isFeaturedHero?: boolean;
  heroTagline?: string;
  heroCategory?: string;
  heroGradient?: string;
};

export const projects: Project[] = [
  {
    id: "resume-drive",
    title: "Resume Drive",
    subtitle: "CV Maker with Drive Integration",
    description:
      "A web app for creating, saving, and printing JSON-based resumes synced with Google Drive.",
    fullDescription:
      "Resume Drive is a streamlined resume builder designed to help job seekers quickly draft, structure, and export beautiful resumes. Powered by Google Drive & Picker API integration, all your data stays strictly in your personal cloud storage with zero third-party database tracking.",
    technologies: ["Next.js", "React", "Google Drive API", "Tailwind CSS"],
    liveUrl: "https://resumedrive.yudafhd.com",
    repoUrl: "https://github.com/yudafhd/resume-drive",
    image: "https://resumedrive.vercel.app/favicon.ico?favicon.9727083f.ico",
    screenshots: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&auto=format&fit=crop&q=80"
    ],
    date: "2025-10-25",
    version: "2.1.0",
    whatsNew: "Added Google Picker integration and instant PDF print layout optimizations.",
    rating: 4.9,
    reviewsCount: "128",
    ageRating: "4+",
    category: "Productivity",
    tags: ["resume-builder", "google-drive", "pdf-export"],
    isFeaturedHero: true,
    heroTagline: "CREATE & SYNC RESUMES EFFORTLESSLY",
    heroCategory: "PRODUCTIVITY PICK",
    heroGradient: "from-blue-600 via-indigo-600 to-purple-700"
  },
  {
    id: "volaroid",
    title: "Volaroid",
    subtitle: "AI Prompt Library for Creators",
    description:
      "A prompt-sharing platform for content creators featuring Gemini, Midjourney, and CapCut prompts.",
    fullDescription:
      "Volaroid is an expansive AI prompt library and visual workspace engineered specifically for social media creators, digital artists, and storytellers. Explore curated prompts for Gemini, Midjourney, Stable Diffusion, and CapCut style visual references.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    liveUrl: "https://volaroid.com",
    repoUrl: "https://github.com/yudafhd/volaroid",
    image: "https://www.volaroid.com/_next/static/media/icon.a1022a25.png",
    screenshots: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format&fit=crop&q=80"
    ],
    date: "2024-08-01",
    version: "1.4.2",
    whatsNew: "Introduced Gemini 1.5 Pro prompt recipes and visual tag filtering.",
    rating: 4.8,
    reviewsCount: "340",
    ageRating: "12+",
    category: "AI & Content",
    tags: ["ai-prompts", "content-creator", "gemini", "capcut"],
    isFeaturedHero: true,
    heroTagline: "UNLOCK NEXT-GEN CREATIVE PROMPTS",
    heroCategory: "CREATOR MUST-HAVE",
    heroGradient: "from-purple-600 via-pink-600 to-rose-600"
  },
  {
    id: "siapps-mobile",
    title: "SIApps Mobile",
    subtitle: "Community & Membership App",
    description:
      "Digital administration system for Gerakan Pemuda Ansor supporting member activities & public services.",
    fullDescription:
      "SIApps Mobile modernizes organizational management for Gerakan Pemuda Ansor across Indonesia. Features include digital membership cards, event check-ins, social service notifications, and real-time community feeds.",
    technologies: ["React Native", "Android", "REST API"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.si_tech.siapps&hl=id&gl=US",
    image: "https://play-lh.googleusercontent.com/ToU_CUvU7qmQC1RS25Ym7HnuFAwOGOkdjwnGY7x2OBqqraAlBsX-zpOuPatT0uxkcu8=w480-h960-rw",
    screenshots: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80"
    ],
    date: "2024-05-01",
    version: "3.0.1",
    whatsNew: "Enhanced offline caching and streamlined event attendance verification.",
    rating: 4.7,
    reviewsCount: "1.2K",
    ageRating: "4+",
    category: "Mobile Apps",
    tags: ["react-native", "android", "community"],
    isFeaturedHero: false
  },
  {
    id: "bookmark-saga",
    title: "Bookmark Saga",
    subtitle: "New Tab Manager Extension",
    description:
      "A Chrome extension organizing history and bookmarks directly from the New Tab page.",
    fullDescription:
      "Bookmark Saga replaces your standard New Tab page with an aesthetic macOS / Linux style desktop interface. Seamlessly organize nested bookmark folders, search recent history, and customize widgets.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Chrome Storage API"],
    liveUrl: "https://chromewebstore.google.com/detail/bookmark-saga/pbanibhcpbmjfnhabfimkgbhcbcenlln",
    repoUrl: "https://github.com/yudafhd/bookmark-saga",
    image: "https://lh3.googleusercontent.com/lfaBhTmBd8TqK532osSWd_k2ik_zHvZQB6KgHsGA2kSVbl5N638wLbdb1Gqrgih-OZ0FR8ZyKJFdIbDeydex1Xmdwg=s120",
    screenshots: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80"
    ],
    date: "2024-10-01",
    version: "1.2.0",
    whatsNew: "Added macOS Sequoia dark theme and instant keyword search shortcuts.",
    rating: 4.9,
    reviewsCount: "89",
    ageRating: "4+",
    category: "Extensions",
    tags: ["chrome-extension", "new-tab", "productivity"],
    isFeaturedHero: true,
    heroTagline: "TRANSFORM YOUR CHROME NEW TAB",
    heroCategory: "EDITOR'S CHOICE",
    heroGradient: "from-emerald-600 via-teal-600 to-cyan-700"
  },
  {
    id: "katahari",
    title: "Katahari",
    subtitle: "Daily Quotes Chrome Extension",
    description:
      "A minimalist Chrome extension featuring daily inspirational quotes and serene backdrops.",
    fullDescription:
      "Katahari delivers a moment of mindfulness to your browser every day. Features soft sky ambient backgrounds, curated motivational & philosophical quote collections, and lightweight local storage options.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Chrome Extension API"],
    liveUrl: "https://chromewebstore.google.com/detail/katahari-quotes/gokhaldpmdmhahnljcjaoakkibhhkjmg",
    repoUrl: "https://github.com/yudafhd/katahari",
    image: "https://lh3.googleusercontent.com/M3MrEKTBJvh3j7ozYIn4XSyxt3SBISctMdAYh45WI4TDU03aRZlO_xpT7hHda70MTVCAJJoKRwHhmxLLKYQEiy8agnI=s120",
    screenshots: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop&q=80"
    ],
    date: "2024-05-06",
    version: "1.0.5",
    whatsNew: "Added quote sharing cards and bilingual quote toggles (ID/EN).",
    rating: 5.0,
    reviewsCount: "42",
    ageRating: "4+",
    category: "Extensions",
    tags: ["chrome-extension", "quotes", "mindfulness"],
    isFeaturedHero: false
  }
];
