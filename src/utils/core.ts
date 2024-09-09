/**
 * ### `@reliverse/core`
 * @see https://github.com/reliverse/core
 * @module
 */
export const config = {
  engine: {
    author: "Nazarii Korniienko",
    description:
      "A powerful command-line tool that allows you to bootstrap web templates in seconds. It provides a seamless way to kickstart your projects with various options and configurations.",
    license: "MIT",
    name: "Reliverse",
    version: "0.4.0",
    npm: "@blefnk/reliverse",
    repo: "https://github.com/blefnk/reliverse",
  },
  framework: {
    author: "Nazarii Korniienko",
    description:
      "Build More Efficient, Engaging, and Profitable Online Stores: Relivator Empowers Your eCommerce with the Power of Next.js",
    license: "MIT",
    name: "Relivator",
    version: "1.2.6",
    npm: "@blefnk/relivator",
    repo: "https://github.com/blefnk/relivator",
  },
  social: {
    discord: "https://discord.gg/Pb8uKbwpsJ",
    facebook: "https://facebook.com/groups/bleverse",
    github: "https://github.com/blefnk",
    instagram: "https://instagram.com/blefnk",
    linkedin: "https://linkedin.com/in/blefnk",
    twitter: "https://twitter.com/blefnk",
    youtube: "https://youtube.com/@blefnk",
    email: "mailto:blefnk@gmail.com",
  },
  internal: [
    {
      title: "Bleverse",
      link: "https://bleverse.com",
    },
    {
      title: "MF Piano",
      link: "https://mfpiano.org",
    },
    {
      title: "Reliverse",
      link: "https://reliverse.bleverse.com",
    },
    {
      title: "Relivator",
      link: "https://relivator.bleverse.com",
    },
  ],
  keywords: [
    "Actions",
    "Admin",
    "App Router",
    "App",
    "Auth",
    "Clerk",
    "Blefonix",
    "Bleverse",
    "Commerce",
    "Components",
    "CSS",
    "Dark Mode",
    "Dashboard",
    "Docs",
    "Drizzle",
    "Full Stack",
    "i18n",
    "Kit",
    "Landing Page",
    "Landing",
    "MySQL",
    "Neon",
    "Next.js 14",
    "Nextjs",
    "Open Source",
    "Page",
    "Parallel Routes",
    "Payments",
    "Postgre",
    "PostgreSQL",
    "Pricing",
    "Radix Ui",
    "Radix",
    "React",
    "Relivator",
    "Reliverse",
    "Router",
    "Server Actions",
    "Server Components",
    "Server",
    "Shadcn",
    "Shadcn/UI",
    "Shop",
    "Starter",
    "Store",
    "Stripe",
    "T3 Stack",
    "Tailwind",
    "Template",
    "Tools",
    "trpc",
    "TS",
    "TypeScript",
    "UI",
    "User",
    "Utils",
    "Zod",
  ],
} as const;

export function add(a: number, b: number): number {
  return a + b;
}
