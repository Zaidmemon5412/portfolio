import { projectsData } from './projects.js';

export const SITE_URL = 'https://zaidmemon.vercel.app';

export const PROJECT_IMAGES = {
  verixa: '/verixa.png',
  exertia: '/exertia.png',
  veritas: '/veritas.png',
  'smart-inventory': '/smart_inventory.jpg',
  'smart-gst-invoice': '/smart_gst.jpg',
};

export const SECTION_ROUTES = {
  '/': {
    path: '/',
    sectionId: 'hero',
    navLabel: 'Home',
    title: 'Zaid Memon — Full-Stack Developer & Computer Science Student | Portfolio',
    description:
      'Official portfolio of Zaid Memon, a Full-Stack Developer and B.Tech Computer Science Engineering student at L.J. University, Ahmedabad. Creator of Verixa, Exertia, and scalable React, Python, Django & PostgreSQL systems.',
    ogImage: `${SITE_URL}/zaid_portrait-opt.jpg`,
    schemaType: 'ProfilePage',
    priority: '1.0',
    changefreq: 'weekly',
  },
  '/work': {
    path: '/work',
    sectionId: 'selected-work',
    navLabel: 'Work',
    title: 'Selected Work & Projects by Zaid Memon | Verixa, Exertia, Veritas',
    description:
      'Explore full-stack web apps, spatial data platforms, NLP pipelines, and Java systems built by Zaid Memon, including Verixa (live at verixa-phi.vercel.app), Exertia, Veritas, Smart Inventory, and Smart GST Invoice.',
    ogImage: `${SITE_URL}/verixa.png`,
    schemaType: 'CollectionPage',
    priority: '0.9',
    changefreq: 'weekly',
  },
  '/services': {
    path: '/services',
    sectionId: 'services',
    navLabel: 'Services',
    title: 'Services & Technical Skills — Zaid Memon | React, Python, Django, PostgreSQL',
    description:
      'Full-stack web development, Django REST API engineering, PostgreSQL/PostGIS database schema design, Python data pipelines, machine learning, and core Java software engineering by Zaid Memon.',
    ogImage: `${SITE_URL}/zaid_portrait-opt.jpg`,
    schemaType: 'WebPage',
    priority: '0.85',
    changefreq: 'monthly',
  },
  '/experience': {
    path: '/experience',
    sectionId: 'experience',
    navLabel: 'Experience',
    title: 'Experience & Education — Zaid Memon | L.J. University B.Tech CSE',
    description:
      'Career timeline and B.Tech Computer Science & Engineering background of Zaid Memon at L.J. Institute of Engineering & Technology (L.J. University), Ahmedabad.',
    ogImage: `${SITE_URL}/zaid_portrait-opt.jpg`,
    schemaType: 'WebPage',
    priority: '0.85',
    changefreq: 'monthly',
  },
  '/about': {
    path: '/about',
    sectionId: 'about',
    navLabel: 'About',
    title: 'About Zaid Memon — Full-Stack Developer & Computer Science Student in Ahmedabad',
    description:
      'Learn about Zaid Memon (Zaid Sohilbhai Memon), Computer Science student at L.J. University, Ahmedabad, verified Coursera certifications, engineering philosophy, and full-stack software focus.',
    ogImage: `${SITE_URL}/zaid_portrait-opt.jpg`,
    schemaType: 'AboutPage',
    priority: '0.9',
    changefreq: 'monthly',
  },
  '/contact': {
    path: '/contact',
    sectionId: 'contact',
    navLabel: 'Contact',
    title: 'Contact Zaid Memon — Hire Full-Stack Developer & Software Engineer',
    description:
      'Get in touch with Zaid Memon for full-stack software engineering roles, internships, Django/React consulting, or collaborations via email, LinkedIn, or GitHub.',
    ogImage: `${SITE_URL}/zaid_portrait-opt.jpg`,
    schemaType: 'ContactPage',
    priority: '0.85',
    changefreq: 'monthly',
  },
};

export function getProjectSeoMeta(project) {
  const imagePath = PROJECT_IMAGES[project.id] || '/zaid_portrait-opt.jpg';
  const liveTag = project.hasLiveDemo ? ` (Live at ${project.liveDomain})` : '';

  return {
    path: `/projects/${project.id}`,
    projectId: project.id,
    title: `${project.title} by Zaid Memon — ${project.category} Case Study`,
    description: `${project.shortDescription} Built by Zaid Memon using ${project.technologies.slice(0, 5).join(', ')}${liveTag}.`,
    ogImage: `${SITE_URL}${imagePath}`,
    imagePath,
    schemaType: project.hasLiveDemo ? 'SoftwareApplication' : 'CreativeWork',
    priority: project.isFlagship ? '0.95' : '0.85',
    changefreq: project.isFlagship ? 'weekly' : 'monthly',
  };
}

export function normalizePathname(pathname = '/') {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
}

export function getRouteSeoMeta(pathname = '/') {
  const cleanPath = normalizePathname(pathname);

  if (SECTION_ROUTES[cleanPath]) {
    return SECTION_ROUTES[cleanPath];
  }

  const projectMatch = cleanPath.match(/^\/projects\/([^/]+)$/);
  if (projectMatch) {
    const project = projectsData.find((p) => p.id === projectMatch[1]);
    if (project) {
      return getProjectSeoMeta(project);
    }
  }

  return SECTION_ROUTES['/'];
}

export function getAllSeoPages() {
  const sectionPages = Object.values(SECTION_ROUTES);
  const projectPages = projectsData.map((project) => ({
    ...getProjectSeoMeta(project),
    project,
  }));

  return [...sectionPages, ...projectPages];
}
