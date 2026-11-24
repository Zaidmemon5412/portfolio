import { SITE_URL, getRouteSeoMeta, normalizePathname } from '../data/seoRoutes';

export const NAVIGATE_EVENT = 'portfolio:navigate';

export function updateDocumentSeo(pathname = window.location.pathname) {
  if (typeof document === 'undefined') return;

  const meta = getRouteSeoMeta(pathname);
  const canonicalUrl = meta.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${meta.path}`;

  document.title = meta.title;

  const setMetaContent = (selector, content) => {
    const el = document.querySelector(selector);
    if (el && content) {
      el.setAttribute('content', content);
    }
  };

  setMetaContent('meta[name="title"]', meta.title);
  setMetaContent('meta[name="description"]', meta.description);
  setMetaContent('meta[property="og:title"]', meta.title);
  setMetaContent('meta[property="og:description"]', meta.description);
  setMetaContent('meta[property="og:url"]', canonicalUrl);
  setMetaContent('meta[property="og:image"]', meta.ogImage);
  setMetaContent('meta[property="twitter:title"]', meta.title);
  setMetaContent('meta[property="twitter:description"]', meta.description);
  setMetaContent('meta[property="twitter:url"]', canonicalUrl);
  setMetaContent('meta[property="twitter:image"]', meta.ogImage);

  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.setAttribute('href', canonicalUrl);
  }
}

export function navigateToPath(path, { replace = false } = {}) {
  if (typeof window === 'undefined') return;

  const cleanPath = normalizePathname(path);
  if (normalizePathname(window.location.pathname) !== cleanPath) {
    if (replace) {
      window.history.replaceState({}, '', cleanPath);
    } else {
      window.history.pushState({}, '', cleanPath);
    }
  }

  updateDocumentSeo(cleanPath);
  window.dispatchEvent(new CustomEvent(NAVIGATE_EVENT, { detail: { path: cleanPath } }));
}

export function scrollToSectionById(sectionId) {
  if (typeof document === 'undefined') return;
  const element = document.getElementById(sectionId);
  if (!element) return;

  if (window.__lenis) {
    window.__lenis.scrollTo(element, { offset: sectionId === 'hero' ? -120 : -80 });
  } else {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
