// data/projects.ts
export const projects = [
  {
    slug: "chez-mari",
    title: "Chez Mari Hair Salon",
    subtitle: "Custom WordPress theme for a Vancouver-based salon",
    heroImage: "/images/chez-mari-hero.png",
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
    process: `My group and I consulted closely with the client to understand and refine their vision for the salon’s online presence. We created multiple iterations of static mockups to ensure alignment, and once the design direction was approved, the work was divided by page (home, services, blog, gallery, etc.) so we could move efficiently in parallel.

I was responsible for the full implementation of the Services page, which included building dynamic WordPress templates and integrating Advanced Custom Fields (ACF) to establish custom post types and taxonomies. This taxonomy-first approach enabled service filtering by category and laid the foundation for a scalable site structure.

A key focus of my work was ensuring design consistency across different screen sizes. I developed an interactive services carousel, refined responsive layouts, and implemented reusable components to maintain a cohesive experience on desktop, tablet, and mobile.

On the backend, I prioritized ease of use for the client, enabling them to update services independently without relying on a developer.`,
    challenges: [
      "Managing differing feedback between the business owner (Mari) and her partner (Michael), which occasionally created roadblocks in the design approval process",
      "Translating technical updates and development decisions into language the client could clearly understand",
      "Ensuring responsive consistency and styling between desktop, tablet, and mobile devices"
    ],
    outcome: `
      The result was a modern, polished, and easy-to-manage WordPress site that reflects the elegance and professionalism of Chez Mari. The salon now benefits from improved SEO rankings, faster load times, and a more intuitive booking experience for clients. Internally, the team is empowered to update content without relying on developers — enabling long-term sustainability of the site.
    `,
    images: [
      { src: "/images/chez-mari-mobile.png", alt: "Chez Mari - Mobile view of services page" },
      { src: "/images/chez-mari-hero.png", alt: "Chez Mari - Desktop homepage mockup" },
      { src: "/images/chez-mari-services.png", alt: "Chez Mari - Service filtering UI" }
    ],
    liveSite: "https://chezmari.com"
  },
  {
    slug: "task-manager",
    title: "Task Manager App",
    subtitle: "A modern full-stack task tracking app with real-time features",
    heroImage: "/images/task-manager-kanban.png", 
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
      { src: "/images/task-manager-kanban.png", alt: "Task Manager - Kanban view with drag-and-drop" },
      { src: "/images/task-manager-auth.png", alt: "Task Manager - Clerk login screen" },
      { src: "/images/task-manager-form.png", alt: "Task Manager - Add a New Task" }
    ],
    github: "https://github.com/allison-dahan/taskmanager",
  },
  {
    slug: "crafters-connect",
    title: "Crafters Connect",
    subtitle: "A collaborative DIY platform designed for creators by creators",
    heroImage: "/images/crafters-connect-hero.png",
    overview: `
      Crafters Connect is a web-based collaboration platform designed to bring creators, makers, and DIYers together. This app allows users to start a DIY project, invite collaborators, manage project files in real-time, track progress through milestones, and share their creations with a vibrant creator community.
    `,
    role: [
      "Collaborated with a multidisciplinary team to design and develop the platform",
      "Helped plan app structure and user experience flows",
      "Contributed to front-end UI development and component styling",
      "Tested user flows for milestone tracking and file sharing",
      "Provided input on copywriting and content structure for accessibility"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Figma"],
    process: `
      Our team began with a user-first approach, mapping out creator pain points such as file disorganization and lack of collaborative structure in traditional DIY workflows. We then developed wireframes and mockups in Figma and translated those into a responsive interface using HTML, CSS, and Bootstrap.
      
      I focused on implementing and testing key components like milestone creation, real-time collaboration previews, and styling the community feed. We conducted user testing to refine the flow for sharing, inviting collaborators, and organizing shared projects.
    `,
    challenges: [
      "Balancing creative freedom with structured project management features",
      "Designing an intuitive interface that could scale from solo to group projects",
      "Communicating effectively within a diverse team of designers, developers, and business strategists"
    ],
    outcome: `
      Crafters Connect successfully showcased how a DIY-focused digital platform can foster creativity and community. The final product featured real-time file management, a built-in tutorial editor, project milestones, and a social sharing component. It emphasized user collaboration, visual feedback, and inclusive design for casual and advanced users alike.
    `,
    images: [
      { src: "/images/crafters-connect-dashboard.png", alt: "Crafters Connect - Dashboard view" },
      { src: "/images/crafters-connect-project.png", alt: "Project creation and milestones UI" },
      { src: "/images/crafters-connect-community.png", alt: "Community post sharing feature" }
    ],
    github: "https://github.com/ahmedcalif/CraftersConnect", // Leave empty or remove if not available
    liveSite: "https://craftersconnect-1.onrender.com/" // Replace with your actual deployed link if you have one
  },

  {
    slug: "fitness-tracker",
    title: "Fitness Tracker",
    subtitle: "A single-page fitness tracking web app built with .NET and deployed on Azure",
    heroImage: "/images/fitness-tracker-hero.png", // Replace with your actual screenshot
    overview: `
      Fitness Tracker is a single-page health and fitness tracking app built with .NET 8 MVC and AppRun.js.
      The application allows users to view workouts, log meals, and track progress over time.
      It uses Google authentication with Identity roles, stores data in MySQL, and is deployed on Azure with CI/CD pipelines via GitHub Actions.
    `,
    role: [
      "Designed and implemented the entire front-end and back-end in .NET 8 MVC",
      "Integrated AppRun.js for client-side navigation without reloading pages",
      "Set up Google authentication and Identity role management",
      "Manually created MySQL tables and indexes for workouts, nutrition, and user profiles",
      "Configured CI/CD deployment using GitHub Actions into Azure App Service"
    ],
    techStack: [
      ".NET 8 MVC",
      "AppRun.js",
      "MySQL",
      "Azure App Service",
      "Google Authentication",
      "GitHub Actions"
    ],
    process: `
      I started by scaffolding the .NET MVC structure and defining models for workouts, nutrition logs, and user profiles.
      I integrated AppRun.js into Razor pages to provide a seamless SPA experience using hash-based routing (e.g. #workouts, #nutrition).
      For authentication, I configured Google login via ASP.NET Identity and handled protected routes based on roles.
      The application was connected to a MySQL database with manually defined schemas to track user metrics.
      I then configured Azure App Service and GitHub Actions to automate deployment with each commit.
    `,
    challenges: [
      "Troubleshooting `app is not a constructor` errors with AppRun.js setup",
      "Fixing a `redirect_uri_mismatch` during Google login on Azure",
      "Resolving Git push rejections due to diverged branches in CI/CD pipeline",
      "Ensuring SPA navigation inside MVC Razor Pages without breaking the layout"
    ],
    outcome: `
      The final result was a responsive, cloud-hosted fitness tracking app that allows users to seamlessly switch between views like Dashboard, Workouts, Nutrition, and Profile. 
      CI/CD ensured continuous delivery through GitHub, and Google sign-in provided a secure and user-friendly experience. 
      This project solidified my understanding of cloud deployment, authentication, and full-stack architecture using Microsoft tools.
    `,
    images: [
      { src: "/images/fitness-tracker-dashboard.png", alt: "Fitness Tracker - Dashboard view" },
      { src: "/images/fitness-tracker-nutrition.png", alt: "Fitness Tracker - Nutrition" },
      { src: "/images/fitness-tracker-auth.png", alt: "Google Authentication login page" }
    ],
    github: "https://github.com/allison-dahan/FitnessTracker"
  },
  {
    slug: "flare",
    title: "Flare Wildfire Mitigation App",
    subtitle: "BC wildfire risk mapping app integrating real-time weather and fire danger data",
    heroImage: "/images/flare-hero.png", // replace with your best screenshot
    overview: `
      Flare is a web application designed to help communities in high-risk areas of British Columbia
      prepare for wildfire season. It combines real-time weather data, fire weather indices, and an
      interactive map interface to visualize local wildfire risk levels. Built in collaboration with a
      cross-disciplinary team, the app served as a proof-of-concept tool for public safety awareness.
    `,
    role: [
      "Served as Technical Lead, coordinating design and development alignment",
      "Implemented core features using Next.js, React, Drizzle ORM, and PostgreSQL",
      "Integrated APIs (Google Maps, OpenWeather, Fire Weather Index) for real-time wildfire data",
      "Built search functionality to retrieve and display wildfire risk scores by BC city",
      "Developed reusable UI components with Tailwind CSS for responsiveness and accessibility",
      "Guided teammates on Git/GitHub workflows, code quality, and presentations"
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Drizzle ORM",
      "Google Maps API",
      "OpenWeather API"
    ],
    process: `
      I started by defining the database schema with Drizzle ORM to store weather and fire index data.
      On the frontend, I built a responsive map interface with Google Maps, enabling users to search
      for cities in BC. API integrations with OpenWeather and the Fire Weather Index powered real-time
      wildfire risk calculations. I also created mock fetch utilities to simulate API failures during testing.
      
      As Technical Lead, I facilitated collaboration between designers and developers, ensured code review
      standards were followed, and coached teammates on debugging and Git workflows.
    `,
    challenges: [
      "Handling asynchronous API calls and fallback states when external data was unavailable",
      "Aligning design requirements with technical feasibility under a tight 12-week timeline",
      "Coaching teammates while also contributing to core development tasks"
    ],
    outcome: `
      The result was a fully functional MVP delivered within the program term. Flare featured an
      interactive wildfire risk map, city-based search, and real-time fire danger data, all optimized
      for mobile and desktop use. It achieved a 95% code merge success rate on first attempts thanks to
      strong collaboration standards. The app demonstrated the potential for IoT-style data integration
      to improve wildfire preparedness in BC communities.
    `,
    images: [
      { src: "/images/flare-map.png", alt: "Flare - Interactive wildfire risk map" },
      { src: "/images/flare-search.png", alt: "Flare - City search and risk data" },
      { src: "/images/flare-api.png", alt: "Flare - API integration output view" }
    ],
    github: "https://github.com/noonnofus/Flare_IDSP?tab=readme-ov-file", // replace if repo is private or under org
    liveSite: "https://www.flare-bc.com/" // add demo link if hosted
  }
  
  
  
  
]
