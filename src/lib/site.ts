// Single source of truth for identity details. Replace the TODO placeholders.
export const site = {
  url: 'https://cow.dev',
  name: 'Cow', // TODO: your display name
  title: 'cow.dev',
  tagline: 'Developer. Builder of things. Occasional moo-er.', // TODO
  description:
    'The personal site of Cow — a software developer writing about code, craft, and the things I build.', // TODO
  author: 'Cow', // TODO
  locale: 'en',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Writing' },
  ],
  social: [
    { href: 'https://github.com/CowDotDev', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/cowdotdev/', label: 'LinkedIn' },
    { href: '/rss.xml', label: 'RSS' },
  ],
} as const;

export type NavItem = (typeof site.nav)[number];
