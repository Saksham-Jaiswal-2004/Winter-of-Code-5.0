type Mentor = {
  name: string;
  desc: string;
  discord?: string;
  email?: string;
  linkedin?: string;
};

type Project = {
  title: string;
  description: string;
  tech: string[];
  problemStatement?: string;
  focusArea?: string;
  contributionGuide?: string;
  githubLink?: string;
};

type Contact = {
  label: string;
  value: string;
  href?: string;
};

type Org = {
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  website: string;
  chat: string;
  repo: string;
  email: string;
  focusAreas: string[];
  stats: { label: string; value: string }[];
  contacts: Contact[];
  mentors: Mentor[];
  projects: Project[];
};

export const orgs: Record<string, Org> = {
  Openprinting: {
    name: "Open Printing",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  owasp: {
    name: "Owasp",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  qcdevs: {
    name: "QC Devs",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  mixxx: {
    name: "MIXXX",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  vacanza: {
    name: "Open World Holidays Framework",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  opstree: {
    name: "OpsTree Global",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  performanc: {
    name: "PerformanC",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  keploy: {
    name: "Keploy",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  devsocaec: {
    name: "Development Society AEC",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  fossia: {
    name: "FOSSIA",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  opensourcechandigarh: {
    name: "Open Source Chandigarh",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  cookethorg: {
    name: "Cooketh Org",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  psmri: {
    name: "PSMRI",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  wallgodds: {
    name: "WallGodds",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  rootsprout: {
    name: "Rootsprout",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  ppts: {
    name: "Programmers' Paradise Technical Society",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
};
