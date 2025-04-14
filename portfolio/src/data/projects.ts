// data/projects.ts
export const projects = [
  {
    slug: "chez-mari",
    title: "Chez Mari Hair Salon",
    subtitle: "Custom WordPress theme for a Vancouver-based salon",
    heroImage: "/images/chez-mari-hero.jpg",
    overview: `
      Chez Mari is a full-service hair salon based in Vancouver. Our goal was to transform their outdated website into an elegant, mobile-responsive, and SEO-optimized platform that reflects their upscale branding and services. The site was designed with both customers and salon staff in mind — offering an easy-to-navigate experience for visitors, and a streamlined content management system on the backend.
    `,
    role: [
      "Created a custom WordPress theme tailored to salon branding",
      "Built a custom post type for services with associated taxonomies",
      "Implemented category-based filtering using jQuery",
      "Designed and styled all frontend components using Tailwind CSS",
      "Developed a featured services carousel with randomized content",
      "Acted as the primary liaison between the client and dev team, gathering feedback and guiding decisions"
    ],
    techStack: ["WordPress", "PHP", "Tailwind CSS", "jQuery"],
    process: `
      I started by building out static mockups to align with the client’s vision. Once the frontend structure was approved, I transitioned to creating dynamic WordPress templates. Using Advanced Custom Fields (ACF), I established custom post types for services and created taxonomies to allow for filtering by category. This taxonomy-first approach laid the foundation for a scalable, flexible site structure.
      
      To improve the user experience, I added an interactive services carousel and ensured consistent design elements across devices. On the backend, I prioritized ease-of-use for the client, so they could manage updates without needing a developer.
    `,
    challenges: [
      "Managing differing feedback between the business owner (Mari) and her partner (Michael), which occasionally created roadblocks in the design approval process",
      "Translating technical updates and development decisions into language the client could clearly understand",
      "Ensuring responsive consistency and styling between desktop, tablet, and mobile devices"
    ],
    outcome: `
      The result was a modern, polished, and easy-to-manage WordPress site that reflects the elegance and professionalism of Chez Mari. The salon now benefits from improved SEO rankings, faster load times, and a more intuitive booking experience for clients. Internally, the team is empowered to update content without relying on developers — enabling long-term sustainability of the site.
    `,
    images: [
      { src: "/images/chez-mari-mobile.jpg", alt: "Chez Mari - Mobile view of services page" },
      { src: "/images/chez-mari-desktop.jpg", alt: "Chez Mari - Desktop homepage mockup" },
      { src: "/images/chez-mari-services.jpg", alt: "Chez Mari - Service filtering UI" }
    ],
    liveSite: "https://chezmari.com"
  },
  {
    slug: "task-manager",
    title: "Task Manager App",
    subtitle: "A modern full-stack task tracking app with real-time features",
    heroImage: "/images/task-manager-hero.jpg", // Swap in your actual screenshot or mockup
    overview: `
      Task Manager is a productivity-focused web application that allows users to manage tasks with drag-and-drop simplicity.
      It features real-time task status updates, due date management, and secure user authentication via Clerk.
      Designed to be responsive and intuitive, this tool helps users stay on top of their work across any device.
    `,
    role: [
      "Built full-stack task management functionality using React and Hono",
      "Implemented Clerk for secure user authentication and session management",
      "Used @hello-pangea/dnd to enable drag-and-drop task organization by status",
      "Configured PostgreSQL with Drizzle ORM for relational data handling",
      "Designed a responsive UI with shadcn/ui and managed data with TanStack Query"
    ],
    techStack: [
      "React",
      "TypeScript",
      "TanStack Router",
      "TanStack Query",
      "shadcn/ui",
      "@hello-pangea/dnd",
      "Hono",
      "Drizzle ORM",
      "PostgreSQL",
      "Clerk"
    ],
    process: `
      I structured the application using a monorepo with Bun, splitting the frontend and backend into separate packages.
      The API was built using Hono, with PostgreSQL handling data persistence through Drizzle ORM.
      Clerk authentication was integrated from the ground up, securing all task routes by user session.
      On the frontend, TanStack Query kept task data in sync across the app in real-time, while drag-and-drop functionality
      allowed users to easily manage task statuses in a Kanban-style interface.
    `,
    challenges: [
      "Setting up a full authentication flow with Clerk across both frontend and backend",
      "Managing type safety and data consistency between client and server",
      "Handling drag-and-drop task reordering logic while preserving backend integrity"
    ],
    outcome: `
      The result is a fast, full-stack task manager with intuitive UX and real-time capabilities.
      It’s scalable, mobile-friendly, and serves as a solid boilerplate for productivity tools.
    `,
    images: [
      { src: "/images/task-manager-kanban.jpg", alt: "Task Manager - Kanban view with drag-and-drop" },
      { src: "/images/task-manager-auth.jpg", alt: "Task Manager - Clerk login screen" },
      { src: "/images/task-manager-dashboard.jpg", alt: "Task Manager - Dashboard showing tasks and statuses" }
    ],
    github: "https://github.com/allison-dahan/taskmanager",
  }
  
]
