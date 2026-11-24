import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { projectsData } from '../src/data/projects.js';
import { journeyData } from '../src/data/journey.js';
import {
  SITE_URL,
  PROJECT_IMAGES,
  getAllSeoPages,
} from '../src/data/seoRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const LASTMOD = new Date().toISOString().slice(0, 10);

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildPersonNode() {
  return {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Zaid Memon',
    alternateName: ['Zaid Sohilbhai Memon', 'ZaidMemon', 'Zaidmemon5412'],
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/zaid_portrait-opt.jpg`,
    jobTitle: 'Full-Stack Developer & Computer Science Student',
    description:
      'Zaid Memon is a Full-Stack Developer and B.Tech Computer Science & Engineering student at L.J. University, Ahmedabad, specializing in React, Python, Django, PostgreSQL, PostGIS, and data-driven software systems.',
    email: 'mailto:zaidmemon8156@gmail.com',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'L.J. Institute of Engineering & Technology (L.J. University)',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
        addressCountry: 'IN',
      },
    },
    affiliation: {
      '@type': 'CollegeOrUniversity',
      name: 'L.J. University',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://github.com/Zaidmemon5412',
      'https://www.linkedin.com/in/zaid-memon-79656b318/',
      'https://verixa-phi.vercel.app',
    ],
    knowsAbout: [
      'React',
      'Python',
      'Django',
      'Django REST Framework',
      'Flask',
      'PostgreSQL',
      'PostGIS',
      'Java',
      'Machine Learning',
      'Full-Stack Web Development',
    ],
  };
}

function buildWebsiteNode() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: 'Zaid Memon — Official Portfolio',
    publisher: { '@id': `${SITE_URL}/#person` },
  };
}

function buildJsonLdForPage(page) {
  const canonicalUrl = page.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${page.path}`;
  const personNode = buildPersonNode();
  const websiteNode = buildWebsiteNode();

  if (page.path === '/') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        personNode,
        websiteNode,
        {
          '@type': 'ProfilePage',
          '@id': `${SITE_URL}/#profilepage`,
          url: `${SITE_URL}/`,
          name: page.title,
          mainEntity: { '@id': `${SITE_URL}/#person` },
          isPartOf: { '@id': `${SITE_URL}/#website` },
        },
        {
          '@type': 'ItemList',
          '@id': `${SITE_URL}/#projects`,
          name: 'Featured Software Projects by Zaid Memon',
          itemListElement: projectsData.map((proj, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: proj.title,
            url: `${SITE_URL}/projects/${proj.id}`,
          })),
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Verixa',
          url: 'https://verixa-phi.vercel.app',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          description:
            'Property decision intelligence platform backed by RERA regulatory data, builder credibility analytics, and spatial locality intelligence.',
          author: { '@id': `${SITE_URL}/#person` },
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Who is Zaid Memon?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Zaid Memon is a Full-Stack Developer and B.Tech Computer Science & Engineering student at L.J. University, Ahmedabad, India, building React web applications, Python/Django backends, PostgreSQL/PostGIS data platforms, and Java desktop systems.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is Verixa built by Zaid Memon?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Verixa (live at verixa-phi.vercel.app) is a flagship real-estate decision intelligence platform built by Zaid Memon using React, Django, PostgreSQL, and PostGIS to evaluate RERA filings, builder track records, and locality price trends.',
              },
            },
            {
              '@type': 'Question',
              name: 'How can I contact or hire Zaid Memon?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'You can contact Zaid Memon via email at zaidmemon8156@gmail.com, connect on LinkedIn (linkedin.com/in/zaid-memon-79656b318), or view his code on GitHub (github.com/Zaidmemon5412).',
              },
            },
          ],
        },
      ],
    };
  }

  if (page.project) {
    const proj = page.project;
    const breadcrumb = {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Zaid Memon', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Selected Work', item: `${SITE_URL}/work` },
        { '@type': 'ListItem', position: 3, name: proj.title, item: canonicalUrl },
      ],
    };

    const projectSchema = {
      '@type': proj.hasLiveDemo ? 'SoftwareApplication' : 'CreativeWork',
      '@id': `${canonicalUrl}#project`,
      name: `${proj.title} — ${proj.tagline}`,
      description: proj.shortDescription,
      url: proj.demoUrl || canonicalUrl,
      mainEntityOfPage: canonicalUrl,
      image: page.ogImage,
      author: { '@id': `${SITE_URL}/#person` },
      creator: { '@id': `${SITE_URL}/#person` },
      keywords: proj.technologies.join(', '),
      ...(proj.hasLiveDemo
        ? {
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
          }
        : {}),
      ...(proj.githubUrl ? { codeRepository: proj.githubUrl } : {}),
    };

    return {
      '@context': 'https://schema.org',
      '@graph': [personNode, websiteNode, breadcrumb, projectSchema],
    };
  }

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Zaid Memon', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: page.navLabel || page.title, item: canonicalUrl },
    ],
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      personNode,
      websiteNode,
      breadcrumb,
      {
        '@type': page.schemaType || 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: page.title,
        description: page.description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#person` },
      },
    ],
  };
}

