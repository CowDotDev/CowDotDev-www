// Bio content for /about. Experience and skills come from the resume; intro is still placeholder.

export interface Role {
  company: string;
  title: string;
  start: string; // e.g. '2022' or 'Mar 2022'
  end?: string; // omit for current role
  location?: string;
  summary: string;
  highlights?: string[];
  url?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Project {
  name: string;
  description: string;
  url?: string;
  repo?: string;
  tags: string[];
}

export const intro = [
  "I'm a software developer who likes building fast, friendly, well-crafted things for the web.", // TODO
  "I care about clear code, good tools, and interfaces that feel obvious. When I'm not shipping, I'm probably tinkering on a side project or writing about what I learned.", // TODO
];

export const experience: Role[] = [
  {
    company: 'Synchrony',
    title: 'Technical Lead',
    start: 'Jul 2025',
    location: 'Remote · Contract',
    summary:
      'Lead the front-end technical roadmap and AI-assisted development adoption across engineering groups.',
    highlights: [
      'Architecting the migration from build-time to run-time Micro-Front Ends with Webpack/Rspack Module Federation and AWS S3, so multiple MFE applications share a single host.',
      'Leading adoption of AI-assisted development (agentic workflows, instructions, and skills) in partnership with the internal AI organization’s MCP server and cloud agents.',
      'Own the roadmap and deliveries with TPO, PO, QA, and Design; drive quarterly planning and communicate trade-offs and team bandwidth.',
      'Ship through a SOC 2-compliant release-approval process with full audit trails; monitor with New Relic and roll out with Apptimize feature flags.',
      'Unblock DevOps, Analytics, API, and peer front-end teams, and mentor developers through pairing and code review.',
    ],
  },
  {
    company: 'Synchrony',
    title: 'Development Lead',
    start: 'Jul 2024',
    end: 'Jul 2025',
    location: 'Remote · Contract',
    summary:
      'Led and mentored a team of four developers while building out a shared design system.',
    highlights: [
      'Boosted team productivity by ~30% through pair programming and detailed PR reviews.',
      'Directed a design system and accessible, responsive component library (React, TypeScript, TailwindCSS, Storybook), cutting design-discrepancy defects by over 50%.',
      'Presented knowledge-transfer sessions at company-wide front-end Community-of-Practice meetings.',
      'Partnered with Product and Design to clarify user stories and tighten sprint feedback loops.',
    ],
  },
  {
    company: 'Fulfilld',
    title: 'Lead Front-end Developer',
    start: 'Sep 2021',
    end: 'May 2024',
    location: 'Remote',
    summary:
      'Led front-end development of a multi-tenant React application in a SOC 2-compliant environment.',
    highlights: [
      'Introduced TypeScript and schema-driven GraphQL (Apollo Client + GraphQL Codegen), catching data-contract errors at build time and cutting debugging time by ~20%.',
      'Designed a custom table component for server- and client-side data with filtering, sorting, column visibility, and saved layouts.',
      'Optimized memoization of global state and the table component, reducing render commits by over 75%.',
      'Built a multi-tenant configuration system delivering tailored client experiences from a single codebase.',
      'Implemented repo-linked documentation that references live code and flags pages for review when that code changes.',
    ],
  },
  {
    company: 'Sherpa Digital Media',
    title: 'Front-end Developer',
    start: '2021',
    end: '2021',
    summary: 'Led development of media-rich, real-time video applications.',
  },
  {
    company: 'HomeAdvisor',
    title: 'Senior Front-end Developer',
    start: '2018',
    end: '2021',
    summary: 'Established front-end coding standards across teams.',
  },
  {
    company: 'HomeAdvisor',
    title: 'Front-end Developer',
    start: '2015',
    end: '2018',
    summary: 'Built SPA features and cross-client email templates.',
  },
  {
    company: 'VeilSun',
    title: 'API Developer',
    start: '2018',
    end: '2018',
    summary: 'Refactored a monolithic QuickBase app, improving performance by 50%+.',
  },
  {
    company: 'DD Buddy',
    title: 'Co-Founder / Lead Developer',
    start: '2014',
    end: '2015',
    summary: 'Built web, mobile, and Node.js apps for a ride-share startup; patent co-inventor.',
  },
  {
    company: 'Independent',
    title: 'Web Developer',
    start: '2011',
    end: '2014',
    summary: 'Built WordPress, PHP, and MySQL sites for clients.',
  },
];

export const skills: SkillGroup[] = [
  {
    label: 'Front-end',
    items: [
      'TypeScript',
      'React',
      'Next.js',
      'Vue.js',
      'TailwindCSS',
      'styled-components',
      'Design systems',
      'Accessible UI (Semantic HTML, ARIA)',
      'Micro-Front Ends',
      'Performance',
      'Jest',
      'Vitest',
      'Cypress',
    ],
  },
  {
    label: 'Data & APIs',
    items: [
      'GraphQL (Apollo Client, Codegen)',
      'REST',
      'Node.js',
      'Java/Spring',
      'SQL',
      'Microservices',
    ],
  },
  {
    label: 'Cloud, CI & tooling',
    items: [
      'AWS (S3)',
      'Google Cloud',
      'Docker',
      'GitHub Actions',
      'CI/CD',
      'Monorepos',
      'Webpack',
      'Vite',
      'Rspack',
      'Bun',
      'Module Federation',
      'Storybook',
      'New Relic',
      'Apptimize',
    ],
  },
  {
    label: 'AI & delivery',
    items: [
      'Agentic AI workflows',
      'MCP',
      'Playwright',
      'SOC 2 release management',
      'Agile / Scrum',
      'Jira & Confluence',
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'TanStack React Table',
    description:
      'A fully-featured table component — filtering, sorting, column visibility, exporting, and saved layouts — built on TanStack’s headless React Table, with GraphQL-codegen types and hooks and memoization tuned to cut needless re-renders.',
    repo: 'https://github.com/CowDotDev/TanStack-React-Table',
    tags: ['react', 'typescript', 'graphql', 'tanstack'],
  },
  {
    name: 'MrMackey',
    description:
      'A Discord bot that builds itself: Claude triages feature requests from a forum channel, a human approves, a Claude coding agent implements the change and opens a PR, AI review gates it, and merging auto-deploys the bot.',
    repo: 'https://github.com/CowDotDev/ClaudeMrMackey',
    tags: ['typescript', 'claude', 'agents', 'discord'],
  },
];
