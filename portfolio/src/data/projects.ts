// data/projects.ts
export const projects = [
  {
    slug: "energynet",
    title: "Energynet",
    subtitle: "Custom WordPress theme for a Philippine electrical products and services company",
    heroImage: "/images/energynet-hero.png",
    overview: `
      Energynet is a fully custom WordPress theme built from scratch for Energynet Inc., a Philippine-based
      electrical products and services company. The theme spans ten pages including a product catalogue with
      advanced filtering, a projects showcase with category-based filtering, and an events section —
      all translated from a Figma design and built without relying on Advanced Custom Fields or page builder plugins.
      The site is optimized for performance and fully responsive across desktop and mobile.
    `,
    role: [
      "Sole WordPress Developer — translated a Figma design into a fully custom theme from initial setup to production",
      "Created custom post types and taxonomies for Products, Projects, and Events without ACF dependency",
      "Built a URL-state-persisted product filtering system with collapsible subcategory navigation",
      "Implemented a projects drawer with category grid filtering, badge hover states, and pinned pagination",
      "Developed an interactive Philippines map using MapTiler (later removed by the client), demonstrating resourcefulness and adaptability in applying new technology under real project constraints",
      "Optimized performance with lazy loading, hero image optimization, and Vite-based asset bundling",
      "Added scroll-in fade animations across multiple pages and a back-to-top reusable component",
      "Integrated CAPTCHA and error message validation into Contact and Request a Quote forms"
    ],
    techStack: [
      "WordPress",
      "PHP",
      "Vite",
      "MapTiler",
      "Iconify",
      "JavaScript",
      "CSS"
    ],
    process: `
      I began by translating the Figma design into a working theme — establishing custom fonts, a typography
      and color system, and reusable header and footer components for both desktop and mobile. From there I
      built each page template individually, working through the product catalogue, projects showcase,
      services, innovation, events, and contact pages.

      For the product catalogue, I built a custom post type with brand and category taxonomies,
      a URL-state-persisted filtering system, collapsible subcategories, and individual product pages
      with brochure file uploads and YouTube embeds. The projects section featured a category grid
      overlay with dynamic filtering and a pinned pagination component shared across views.

      At one point I built a fully interactive Philippines map using MapTiler — complete with hover tooltips
      and region click panels — which was ultimately removed at the client's request. Rather than viewing it
      as wasted effort, I took it as a lesson in resourcefulness: the process of integrating an unfamiliar
      mapping API under real project constraints pushed me to problem-solve in ways I wouldn't have otherwise.

      Throughout the build I iterated on performance, replacing ACF with native WordPress CPTs
      and running asset bundling through Vite.
    `,
    challenges: [
      "Building a fully functional product filtering and subcategory system that persists state in the URL without a JS framework",
      "Removing the ACF dependency mid-project and migrating all custom fields to native WordPress CPTs and taxonomies",
      "Maintaining consistent responsive layouts across ten pages with varied content structures",
      "Optimizing hero images and lazy-loading below-fold assets to meet performance targets"
    ],
    outcome: `
      The result is a polished, production-ready WordPress theme that gives Energynet Inc. a professional
      online presence tailored to their brand. The custom filtering system provides a strong product discovery
      experience, and the CMS-driven architecture empowers the client to manage products, projects, and events
      independently. This project also reinforced an important lesson in craft — that building something which
      doesn't make it to production isn't wasted work. The interactive map feature I developed and later saw
      removed taught me to stay resourceful, adapt quickly, and find value in the process itself.
    `,
    github: "https://github.com/allison-dahan/energynet",
    videoBefore: "/videos/energynet.mp4",
    videoAfter: "/videos/energynet_new.mp4"
  },
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
    github: "https://github.com/ahmedcalif/CraftersConnect", 
    liveSite: "https://craftersconnect-1.onrender.com/" 
  },

  {
    slug: "fitness-tracker",
    title: "Fitness Tracker",
    subtitle: "A comprehensive fitness tracking web application with layered architecture and modern UI",
    heroImage: "/images/fitness-tracker-hero.png", 
    overview: `
      Fitness Tracker is a full-featured health and fitness tracking application built with ASP.NET Core 8.0 MVC.
      The application features a clean layered architecture with separate Business, DataAccess, and Models projects, 
      enabling users to track workouts, log nutrition with macro tracking, monitor daily goals, and visualize progress 
      through interactive charts. It uses Entity Framework Core with MySQL, features a modern glassmorphism UI design, 
      and is deployed on Azure with automated CI/CD pipelines via GitHub Actions.
    `,
    role: [
      "Architected a layered solution with separate Business Logic, Data Access, and Models projects for clean separation of concerns",
      "Implemented Entity Framework Core with code-first migrations and database seeding for MySQL using Pomelo provider",
      "Built interactive data visualizations using Chart.js including bar charts for weekly activity and doughnut charts for macro distribution",
      "Designed a modern glassmorphism UI with custom CSS variables, backdrop filters, and Bootstrap 5 components",
      "Integrated ASP.NET Core Identity with Google OAuth for secure authentication and role-based authorization",
      "Configured Azure App Service deployment with GitHub Actions CI/CD pipeline for automated releases"
    ],
    techStack: [
      "ASP.NET Core 8.0 MVC",
      "Entity Framework Core",
      "Pomelo.EntityFrameworkCore.MySql",
      "MySQL",
      "Bootstrap 5",
      "Chart.js",
      "ASP.NET Core Identity",
      "Google OAuth",
      "Azure App Service",
      "GitHub Actions"
    ],
    process: `
      I began by designing a layered architecture to ensure maintainability and testability, separating business logic, 
      data access, and domain models into distinct projects. Using Entity Framework Core, I implemented code-first migrations 
      to define the database schema for workouts, nutrition logs, user profiles, and daily goals.
      
      For the frontend, I developed a cohesive design system featuring glassmorphism aesthetics with frosted glass effects, 
      backdrop blur, and a vibrant color palette (deep blue, purple, and pink accents). I integrated Chart.js to create 
      interactive visualizations for the dashboard, including weekly activity bar charts and macronutrient doughnut charts.
      
      Authentication was handled through ASP.NET Core Identity with Google OAuth integration, providing secure sign-in 
      and role-based access control. I configured the Pomelo MySQL provider to ensure compatibility with Azure Database 
      for MySQL, then set up GitHub Actions workflows to automate testing and deployment to Azure App Service.
    `,
    challenges: [
      "Configuring Entity Framework Core with MySQL using the Pomelo provider and ensuring proper connection string handling in Azure",
      "Implementing a consistent glassmorphism design system with backdrop filters while maintaining cross-browser compatibility",
      "Designing responsive Chart.js visualizations that adapt to different screen sizes and data ranges",
      "Managing Google OAuth redirect URIs across local development and Azure production environments",
      "Optimizing database queries and implementing proper async/await patterns for improved performance"
    ],
    outcome: `
      The result is a professional, production-ready fitness tracking application with clean architecture and modern UX. 
      The layered design ensures maintainability and makes it easy to extend features or swap data providers. The glassmorphism 
      UI creates a premium, engaging user experience, while Chart.js visualizations help users understand their fitness progress 
      at a glance. Automated CI/CD through GitHub Actions enables rapid iteration and reliable deployments. This project 
      demonstrates full-stack proficiency with .NET Core, modern frontend design, cloud deployment, and software architecture best practices.
    `,
    images: [
      { src: "/images/fitness-tracker-dashboard.png", alt: "Fitness Tracker - Dashboard with charts and stats" },
      { src: "/images/fitness-tracker-workouts.png", alt: "Fitness Tracker - Workout logging interface" },
      { src: "/images/fitness-tracker-nutrition.png", alt: "Fitness Tracker - Nutrition tracking with macros" },
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
  },
  {
    slug: "webflow-real-estate",
    title: "Real Estate Portfolio Website (Webflow CMS)",
    subtitle: "A responsive CMS-driven real estate listing experience built entirely in Webflow.",
    heroImage: "/images/webflow-real-estate-hero.png",
    overview: `
    This project was built to experiment with new technology and understand how modern no-code tools
    like Webflow streamline the development process. The app showcases dynamically generated real estate
    listings powered by Webflow CMS, complete with hero sections, stats, gallery images, and structured content.
    
    The goal was to recreate a real-world listing workflow—similar to a realtor platform—while practicing
    responsive layouts, grid systems, class naming structure, and component reusability in Webflow.
  `,
  role: [
    "Designed a fully responsive Webflow layout using sections, containers, grids, and flexbox",
    "Built a Real Estate CMS Collection with custom fields such as project type, location, square footage, and gallery images",
    "Created a dynamic Template Page where each listing automatically renders CMS content",
    "Implemented clean metadata layout using pill components and structured content hierarchy",
    "Added a gallery section with hover scale interactions and responsive image grids",
    "Built a multi-card Projects page with CMS-bound cards linking to individual listings",
    "Created a global navigation bar and reusable components across pages"
  ],
  techStack: ["Webflow"],
  process: `
    I began by architecting the CMS structure—creating collections for properties and galleries,
    defining the correct field types (images, plain text, numbers, rich text), and ensuring accurate
    long-term data storage using Webflow’s “plain text” and “multi-image” fields.

    Once the CMS was in place, I built the listing template page, connecting hero images, metadata fields,
    descriptive content, and gallery images using Webflow’s binding system.

    I then created an organized class naming system (sections, containers, wrappers, cards) and reused
    global components across the site—including a navigation bar, project cards, and metadata pills.
    
    Finally, I styled the site with responsive breakpoints, hover transitions, and layout refinements
    to ensure the project feels professional across desktop and mobile.
  `,

  challenges: [
    "Maintaining an organized and scalable class structure for sections, containers, and components",
    "Ensuring the CMS bindings remained consistent across template and landing pages",
    "Making the layout fully responsive for mobile (320px and below)",
  ],

  outcome: `
    The project demonstrates complete Webflow proficiency—CMS setup, responsive design,
    reusable components, interactions, and polished UI.  
    It serves as a strong example of front-end development without traditional code and showcases
    my ability to translate real-world business needs (like property listings) into a functional,
    visually appealing Webflow site suitable for clients or collaborative teams.
  `,

  images: [
    { src: "/images/webflow-realestate-home.png", alt: "Real Estate Portfolio - Landing" },
    { src: "/images/webflow-realestate-listing.png", alt: "Property Listing Dynamic Page" },
    { src: "/images/webflow-realestate-projects.png", alt: "Projects Section" }
  ],

  liveSite: "https://real-estate-clinics.webflow.io/",

  },

  {
    slug: "lunaul",
    title: "Lunaul — Shopify Theme",
    subtitle: "Custom Shopify theme built from scratch for a luxury fashion brand",
    heroImage: "/images/lunaul-hero.png",
    overview: `
      Lunaul is a fully custom Shopify theme built from scratch for Kojo, a luxury fashion brand.
      Rather than adapting a base theme, every section — from the hero and product gallery to the
      collection page and cart — was written in Liquid, JavaScript, and CSS to match a specific
      aesthetic and set of interactions. The theme spans a loading screen, animated announcement bar,
      push sidebar navigation, product pages with variant-aware sold-out states, a full archive with
      lightbox, and a dedicated cart page.
    `,
    role: [
      "Sole developer — built every section, snippet, template, and asset from the ground up in Liquid, JavaScript, and CSS",
      "Implemented a loading screen, animated announcement bar marquee, and a push sidebar mobile nav",
      "Built a product gallery carousel with arrow navigation, zoom-on-click lightbox, and per-variant sold-out button logic",
      "Developed a full collection page with a 4-column default grid and category filtering",
      "Created an archive template with a full-image lightbox and browsable overlay controls",
      "Replaced the cart drawer with a dedicated full-page cart with live quantity updates",
      "Designed and wired a hero section supporting background video (YouTube or native) or image with configurable CTA",
      "Built reusable sections: image carousel, marquee, lookbook banner, category grid, featured collection, and Instagram embed"
    ],
    techStack: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "CSS"
    ],
    process: `
      I started by establishing the theme's global foundation — the theme.liquid layout, CSS custom properties,
      and reusable header and footer components for both desktop and mobile. The header uses a centered-logo
      layout with a push sidebar for mobile and a dropdown-capable desktop nav.

      From there I built each section and template individually. The product page required the most
      layered logic: a carousel-style gallery with arrow navigation and a lightbox overlay, a variant
      picker that dynamically updates price, availability, and button state per-variant, and an accordion
      for product details. I added per-variant sold-out button disabling so that unavailable options are
      clearly communicated without hiding the full variant grid.

      The archive template came next — a scrollable image grid where clicking any image opens a full-screen
      lightbox with prev/next navigation. The cart was built as a full dedicated page rather than a drawer,
      with quantity controls and a clean layout consistent with the rest of the brand.

      Throughout the build I kept the JavaScript vanilla and lightweight, scoping each feature to its own
      section rather than relying on a bundler or framework.
    `,
    challenges: [
      "Implementing per-variant sold-out states without a framework — required reading variant availability from Shopify's variant JSON and toggling button states on selection change",
      "Building a two-axis gallery (carousel + lightbox) that shares image state without conflicting event listeners",
      "Keeping the push sidebar and search overlay layers stacked correctly across all page templates",
      "Ensuring the full-page cart remained consistent with the theme's aesthetic while handling live quantity updates"
    ],
    outcome: `
      The result is a production-ready Shopify theme that gives Kojo a cohesive, brand-specific storefront
      with no reliance on a base theme or third-party section builders. Every interaction — from the loading
      animation to the lightbox to the variant picker — was written to spec and reflects the brand's
      luxury positioning. The architecture keeps each section self-contained and easily extendable for
      future CMS-driven updates.
    `,
    github: "https://github.com/allison-dahan/lunaul-theme",
    videoDemo: "/videos/lunaul-demo.mp4",
  },

]
