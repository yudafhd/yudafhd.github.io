'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import type { Project } from '@/data/projects';

type SortOrder = 'newest' | 'oldest';

const toLower = (value: string) => value.toLowerCase();

const parseDate = (value?: string) => {
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const formatDate = (value?: string) => {
  const parsed = parseDate(value);
  if (!parsed) return '';
  const yyyy = parsed.getFullYear();
  const mm = String(parsed.getMonth() + 1).padStart(2, '0');
  const dd = String(parsed.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const svgPlaceholder = (title: string) => {
  const safe = title.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const svg = [
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 360'>",
    "<defs><linearGradient id='g' x1='0' y1='0' x2='0' y2='1'>",
    "<stop offset='0%' stop-color='#eef2fb'/><stop offset='100%' stop-color='#e1e7f5'/>",
    '</linearGradient></defs>',
    "<rect width='640' height='360' fill='url(#g)' />",
    "<rect x='8' y='8' width='624' height='344' fill='none' stroke='#d9dbe1' stroke-width='2'/>",
    `<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Verdana, Geneva, Tahoma, sans-serif' font-size='20' fill='#13386b'>${safe}</text>`,
    '</svg>',
  ].join('');

  return `data:image/svg+xml;utf8,${svg}`;
};

const sortProjects = (items: Project[], order: SortOrder) => {
  const copy = [...items];
  copy.sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);

    if (!dateA && !dateB) return 0;
    if (!dateA) return order === 'oldest' ? -1 : 1;
    if (!dateB) return order === 'oldest' ? 1 : -1;

    return order === 'oldest' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
  });
  return copy;
};

const filterProjects = (items: Project[], query: string) => {
  if (!query.trim()) return [...items];
  const needle = toLower(query.trim());
  return items.filter((project) => {
    if (toLower(project.title).includes(needle)) return true;
    if (toLower(project.description).includes(needle)) return true;
    const technologies = project.technologies.map(toLower).join(' ');
    return technologies.includes(needle);
  });
};

const getProjectHref = (project: Project) => {
  if (project.liveUrl?.trim()) return project.liveUrl;
  if (project.repoUrl?.trim()) return project.repoUrl;
  return '#';
};

const uniqueTechnologies = (items: Project[]) => {
  const set = new Set<string>();
  items.forEach((project) => {
    project.technologies.forEach((tech) => set.add(tech));
  });
  return Array.from(set).sort((a, b) => a.localeCompare(b));
};

type ProjectExplorerProps = {
  projects: Project[];
};

export function ProjectExplorer({ projects }: ProjectExplorerProps) {
  const [query, setQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');

  const techList = useMemo(() => uniqueTechnologies(projects), [projects]);

  const filtered = useMemo(() => {
    const filteredItems = filterProjects(projects, query);
    return sortProjects(filteredItems, sortOrder);
  }, [projects, query, sortOrder]);

  const trimmedQuery = query.trim();
  const statusText = trimmedQuery
    ? `${filtered.length} project(s) matching "${trimmedQuery}"`
    : `${filtered.length} project(s)`;

  return (
    <section className="space-y-4">
      <section aria-label="Filters and search" className="space-y-3">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-md">
            <label htmlFor="search" className="sr-only">
              Search projects
            </label>
            <input
              id="search"
              name="search"
              type="search"
              placeholder="Search projects or tech..."
              className="w-full rounded-md border border-friend-border bg-white px-3 py-2 shadow-bevel focus:outline-none focus:ring-2 focus:ring-friend-teal"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm text-slate-600">
              Sort
            </label>
            <select
              id="sort"
              name="sort"
              className="no-arrow rounded-md border border-friend-border bg-white py-2 px-4 text-xs shadow-bevel focus:outline-none focus:ring-2 focus:ring-friend-teal"
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value === 'oldest' ? 'oldest' : 'newest')}
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
            <p id="status" className="text-xs text-slate-600">
              {statusText}
            </p>
          </div>
        </div>

        {/* {techList.length > 0 && (
          <ul id="tech-cloud" className="flex flex-wrap gap-2">
            {techList.map((tech) => (
              <li
                key={tech}
                className="text-xs text-slate-600 bg-slate-50 border border-friend-border px-2 py-1 rounded-full shadow-bevel"
              >
                {tech}
              </li>
            ))}
          </ul>
        )} */}
      </section>

      <section id="projects" aria-label="Projects" className="space-y-3">
        {filtered.length === 0 ? (
          <div className="rounded-md border border-dashed border-friend-border bg-white p-6 text-center text-slate-600">
            No projects found. Try clearing filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )}
      </section>
    </section>
  );
}

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const [imageSrc, setImageSrc] = useState(project.image || svgPlaceholder(project.title));

  const href = getProjectHref(project);
  const isDisabled = href === '#';

  return (
    <article className="bg-white border border-friend-border rounded-md shadow-bevel overflow-hidden transition duration-150 ease-out hover:-translate-y-0.5 shadow">
      <a
        href={href}
        target={isDisabled ? undefined : '_blank'}
        rel={isDisabled ? undefined : 'noopener noreferrer'}
        className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 text-slate-700 no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-friend-teal"
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
      >
        <div className="w-[70px] h-[70px] md:w-[120px] md:h-[120px] bg-slate-50 border border-slate-200 rounded-md overflow-hidden flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={`Thumbnail for ${project.title}`}
            width={120}
            height={120}
            className="w-[50px] md:w-[100px] object-cover rounded"
            onError={() => setImageSrc(svgPlaceholder(project.title))}
          />
        </div>
        <div className="flex-1 min-w-0 space-y-1">
          <h3 className="font-semibold text-friend-navy truncate">{project.title}</h3>
          <p className="text-slate-600 text-xs md:text-sm">{project.description}</p>
          <div className="flex items-center gap-3 mt-1 text-xs text-slate-600 flex-wrap">
            <span>{project.technologies.join(', ')}</span>
            {project.date && (
              <time dateTime={project.date} className="text-slate-500">
                {formatDate(project.date)}
              </time>
            )}
          </div>
        </div>
      </a>
    </article>
  );
}
