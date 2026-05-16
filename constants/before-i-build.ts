export const howIBuildSteps = [
  {
    id: 1,
    step: '01',
    title: 'First, I Understand the Product',
    description:
      'I start by understanding the product idea, the users, and the real problem behind the project. Before writing code, I try to make the goal clear, define the main features, and understand how the final experience should feel for real users.',
    focus: ['Product goal', 'User needs', 'Core features'],
    tools: ['Research', 'Feature mapping', 'User flow thinking'],
    outcome:
      'A clear direction for the project before moving into design, architecture, and development.',
  },
  {
    id: 2,
    step: '02',
    title: 'Then, I Plan the Architecture',
    description:
      'After the idea is clear, I shape the technical structure of the app. I plan the frontend routes, reusable components, API structure, database models, authentication flow, and how frontend and backend data should communicate.',
    focus: ['App architecture', 'API structure', 'Data flow'],
    tools: ['Next.js routing', 'OpenAPI planning', 'Database schema'],
    outcome:
      'A clean and scalable foundation that makes the project easier to build, maintain, and extend.',
  },
  {
    id: 3,
    step: '03',
    title: 'I Build the Frontend Experience',
    description:
      'For the frontend, I usually work with Next.js or React. I build responsive layouts, reusable components, and smooth interfaces using Tailwind CSS, shadcn/ui, React Bits, Motion, and GSAP to make the experience feel modern and polished.',
    focus: ['Responsive UI', 'Reusable components', 'Smooth interactions'],
    tools: ['Next.js', 'React', 'Tailwind CSS', 'shadcn/ui', 'React Bits', 'Motion', 'GSAP'],
    outcome:
      'A clean, responsive, and interactive interface that feels smooth across different screen sizes.',
  },
  {
    id: 4,
    step: '04',
    title: 'I Connect the App to Real Data',
    description:
      'Once the UI is ready, I connect it to real backend data. I use TanStack Query for server state like fetching, caching, loading states, errors, refetching, and mutations. For client-only state, I use Zustand to keep local UI logic simple and organized.',
    focus: ['Server state', 'Client state', 'API integration'],
    tools: ['TanStack Query', 'Zustand', 'Axios / Fetch'],
    outcome:
      'A frontend that handles data smoothly, keeps the UI updated, and separates server state from local client state clearly.',
  },
  {
    id: 5,
    step: '05',
    title: 'I Build the Backend Logic',
    description:
      'On the backend, I build APIs with Node.js and Express, or NestJS when the project needs a more structured architecture. I handle routes, controllers, services, validation, authentication, business logic, and database communication using Prisma or Drizzle.',
    focus: ['API development', 'Authentication', 'Database logic'],
    tools: ['Node.js', 'Express.js', 'NestJS', 'Prisma', 'Drizzle'],
    outcome:
      'A reliable backend that keeps the application secure, organized, and ready to support real product features.',
  },
  {
    id: 6,
    step: '06',
    title: 'I Keep APIs Typed and Documented',
    description:
      'I like keeping the frontend and backend connected in a clean way. I use Swagger and OpenAPI to document backend endpoints, then use Orval to generate frontend API clients and types, so API calls become easier, safer, and more consistent.',
    focus: ['OpenAPI docs', 'Generated clients', 'Type-safe API calls'],
    tools: ['Swagger', 'OpenAPI', 'Orval', 'TypeScript'],
    outcome:
      'A smoother developer experience with typed API calls, better documentation, and fewer mistakes between frontend and backend.',
  },
  {
    id: 7,
    step: '07',
    title: 'Finally, I Refine and Ship',
    description:
      'Before calling a project finished, I test the important flows, fix bugs, improve performance, clean up code, check responsiveness, polish animations, and make sure the product feels ready for real users.',
    focus: ['Testing', 'Performance', 'Final polish'],
    tools: ['Debugging', 'Optimization', 'Deployment prep'],
    outcome:
      'A polished and production-ready project that feels complete, reliable, and enjoyable to use.',
  },
];
