/**
 * Friendster-era Portfolio Behavior
 * - Fetch and render projects from data/projects.json
 * - Search (debounced) and sorting
 * - Status updates, empty state, and tech cloud
 */

(() => {
    // ---------- DOM ----------
    const gridEl = document.getElementById('grid');
    const searchEl = document.getElementById('search');
    const sortEl = document.getElementById('sort');
    const statusEl = document.getElementById('status');
    const emptyEl = document.getElementById('empty');
    const tileTpl = document.getElementById('tile-template');
    const techCloudEl = document.getElementById('tech-cloud');

    // ---------- State ----------
    const state = {
        all: [],
        filtered: [],
        query: '',
        sort: 'newest'
    };

    // ---------- Utils ----------
    const toLower = (v) => (v || '').toString().toLowerCase();

    const parseDate = (str) => {
        if (!str) return null;
        const d = new Date(str);
        return isNaN(d.getTime()) ? null : d;
    };

    const formatDate = (str) => {
        const d = parseDate(str);
        if (!d) return '';
        // Keep retro simple yyyy-mm-dd display
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    };

    const debounce = (fn, ms = 250) => {
        let t;
        return (...args) => {
            clearTimeout(t);
            t = setTimeout(() => fn(...args), ms);
        };
    };

    const svgPlaceholder = (title = 'Project') => {
        const safe = (title || 'Project').replace(/&/g, '&amp;').replace(/</g, '&lt;');
        const svg =
            `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 360'>` +
            `<defs><linearGradient id='g' x1='0' y1='0' x2='0' y2='1'>` +
            `<stop offset='0%' stop-color='#eef2fb'/><stop offset='100%' stop-color='#e1e7f5'/>` +
            `</linearGradient></defs>` +
            `<rect width='640' height='360' fill='url(#g)' />` +
            `<rect x='8' y='8' width='624' height='344' fill='none' stroke='#d9dbe1' stroke-width='2'/>` +
            `<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Verdana, Geneva, Tahoma, sans-serif' font-size='20' fill='#13386b'>${safe}</text>` +
            `</svg>`;
        return 'data:image/svg+xml;utf8,' + svg;
    };

    const union = (arrOfArrs) => {
        const s = new Set();
        arrOfArrs.forEach(a => (a || []).forEach(v => s.add(v)));
        return Array.from(s);
    };

    const updateStatus = () => {
        const q = state.query.trim();
        if (q) {
            statusEl.textContent = `${state.filtered.length} project(s) matching “${q}”`;
        } else {
            statusEl.textContent = `${state.filtered.length} project(s)`;
        }
    };

    // ---------- Rendering ----------
    const clearEl = (el) => { while (el.firstChild) el.removeChild(el.firstChild); };

    const renderGrid = (items) => {
        clearEl(gridEl);
        items.forEach(p => {
            const node = document.importNode(tileTpl.content, true);
            const article = node.querySelector('.tile');
            const link = node.querySelector('.tile-link');
            const wrap = node.querySelector('.thumb-wrap');
            const img = node.querySelector('.thumb');
            const title = node.querySelector('.title');
            const desc = node.querySelector('.desc');
            const tech = node.querySelector('.tech');
            const time = node.querySelector('.date');

            // Tailwind utility classes for Friendster-like tile
            if (article) {
                article.className = 'tile bg-white border border-friendBorder rounded-md shadow-bevel overflow-hidden transition duration-150 ease-out hover:-translate-y-0.5 shadow';
            }
            if (link) {
                link.className = 'tile-link flex items-center gap-3 sm:gap-4 p-2 sm:p-3 text-slate-700 no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-friendTeal';
            }
            if (wrap) {
                wrap.className = 'thumb-wrap w-[70px] h-[70px] md:w-[120px] md:h-[120px] bg-slate-50 border border-slate-200 rounded-md overflow-hidden flex items-center justify-center';
            }
            if (img) {
                img.className = 'thumb w-[50px] md:w-[100px] object-cover rounded';
            }
            if (title) {
                title.className = 'title font-semibold text-friendNavy truncate';
            }
            if (desc) {
                desc.className = 'desc text-slate-600 text-xs md:text-sm';
            }
            if (tech) {
                tech.className = 'tech text-xs text-gray-400';
            }
            if (time) {
                time.className = 'date text-xs text-slate-600';
            }

            const href = (p.liveUrl && p.liveUrl.trim()) ? p.liveUrl : ((p.repoUrl && p.repoUrl.trim()) ? p.repoUrl : '#');
            link.href = href;
            if (href === '#') {
                link.setAttribute('aria-disabled', 'true');
                link.setAttribute('tabindex', '-1');
            }

            img.src = p.image || '';
            img.alt = `Thumbnail for ${p.title}`;
            img.addEventListener('error', () => { img.src = svgPlaceholder(p.title); }, { once: true });

            title.textContent = p.title || 'Untitled';
            desc.textContent = p.description || '';
            tech.textContent = (p.technologies || []).join(', ');
            gridEl.appendChild(node);
        });
    };

    const renderTechCloud = (techs) => {
        if (!techCloudEl) return;
        clearEl(techCloudEl);
        techs.forEach(t => {
            const li = document.createElement('li');
            li.className = 'text-xs text-slate-600 bg-slate-50 border border-friendBorder px-2 py-1 rounded-full shadow-bevel';
            li.textContent = t;
            techCloudEl.appendChild(li);
        });
    };

    const toggleEmpty = (isEmpty) => {
        if (isEmpty) {
            emptyEl.classList.remove('hidden');
        } else {
            emptyEl.classList.add('hidden');
        }
    };

    // ---------- Filtering / Sorting ----------
    const matchesQuery = (p, query) => {
        if (!query) return true;
        const q = toLower(query);
        if (toLower(p.title).includes(q)) return true;
        if (toLower(p.description).includes(q)) return true;
        const tech = (p.technologies || []).map(toLower).join(' ');
        return tech.includes(q);
    };

    const sortProjects = (arr, order) => {
        const copy = [...arr];
        copy.sort((a, b) => {
            const da = parseDate(a.date);
            const db = parseDate(b.date);
            if (!da && !db) return 0;
            if (!da) return 1; // missing dates go last for newest
            if (!db) return -1;
            return order === 'oldest' ? (da - db) : (db - da);
        });
        return copy;
    };

    const apply = () => {
        const q = state.query;
        const filtered = state.all.filter(p => matchesQuery(p, q));
        state.filtered = sortProjects(filtered, state.sort);
        renderGrid(state.filtered);
        toggleEmpty(state.filtered.length === 0);
        updateStatus();
    };

    // ---------- Events ----------
    const onSearchInput = debounce(() => {
        state.query = searchEl.value || '';
        apply();
    }, 300);

    const onSortChange = () => {
        state.sort = sortEl.value === 'oldest' ? 'oldest' : 'newest';
        apply();
    };

    // ---------- Init ----------
    const init = async () => {
        try {
            const res = await fetch('data/projects.json', { cache: 'no-cache' });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            if (!Array.isArray(data)) throw new Error('Invalid data format: expected an array');

            state.all = data.map(p => ({
                title: p.title || '',
                description: p.description || '',
                technologies: Array.isArray(p.technologies) ? p.technologies : [],
                liveUrl: p.liveUrl || '',
                repoUrl: p.repoUrl || '',
                image: p.image || '',
                date: p.date || ''
            }));

            // Derive tech cloud
            const allTechs = union(state.all.map(p => p.technologies || []));
            renderTechCloud(allTechs);

            // Default sort newest
            state.sort = (sortEl && sortEl.value === 'oldest') ? 'oldest' : 'newest';
            state.filtered = sortProjects(state.all, state.sort);

            // Initial render
            renderGrid(state.filtered);
            toggleEmpty(state.filtered.length === 0);
            updateStatus();

            // Wire events
            if (searchEl) searchEl.addEventListener('input', onSearchInput);
            if (sortEl) sortEl.addEventListener('change', onSortChange);
        } catch (err) {
            console.error(err);
            statusEl.textContent = 'Failed to load projects. Please refresh, or check data/projects.json.';
            toggleEmpty(true);
        }
    };

    // Script is defer-loaded; DOM is ready. Still guard just in case.
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();