function buildNoscriptHtml(page) {
  const navLinks = `
      <nav aria-label="Primary Portfolio Navigation">
        <ul>
          <li><a href="/">Home — Zaid Memon</a></li>
          <li><a href="/work">Selected Work &amp; Projects</a></li>
          <li><a href="/services">Services &amp; Skills</a></li>
          <li><a href="/experience">Experience &amp; Education</a></li>
          <li><a href="/about">About Zaid Memon</a></li>
          <li><a href="/contact">Contact Zaid Memon</a></li>
          <li><a href="/resume.pdf">Resume (PDF)</a></li>
        </ul>
      </nav>`;

  if (page.project) {
    const p = page.project;
    const cs = p.caseStudy || {};
    const archItems = (cs.architecture || [])
      .map((a) => `<li><strong>${escapeHtml(a.layer)} (${escapeHtml(a.tech)}):</strong> ${escapeHtml(a.role)}</li>`)
      .join('\n          ');
    const keyItems = (p.keyWork || []).map((k) => `<li>${escapeHtml(k)}</li>`).join('\n          ');
    const otherLinks = projectsData
      .filter((o) => o.id !== p.id)
      .map((o) => `<li><a href="/projects/${o.id}">${escapeHtml(o.title)} — ${escapeHtml(o.tagline)}</a></li>`)
      .join('\n          ');

    return `<noscript>
      <main>
        ${navLinks}
        <article>
          <h1>${escapeHtml(p.title)} by Zaid Memon — ${escapeHtml(p.category)}</h1>
          <p>${escapeHtml(p.tagline)}</p>
          <p>${escapeHtml(p.shortDescription)}</p>
          ${p.demoUrl ? `<p>Live Deployment: <a href="${escapeHtml(p.demoUrl)}">${escapeHtml(p.demoUrl)}</a></p>` : ''}
          <p>Source Code: <a href="${escapeHtml(p.githubUrl)}">${escapeHtml(p.githubUrl)}</a></p>
          <p>Technologies: ${escapeHtml(p.technologies.join(', '))}</p>
          ${cs.problem ? `<h2>The Problem</h2><p>${escapeHtml(cs.problem)}</p>` : ''}
          ${cs.approach ? `<h2>The Solution &amp; Approach</h2><p>${escapeHtml(cs.approach)}</p>` : ''}
          ${archItems ? `<h2>System Architecture</h2><ul>${archItems}</ul>` : ''}
          ${keyItems ? `<h2>Key Engineering Execution</h2><ul>${keyItems}</ul>` : ''}
          ${cs.challenges ? `<h2>Technical Challenge</h2><p>${escapeHtml(cs.challenges)}</p>` : ''}
          ${cs.outcome ? `<h2>Outcome</h2><p>${escapeHtml(cs.outcome)}</p>` : ''}
        </article>
        <section>
          <h2>More Projects by Zaid Memon</h2>
          <ul>
            ${otherLinks}
          </ul>
        </section>
      </main>
    </noscript>`;
  }

  const projectLinks = projectsData
    .map(
      (p) =>
        `<li><a href="/projects/${p.id}">${escapeHtml(p.title)} — ${escapeHtml(p.tagline)}</a>${
          p.demoUrl ? ` (<a href="${escapeHtml(p.demoUrl)}">Live at ${escapeHtml(p.liveDomain)}</a>)` : ''
        } (${escapeHtml(p.technologies.slice(0, 5).join(', '))})</li>`
    )
    .join('\n            ');

  const journeyItems = journeyData
    .map(
      (j) =>
        `<li><strong>${escapeHtml(j.year)} — ${escapeHtml(j.title)}</strong> (${escapeHtml(j.institution)}): ${escapeHtml(j.description)}</li>`
    )
    .join('\n            ');

  return `<noscript>
      <main>
        ${navLinks}
        <h1>${escapeHtml(page.title)}</h1>
        <p>${escapeHtml(page.description)}</p>
        <section>
          <h2>Featured Projects by Zaid Memon</h2>
          <ul>
            ${projectLinks}
          </ul>
        </section>
        <section>
          <h2>Experience &amp; Education</h2>
          <ul>
            ${journeyItems}
          </ul>
        </section>
        <section>
          <h2>Connect with Zaid Memon</h2>
          <ul>
            <li>Email: <a href="mailto:zaidmemon8156@gmail.com">zaidmemon8156@gmail.com</a></li>
            <li>GitHub: <a href="https://github.com/Zaidmemon5412">github.com/Zaidmemon5412</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/zaid-memon-79656b318/">linkedin.com/in/zaid-memon-79656b318</a></li>
            <li>Resume PDF: <a href="/resume.pdf">Zaid Memon Resume</a></li>
          </ul>
        </section>
      </main>
    </noscript>`;
}

