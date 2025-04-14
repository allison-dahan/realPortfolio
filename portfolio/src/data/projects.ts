// data/projects.ts
export const projects = [
  {
    slug: "chez-mari",
    title: "Chez Mari Hair Salon",
    subtitle: "Custom WordPress theme for a Toronto-based salon",
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
  }
]
