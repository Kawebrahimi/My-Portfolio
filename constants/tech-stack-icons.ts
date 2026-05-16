export const techStack = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: '/icons/pc-phone.png',
    side: 'left',
    technologies: [
      {
        name: 'React',
        src: '/images/react.png',
        href: 'https://react.dev',
      },
      {
        name: 'Next.js',
        src: '/images/Next.js.png',
        href: 'https://nextjs.org',
      },
      {
        name: 'TypeScript',
        src: '/images/TypeScript.png',
        href: 'https://www.typescriptlang.org',
      },
      {
        name: 'Tailwind',
        src: '/images/TailwindCss.png',
        href: 'https://tailwindcss.com',
      },
      {
        name: 'GSAP',
        src: '/images/gsap.png',
        href: 'https://gsap.com',
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: '/icons/server.png',
    side: 'right',
    technologies: [
      {
        name: 'Node.js',
        src: '/images/Node.js.png',
        href: 'https://nodejs.org',
      },
      {
        name: 'Express.js',
        src: '/images/Express.png',
        href: 'https://expressjs.com',
      },
      {
        name: 'NestJS',
        src: '/images/Nest.js.png',
        href: 'https://nestjs.com',
      },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: '/icons/database.png',
    side: 'left',
    technologies: [
      {
        name: 'Prisma',
        src: '/images/Prisma.png',
        href: 'https://www.prisma.io',
      },
      {
        name: 'Drizzle',
        src: '/images/drizzle-orm.png',
        href: 'https://orm.drizzle.team',
      },
      {
        name: 'PostgreSQL',
        src: '/images/POstgresSql.png',
        href: 'https://www.postgresql.org',
      },
      {
        name: 'MongoDB',
        src: '/images/MongoDB.png',
        href: 'https://www.mongodb.com',
      },
    ],
  },
  {
    id: 'dev-tools',
    title: 'Dev Tools',
    icon: '/icons/gear.png',
    side: 'right',
    technologies: [
      {
        name: 'Docker',
        src: '/images/docker.png',
        href: 'https://www.docker.com',
      },
      {
        name: 'Git',
        src: '/images/git.png',
        href: 'https://git-scm.com',
      },
      {
        name: 'GitHub',
        src: '/images/GitHub.png',
        href: 'https://github.com',
      },
    ],
  },
] as const;