function renderHtmlForPage(baseHtml, page) {
  const canonicalUrl = page.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${page.path}`;
  const safeTitle = escapeHtml(page.title);
  const safeDesc = escapeHtml(page.description);
  const safeImg = escapeHtml(page.ogImage);
  const jsonLd = JSON.stringify(buildJsonLdForPage(page), null, 2);
  const noscriptBlock = buildNoscriptHtml(page);

  let html = baseHtml;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonicalUrl}" />`);
  html = html.replace(/<meta name="title" content="[^"]*"\s*\/>/, `<meta name="title" content="${safeTitle}" />`);
  html = html.replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${safeDesc}" />`);
  html = html.replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonicalUrl}" />`);
  html = html.replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${safeTitle}" />`);
  html = html.replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${safeDesc}" />`);
  html = html.replace(/<meta property="og:image" content="[^"]*"\s*\/>/, `<meta property="og:image" content="${safeImg}" />`);
  html = html.replace(/<meta property="twitter:url" content="[^"]*"\s*\/>/, `<meta property="twitter:url" content="${canonicalUrl}" />`);
  html = html.replace(/<meta property="twitter:title" content="[^"]*"\s*\/>/, `<meta property="twitter:title" content="${safeTitle}" />`);
  html = html.replace(/<meta property="twitter:description" content="[^"]*"\s*\/>/, `<meta property="twitter:description" content="${safeDesc}" />`);
  html = html.replace(/<meta property="twitter:image" content="[^"]*"\s*\/>/, `<meta property="twitter:image" content="${safeImg}" />`);
  html = html.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">\n${jsonLd}\n    </script>`
  );
  html = html.replace(/<noscript>[\s\S]*?<\/noscript>/, noscriptBlock);

  return html;
}

function generateSitemapXml(pages) {
  const urlEntries = pages.map((page) => {
    const loc = page.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${page.path}`;
    const images = [];

    if (page.path === '/') {
      images.push({
        loc: `${SITE_URL}/zaid_portrait-opt.jpg`,
        title: 'Zaid Memon — Full-Stack Developer & Computer Science Student',
      });
      projectsData.forEach((p) => {
        const img = PROJECT_IMAGES[p.id];
        if (img) {
          images.push({
            loc: `${SITE_URL}${img}`,
            title: `${p.title} — ${p.tagline} by Zaid Memon`,
          });
        }
      });
    } else if (page.project) {
      const img = PROJECT_IMAGES[page.project.id];
      if (img) {
        images.push({
          loc: `${SITE_URL}${img}`,
          title: `${page.project.title} by Zaid Memon — ${page.project.category}`,
        });
      }
    }

    const imageXml = images
      .map(
        (img) => `    <image:image>
      <image:loc>${escapeHtml(img.loc)}</image:loc>
      <image:title>${escapeHtml(img.title)}</image:title>
    </image:image>`
      )
      .join('\n');

    return `  <url>
    <loc>${escapeHtml(loc)}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${page.changefreq || 'monthly'}</changefreq>
    <priority>${page.priority || '0.8'}</priority>${imageXml ? `\n${imageXml}` : ''}
  </url>`;
  });

  // Add Resume PDF as an indexable document URL
  urlEntries.push(`  <url>
    <loc>${SITE_URL}/resume.pdf</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`);

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
${urlEntries.join('\n')}
</urlset>
`;
}

function main() {
  const distIndexPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(distIndexPath)) {
    throw new Error('dist/index.html not found. Run `vite build` first.');
  }

  const baseHtml = fs.readFileSync(distIndexPath, 'utf8');
  const pages = getAllSeoPages();

  for (const page of pages) {
    const rendered = renderHtmlForPage(baseHtml, page);
    const outPath =
      page.path === '/'
        ? distIndexPath
        : path.join(DIST_DIR, page.path.replace(/^\//, ''), 'index.html');

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, rendered, 'utf8');
  }

  const sitemapXml = generateSitemapXml(pages);
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf8');
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapXml, 'utf8');

  console.log(
    `[prerender-seo] Generated ${pages.length} static HTML pages and synced sitemap.xml (${pages.length + 1} URLs).`
  );
}

main();
